# advaitapatil.github.io

Single-page personal site. Static HTML, no build step, no dependencies.

## Files

- `index.html` — the entire site (markup, styles, GA snippet)
- `favicon.svg` — orbit mark, adapts to light/dark mode
- `.nojekyll` — tells GitHub Pages to skip Jekyll processing

## Deploy

1. In the `advaitapatil.github.io` repo, delete the existing al-folio files
   (or move them to a branch if you want to keep the history browsable).
2. Copy these three files into the repo root.
3. Commit and push to `main`. GitHub Pages serves it automatically at
   https://advaitapatil.github.io/ within a minute or two.

## Google Analytics

The GA4 snippet in `index.html` uses a placeholder ID. Before pushing:

1. Create a GA4 property at analytics.google.com (Admin > Create property).
2. Add a Web data stream for `advaitapatil.github.io`.
3. Copy the Measurement ID (format `G-XXXXXXXXXX`) and replace it in both
   places it appears in the `<head>` of `index.html`.

## Editing content

Everything lives in one file. The label/content rows are a `<dl>` — each
section is one `<dt>` (label) plus one `<dd>` (content). To swap the
`research` section for something else later, edit those two elements only.
