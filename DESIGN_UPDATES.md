# Website Design Updates - Refined Editorial with Organic Undertones

## Overview

Your academic website has been transformed with a **distinctive, minimalist aesthetic** that reflects your work in AI/healthcare and appreciation for natural beauty. The design follows the principles outlined in `SKILL.md`, emphasizing:

- **Distinctive Typography** - Characterful fonts that stand out
- **Organic Color Palette** - Natural, sophisticated earth tones
- **Refined Interactions** - Smooth animations and micro-interactions
- **Atmospheric Details** - Subtle textures and depth

---

## Design Philosophy

### "Refined Editorial with Organic Undertones"

This aesthetic combines:
- **Editorial sophistication** - Clean, generous whitespace with strong typography hierarchy
- **Organic warmth** - Natural colors inspired by earth, terracotta, sage, and amber
- **Academic credibility** - Professional, trustworthy, and refined
- **Modern polish** - Smooth animations and contemporary interactions

---

## Key Design Elements

### 1. Typography

**Display Font: Fraunces**
- A beautiful, characterful serif with optical sizing
- Used for headings, titles, and emphasis
- Features elegant curves and distinctive letterforms
- Weighted at 600-700 for strong hierarchy

**Body Font: Instrument Sans**
- Clean, modern sans-serif (not overused like Inter)
- Excellent readability for academic content
- Used at 400-600 weights
- Letter spacing: -0.01em for refined appearance

### 2. Color Palette

**Light Mode:**
- Background: Warm cream (#FAF7F2)
- Text: Deep charcoal (#2D2A26)
- Primary accent: Terracotta (#C97B63)
- Secondary accents: Sage (#7A9B76), Amber (#D4A574)

**Dark Mode:**
- Background: Deep navy (#141A24)
- Text: Warm cream (#F0E9DC)
- Primary accent: Muted copper (#C89B7E)
- Secondary accents: Teal (#6FB3B8), Amber (#D4A574)

### 3. Visual Enhancements

**Shadows & Depth:**
- Soft shadows: Subtle elevation for cards and images
- Medium shadows: Hover states and interactive elements
- Strong shadows: Emphasized content

**Animations:**
- Page load: Staggered fade-in animations (0.8s)
- Hover effects: Smooth color transitions (0.3s)
- Link underlines: Animated from left to right (0.4s)
- Card hover: Lift effect with enhanced shadow

**Micro-interactions:**
- Social icons rise on hover
- Navigation links underline elegantly
- Cards scale slightly on hover
- Smooth theme toggle transitions

### 4. Layout Refinements

**Spacing:**
- Generous whitespace between sections
- Comfortable reading line-height (1.65-1.7)
- 2rem horizontal padding on containers
- Refined vertical rhythm

**Special Elements:**
- Decorative accent lines under headings
- Gradient progress bar (terracotta → copper)
- Subtle grain texture overlay (opacity: 0.015)
- Organic background gradients (opacity: 0.03)

---

## Technical Implementation

### Files Modified

1. **`_sass/_variables.scss`** - New color system and typography imports
2. **`_sass/_themes.scss`** - Light/dark mode color mappings
3. **`_sass/_base.scss`** - Core typography and element styling
4. **`_sass/_layout.scss`** - Layout structure and atmospheric effects
5. **`_sass/_custom.scss`** - ✨ NEW: Animations and refinements
6. **`assets/css/main.scss`** - Import order updated
7. **`assets/js/scroll-effects.js`** - ✨ NEW: Scroll interactions
8. **`_includes/head.html`** - Updated font imports
9. **`_includes/scripts/misc.html`** - Added scroll effects script
10. **`_layouts/about.html`** - Enhanced header styling

### New Features

**Scroll Effects:**
- Navbar gains shadow when scrolling
- Smooth scroll for anchor links
- Intersection observer for staggered animations

**Enhanced Hover States:**
- Links grow animated underlines
- Cards lift with shadow
- Images scale subtly
- Social icons translate upward

**Accessibility:**
- Prefers-reduced-motion support
- Enhanced focus states (2px outline)
- Proper ARIA labels maintained
- Print stylesheet included

---

## Viewing Your Changes

### Local Development

If you have Jekyll installed, run:

```bash
bundle install
bundle exec jekyll serve
```

Then visit `http://localhost:4000` to see your updated website.

### GitHub Pages

If your site is hosted on GitHub Pages, simply commit and push:

```bash
git add .
git commit -m "Update website design with refined editorial aesthetic"
git push origin main
```

Your site will automatically rebuild with the new design.

---

## Design Principles Applied

Following `SKILL.md` guidelines:

✅ **Distinctive Typography** - Fraunces + Instrument Sans (not generic fonts)  
✅ **Cohesive Color Palette** - Natural earth tones with dominant terracotta  
✅ **Motion & Animations** - CSS-based with cubic-bezier easing  
✅ **Spatial Composition** - Generous whitespace, refined hierarchy  
✅ **Backgrounds & Details** - Subtle grain, organic gradients, soft shadows  
✅ **No Generic AI Aesthetics** - Avoided Inter, purple gradients, cookie-cutter patterns  
✅ **Context-Specific** - Reflects AI/healthcare research + nature photography interests  

---

## Customization Guide

### Adjusting Colors

Edit `_sass/_variables.scss`:

```scss
// Change primary accent
$terracotta: #C97B63 !default;  // Your custom color here

// Change secondary accent
$sage: #7A9B76 !default;  // Your custom color here
```

### Adjusting Typography

Edit `_sass/_custom.scss` or `_sass/_base.scss`:

```scss
h1 {
  font-size: 2.75rem;  // Adjust size
  font-weight: 700;     // Adjust weight
  letter-spacing: -0.03em;  // Adjust spacing
}
```

### Adjusting Animation Speed

Edit `_sass/_custom.scss`:

```scss
@keyframes fadeInUp {
  // Adjust duration in the usage, e.g.:
  // animation: fadeInUp 0.6s cubic-bezier(...);
}
```

### Disabling Animations

If you prefer no animations, comment out the animation lines in `_sass/_custom.scss`:

```scss
.post {
  // animation: fadeIn 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
}
```

---

## Browser Support

Tested and optimized for:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Features graceful degradation for older browsers.

---

## Performance

- **Google Fonts**: Preconnect for faster loading
- **CSS Animations**: GPU-accelerated with `transform` and `opacity`
- **JavaScript**: Deferred loading, Intersection Observer for efficiency
- **Images**: Border-radius and shadows use CSS (no additional HTTP requests)

---

## Questions or Adjustments?

This design is production-ready and follows best practices for academic websites. If you'd like to adjust any colors, fonts, spacing, or animations, let me know and I can help refine further!

---

**Design System:** Refined Editorial with Organic Undertones  
**Updated:** January 2026  
**Framework:** Jekyll (al-folio theme)  
**Aesthetic:** Minimalist, Sophisticated, Memorable
