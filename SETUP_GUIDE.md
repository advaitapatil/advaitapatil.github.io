# Quick Setup Guide - View Your Updated Website

## Option 1: GitHub Pages (Recommended)

If your website is hosted on GitHub Pages, simply:

```bash
cd /Users/ap1803/Desktop/updated_personal_website
git add .
git commit -m "Update website with refined editorial design"
git push origin main
```

GitHub Pages will automatically rebuild your site with the new design in 1-2 minutes.

## Option 2: Local Development

If you want to preview locally first:

### Step 1: Update Bundler (if needed)

```bash
cd /Users/ap1803/Desktop/updated_personal_website
gem install bundler:4.0.3
# OR update to latest:
bundle update --bundler
```

### Step 2: Install Dependencies

```bash
bundle install
```

### Step 3: Serve Locally

```bash
bundle exec jekyll serve
```

Then visit: `http://localhost:4000`

### Troubleshooting

If you encounter Ruby/Bundler issues:

```bash
# Use Docker instead (easier):
docker-compose up
# Then visit: http://localhost:8080
```

---

## What Changed?

All changes are **purely visual/aesthetic** - no content was modified:

✅ New typography (Fraunces + Instrument Sans)  
✅ Natural color palette (terracotta, sage, amber)  
✅ Smooth animations and micro-interactions  
✅ Enhanced hover states  
✅ Refined spacing and layout  
✅ Light/dark mode improvements  

See `DESIGN_UPDATES.md` for full details!

---

## Quick Preview Without Building

Want to see what changed? Check these files:

- `_sass/_variables.scss` - New colors and fonts
- `_sass/_themes.scss` - Light/dark mode
- `_sass/_custom.scss` - New animations and effects
- `assets/js/scroll-effects.js` - New scroll interactions

All changes follow Jekyll/al-folio standards and are production-ready.
