---
version: alpha
name: Dean Lee Modern Editorial
description: A premium editorial design system for a quantitative finance essay site.
colors:
  primary: "#161412"
  secondary: "#4F4942"
  muted: "#81786D"
  neutral: "#F8F6F1"
  surface: "#FFFFFF"
  accent: "#9A3F2D"
  accentWarm: "#C48049"
  rule: "#DDD7CD"
typography:
  display:
    fontFamily: Fraunces, Iowan Old Style, Georgia, serif
    fontSize: 5.7rem
    fontWeight: 600
    lineHeight: "0.92"
    letterSpacing: "-0.04em"
  headline:
    fontFamily: Fraunces, Iowan Old Style, Georgia, serif
    fontSize: 2.35rem
    fontWeight: 600
    lineHeight: "1.08"
    letterSpacing: "-0.03em"
  body:
    fontFamily: Fraunces, Iowan Old Style, Georgia, serif
    fontSize: 1.1rem
    lineHeight: "1.78"
  label:
    fontFamily: Aptos, Segoe UI, system-ui, sans-serif
    fontSize: 0.72rem
    fontWeight: 700
    letterSpacing: "0.16em"
spacing:
  xs: 8px
  sm: 14px
  md: 28px
  lg: 54px
  xl: 104px
rounded:
  sm: 0px
  md: 0px
  pill: 999px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: 10px 18px
  article-row:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    padding: 22px
---

## Overview

Dean Lee's site is a modern editorial review: quiet, exact, and text-led. The interface should feel like a contemporary long-form magazine for markets and probability, not a nostalgic newspaper or a SaaS template.

## Colors

Use warm white as the page foundation, graphite for primary text, stone for metadata, and oxblood as the only strong interaction color. Dark mode inverts the same editorial system without adding glow or neon effects.

## Typography

Headlines use a literary serif with tight tracking and strong optical scale. UI labels use a clean sans or mono treatment with uppercase rhythm. Body copy must keep generous line height and a readable measure.

## Layout

Use open editorial grids, hairline rules, and asymmetry. Avoid nested cards. Repeated content appears as article rows, ruled lists, and a small number of framed editorial callouts.

## Elevation & Depth

Depth is rare and subtle: article art and quote panels may use a soft editorial shadow. Most structure comes from spacing and rules.

## Shapes

Keep panels square and precise. Buttons may use pill radius to distinguish actions from editorial surfaces.

## Components

Navigation is text-first with fine underline states. Article rows use an index column, title, description, and restrained metadata. Newsletter controls should feel like an editorial subscription form, not a marketing widget.

## Do's and Don'ts

Do preserve reading comfort, contrast, and rhythm. Do not introduce purple gradients, glass panels, bento grids, parchment textures, decorative blobs, or fake product metrics.
