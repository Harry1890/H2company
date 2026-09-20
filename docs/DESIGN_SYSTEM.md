# Design System

## Typography

- Primary: Geist Sans (`geist/font/sans`)
- Technical/metadata: Geist Mono (`geist/font/mono`)

```text
Hero    clamp(2.75rem, 6vw, 5.5rem)     /* 64–88px */
H1      clamp(2.25rem, 4.5vw, 4rem)     /* 56–64px */
H2      clamp(1.75rem, 3.5vw, 3.25rem)  /* 44–52px */
H3      clamp(1.375rem, 2vw, 2rem)      /* 26–32px */
Body    1.0625rem–1.125rem              /* 17–18px */
Meta    0.75rem–0.875rem                /* 12–14px */
```

Tight, slightly negative letter-spacing on display sizes; normal on body.
Mono used only for labels, tags, code, and technical metadata — never body copy.

## Layout

- 12-column grid, `max-width: 1360px`, centered, `padding-inline: clamp(1.25rem, 4vw, 4rem)`.
- Vertical rhythm: section padding `clamp(4rem, 8vw, 8rem)` top/bottom.
- Asymmetrical splits (e.g. 5/7 or 4/8 column) for editorial sections instead
  of centered/symmetric blocks everywhere.
- Thin 1px borders (`rgba(255,255,255,0.10)`) as the primary structural
  device instead of cards/shadows.

## Color Tokens (Tailwind 4 `@theme`)

```css
--color-background:        #07090D;
--color-surface:            #0C1017;
--color-surface-elevated:   #111722;
--color-text-primary:       #F4F6F8;
--color-text-secondary:     #A7AFBC;
--color-border:              rgba(255, 255, 255, 0.10);

--color-accent-indigo:      #7067FF;
--color-accent-blue:        #4F8CFF;
--color-accent-cyan:        #48D7E8;
```

Accent colors are used for: active states, the architecture visual's data
flow, focus rings, and small highlight details — never as full-section
backgrounds or gradients. One off-white/light editorial section (company or
case-study pull-quote treatment) provides contrast against the otherwise dark
theme.

## Motion

Implemented with Motion (Framer Motion), scoped and purposeful:

- Header: background/blur fade-in after ~30px scroll.
- Architecture visual: node activation + path draw, looping slowly, pausable.
- Section reveal: small opacity/translate-y (8–12px) on scroll into view.
- Job/capability rows: 2px title shift + border color change on hover.
- Arrow links: horizontal translate on hover.

All motion is wrapped to respect `prefers-reduced-motion: reduce` (either
disabled entirely or reduced to opacity-only fades).

## Anti-Patterns (explicitly avoided)

Generic SaaS layouts, giant rounded cards, glassmorphism, gradients-on-every-
section, glowing blobs, stock photography, robot/brain graphics, fake
dashboards/testimonials/logos/metrics, and repeated 3-column icon grids.
