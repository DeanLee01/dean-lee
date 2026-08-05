---
version: beta
name: Dean Lee Modern Editorial
description: A premium editorial design system for a quantitative finance essay site (2026 type-led refresh).
colors:
  primary: "#171512"
  secondary: "#3F3A34"
  muted: "#6D655C"
  neutral: "#F7F4EE"
  surface: "#FFFCF7"
  accent: "#9A3F2D"
  accentWarm: "#C48049"
  rule: "rgba(23,21,18,0.10)"
typography:
  display:
    fontFamily: Fraunces, Iowan Old Style, Georgia, serif
    fontSize: clamp(2.75rem, 1.6rem + 5vw, 5.25rem)
    fontWeight: 560
    lineHeight: "0.94"
    letterSpacing: "-0.035em"
  headline:
    fontFamily: Fraunces, Iowan Old Style, Georgia, serif
    fontSize: clamp(1.65rem, 1.3rem + 1.4vw, 2.35rem)
    fontWeight: 560
    lineHeight: "1.12"
    letterSpacing: "-0.03em"
  body:
    fontFamily: Source Sans 3, Segoe UI, system-ui, sans-serif
    fontSize: clamp(1.0625rem, 1.02rem + 0.25vw, 1.1875rem)
    lineHeight: "1.7"
  prose:
    fontFamily: Fraunces, Iowan Old Style, Georgia, serif
    fontSize: clamp(1.1rem, 1.05rem + 0.25vw, 1.2rem)
    lineHeight: "1.78"
  label:
    fontFamily: Source Sans 3, Segoe UI, system-ui, sans-serif
    fontSize: clamp(0.875rem, 0.84rem + 0.15vw, 0.9375rem)
    fontWeight: 650
    letterSpacing: "0.06em"
spacing:
  xs: 8px
  sm: 14px
  md: 28px
  lg: 56px
  xl: 96px
rounded:
  sm: 6px
  md: 10px
  pill: 999px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#fff7f3"
    rounded: "{rounded.pill}"
    padding: 10px 19px
  article-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    padding: 22px
---

## Overview

Dean Lee's site is a modern editorial review: quiet, exact, and text-led. The interface should feel like a contemporary long-form magazine for markets and probability — not a SaaS template, not Anthropic micro-UI, and not a nostalgic newspaper clip.

2026 refresh priorities: **type hierarchy**, **readable secondary text**, **fluid type scale**, and **generous but intentional white space**.

## Research notes (2026)

- Type Minimalism / typography-as-identity: scale, spacing, and hierarchy carry the brand more than decoration.
- Editorial layouts for blogs/publications: magazine-like grids, hairline rules, deliberate measure (~50–75ch body).
- Secondary UI labels must stay legible — avoid 10–11px microcaps; floor ≈ 14px / 0.875rem.
- Soft depth over glassmorphism theater; performance-first motion (or none).
- Serif display + clean sans UI is a strong thought-leadership pairing for finance/econ writing.

## Colors

Warm paper foundation, graphite ink, stone metadata, oxblood as the only strong interaction color. Dark mode inverts the same system without neon glow.

## Typography

- **Display / section titles**: Fraunces (variable opsz), tight tracking, confident scale.
- **UI / body chrome**: Source Sans 3 — nav, labels, footers, vitals.
- **Long-form prose**: Fraunces at ~1.1–1.2rem with loose leading.
- **Mono**: IBM Plex Mono for status chips, numbers, dates only.
- Labels use mild uppercase + 0.06em tracking; never microscopic.

## Layout

Open editorial grids, hairline rules, mild asymmetry. Soft 6–10px radius on framed surfaces. Avoid nested card stacks, bento overload, purple gradients, and fake metrics.

## Elevation & Depth

Depth is rare: art panels, featured quotes, and the newsletter form may use a soft editorial shadow. Structure mostly comes from spacing and rules.

## Components

Navigation is text-first with underline active states. Article rows use an index column + title + description. Newsletter is an editorial subscription strip, not a marketing widget.

## Do's and Don'ts

Do: reading comfort, contrast, rhythm, accessible label sizes.  
Don't: Anthropic-style 11px UI, purple gradients, glass panels, bento grids, parchment textures, decorative blobs, fake product metrics.
