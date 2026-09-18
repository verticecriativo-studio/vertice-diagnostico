# Vértice Design System — build conventions

This is the design system behind Vértice Criativo's "Diagnóstico de Marketing" survey: a warm, editorial, single-question-per-screen flow (hero → progress rail → question cards → dark contact card → done screen). Every component below is real, shipped React — build with these, don't recreate their markup by hand.

## Setup

No provider or theme wrapper is required — there is no `ThemeProvider`/context. Just import the stylesheet once at the app root:

```jsx
import 'vertice-design-system/styles.css';
```

That single import carries the two brand fonts (`@font-face`), the color/radius tokens, and every component's CSS. Nothing else to wire up.

## Styling idiom: prefixed utility classes + CSS custom-property tokens

Components style themselves internally (`vds-btn`, `vds-card`, `vds-opt`, …) — you should almost never write those classes yourself, just compose the exported components and pass their variant/tone props. For your OWN layout glue (page wrappers, spacing between sections), reach for the token custom properties rather than hard-coded hex/px:

| Token | Value | Use for |
|---|---|---|
| `--vds-paper` | `#FEFEFE` | Page background |
| `--vds-ink` | `#080525` | Primary text |
| `--vds-ink-soft` | `#5A5570` | Secondary/muted text |
| `--vds-forest` / `--vds-forest-deep` | `#143869` / `#080525` | Dark surfaces (contact card, footer, draft bar) |
| `--vds-rust` / `--vds-rust-deep` | `#D8604E` / `#BA4537` | Primary accent (hero gradient, selected states, CTA) |
| `--vds-line` | `#E2DEE8` | Borders |
| `--vds-radius` | `18px` | Card/input corner radius |
| `--vds-font-display` | `'Plus Jakarta Sans', sans-serif` | Headings, labels, buttons' surrounding UI text |
| `--vds-font-body` | `'Quicksand', sans-serif` | Body copy, inputs, paragraphs |

Two-family type system: **Plus Jakarta Sans** (weight 500–800) for all-caps eyebrows/labels and headings; **Quicksand** (weight 400–700) for body text, questions, and form controls. Never substitute a third family.

## Components (20, grouped by role)

- **Brand**: `Logo` (icon + wordmark lockup, real artwork), `LogoMark` (icon alone, for compact slots like a footer).
- **Layout shells**: `Hero` (+ `HeroStat` children), `Card` (numbered question container), `ContactCard` (dark final-step container), `Footer`, `DraftBar`.
- **Question content**: `QuestionLabel`, `QuestionTitle`, `ErrorMessage`.
- **Inputs**: `RadioGroup` (composes `RadioOption`), `TextField`, `TextArea`, `CheckboxRow`.
- **Actions/navigation**: `Button` (`variant="primary"|"ghost"`, `tone="forest"|"rust"`), `NavRow` (back/next slot layout).
- **Progress & trust**: `ProgressRail`, `PerkList`, `DoneScreen`, `EyebrowBadge`.

**Dark-surface components carry their own background** (`Hero`, `ContactCard`, `Footer`, `DraftBar`) — drop them straight into a light page. Components that render light-on-dark text WITHOUT their own background (`PerkList`, and `TextField`/`ErrorMessage`/`CheckboxRow` with `tone="dark"`) must be composed inside one of those dark shells, never directly on `--vds-paper`.

A typical step looks like:

```jsx
import { Card, QuestionLabel, QuestionTitle, RadioGroup, NavRow, Button } from 'vertice-design-system';

function Step({ value, onChange }) {
  return (
    <Card index="03 / DIAGNÓSTICO">
      <QuestionLabel>Investimento</QuestionLabel>
      <QuestionTitle>Quanto sua empresa investiria por mês?</QuestionTitle>
      <RadioGroup
        name="q5"
        value={value}
        onChange={onChange}
        options={[
          { value: 'ate-500', label: 'Até R$500' },
          { value: '500-1500', label: 'R$500 a R$1.500' },
        ]}
      />
      <NavRow
        back={<Button variant="ghost">Voltar</Button>}
        next={<Button variant="primary">Continuar</Button>}
      />
    </Card>
  );
}
```

## Brand mark

`Logo`/`LogoMark` render the real Vértice Criativo logo (sourced from the team's Canva brand folder), not a placeholder. Both take `tone="light"|"dark"` — pick `dark` (white wordmark) on the Hero's rust background, `ContactCard`, `Footer`, or `DraftBar`; `light` (navy wordmark) everywhere else. Never recolor or redraw the mark — always render it via these components.

## Where the truth lives

Read `styles.css` (and its `@import`ed `_ds_bundle.css`) for the exact compiled CSS before writing anything that must match pixel-for-pixel. Each component's own `.d.ts` is its full prop contract — `Button`, `TextField`, `CheckboxRow`, and `RadioOption` all extend the matching native HTML element's attributes, so standard DOM props (`onClick`, `placeholder`, `disabled`, …) pass straight through.
