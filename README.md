# AegisPub

Cybersecurity · Technology · Society

Static publication built with Jekyll, hosted on GitHub Pages. Deployed automatically on every push to `main`.

---

## Initial Setup

### 1. Prerequisites

- Ruby 3.2+ installed locally (or rely entirely on GitHub Actions for builds)
- Bundler: `gem install bundler`

### 2. Install dependencies

```bash
bundle install
```

### 3. Run locally

```bash
bundle exec jekyll serve
```

Site available at `http://localhost:4000`

### 4. GitHub repository settings

- Go to **Settings → Pages**
- Source: **Deploy from a branch** → select `gh-pages` branch, `/ (root)`
- The GitHub Actions workflow handles the build and push to `gh-pages` automatically

---

## Writing a Post

All authoring can be done entirely in the GitHub web editor — no local tools needed.

1. Navigate to `_posts/`
2. Click **Add file → Create new file**
3. Name the file: `YYYY-MM-DD-your-post-slug-here.md`
4. Add frontmatter and content (see template below)
5. Click **Commit changes** → commit directly to `main`

The build triggers automatically. The live site updates in ~1–2 minutes.

### Post template

```markdown
---
layout: post
title: "Your Post Title Here"
date: 2026-05-27
category: Cybersecurity Insights
excerpt: "One or two sentences shown in the post card."
author: aegispub
---

Post body starts here. Write in standard Markdown.
```

**Valid categories:**
- `Cybersecurity Insights`
- `Technology & Society`
- `Policy & Regulation`
- `Research & Analysis`

The `author` value must match a key in `_data/authors.yml`.

---

## Updating Social Network Entries

1. Open `_data/social.yml` in the GitHub web editor
2. Find the platform section
3. Add an entry to its `posts` array
4. Commit

Empty `posts: []` shows a follow link. A populated posts array shows a full card.

```yaml
medium:
  name: Medium
  handle: "@AegisPub"
  url: "https://medium.com/@AegisPub"
  posts:
    - title:   "Post title here"
      excerpt: "Short description for the card."
      date:    "2026-05-27"
      url:     "https://medium.com/@AegisPub/your-post-slug"
```

---

## Adding an Author

Open `_data/authors.yml` and add a new entry:

```yaml
newauthor:
  name: Author Name
  bio: "One-line bio."
  links:
    twitter: "https://x.com/handle"
```

Use the key (`newauthor`) as the `author:` value in post frontmatter.

---

## DNS Cutover (Wix → GitHub Pages)

**Do this in order:**

1. Ensure `CNAME` file exists in repository root containing `aegispub.com`
2. Verify the site builds and is accessible at `https://aegispub.github.io/aegispub` (or your github.io URL)
3. In Wix domain settings (or your registrar), update DNS:
   - Add A records pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Remove the existing Wix A records
4. In GitHub → Settings → Pages → Custom domain: enter `aegispub.com`
5. GitHub Pages provisions SSL via Let's Encrypt automatically (up to 24h)
6. DNS propagation: up to 48 hours — some visitors may see Wix during this window

**Plan the cutover during a low-activity period.**

---

## Build Failure Recovery

If a commit causes a build failure:

1. Go to the repository's **Actions** tab
2. Find the failed workflow run and read the error
3. Common causes: malformed YAML frontmatter, unclosed Liquid tags, missing author key
4. Fix the file, commit again — the build retries automatically
5. The previously deployed site remains live throughout — nothing is broken for readers

---

## Repository Structure

```
_config.yml          Site configuration
index.md             Homepage (layout: home)
archive.md           Archive index (layout: archive)
about.md             About page
privacy.md           Privacy policy
disclaimer.md        Disclaimer
CNAME                Custom domain

_layouts/
  base.html          HTML shell
  home.html          Homepage: card grid + panel
  archive.html       Archive: period cards
  period.html        Quarter: card grid + panel
  post.html          Full post page
  page.html          Prose pages

_includes/
  masthead.html      Wordmark, tagline, dateline
  nav.html           Navigation strip
  post-card.html     Post card component
  post-panel.html    Expansion panel container
  period-card.html   Quarterly period card
  social-strip.html  From the Network strip
  colophon.html      Authors/disclaimer/privacy/contact
  footer.html        Footer

_data/
  social.yml         Social platform entries
  authors.yml        Author profiles

_posts/              Markdown post files

_plugins/
  quarter_archive.rb Archive generator

assets/
  css/main.css       Layout, grid, panel, responsive
  css/type.css       Typography scale
  js/panel.js        Post panel interaction
  fonts/             Self-hosted font files
  img/               Logo, OG image, post images

.github/
  workflows/deploy.yml  Build and deploy action
```
