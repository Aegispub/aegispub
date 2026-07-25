# assets/fonts/

Self-hosted `.woff2` files referenced by `@font-face` rules in
`assets/css/type.css`. All three families are Google Fonts under the
SIL Open Font License — free to self-host, no attribution required
in the site itself (though it's good practice to keep this note).

Required files (regular weight unless noted):

| File | Family | Weight | Used for |
|---|---|---|---|
| Barlow-Regular.woff2 | Barlow | 400 | Body text, UI |
| Barlow-Medium.woff2 | Barlow | 500 | UI accents |
| Barlow-SemiBold.woff2 | Barlow | 600 | Emphasis |
| Barlow-Bold.woff2 | Barlow | 700 | Strong/bold text |
| ArchivoBlack-Regular.woff2 | Archivo Black | 400 (only weight shipped) | Masthead wordmark only |
| SpaceMono-Regular.woff2 | Space Mono | 400 | Inline code, code blocks |
| SpaceMono-Bold.woff2 | Space Mono | 700 | Bold code (rare) |

## Where to get them

- Google Fonts specimen pages: fonts.google.com/specimen/Barlow,
  .../Archivo+Black, .../Space+Mono — download gives .ttf.
- Recommended: use https://gwfh.mranftl.com/fonts (google-webfonts-helper)
  to export directly as self-hosted .woff2 per weight — pick "Modern
  Browsers" (woff2 only) and the "latin" subset.
- Drop the resulting files here with the exact names above — the
  @font-face `src:` paths in type.css already point at these filenames.

Once files are in place, no other change is needed — type.css already
declares the @font-face rules, and main.css already points
--font-sans / --font-display / --font-mono at these families with
system-font fallbacks.
