# Design Refresh Proposals

Three distinct design directions for jeffdoolittle.com. Open each HTML file in a browser to preview.

| File | Theme | Feel |
|------|-------|------|
| [option-a.html](option-a.html) | **Modern Professional** | Dark header, amber accent, card layout — polished and authoritative |
| [option-b.html](option-b.html) | **Minimal & Clean** | White canvas, teal accent, airy whitespace — understated and modern |
| [option-c.html](option-c.html) | **Warm Editorial** | Warm off-white, terracotta accent, editorial type — approachable and distinctive |

## What's Changing in Each Option

All three proposals share these baseline improvements over the current site:
- Custom Google Font pairing (display + body)
- Card-based post listing (replaces flat list)
- Wider max-width (1200px vs 1000px)
- CSS custom properties for easy theming
- Mobile-responsive nav and grid

After picking a direction, implementation will involve:
1. Updating `assets/main.scss` with new color vars, typography, and utility classes
2. Updating `_includes/header.html` for new nav structure
3. Updating `_includes/footer.html` for new footer layout
4. Updating `_layouts/home.html` and `_includes/highlights.html` for card-based homepage
5. Optional: updating `_includes/posts.html` for card grid
