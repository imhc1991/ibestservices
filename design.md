---
version: alpha
name: ibestservices.com
description: Design system for a Chinese corporate services website with a calm blue-and-white visual language, large editorial hero messaging, lightweight cards, and minimal depth.
colors:
  primary: "#4a83f2"
  secondary: "#2f6df6"
  tertiary: "#f6c437"
  neutral: "#606266"
  surface: "#ffffff"
  on-surface: "#606266"
  background: "#ffffff"
  error: "#d93026"
typography:
  fontFamily: "PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif"
  headline-display:
    fontFamily: "PingFangSC-Medium"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 38px
    letterSpacing: "0px"
  headline-lg:
    fontFamily: "PingFangSC-Medium"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 29px
    letterSpacing: "0px"
  headline-md:
    fontFamily: "PingFangSC-Medium"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: "0px"
  body-lg:
    fontFamily: "PingFangSC-Medium"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: normal
    letterSpacing: "0px"
  body-md:
    fontFamily: "PingFangSC-Medium"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: normal
    letterSpacing: "0px"
  body-sm:
    fontFamily: "PingFangSC-Medium"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: normal
    letterSpacing: "0px"
  label-lg:
    fontFamily: "PingFangSC-Medium"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: normal
    letterSpacing: "0px"
  label-md:
    fontFamily: "PingFangSC-Medium"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: normal
    letterSpacing: "0px"
  label-sm:
    fontFamily: "PingFangSC-Medium"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: normal
    letterSpacing: "0px"
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "10px"
  sm: "18px"
  md: "26px"
  lg: "54px"
  xl: "90px"
components:
  button:
    primary:
      borderRadius: "4px"
      borderWidth: "1px"
      borderStyle: "solid"
      padding: "8px 16px"
      fontSize: "16px"
      fontWeight: 400
      minWidth: "120px"
      minHeight: "40px"
      textDecoration: "none"
      boxShadow: "none"
      backgroundColor: "#606266"
      color: "#ffffff"
      borderColor: "transparent"
    secondary:
      borderRadius: "4px"
      borderWidth: "1px"
      borderStyle: "solid"
      padding: "8px 16px"
      fontSize: "16px"
      fontWeight: 400
      minWidth: "120px"
      minHeight: "40px"
      textDecoration: "none"
      boxShadow: "none"
      backgroundColor: "transparent"
      color: "#606266"
      borderColor: "#606266"
    link:
      borderRadius: "0px"
      borderWidth: "0px"
      borderStyle: "none"
      padding: "0px"
      fontSize: "16px"
      fontWeight: 400
      minWidth: "0px"
      minHeight: "0px"
      textDecoration: "underline"
      boxShadow: "none"
      backgroundColor: "transparent"
      color: "#606266"
  card:
    backgroundColor: "#ffffff"
    borderColor: "#e5e7eb"
    borderRadius: "8px"
    borderWidth: "1px"
    borderStyle: "solid"
    padding: "16px"
    boxShadow: "none"
    textColor: "#606266"
---

# Overview

ibestservices.com is a light, corporate, content-led homepage. The visual direction is optimistic and technical: large blue hero messaging, generous whitespace, soft white surfaces, and illustration-heavy feature imagery. The screenshot shows a homepage hierarchy built around a full-width hero, a centered news section, and floating contact access.

Use a restrained system:
- Keep the background white or very light blue-tinted white.
- Use saturated blue for emphasis, links, and primary brand moments.
- Reserve yellow as an accent, not a structural color.
- Prefer flat surfaces and simple borders over shadow-based elevation.

# Colors

## Core palette

- Primary: `{colors.primary}` for links, hero emphasis, active navigation, and illustration accents.
- Secondary: `{colors.secondary}` for stronger blue highlights and CTA states when a deeper blue is needed.
- Tertiary: `{colors.tertiary}` for warm accent marks, logo support, and small decorative highlights.
- Neutral / on-surface: `{colors.neutral}` for body copy, nav labels, and supporting text.
- Surface: `{colors.surface}` for page sections and cards.
- Background: `{colors.background}` for the overall page canvas.
- Error: `{colors.error}` for validation and destructive states.

## Usage guidance

The site reads as mostly monochrome with blue emphasis. In the screenshot, the hero artwork and nav active state carry the brand color strongly, while content blocks remain white and text stays subdued. Keep color ratios conservative: blue should guide attention, not dominate every block.

# Typography

## Font family

Use PingFang SC first, with common system and Microsoft YaHei fallbacks:
`PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif`

## Type scale

- `headline-display`: 32px / 38px, bold, for hero statements and major page titles.
- `headline-lg`: 24px / 29px, bold, for section headings like 新闻中心.
- `headline-md`: 20px / 24px, semibold, for card titles and subsection labels.
- `body-lg`: 16px, regular, for primary paragraph copy.
- `body-md`: 16px, regular, for standard body copy.
- `body-sm`: 16px, regular, for compact supporting copy.
- `label-lg`, `label-md`, `label-sm`: 16px, regular, for nav items, buttons, and small UI labels.

## Guidance

The source styleguide uses a narrow, consistent type range with little size variation outside the hero and section headers. Match that behavior:
- Headlines should be clean and medium-to-bold in weight.
- Supporting copy should remain neutral and calm.
- Avoid decorative typefaces, condensed styles, or high contrast editorial treatments.

# Layout

## Page structure

The homepage layout is expansive and center-aligned:
1. Top navigation bar with logo at left and horizontal links across the top.
2. Large hero banner with text on the left and illustration on the right.
3. Centered news section with a title, subtitle, and content grid.
4. Fixed or floating inquiry/contact entry on the right side.

## Spacing

Use the supplied spacing tokens consistently:
- `xs`: 10px for small internal gaps.
- `sm`: 18px for item separation.
- `md`: 26px for content grouping.
- `lg`: 54px for section spacing.
- `xl`: 90px for major vertical breaks.

## Guidance

- Keep horizontal padding generous.
- Let the hero occupy most of the viewport width.
- Align section headers to the center when the design is informational or promotional.
- Use balanced gutters and avoid dense multi-column packing.
- Preserve whitespace around cards and news items.

# Elevation & Depth

The design system is intentionally flat.

- Shadows: none across small, medium, large, xl, and inner layers.
- Use borders, background contrast, and spacing to separate content.
- If a floating utility must stand out, rely on placement and circular container shape rather than shadow depth.

This restraint is important: the screenshot shows crisp surfaces and light separators, not layered material elevation.

# Shapes

## Rounded values

- `none`: 0px
- `sm`: 4px
- `md`: 8px
- `lg`: 12px
- `xl`: 16px
- `full`: 9999px

## Guidance

- Buttons use small rounding, matching the screenshot’s rectangular CTA styling.
- Cards should remain subtly rounded, not pill-shaped.
- Circular utility affordances may use `full` rounding.
- Avoid exaggerated corner radii on large content containers.

# Components

## Button

### Primary
Use for main actions like 了解更多 and prominent entry points.
- Background: `{colors.neutral}`
- Text: white
- Radius: 4px
- Min height: 40px
- Min width: 120px

### Secondary
Use for less prominent actions or outline-style CTAs.
- Transparent background
- Border and text: `{colors.neutral}`
- Same sizing as primary

### Link
Use for inline navigation such as 查看更多新闻.
- No border
- Underlined text
- Neutral text color
- Keep it visually light and unobtrusive

## Card

Use for news lists, content summaries, and feature blocks.
- White background
- 1px light border
- 8px radius
- 16px padding
- No shadow

## Navigation

Although not tokenized in the payload, the screenshot indicates a horizontal text navigation bar:
- Keep labels simple and evenly spaced.
- Use the active state in blue.
- Avoid heavy background fills in the header.

## Floating contact entry

A fixed inquiry control appears at the right edge of the viewport.
- Use a circular icon container.
- Keep it visually prominent but lightweight.
- Pair iconography with a compact label/button for immediate action.

# Do's and Don'ts

## Do

- Do use blue to mark primary brand and active states.
- Do keep the page bright, open, and whitespace-rich.
- Do place large headlines above concise supporting copy.
- Do use flat cards with light borders instead of shadows.
- Do keep button corners small and geometry simple.
- Do maintain consistent 16px body sizing and calm neutral text.
- Do align section headers centrally for content hubs like 新闻中心.

## Don't

- Don't introduce dark themes, heavy gradients, or dramatic shadow stacks.
- Don't use multiple competing accent colors in the same section.
- Don't make buttons oversized or pill-shaped by default.
- Don't rely on dense text blocks or cramped card grids.
- Don't add decorative serif typography or wide font-size jumps.
- Don't overuse yellow; treat it as a small accent only.
- Don't create depth with blur or elevation when borders and spacing are enough.