---
name: Shahnawaz Alam Portfolio
description: An evidence-wall portfolio for applied ML and software engineering work.
colors:
  ink: "#101a22"
  ink-deep: "#0a1218"
  ink-soft: "#14222b"
  bone: "#f2efe7"
  bone-dim: "#d5cfc1"
  bone-ink: "#2a3942"
  copper: "#c8845a"
  copper-deep: "#9c5d38"
  slate: "#93a6ae"
  rule: "rgba(242, 239, 231, 0.17)"
  rule-bone: "rgba(16, 26, 34, 0.22)"
typography:
  display:
    fontFamily: '"Bricolage Grotesque", "Arial Narrow", sans-serif'
    fontSize: "clamp(2.8rem, 6vw, 5.4rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  headline:
    fontFamily: '"Bricolage Grotesque", "Arial Narrow", sans-serif'
    fontSize: "clamp(2rem, 3.4vw, 3.2rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: '"Bricolage Grotesque", "Arial Narrow", sans-serif'
    fontSize: "clamp(1.6rem, 3vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Manrope", "Segoe UI", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: '"JetBrains Mono", "Consolas", monospace'
    fontSize: "10px"
    fontWeight: 500
    letterSpacing: "0.12em"
rounded:
  sharp: "0px"
spacing:
  page-x: "clamp(20px, 4vw, 64px)"
  rail: "88px"
  header: "72px"
  section: "88px"
  plate: "clamp(20px, 2.4vw, 32px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "11px 17px"
  button-primary-hover:
    backgroundColor: "{colors.copper-deep}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "11px 17px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "11px 17px"
  button-signal:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "11px 17px"
  plate:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.bone}"
    rounded: "{rounded.sharp}"
    padding: "{spacing.plate}"
  plate-bone:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "{spacing.plate}"
  input:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.bone}"
    rounded: "{rounded.sharp}"
    padding: "13px 14px"
    size: "14px"
  nav-link:
    textColor: "{colors.slate}"
    typography: "{typography.label}"
    padding: "26px 0 24px"
    size: "11px"
---

# Design System: Shahnawaz Alam Portfolio

## Overview

**Creative North Star: "Evidence Atlas"**

This is a portfolio built as a research institute's evidence wall, not a stack of cards. Every surface is a numbered plate held inside thin keylines, with rulers, file marks, and monospaced captions that make the work feel catalogued and inspectable. The ground is deep slate; bone plates carry identity; copper appears only as signal, measurement, or active state.

The system is dense but calm. Display type is constructed and compressed, body copy is neutral and readable, and all supporting information is set in a monospaced register. Figures are presented as measured evidence with sources, and project pipelines are exposed as sequences rather than hidden inside marketing tiles. The result should read as credible to engineering recruiters and research collaborators before it reads as decoration.

**Key Characteristics:**
- Numbered plates, keyline boxes, ruler bars, and file-style captions
- Slate ink ground, bone document plates, copper signal accent
- Display grotesk for names and titles, neutral sans for prose, monospaced labels for evidence
- Flat surfaces with no shadows, glass, pills, or decorative gradients
- A single-axis ruled background at 48px intervals; never a two-axis grid

## Colors

The palette is an archival ink-and-paper system with one copper signal used sparingly.

### Primary
- **Signal Copper** (#c8845a): Active rail markers, measurements, section labels, focus rings, and links on hover. Its rarity is the point.
- **Deep Copper** (#9c5d38): Hover state for primary controls and the corner marks on bone plates.

### Neutral
- **Ink Deep** (#0a1218): Page ground, header, rail, and scrollbar track.
- **Ink** (#101a22): Primary buttons and dark plate text on bone.
- **Ink Soft** (#14222b): Plate interiors, inputs, and image mounting boards.
- **Bone** (#f2efe7): Primary text on dark ground and the identity plate background.
- **Bone Dim** (#d5cfc1): Secondary prose and portrait mounting border.
- **Bone Ink** (#2a3942): Body copy on the bone identity plate.
- **Slate** (#93a6ae): Captions, plate heads, navigation at rest, and secondary metadata.
- **Keyline** (rgba(242, 239, 231, 0.17)): Hairline rules on dark ground.
- **Keyline Bone** (rgba(16, 26, 34, 0.22)): Hairline rules on bone plates.

### Named Rules
**The 10% Signal Rule.** Copper marks state, measurement, or navigation. It never becomes a large field.

**The Keyline Rule.** Structure is made with 1px rules and corner ticks, never with shadows or glass.

## Typography

**Display Font:** Bricolage Grotesque (with Arial Narrow, sans-serif fallback)  
**Body Font:** Manrope (with Segoe UI, sans-serif fallback)  
**Label/Mono Font:** JetBrains Mono (with Consolas, monospace fallback)

**Character:** The display face is narrow and engineered for names and measured figures. Manrope keeps long factual prose quiet and legible. JetBrains Mono turns every caption, index, and figure source into instrument labelling.

### Hierarchy
- **Display** (weight 600, `clamp(2.8rem, 6vw, 5.4rem)`, line-height 1.06): Page titles and the hero identity name.
- **Headline** (weight 600, `clamp(2rem, 3.4vw, 3.2rem)`, line-height 1.06): Section titles and project titles.
- **Title** (weight 600, `clamp(1.6rem, 3vw, 2.6rem)`, line-height 1.06): Paper titles and major plate headings.
- **Body** (weight 400, 16px, line-height 1.65): Prose, capped near 64–70ch for reading.
- **Label** (weight 500, 10px, letter-spacing 0.12em, uppercase): Plate heads, navigation, indexes, metadata, and form labels.

### Named Rules
**The Mono Label Rule.** Anything that classifies, numbers, or measures content uses the monospaced face.

## Layout

The desktop shell reserves an 88px fixed index rail and a 72px fixed header. Content uses `width: min(1320px, calc(100% - (var(--page-x) * 2)))`, with `--page-x: clamp(20px, 4vw, 64px)`. The hero fills `calc(100svh - var(--header))` and splits into a 1.08fr identity plate and a 0.92fr measurement plate with an 18px gutter.

Interior sections are separated by 1px top rules and use 88px vertical padding. Two-column patterns collapse at 820px; the 88px rail disappears and becomes a horizontal plate rail at 1100px. At 560px, the header drops to 64px, page gutters to 18px, and the contact form moves above the direct lines so the primary action stays reachable.

## Elevation & Depth

The system is flat. No component uses a box shadow. Depth comes from tonal layering between Ink Deep, Ink, and Ink Soft, and from 1px keylines with copper corner marks on plates. Hover states shift background tone or padding rather than lifting elements.

### Named Rules
**The Flat Plate Rule.** Surfaces stay flat at rest and on hover; movement is expressed by rule colour, tonal shift, or a small horizontal nudge.

## Shapes

All corners are square (`border-radius: 0`). Plates are rectangular keyline boxes with two 11px copper corner ticks on opposite diagonals. Controls, inputs, facts, and pipeline steps are also square. There are no organic clips, pills, rounded cards, or glass blur.

## Components

### Buttons
- **Shape:** Square (0px radius), minimum 44px tall, 11px monospaced uppercase label.
- **Primary:** Ink background, Bone text, 11px/17px padding; hover shifts to Deep Copper.
- **Ghost:** Transparent with Keyline Bone border and Ink text; hover inverts to Ink with Bone text.
- **Signal:** Copper background with Ink text; hover shifts to Bone.
- **Focus:** 2px copper outline with 3px offset on every control.

### Technology Marks
- **Style:** 20px square keyline cage with an 11px monochrome logo from the installed Simple Icons set; Slate at rest, Signal Copper on hover.
- **Behaviour:** Paired with the existing text label only. Tools without an available logo remain text-only. Logos never use their brand colours.

### Facts and Pipeline Steps
- **Style:** Square keyline boxes, monospaced 10px uppercase text, 7–10px padding.
- **Behaviour:** Used as evidence labels, not as navigation or primary structure.

### Plates / Containers
- **Corner Style:** Square, with diagonal copper corner ticks.
- **Background:** Ink Soft on dark sections; Bone with Bone Ink text for the identity plate.
- **Shadow Strategy:** None.
- **Border:** 1px Keyline or Keyline Bone.
- **Internal Padding:** `clamp(20px, 2.4vw, 32px)`.

### Inputs / Fields
- **Style:** 1px Keyline border, Ink Soft background, Bone text, square corners, 13px/14px padding.
- **Focus:** Copper outline via the global `:focus-visible` rule.
- **Hover:** Border shifts to Slate.

### Navigation
- **Style:** 11px monospaced uppercase links, Slate at rest, Bone on hover/active, 2px copper bottom border for the active item.
- **Mobile:** A sticky horizontal plate rail replaces the fixed vertical rail below 1100px.

### Plate Rail
- **Style:** Numbered 01–05 index in the fixed rail, with vertical labels and copper left border on the active plate.
- **Behaviour:** Mirrors the primary navigation exactly: Identity, Work, Research, Activity, Contact.

## Do's and Don'ts

### Do:
- **Do** use 1px keylines and 11px copper corner ticks to define plate edges.
- **Do** set classifying and measuring text in JetBrains Mono with 0.12em letter spacing.
- **Do** keep the plate rail and header navigation in the same order.
- **Do** use the middle dot (U+00B7) as the inline separator in labels and stacks.
- **Do** pair a technology mark with its text label and keep it monochrome.

### Don't:
- **Don't** introduce glass blur, gradient text, pill corners, or hard offset shadows.
- **Don't** use a two-axis grid background; the ground is a single horizontal 48px ruling.
- **Don't** build pages from generic icon-heading-text cards; use plates, rows, and pipelines.
- **Don't** enlarge copper beyond an accent role.
