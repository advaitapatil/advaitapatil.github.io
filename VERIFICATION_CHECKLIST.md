# Visual Verification Checklist

After deploying your updated website, use this checklist to verify all design changes are working correctly.

## ✅ Typography

Visit your homepage and check:

- [ ] **Headings** use Fraunces font (distinctive serif with elegant curves)
- [ ] **Body text** uses Instrument Sans (clean, modern sans-serif)
- [ ] **Name/Title** is large and bold with good spacing
- [ ] **Paragraph text** is comfortable to read (line-height ~1.7)
- [ ] **Links** are visible and colored in terracotta/copper

## ✅ Colors

### Light Mode (default)
- [ ] Background is warm cream (not pure white)
- [ ] Text is dark charcoal (not pure black)
- [ ] Primary links/accents are terracotta/warm orange
- [ ] Subtle warmth throughout the design

### Dark Mode (click moon icon)
- [ ] Background is deep navy (not gray)
- [ ] Text is warm cream
- [ ] Primary accents are muted copper/amber
- [ ] Comfortable for night reading

## ✅ Animations & Interactions

### Page Load
- [ ] Content fades in smoothly when page loads
- [ ] Header appears first, then profile, then content
- [ ] Staggered animation feels polished (not jarring)

### Hover Effects
- [ ] **Links**: Underline grows from left to right on hover
- [ ] **External links**: Show ↗ arrow that animates
- [ ] **Cards/Projects**: Lift slightly with shadow on hover
- [ ] **Social icons**: Move up slightly on hover
- [ ] **Navigation links**: Underline appears smoothly

### Scrolling
- [ ] Smooth scroll for anchor links
- [ ] Navbar gains subtle shadow when scrolling down
- [ ] Progress bar (if enabled) shows gradient color

## ✅ Layout & Spacing

- [ ] Generous whitespace around content (not cramped)
- [ ] Profile image has soft shadow and rounded corners
- [ ] Cards have subtle shadows and rounded corners
- [ ] Sections are well-separated
- [ ] Text has comfortable reading width

## ✅ Special Elements

### News Section (if visible)
- [ ] Dates in left column are styled consistently
- [ ] News items have subtle hover effect
- [ ] Border between items is subtle

### Publications (if page exists)
- [ ] Year headers have decorative underline
- [ ] Paper titles are prominent
- [ ] Buttons are styled with rounded corners

### Projects (if page exists)
- [ ] Grid layout is balanced
- [ ] Images have subtle hover zoom
- [ ] Category headers are styled elegantly

### Blog (if exists)
- [ ] Large, decorative title at top
- [ ] Post list has good spacing
- [ ] Post titles use heading font

## ✅ Responsive Design

### Mobile (< 768px)
- [ ] Text sizes scale down appropriately
- [ ] Profile image stacks above content (not beside)
- [ ] Navigation menu works (hamburger icon)
- [ ] Padding is comfortable on small screens
- [ ] Touch targets are easy to tap

### Tablet (768px - 1200px)
- [ ] Layout adapts smoothly
- [ ] No horizontal scrolling
- [ ] Images and cards resize properly

## ✅ Accessibility

- [ ] Theme toggle (sun/moon icon) works smoothly
- [ ] Focus states visible when tabbing (2px outline)
- [ ] All text is readable with good contrast
- [ ] Buttons and links are keyboard accessible

## ✅ Performance

Open browser DevTools (F12) → Network tab:
- [ ] Fonts load quickly (preconnect working)
- [ ] No console errors
- [ ] CSS loads successfully
- [ ] JavaScript loads successfully

## ✅ Cross-Browser (optional)

Test in multiple browsers:
- [ ] Chrome/Edge (should work perfectly)
- [ ] Firefox (should work perfectly)
- [ ] Safari (should work perfectly)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## 🐛 Troubleshooting

### If fonts look wrong:
- Check browser console for font loading errors
- Verify `_includes/head.html` has correct Google Fonts link
- Clear browser cache and reload

### If colors are wrong:
- Verify Jekyll built successfully
- Check `_sass/_themes.scss` and `_sass/_variables.scss` were saved
- Clear browser cache and hard reload (Cmd+Shift+R or Ctrl+Shift+R)

### If animations don't work:
- Check browser console for JavaScript errors
- Verify `assets/js/scroll-effects.js` is loaded
- Check if `prefers-reduced-motion` is enabled in OS settings

### If nothing changed:
- Make sure you committed and pushed all files
- Wait 2-3 minutes for GitHub Pages to rebuild
- Clear browser cache completely
- Try incognito/private browsing mode

---

## 📸 What To Look For

### Overall Impression
Your website should feel:
- ✨ **Sophisticated** - Professional and refined
- 🌿 **Warm** - Natural, organic colors
- 📖 **Editorial** - Magazine-quality typography
- 🎯 **Focused** - Clean and uncluttered
- ⚡ **Smooth** - Polished interactions

### Red Flags
If you see any of these, something may not have loaded correctly:
- ❌ Pure white background (should be warm cream)
- ❌ Roboto font (should be Fraunces for headings)
- ❌ Purple links (should be terracotta/copper)
- ❌ No animations on page load
- ❌ No hover effects on links/cards

---

## ✅ Final Check

Once you've verified everything above:

1. **Share your website** - The new design is ready to show!
2. **Update your CV/resume** - Include your beautiful new site
3. **Share on social media** - Show off your refined aesthetic
4. **Get feedback** - Ask colleagues what they think

Your website now has a distinctive, memorable design that stands out from generic academic websites while maintaining professional credibility.

**Congratulations on your new website design!** 🎉

---

*If you notice any issues or want adjustments, the design is fully customizable through the SCSS files. See `DESIGN_UPDATES.md` for customization guide.*
