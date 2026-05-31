# _plugins/quarter_archive.rb
#
# Generates:
#   - site.data['periods']  — array of period objects for the archive index
#   - One page per quarter at /archive/YYYY/qN/
#
# Each period object:
#   label      : "Q1 2026"
#   url        : "/archive/2026/q1/"
#   post_count : Integer
#   categories : Array of up to 3 category names present in that quarter
#
# Each generated period page receives:
#   page.period_label : "Q1 2026"
#   page.posts        : Array of Post objects (reverse chron)
#   page.prev_period  : { label, url } or nil
#   page.next_period  : { label, url } or nil

module AegisPub
  class PeriodPage < Jekyll::Page
    def initialize(site, base, dir, period_label, posts, prev_p, next_p)
      @site = site
      @base = base
      @dir  = dir
      @name = "index.html"

      self.process(@name)
      self.read_yaml(File.join(base, "_layouts"), "period.html")

      self.data["layout"]       = "period"
      self.data["title"]        = period_label
      self.data["period_label"] = period_label
      self.data["posts"]        = posts
      self.data["prev_period"]  = prev_p
      self.data["next_period"]  = next_p
    end
  end

  class QuarterArchiveGenerator < Jekyll::Generator
    safe true
    priority :normal

    def generate(site)
      # Group posts by quarter
      quarters = {}

      site.posts.docs.each do |post|
        date  = post.date
        year  = date.year
        month = date.month
        q_num = ((month - 1) / 3) + 1
        key   = "#{year}-Q#{q_num}"

        quarters[key] ||= {
          year:  year,
          q_num: q_num,
          label: "Q#{q_num} #{year}",
          url:   "/archive/#{year}/q#{q_num}/",
          posts: []
        }
        quarters[key][:posts] << post
      end

      # Sort quarters chronologically (oldest first for prev/next logic)
      sorted_keys = quarters.keys.sort
      sorted_periods = sorted_keys.map { |k| quarters[k] }

      # Sort posts within each period reverse-chronologically
      sorted_periods.each do |period|
        period[:posts].sort_by! { |p| p.date }.reverse!
      end

      # Build period data for archive index (newest first for display)
      periods_for_index = sorted_periods.reverse.map do |period|
        cats = period[:posts]
          .map { |p| p.data["category"] }
          .compact
          .uniq
          .first(3)

        {
          "label"      => period[:label],
          "url"        => period[:url],
          "post_count" => period[:posts].size,
          "categories" => cats
        }
      end

      site.data["periods"] = periods_for_index

      # Generate individual period pages
      sorted_periods.each_with_index do |period, idx|
        prev_p = idx > 0 ? {
          "label" => sorted_periods[idx - 1][:label],
          "url"   => sorted_periods[idx - 1][:url]
        } : nil

        next_p = idx < sorted_periods.size - 1 ? {
          "label" => sorted_periods[idx + 1][:label],
          "url"   => sorted_periods[idx + 1][:url]
        } : nil

        dir = "archive/#{period[:year]}/q#{period[:q_num]}"

        page = PeriodPage.new(
          site,
          site.source,
          dir,
          period[:label],
          period[:posts],
          prev_p,
          next_p
        )

        site.pages << page
      end
    end
  end
end
