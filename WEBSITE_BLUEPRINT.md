# Website Reproduction Blueprint — Shahnawaz Alam Portfolio

> This document is a complete, self-contained specification of the site as it exists in this repository. A coding agent given only this file should be able to rebuild the same information architecture, visual system, component behavior, motion language, and content without access to the original source. Values below are extracted from the shipped code and from computed styles on the running site at 1440×900 and 390×844.

---

## 1. What this site is

A single-page personal portfolio for an AI/ML + full-stack engineer, with two additional routes for a project index and per-project case studies.

| Fact | Value |
|---|---|
| Site name | Shahnawaz Alam |
| Identity line | `Engineer · Researcher · Builder` |
| Monogram | `SA.` (the period is accent orange) |
| Location | Hyderabad, India |
| Primary job of the site | Convince recruiters/research collaborators that the person has both shipped systems and credible research |
| Primary action | Open projects, read research, then contact |
| Main routes | `/` (portfolio), `/work` (all projects), `/work/[slug]` (case study) |
| Navigation targets | `/#work`, `/#research`, `/#hackathons`, `/#about`, `/#contact` |
| Resume | `/resume.pdf` (download) |
| Canonical URL | `https://shahnawaz-alam.vercel.app` |

### Design thesis: "The Quiet Evidence Wall"

The page is an engineer's evidence wall, not a marketing funnel. It reads as a printed research institute annual report: bone-coloured stock, hairline rules, monospaced plate numbers, a single signal-orange accent used sparingly, and one italic serif voice reserved for the emotionally loaded word in each headline. It refuses gradient text, glass cards, soft shadows, and the generic three-column feature grid. Depth comes from alternating paper tones and 1px keylines, never from shadow.

**Key characteristics**
- Bone paper ground, near-black ink, one orange signal, one muted teal for AI/ML categorization.
- Four type voices with strict jobs: Archivo ExtraBold for display, Inter Tight for body, Fraunces Italic for emphasis words, JetBrains Mono for labels/metadata.
- Flat surfaces, 1–2px hairline borders, tiny radii (2–4px) or full pills for controls only.
- Monospaced section indices (`01 —`, `03 —` …) and uppercase section titles act as an editorial table of contents.
- Motion is a single exponential ease-out used for restrained entrance reveals, a marquee, and a scroll-progress hairline.

---

## 2. Technology stack

| Layer | Choice | Version / detail |
|---|---|---|
| Framework | Next.js App Router | `13.5.1` |
| React | React + React DOM | `18.2.0` |
| Language | TypeScript | `5.2.2`, `strict: true`, `noEmit: true` |
| Styling | Tailwind CSS | `3.3.3` with `tailwindcss-animate` |
| Fonts | `next/font/google` | self-hosted at build time, `display: 'swap'`, `subsets: ['latin']` |
| Motion | Framer Motion | `^14.14.0` (with `useReducedMotion`, `useScroll`, `useSpring`, `whileInView`) |
| Smooth scroll | Lenis | `^1.3.27`, driven by `requestAnimationFrame` in a client effect |
| Icons | Lucide React | `^0.446.0`, consistent 2–2.5 stroke width |
| Class helper | `clsx` + `tailwind-merge` | exported as `cn()` from `lib/utils.ts` |
| Forms/UI scaffolding | Radix UI, react-hook-form, zod, shadcn-style `components/ui/*` | installed but **unused by the portfolio pages** |
| Deploy | Netlify via `@netlify/plugin-nextjs` | `npx next build`, publish `.next` |
| Images | Unoptimized | `images: { unoptimized: true }` in `next.config.js` |
| Lint | `next lint`; typecheck `tsc --noEmit` | ESLint errors ignored during builds |

Scripts: `dev` → `next dev`, `build` → `next build`, `start` → `next start`, `lint`, `typecheck`.

Path alias: `@/*` maps to the repository root (`tsconfig.json`).

---

## 3. Topology — directory structure and roles

```
project/
├─ app/
│  ├─ globals.css              # Tailwind entry, :root tokens, base layer, .shell/.label/.display, Lenis rules
│  ├─ layout.tsx               # fonts, metadata, JSON-LD, <body>
│  ├─ page.tsx                 # HOME — composition root for the whole portfolio
│  ├─ robots.ts                # robots.txt
│  ├─ sitemap.ts               # sitemap.xml (static route list)
│  └─ work/
│     ├─ page.tsx              # /work — client-side filterable project index
│     └─ [slug]/page.tsx       # /work/[slug] — static case-study pages
├─ components/
│  ├─ hero.tsx                 # first viewport: label, 3-line h1, intro, CTA, role toggle, orbit
│  ├─ orbit-hero.tsx           # interactive skill diagram (rings + dots)
│  ├─ role-context.tsx         # RoleProvider / useRole — 'all' | 'ai' | 'swe'
│  ├─ role-toggle.tsx          # pill segmented control bound to role context
│  ├─ marquee.tsx              # infinite technology ticker
│  ├─ section.tsx              # shared section shell (index/title header + body)
│  ├─ section-title.tsx        # two-line display heading with italic word reveal
│  ├─ work-section.tsx         # 01 — SELECTED WORK
│  ├─ project-card.tsx         # card used on / and /work
│  ├─ numbers-strip.tsx        # unnumbered 02 — stats strip with count-up
│  ├─ research-section.tsx     # 03 — RESEARCH
│  ├─ hackathons-section.tsx   # 04 — HACKATHONS
│  ├─ skills-section.tsx       # 05 — SKILLS
│  ├─ experience-section.tsx   # 06 — EXPERIENCE (timeline + education)
│  ├─ about-section.tsx        # 07 — ABOUT (portrait + copy)
│  ├─ contact-section.tsx      # 08 — CONTACT
│  ├─ nav.tsx                  # fixed header
│  ├─ footer.tsx               # footer
│  ├─ scroll-progress.tsx      # fixed 2px accent progress hairline
│  ├─ smooth-scroll.tsx        # Lenis wrapper
│  └─ ui/                      # 47 unused shadcn/Radix primitives (scaffolding only)
├─ data/
│  ├─ site.ts                  # identity, nav, socials, keywords, JSON-LD
│  ├─ projects.ts              # Project type + 6 projects + helpers
│  ├─ orbit.ts                 # orbit skills, marquee items, stats
│  ├─ research.ts              # 2 papers
│  ├─ experience.ts            # 3 roles + 3 education entries
│  ├─ hackathons.ts            # 4 hackathon entries
│  └─ skills.ts                # 3 skill groups
├─ hooks/use-toast.ts           # unused scaffolding
├─ lib/utils.ts                # cn()
├─ public/
│  ├─ favicon.png
│  └─ images/
│     ├─ profile.png           # used in About
│     ├─ profile_old.png       # unused
│     ├─ drai 1.png            # unused
│     ├─ medinsight 1.jpg      # unused
│     └─ medinsight 2.jpg      # unused
├─ tailwind.config.ts
├─ postcss.config.js
├─ tsconfig.json
├─ next.config.js
└─ netlify.toml
```

### Composition root (`app/page.tsx`)

```
<RoleProvider>
  <SmoothScroll>
    <ScrollProgress />
    <Nav />
    <main>
      <Hero />
      <Marquee />
      <WorkSection />
      <NumbersStrip />
      <ResearchSection />
      <HackathonsSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </main>
    <Footer />
  </SmoothScroll>
</RoleProvider>
```

`RoleProvider` and `SmoothScroll` are thin client wrappers that render `children`; every section is independently responsible for its own behavior. The role state (`all` / `ai` / `swe`) is set in the hero and consumed by `WorkSection`, `SkillsSection`, and `OrbitHero`, so changing the filter reorders skills, reorders orbit dots, and filters the project grid simultaneously.

---

## 4. Design tokens

### 4.1 Colour

All colours are CSS custom properties on `:root` in `app/globals.css`, aliased into Tailwind's `theme.extend.colors`.

| Token | Hex | Tailwind name | Role |
|---|---|---|---|
| `--paper` | `#efede7` | `paper` | Primary page and section ground — warm bone, never pure white |
| `--paper-2` | `#e7e5df` | `paper-2` | Alternating ("alt") sections, image placeholders, striped card covers |
| `--ink` | `#131311` | `ink` | Body text, primary button fill, dark category pills, rules at full strength |
| `--muted` | `#6b6a64` | `muted` | Secondary copy, labels, metadata, inactive control text |
| `--line` | `#d5d2c9` | `line` | Every 1px border, divider, dot separator, and inactive hairline |
| `--accent` | `#ff5a1f` | `accent` | Signal orange — emphasis words, scroll bar, progress bar, hover state, winner badge |
| `--accent-2` | `#1f8f86` | `accent-2` | Muted teal — AI/ML category pill, AI orbit dots, Finalist badge |

Derived utilities in use: `text-ink/80`, `text-ink/70`, `text-ink/50`, `text-ink/15`, `bg-paper/90`, `text-accent`, etc.

**Colour rules**
- **The One Voice Rule.** Accent orange is used at most once or twice per viewport: one italic emphasis word, the scroll hairline, or one hover state. If a screen has several, remove all but the most important.
- **The Keyline Rule.** Structural separation is a 1px `var(--line)` border, never a shadow. Sections use `border-t`; research/hackathon/timeline rows use `border-t` with `last:border-b`.
- AI/ML work is teal, software work is near-black. This mapping is consistent across project cards, the orbit diagram, and case-study headers.

### 4.2 Typography

Four Google fonts, loaded in `app/layout.tsx` with CSS variables:

| Role | Family | Weights / style | CSS variable | Tailwind alias |
|---|---|---|---|---|
| Display | **Archivo** | 800, 900 | `--font-archivo` | `font-display` |
| Body | **Inter Tight** | 400, 500 | `--font-inter-tight` | `font-body` |
| Emphasis | **Fraunces** | 400, 500, *italic only* | `--font-fraunces` | `font-serif` |
| Metadata | **JetBrains Mono** | 400, 500 | `--font-jetbrains` | `font-mono` |

Fallbacks: Archivo → system-ui/sans-serif; Inter Tight → system-ui/sans-serif; Fraunces → Georgia/serif; JetBrains → ui-monospace/monospace. All are `display: swap`, `subsets: ['latin']`, attached to `<html>` via the variables.

**Base body** (`@layer base`): `font-size: 17px`, `line-height: 1.6`, `-webkit-font-smoothing: antialiased`, `text-rendering: optimizeLegibility`, `background: var(--paper)`, `color: var(--ink)`.

**Exact type roles**

| Role | Implementation | Used for |
|---|---|---|
| Display | `.display` = Archivo 800, uppercase, `letter-spacing: -0.03em`, `line-height: 0.9` | Hero, section titles, contact headline, project titles, footer name, stat figures |
| Hero display | `.display` + `text-[clamp(3.5rem,11vw,10rem)]` | Three hero lines |
| Section title | `.display` + `text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9]` | `SectionTitle` |
| Contact display | `.display` + `text-[clamp(3rem,10vw,9rem)]` | "Let's build something." |
| About title | `.display` + `!text-[clamp(2rem,5vw,3.5rem)]` | About heading |
| Page title | `.display` + `text-[clamp(2.5rem,8vw,6rem)]` | `/work`, case-study titles |
| Project title | `.display` + `text-xl md:text-2xl tracking-tightest` | Cards |
| Stat figure | `.display` + `text-[clamp(2.5rem,5vw,4rem)]` | Numbers strip |
| Body | Inter Tight 17px / 1.6; selected long copy 18px (`text-lg`) | Paragraphs, descriptions |
| Label | `.label` = JetBrains Mono 12px, uppercase, `letter-spacing: 0.08em`, `color: var(--muted)` | Section indices, metadata, buttons, chips, nav links, tech tags, socials |
| Emphasis | `<em class="font-serif font-normal normal-case tracking-normal italic text-accent">` | Exactly one word per headline (work, research, pressure, work, path, building, something) |

**Type rules**
- **The Italic Exception Rule.** Fraunces italic appears only inside `<em>` for a single emphasis word in a headline. It is never used for body copy or more than one word per heading.
- **The Uppercase Contract Rule.** Archivo display is always uppercase with `-0.03em` tracking; Inter Tight body is always sentence case. Never mix.
- Everything monospaced is data or metadata, never decorative prose.

### 4.3 Spacing & grid

| Token / utility | Value | Where |
|---|---|---|
| `.shell` | `max-width: 1280px`, `padding-inline: 24px` (mobile), `48px` at ≥768px | Every section container |
| Hero grid | `grid-cols-1` → `md:grid-cols-12`, `gap-12` (48px), `pt-32 md:pt-40`, `pb-20`, `min-h-[100svh]` | Hero |
| Hero columns | `md:col-span-7` (copy), `md:col-span-5` (orbit) | Hero |
| Section wrapper | header `shell pt-10 md:pt-14`; body `shell py-16 md:py-32` | `Section` |
| Project grid | `grid-cols-1 md:grid-cols-2`, `gap-x-10` (40px), `gap-y-16` (64px), `mt-12 md:mt-20` | Work |
| Stats strip | `grid-cols-2 md:grid-cols-4`, `gap-8` (32px), `py-16 md:py-24` | NumbersStrip |
| Skills grid | `grid-cols-1 md:grid-cols-3`, `gap-12 md:gap-10` | Skills |
| Case study grid | `md:grid-cols-12`, `md:col-span-7` / `md:col-span-5`, `gap-16` | Case study |
| Marquee | `py-5` (20px), `gap-12` (48px) | Marquee |
| Nav | fixed, `h-16 md:h-20` | Nav |
| Section rhythm | Large space above heading, generous space below; no section is denser than its neighbour |

### 4.4 Shape, radius, borders

- Default border colour globally: `border-color: var(--line)` via `*`.
- Section dividers: `border-top: 1px solid var(--line)`.
- Image/cover frames: `rounded-sm` (2px) with `border border-line`, `aspect-[4/3]` for cards, `aspect-[4/5]` for portrait.
- Tech tags / stack chips: `rounded` (4px), `border border-line`, `px-2 py-1`.
- Result badges: `rounded-full`, `px-3 py-1`.
- Buttons and toggle pills: `rounded-full`.
- There are **no cards with shadows**. Every container is either a hairline box or a tonal band.
- `::selection` is inverted: background `var(--ink)`, text `var(--paper)`.
- `:focus-visible` is a 2px `var(--accent)` outline with 3px offset, globally.

### 4.5 Elevation & depth

Flat by default. Depth is conveyed only by:
1. Alternating `--paper` / `--paper-2` section bands.
2. 1px keylines.
3. A `bg-paper/90 backdrop-blur-md` header state once scrolled past 40px (the only blur in the system, and it is functional).
4. The fixed accent progress hairline at `z-[60]`.

No `box-shadow` appears anywhere in the portfolio components.

### 4.6 Motion

| Token | Value | Use |
|---|---|---|
| `EASE` | `cubic-bezier(0.22, 1, 0.36, 1)` | Framer Motion entrances and Tailwind `ease-studio` transitions |
| Entrance duration | `0.5–0.7s` | Opacity + 20–30px Y reveal |
| Title reveal | `y: '110%' → 0`, `0.6s`, stagger `0.08s` per line | `SectionTitle`, hero lines |
| Scroll-progress spring | `stiffness: 120`, `damping: 30`, `mass: 0.4` | `useSpring(scrollYProgress)` |
| Marquee | `40s linear infinite`, `translateX(0 → -50%)`, pauses on hover | Marquee |
| Hover transitions | `duration-300 ease-studio`; image `duration-500`; arrow `duration-300` | Buttons, links, cards |
| Reduced motion | `useReducedMotion()` sets Framer `initial={false}`; global CSS collapses all animation/transition durations to `0.01ms` | Respects `prefers-reduced-motion` |

**Motion rule:** one authored gesture per interaction — an entrance reveal, a hover colour shift, or a translate. Never stack a bounce, a scale, and a glow on the same element.

### 4.7 Breakpoints

Only Tailwind's `md` (768px) is actively used. Layouts are single-column below 768px and 12-column above it. `sm` appears once (Resume link hidden below 640px).

---

## 5. Global stylesheet (exact)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --paper: #efede7;
  --paper-2: #e7e5df;
  --ink: #131311;
  --muted: #6b6a64;
  --line: #d5d2c9;
  --accent: #ff5a1f;
  --accent-2: #1f8f86;
}

@layer base {
  * { border-color: var(--line); }
  html { -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
  body {
    background-color: var(--paper);
    color: var(--ink);
    font-family: var(--font-inter-tight), system-ui, sans-serif;
    font-size: 17px;
    line-height: 1.6;
  }
  ::selection { background-color: var(--ink); color: var(--paper); }
  :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}

@layer components {
  .shell { width: 100%; max-width: 1280px; margin-inline: auto; padding-inline: 24px; }
  @media (min-width: 768px) { .shell { padding-inline: 48px; } }
  .label {
    font-family: var(--font-jetbrains), ui-monospace, monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--muted);
  }
  .display {
    font-family: var(--font-archivo), system-ui, sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -0.03em;
    line-height: 0.9;
  }
}

.lenis, .lenis body { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-stopped { overflow: hidden; }
```

Tailwind theme extension:

```ts
colors: {
  paper: { DEFAULT: 'var(--paper)', 2: 'var(--paper-2)' },
  ink: 'var(--ink)',
  muted: 'var(--muted)',
  line: 'var(--line)',
  accent: { DEFAULT: 'var(--accent)', 2: 'var(--accent-2)' },
},
fontFamily: {
  display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
  body: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
  serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
  mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
},
letterSpacing: { tightest: '-0.03em', label: '0.08em' },
maxWidth: { shell: '1280px' },
transitionTimingFunction: { studio: 'cubic-bezier(0.22, 1, 0.36, 1)' },
keyframes: {
  marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
},
animation: { marquee: 'marquee 40s linear infinite' },
```

---

## 6. Page structure — section by section

### First viewport (`components/hero.tsx`)
- `id="top"`, `min-h-[100svh]`, shell grid as above.
- Left column, in order:
  1. `.label` — `{site.name} — {site.location}`.
  2. `<h1 class="display">` — three stacked `<span class="block overflow-hidden">` wrappers, each containing a `motion.span` that reveals from `y: '110%'`. Lines: **Engineer.** / *Researcher.* (Fraunces italic, accent) / **Builder.**. Delays `0.2 / 0.32 / 0.44s`.
  3. Intro paragraph — `mt-8 max-w-xl text-lg text-muted`, fades up at `0.6s`.
  4. Metadata row — `label`, `Based: … | Focus: AI/ML & SWE | Open to: AI/ML & SWE roles`, fades at `0.75s`.
  5. CTA row — solid ink pill "See the work ↓" (href `#work`) and outlined pill "Download resume ↗" (href `/resume.pdf`, `download`). Fades up at `0.85s`.
  6. "View portfolio as" + `<RoleToggle />`. Fades at `1.0s`.
- Right column: `<OrbitHero role={role} />` in a scale-in wrapper at `0.5s`.

### Marquee
Full-width `border-y border-line bg-paper py-5 overflow-hidden`, a `w-max` flex row of the 16 technology names duplicated twice, gap 48px, `animate-marquee`, paused on hover. Each item is `.label text-ink/70` followed by an accent `/`.

### 01 — SELECTED WORK
`Section index="01 —" title="SELECTED WORK"`. `SectionTitle lines={['Selected','work.']} italicWord="work"`. Two-column card grid of up to 6 featured projects, then a text link "View all projects →" to `/work`.

### Stats strip (unnumbered 02)
`border-y border-line bg-paper-2`; four figures in a 2/4-column grid, `py-16 md:py-24`. Values count up on intersection over 1200ms with cubic ease-out: `12+ Projects shipped`, `3 Research papers`, `5 Hackathons`, `99.9% Infra uptime`.

### 03 — RESEARCH
`Section alt` (paper-2 ground). Title "Published research." with "research" italic. A list of papers, each row a 12-column grid: year (`label`, col 1), title + venue + authors + abstract (col 7), links (col 4, right aligned). Rows have `border-t`, `hover:bg-paper`.

### 04 — HACKATHONS
Title "Built under pressure." with "pressure" italic. Rows: year (col 2), event/project/note (col 7), result pill + optional link (col 3, right). Result pill colours: Winner = accent, Finalist = accent-2, Top 10 = ink, Participant = outlined muted.

### 05 — SKILLS
Title "The tools behind the work." with "work" italic. Three columns of skill groups, each headed by a `.label` with a bottom border; items are a flex row of name + right-aligned monospace level. Order of groups changes with the role filter.

### 06 — EXPERIENCE
`Section alt`. Title "The path so far." with "path" italic. Two vertical timelines (experience, then education). Mobile: left border with an accent dot at each entry. Desktop: no vertical line; period in col 3 with its own left border, content in col 9.

### 07 — ABOUT
Two columns (4/8). Left: `aspect-[4/5]` portrait frame with `border border-line bg-paper-2` containing `/images/profile.png`. Right: smaller SectionTitle "I turn research into running systems." with "building" italic (note: the italic word argument does not appear in the supplied lines, so no word is italicized here in the current build), two body paragraphs at `text-lg`, then a top-bordered "Currently exploring" note.

### 08 — CONTACT
`Section alt`. Large two-line display headline "Let's build / *something.*" with "something" in Fraunces italic accent. Solid ink email pill with a Mail icon, hover → accent. Four social links in a 2/4-column grid with a top border, each with an ArrowUpRight that nudges up-right on hover.

### Footer
`border-t border-line bg-paper`, shell `py-12 md:py-16`. Left: display name + `.label` location. Right: "Back to top ↑" and `© {year} {name}`.

### Persistent UI
- **Nav** — fixed top, transparent with transparent bottom border until `scrollY > 40`, then `bg-paper/90 backdrop-blur-md border-b border-line`. Left: `SA.` monogram; centre: 5 nav links (hidden below md); right: Resume link (hidden below sm) and outlined "Hire me ↗" pill.
- **ScrollProgress** — fixed `top-0 left-0 h-[2px] w-full origin-left bg-accent z-[60]`, `scaleX` bound to scroll progress through a spring.
- **SmoothScroll** — Lenis with `duration: 1.1`, exponential easing, `smoothWheel: true`; skipped entirely for reduced motion; RAF loop cleaned up on unmount.
- **RoleProvider / RoleToggle** — a `role="tablist"` of three pills (All / AI · ML / Software). Active = ink background + paper text; inactive = muted text, hover → ink.

---

## 7. Component recipes (exact class strings)

### Section shell
```tsx
<section id={id} className={cn('relative border-t border-line', alt && 'bg-paper-2', className)}>
  {(index || title) && (
    <div className="shell pt-10 md:pt-14">
      <div className="flex items-baseline gap-3">
        {index && <span className="label text-ink/70">{index}</span>}
        {title && <span className="label text-ink/70">{title}</span>}
      </div>
    </div>
  )}
  <div className="shell py-16 md:py-32">{children}</div>
</section>
```

### Section title
```tsx
<h2 className={cn('display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9]', align === 'center' && 'text-center', className)}>
  {lines.map((line, i) => (
    <span key={i} className="block overflow-hidden">
      <motion.span className="block" initial={{ y: '110%' }} whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22,1,0.36,1], delay: i * 0.08 }}>
        {line}
      </motion.span>
    </span>
  ))}
</h2>
```
Emphasis is produced by `renderItalic(line, word)`, which splits the line and wraps the matching word in the `<em>` recipe above.

### Buttons
- **Solid**: `inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-paper label hover:bg-accent transition-colors duration-300 ease-studio`
- **Outlined**: `inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 label text-ink hover:bg-ink hover:text-paper transition-colors duration-300 ease-studio`
- **Large solid (contact)**: `rounded-full bg-ink px-8 py-4 text-paper label hover:bg-accent`
- **Text link**: `inline-flex items-center gap-2 label text-ink/70 hover:text-accent transition-colors duration-300`
- **Focus**: global `:focus-visible` accent outline.

### Chips / tags
- Tech tag: `label rounded border border-line px-2 py-1 text-muted`
- AI/ML category on card: `absolute left-4 top-4 label rounded-full px-3 py-1 bg-accent-2 text-paper`
- Software category on card: same with `bg-ink text-paper`
- Result badge: `inline-flex rounded-full px-3 py-1 label` + one of the four result colour classes.
- Role toggle: `inline-flex items-center gap-1 rounded-full border border-line bg-paper p-1`; active `rounded-full px-4 py-1.5 label bg-ink text-paper`; inactive `text-muted hover:text-ink`.

### Project card
`motion.article` with whileInView reveal. Cover: `relative aspect-[4/3] overflow-hidden rounded-sm border border-line bg-paper-2`, inside a diagonal stripe pattern:
```css
repeating-linear-gradient(45deg, var(--paper-2), var(--paper-2) 10px, var(--paper) 10px, var(--paper) 20px)
```
with a display `text-5xl text-ink/15` two-letter monogram, `group-hover:scale-[1.03]` over 500ms. Below: title (display, 20/24px, hover → accent), tagline, an `ArrowUpRight` that slides in from -8px on hover, tech chips, impact line, and external links with GitHub icon.

### Timeline row
Mobile: `relative grid grid-cols-1 gap-3 border-l border-line pb-12 pl-8 last:pb-0 md:grid-cols-12 md:gap-8 md:pl-0 md:border-l-0` with an absolute `h-2 w-2 rounded-full bg-accent` dot. Desktop: period in `md:col-span-3 md:border-l md:border-line md:pl-8`, content in `md:col-span-9`.

### Orbit diagram
Square container `relative mx-auto aspect-square w-full max-w-[520px]` with CSS vars `--px`/`--py` driven by a RAF-smoothed mouse offset (±12px). Three concentric rings at radii 90/160/230px (`border border-line rounded-full`), a 16px accent centre dot labelled "Me", and 13 skill dots positioned by `cos/sin(angle) × radius`. AI dots are accent-2, software dots ink/80, tools dots ink/80 with category-specific hover. Skills reorder by category when the role filter changes.

### Marquee
Two copies of `marqueeItems` in a `flex w-max animate-marquee gap-12`, each item `.label text-ink/70 whitespace-nowrap` with an accent `/` separator; `group-hover:[animation-play-state:paused]`.

---

## 8. Data model and full content

All content lives in plain TypeScript arrays under `data/`. There is no CMS, no database, and no network fetch on the portfolio pages. The Supabase dependency in `package.json` is unused.

### 8.1 `data/site.ts`

```ts
export const site = {
  name: 'Shahnawaz Alam',
  role: 'Engineer · Researcher · Builder',
  email: 'shahnawaz.alam1024@gmail.com',
  phone: '+91 9849575681',
  location: 'Hyderabad, India',
  url: 'https://shahnawaz-alam.vercel.app',
  description:
    'Software engineer building AI/ML and full-stack systems — from research to production. PyTorch, LLMs, FastAPI, React.',
  keywords: [
    'AI engineer',
    'ML engineer',
    'software engineer',
    'PyTorch',
    'LLMs',
    'FastAPI',
    'React',
    'LangGraph',
    'Shahnawaz Alam',
  ],
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/shahnawaz-alam37',
    linkedin: 'https://linkedin.com/in/shahnawaz-alam37',
    scholar: 'https://scholar.google.com', // TODO: paste your Google Scholar profile URL
    researchgate: 'https://www.researchgate.net', // TODO: paste your ResearchGate profile URL
  },
  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'Research', href: '/#research' },
    { label: 'Hackathons', href: '/#hackathons' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shahnawaz Alam',
    url: 'https://shahnawaz-alam.vercel.app',
    email: 'mailto:shahnawaz.alam1024@gmail.com',
    sameAs: [
      'https://github.com/shahnawaz-alam37',
      'https://linkedin.com/in/shahnawaz-alam37',
    ],
    jobTitle: 'Software Engineer',
    knowsAbout: [
      'Machine Learning',
      'Large Language Models',
      'Software Engineering',
      'PyTorch',
      'React',
    ],
  },
} as const;
```

### 8.2 `data/orbit.ts`

```ts
import type { Role } from './projects';

export interface OrbitSkill {
  label: string;
  ring: number; // 1 = inner, 2 = mid, 3 = outer
  angle: number; // degrees
  category: 'ai' | 'swe' | 'tools';
}

export const orbitSkills: OrbitSkill[] = [
  { label: 'PyTorch', ring: 1, angle: 0, category: 'ai' },
  { label: 'LLMs', ring: 1, angle: 120, category: 'ai' },
  { label: 'LangGraph', ring: 1, angle: 240, category: 'ai' },
  { label: 'React', ring: 2, angle: 30, category: 'swe' },
  { label: 'FastAPI', ring: 2, angle: 100, category: 'swe' },
  { label: 'TypeScript', ring: 2, angle: 170, category: 'swe' },
  { label: 'QLoRA', ring: 2, angle: 250, category: 'ai' },
  { label: 'Docker', ring: 2, angle: 320, category: 'tools' },
  { label: 'AWS', ring: 3, angle: 15, category: 'tools' },
  { label: 'Go', ring: 3, angle: 80, category: 'swe' },
  { label: 'HuggingFace', ring: 3, angle: 150, category: 'ai' },
  { label: 'Python', ring: 3, angle: 210, category: 'swe' },
  { label: 'Qdrant', ring: 3, angle: 285, category: 'tools' },
];

export function orderedOrbitSkills(role: Role): OrbitSkill[] {
  if (role === 'ai') {
    return [...orbitSkills].sort((a, b) => {
      const order = { ai: 0, swe: 1, tools: 2 };
      return order[a.category] - order[b.category];
    });
  }
  if (role === 'swe') {
    return [...orbitSkills].sort((a, b) => {
      const order = { swe: 0, ai: 1, tools: 2 };
      return order[a.category] - order[b.category];
    });
  }
  return orbitSkills;
}

export const marqueeItems: string[] = [
  'PyTorch', 'LangGraph', 'FastAPI', 'React', 'TypeScript', 'QLoRA',
  'HuggingFace', 'Docker', 'AWS', 'Python', 'Go', 'Unsloth', 'Qdrant',
  'LangChain', 'React Native', 'Flask',
];

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 12, suffix: '+', label: 'Projects shipped' },
  { value: 3, suffix: '', label: 'Research papers' },
  { value: 5, suffix: '', label: 'Hackathons' },
  { value: 99, suffix: '.9%', label: 'Infra uptime' },
];
```

### 8.3 `data/projects.ts`

Types: `Role = 'all' | 'ai' | 'swe'`; `ProjectCategory = 'ai' | 'swe'`; `ProjectLink { label, href }`; `Project { slug, title, category, tagline, year, featured, cover, coverAlt, tech[], links[], impact, metrics?, caseStudy { problem, approach, results[], stack[] } }`.

Six projects, all `featured: true`:

| slug | title | cat | year | tagline | impact |
|---|---|---|---|---|---|
| `plant-pathology` | Plant Pathology | ai | 2025 | Two-stage production ML pipeline for 31-class crop disease detection. | 200ms inference on mobile with a 40% smaller model. |
| `resumeforge` | ResumeForge | ai | 2025 | Multi-agent LangGraph pipeline that generates ATS-optimized resumes. | Self-healing agents retry until a valid build is produced. |
| `ai-research-agent` | AI Research Agent | ai | 2025 | Autonomous LLM agent that decides when to search the web and cites sources. | Citation-backed answers from an agent that reasons about when to search. |
| `medical-qa-llm` | Medical Q&A LLM | ai | 2025 | QLoRA fine-tuned Phi-3-mini medical conversational agent. | 70% GPU memory reduction enabled fine-tuning on consumer hardware. |
| `dr-ai` | Dr.AI | swe | 2024 | Real-time medical simulation backend for a 36-hour hackathon. | Concurrent voice sessions with LLM-driven evaluation feedback. |
| `go-procurement-api` | Procurement Automation API | swe | 2022 | RESTful Go microservices for large-scale vendor data processing. | Optimized queries and clean service boundaries in production. |

Per-project metrics and case studies:

```ts
// plant-pathology
metrics: [
  { label: 'Model size reduction', value: '40%' },
  { label: 'Inference latency', value: '<200ms' },
  { label: 'Disease classes', value: '31' },
]
caseStudy: {
  problem: 'Farmers need rapid, on-device identification of crop diseases, but full-size models are too heavy for edge deployment and too slow for real-time mobile use.',
  approach: 'Built a two-stage pipeline: a binary Leaf vs. Not-Leaf gate, then a 31-class disease classifier on a pruned and fine-tuned ResNet18. Structured pruning cut the model size while preserving accuracy, and a FastAPI inference service kept latency low for the React Native client.',
  results: [
    'Reduced ResNet18 size by 40% with negligible accuracy loss via structured pruning.',
    'Sub-200ms leaf-image inference through a PyTorch + FastAPI service.',
    'Cross-platform React Native (Expo) client with live camera feedback.',
  ],
  stack: ['PyTorch', 'FastAPI', 'React Native', 'Expo', 'AWS'],
}

// resumeforge
metrics: [
  { label: 'Agents', value: '4' },
  { label: 'Providers', value: 'Multi' },
  { label: 'Containerized', value: 'Yes' },
]
caseStudy: {
  problem: 'Tailoring a resume to each job description is slow and error-prone, and generated LaTeX builds frequently fail to compile.',
  approach: 'Architected a LangGraph multi-agent pipeline that ingests a job description and candidate profile, drafts an ATS-optimized LaTeX document, and self-heals: an LLM agent inspects build errors and iteratively retries until compilation succeeds. The whole pipeline runs in a lightweight Docker service for reproducible execution.',
  results: [
    'End-to-end autonomous resume generation orchestrated with LangGraph.',
    'Self-healing loop detects and fixes LaTeX build errors automatically.',
    'Modular plugin architecture supports any OpenAI-compatible provider.',
  ],
  stack: ['LangGraph', 'FastAPI', 'Docker', 'Tectonic', 'Python'],
}

// ai-research-agent
metrics: [
  { label: 'Tool calls', value: 'Autonomous' },
  { label: 'Citations', value: 'Per-claim' },
  { label: 'UI', value: 'React+TS' },
]
caseStudy: {
  problem: 'LLM answers are only as trustworthy as their sources. A naive chatbot hallucinates; researchers need evidence-backed answers with visible citations.',
  approach: 'Built an agentic loop where the LLM decides when to invoke web-search tools, runs searches in parallel, and assembles citation-backed answers. Added token/context safeguards, structured observability logs, and a React + TypeScript UI with Markdown rendering, copy, and export-to-PDF.',
  results: [
    'Agent autonomously invokes web search only when needed.',
    'Parallel search execution with context and token safeguards.',
    'React + TypeScript UI with Markdown, citations, and PDF export.',
  ],
  stack: ['Python', 'FastAPI', 'LangGraph', 'React', 'TypeScript', 'Exa'],
}

// medical-qa-llm
metrics: [
  { label: 'Memory reduction', value: '70%' },
  { label: 'Downloads', value: '73+' },
  { label: 'Method', value: 'QLoRA' },
]
caseStudy: {
  problem: 'General-purpose LLMs underperform on medical dialogue, and fine-tuning large models is infeasible on consumer-grade GPUs.',
  approach: 'Fine-tuned Phi-3-mini on the MedQuAD dataset using QLoRA/PEFT, applying 4-bit quantization and Unsloth optimizations to bring fine-tuning within reach of resource-constrained hardware. Published the checkpoint to Hugging Face for community reuse.',
  results: [
    'Reduced GPU memory footprint by 70% via 4-bit quantization + Unsloth.',
    'Fine-tuning feasible on consumer-grade hardware.',
    'Published to Hugging Face with 73+ downloads and positive adoption.',
  ],
  stack: ['PyTorch', 'QLoRA', 'Unsloth', 'HuggingFace', 'PEFT'],
}

// dr-ai
metrics: [
  { label: 'Built in', value: '36h' },
  { label: 'Sessions', value: 'Concurrent' },
  { label: 'Feedback', value: 'Automated' },
]
caseStudy: {
  problem: 'Medical trainees need realistic practice with instant, structured feedback — but human evaluation doesn’t scale.',
  approach: 'Designed a full-stack Flask backend for a real-time medical simulation platform, handling concurrent voice sessions and transcript processing. Integrated speech recognition and TTS with a modular, LLM-driven evaluation pipeline that analyzes conversation quality and returns actionable feedback.',
  results: [
    'Concurrent voice session handling on Flask.',
    'Speech recognition + TTS integrated with an LLM evaluation pipeline.',
    'Actionable, automated feedback for trainees.',
  ],
  stack: ['Flask', 'Speech Recognition', 'TTS', 'LLM', 'Python'],
}

// go-procurement-api
metrics: [
  { label: 'Language', value: 'Go' },
  { label: 'Scale', value: 'Production' },
  { label: 'Architecture', value: 'Microservices' },
]
caseStudy: {
  problem: 'Procurement workflows involved large, noisy vendor datasets and brittle manual processes that didn’t scale.',
  approach: 'Developed and deployed RESTful APIs in Go for procurement automation microservices, collaborating on API architecture for scalability, robust error handling, and clean separation of concerns. Optimimized database queries and integrated third-party services.',
  results: [
    'Production Go microservices processing large-scale vendor data.',
    'Reduced API response latency via query optimization.',
    'Clean service boundaries with robust error handling.',
  ],
  stack: ['Go', 'REST', 'Microservices', 'PostgreSQL'],
}
```

Tech arrays and links, in order:

```ts
plant-pathology:   tech ['PyTorch','FastAPI','React Native','AWS'], links [{GitHub, https://github.com/shahnawaz-alam37}]
resumeforge:       tech ['LangGraph','FastAPI','Docker','Tectonic'], links [{GitHub, …}]
ai-research-agent: tech ['Python','FastAPI','LangGraph','React','TypeScript','Exa'], links [{GitHub, …}]
medical-qa-llm:    tech ['PyTorch','QLoRA','Unsloth','HuggingFace'], links [{HuggingFace, https://huggingface.co},{GitHub, …}]
dr-ai:             tech ['Flask','Speech Recognition','TTS','LLM'], links [{GitHub, …}]
go-procurement-api:tech ['Go','REST','Microservices'], links [{GitHub, …}]
```

Helpers: `getFeaturedProjects()` → first 6 featured; `getProjectBySlug(slug)`; `filterProjects(role)` → all or by category.

### 8.4 `data/research.ts`

```ts
export const papers = [
  {
    id: 'meta-pruning', year: '2026',
    title: 'Meta-Learning Guided Pruning for Few-Shot Plant Pathology on Edge Devices',
    venue: 'arXiv:2601.02353', authors: 'Shahnawaz Alam',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2601.02353' }],
    abstract: 'A meta-learning guided pruning strategy jointly optimizing for few-shot generalization and edge-deployment constraints, achieving 2x compression while retaining over 85% of baseline accuracy across 10-shot plant disease benchmarks.',
  },
  {
    id: 'driftguard', year: '2026',
    title: 'DriftGuard: A Hierarchical Framework for Concept Drift Detection and Remediation in Supply Chain Forecasting',
    venue: 'arXiv:2601.08928', authors: 'Co-authored',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2601.08928' }],
    abstract: 'A five-module framework that detects concept drift in supply chain forecasting models, diagnoses root causes, and automatically remediates affected models — addressing real-world model degradation from evolving data patterns.',
  },
];
```

> Note: `site.stats` says "3 Research papers" but only 2 paper records exist. Reproduce the data as given; do not invent a third.

### 8.5 `data/experience.ts`

```ts
experience = [
  { id:'synectiks', title:'Software Engineering Intern', org:'Synectiks',
    period:'Jul 2022 — Nov 2022',
    description:'Built RESTful APIs in Go for procurement automation microservices processing large-scale vendor datasets. Collaborated on API architecture for scalability, robust error handling, and clean service separation.' },
  { id:'aws-club', title:'Lead, Development Team', org:'AWS Cloud Club, MJCET',
    period:'Oct 2024 — Jun 2026',
    description:'Architected and maintained production web infrastructure on AWS (EC2, S3, Route 53, CloudFront) with automated deployments, achieving 99.9% uptime and sub-2s load times.' },
  { id:'tsig', title:'Lead, Data Science Team', org:'Technology Special Interest Group, MJCET',
    period:'Aug 2025 — Jun 2026',
    description:'Mentored 30+ members in data science and applied ML, guiding them from fundamentals to deploying full-stack production ML applications through hands-on workshops.' },
];

education = [
  { id:'mtech', title:'M.Tech. in Computer Science and Engineering',
    org:'Muffakham Jah College of Engineering and Technology', period:'2026 — 2028', description:'Pursuing.' },
  { id:'be', title:'B.E. in Computer Science Engineering',
    org:'Muffakham Jah College of Engineering and Technology — Osmania University', period:'2026', description:'CGPA: 7.6.' },
  { id:'diploma', title:'Diploma in Computer Science Engineering',
    org:'Quli Qutub Shah Govt Polytechnic', period:'2023', description:'CGPA: 8.36.' },
];
```

### 8.6 `data/hackathons.ts`

`HackathonResult = 'Winner' | 'Finalist' | 'Top 10' | 'Participant'`.

```ts
[
  { id:'dr-ai', event:'36-Hour Hackathon', year:'2024',
    project:'Dr.AI — Real-time medical simulation platform', result:'Participant',
    note:'Built a Flask backend for concurrent voice sessions with LLM-driven evaluation feedback.',
    href:'https://github.com/shahnawaz-alam37' },
  { id:'hack-2', event:'TODO Hackathon', year:'2025', project:'TODO — describe what you built',
    result:'Winner', note:'TODO: one-line description of the project and outcome.' },
  { id:'hack-3', event:'TODO Hackathon', year:'2025', project:'TODO — describe what you built',
    result:'Finalist', note:'TODO: one-line description of the project and outcome.' },
  { id:'hack-4', event:'TODO Hackathon', year:'2024', project:'TODO — describe what you built',
    result:'Top 10', note:'TODO: one-line description of the project and outcome.' },
]
```

Three of four entries are unresolved TODO placeholders carried from the incumbent data. Reproduce them verbatim unless the user supplies real events.

### 8.7 `data/skills.ts`

```ts
skillGroups = [
  { label:'AI / ML', category:'ai', items:[
    {name:'PyTorch',level:'3 yrs'}, {name:'LLM Fine-tuning',level:'2 yrs'},
    {name:'QLoRA / PEFT',level:'2 yrs'}, {name:'Classification & Regression',level:'3 yrs'},
    {name:'LangChain',level:'2 yrs'}, {name:'LangGraph',level:'2 yrs'},
    {name:'Model Pruning',level:'1 yr'}, {name:'Vector Databases (Qdrant)',level:'1 yr'} ]},
  { label:'Software Engineering', category:'swe', items:[
    {name:'Python',level:'4 yrs'}, {name:'JavaScript / TypeScript',level:'3 yrs'},
    {name:'Go',level:'1 yr'}, {name:'C / C++ / Java',level:'3 yrs'},
    {name:'FastAPI',level:'2 yrs'}, {name:'Flask / Django',level:'2 yrs'},
    {name:'React / React Native',level:'2 yrs'}, {name:'ExpressJS',level:'1 yr'} ]},
  { label:'Tools / Infra', category:'tools', items:[
    {name:'AWS (EC2, S3, Route 53, CloudFront)',level:'2 yrs'}, {name:'Docker',level:'2 yrs'},
    {name:'Git / GitHub',level:'4 yrs'}, {name:'Linux',level:'3 yrs'},
    {name:'MySQL / MongoDB',level:'2 yrs'}, {name:'AI-Assisted Dev (Cursor, Claude Code)',level:'2 yrs'} ]},
];
orderedSkillGroups(role) // reorders by category: ai-first, swe-first, or original
```

### 8.8 Static copy not in `data/`

- Hero intro: "I build AI/ML and full-stack systems — from research papers to production. PyTorch, LLMs, FastAPI, React. I like turning ideas into things that actually run."
- Hero metadata: `Based: {location}` · `Focus: AI/ML & SWE` · `Open to: AI/ML & SWE roles`
- Section title lines: `Selected work.` / `Published research.` / `Built under pressure.` / `The tools behind the work.` / `The path so far.` / `I turn research into running systems.` / `Let's build something.`
- About paragraphs: "I'm a software engineer focused on AI/ML and full-stack development. I've worked on projects involving PyTorch, FastAPI, React, LangGraph, and LLM applications — including model fine-tuning, pruning, and tool calling. I also have experience in AI/ML research and deploying models in resource-constrained environments." / "I enjoy understanding problems deeply, experimenting with different approaches, and building solutions that are practical and actually usable — not just demos that work on a slide."
- Currently exploring: "Agentic LLM systems, on-device model optimization, and the line between research and production ML."
- Case-study page labels: Problem / Approach / Stack / Architecture ("Architecture diagram placeholder") / Results.

---

## 9. Routes, metadata, assets

### `app/layout.tsx`
Loads the four fonts, applies their variables to `<html lang="en">`, sets `<body class="font-body antialiased">`, renders `{children}` then a `<script type="application/ld+json">` containing `site.jsonLd`. Metadata: title template `%s — {name}`, description, keywords, authors, creator, robots `index,follow`, OpenGraph `website` with `/og.png` 1200×630, Twitter `summary_large_image`.

> `/og.png` and `/resume.pdf` are referenced but are **not present** in `public/` in this checkout. Supply them before launch; do not invent substitutes.

### `app/sitemap.ts`
Routes: `''`, `/work`, and the six `/work/{slug}` pages. `lastModified: new Date()`, `changeFrequency: 'monthly'`, priority `1` for home and `0.7` for the rest.

### `app/robots.ts`
`userAgent: '*', allow: '/'`; sitemap `${site.url}/sitemap.xml`; host `site.url`.

### `/work`
Client page with its own `filter` state (same three options as RoleToggle) and the same two-column card grid. `main` has `pt-28 md:pt-36`.

### `/work/[slug]`
`dynamicParams = false`, `generateStaticParams()` from `projects`, `generateMetadata()` per project. Static case study: back link, category/year label, display title, tagline, external link pills, metrics band (`grid-cols-2 md:grid-cols-3`, `border-y`), 7/5 body grid (Problem/Approach | Stack/Architecture placeholder), Results list with accent dots, and a bottom back link.

### `public/`
- `favicon.png`
- `images/profile.png` — the only image rendered by the site, used in About.
- `images/profile_old.png`, `images/drai 1.png`, `images/medinsight 1.jpg`, `images/medinsight 2.jpg` — present but unused.

---

## 10. Reproduction order for a coding agent

1. Scaffold Next.js 13.5.1 App Router + TypeScript + Tailwind 3.3.3; add `framer-motion`, `lenis`, `lucide-react`, `clsx`, `tailwind-merge`.
2. Add `app/globals.css` and `tailwind.config.ts` exactly as in §5. Add the four `next/font/google` imports in `app/layout.tsx`; attach variables to `<html>`.
3. Create all seven files in `data/` with the content from §8. Everything downstream reads from these arrays — no hard-coded content in components except the static copy in §8.8.
4. Build primitives in this order: `lib/utils.ts` → `role-context.tsx` → `section.tsx` → `section-title.tsx` → `role-toggle.tsx` → `nav.tsx` → `footer.tsx` → `scroll-progress.tsx` → `smooth-scroll.tsx`.
5. Build content blocks: `hero.tsx` + `orbit-hero.tsx` → `marquee.tsx` → `project-card.tsx` + `work-section.tsx` → `numbers-strip.tsx` → `research-section.tsx` → `hackathons-section.tsx` → `skills-section.tsx` → `experience-section.tsx` → `about-section.tsx` → `contact-section.tsx`.
6. Compose `app/page.tsx` in the exact order shown in §3. Build `/work` and `/work/[slug]`.
7. Add `robots.ts`, `sitemap.ts`, metadata, `netlify.toml`, `next.config.js`.
8. Verify at 1440×900 and 390×844: hero grid splits at 768px, no horizontal scroll, accent appears once per viewport, every section carries its index label, all four type voices are present, reduced motion shows everything statically.
9. Run `npm run lint` and `npm run typecheck`.

---

## 11. Known defects in the current implementation — do not reproduce

1. **Hero display text is clipped on the right.** At 1440px the hero column is ~671px wide but the h1 font-size resolves to 158.4px, producing measured text widths of 889px ("Engineer."), 833px ("Researcher."), and 754px ("Builder."). The `overflow-hidden` reveal wrapper cuts 84–218px off the right edge, so the final letter of each word is truncated. Fix by sizing the display from the column, not the viewport — e.g. `text-[clamp(3rem,7.5vw,6rem)]` — and keeping each line `whitespace-nowrap`.

2. **Content is invisible until JavaScript hydrates.** Every motion element is server-rendered with `opacity: 0` or `translateY(110%)` inline; only Nav, Marquee, and Footer have no hidden initial state. On a cold first visit that means those three appear and the rest is blank until hydration; a refresh (warm cache) makes it look correct. Fix by shipping visible server markup — gate the hidden `initial` behind a mounted flag, as `orbit-hero.tsx` already does (`initial={mounted && !reduceMotion ? … : false}`) — and apply the same pattern in `hero.tsx`, `section-title.tsx`, `project-card.tsx`, and every section using `whileInView`.

3. **Unresolved data.** Scholar/ResearchGate URLs, three hackathon records, `/resume.pdf`, and `/og.png` are placeholders or missing. Do not fabricate them.

---

## 12. Do's and Don'ts

### Do
- **Do** use the exact seven CSS variables from §4.1; never introduce a new hex without adding a token.
- **Do** keep Archivo display uppercase at `-0.03em` tracking and `line-height: 0.9`.
- **Do** reserve Fraunces italic for one accent-coloured word per headline.
- **Do** use `.label` (12px mono, uppercase, `0.08em`) for every piece of metadata.
- **Do** separate structure with 1px `--line` borders and alternating paper tones.
- **Do** use `cubic-bezier(0.22, 1, 0.36, 1)` for every transition.
- **Do** read all content from `data/` so the role toggle can filter it.
- **Do** respect `prefers-reduced-motion` in both CSS and Framer Motion.

### Don't
- **Don't** add shadows, gradient text, glass cards, or large corner radii.
- **Don't** use more than one accent-orange element per viewport.
- **Don't** use Unicode/emoji icons; use Lucide at a consistent 2–2.5 stroke.
- **Don't** use a second display face or a system font as the display voice.
- **Don't** hard-code content in components when a `data/` array exists.
- **Don't** invent project URLs, paper titles, statistics, or social links beyond the supplied values.
- **Don't** introduce a second breakpoint; the system is single-column below 768px and 12-column above.
