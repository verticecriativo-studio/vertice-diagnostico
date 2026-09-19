# Design-sync notes

## Origin of this design system

The repo had no component library — only a single static `index.html` (the Diagnóstico de Marketing survey page, embedded base64 fonts and all). At the user's request this sync **built** `design-system/` from scratch as a real React/TypeScript component library that ports that page's visual language 1:1 (colors, both fonts as real `.woff2` files, all 20 UI patterns: Hero, Card, RadioGroup, ContactCard, etc.). It is not a reimplementation of an existing DS — it *is* the DS now; `index.html` itself was left untouched.

## Language

At the user's request, all component JSDoc comments, the `styles.css` header comment, and `.design-sync/conventions.md` were translated to Portuguese (the team's language and the product's own language). Code identifiers (component names, prop names, CSS class names) were deliberately **left in English** — that's the React/TS convention and mixing languages there would hurt maintainability more than it helps. Keep new component docs in Portuguese to stay consistent; keep new identifiers in English.

## Build

- `pkg`: `vertice-design-system`, built with `tsup` (`design-system/npm run build` → `dist/index.js` + `dist/index.d.ts` + `dist/styles.css` + `dist/fonts/`).
- No Storybook — package shape. No monorepo, no workspace deps.
- `cfg.overrides.TextArea` / `TextField`: `cardMode: "column"` — both flagged `[GRID_OVERFLOW]` as full-width inputs; fixed via targeted `preview-rebuild.mjs`.
- Playwright version pin: the pre-installed chromium cache in this environment is build **1194**, which matches **playwright@1.56.0** (not latest — latest pins build 1243 and fails to launch). If re-syncing in a fresh environment, re-check `~/.cache/ms-playwright/` or `$PLAYWRIGHT_BROWSERS_PATH` against `node_modules/playwright-core/browsers.json` before assuming latest is fine.

## Preview scope

All 35 components were authored and graded `good` (none left on the floor card) — the component count is small enough that "author everything" was the obvious choice.

## Templates expansion (page sections, Instagram posts, presentation slides)

At the user's request this sync grew from a 22-component survey-only kit into a 35-component system covering three more use cases, all based on real Vértice Criativo material read from Canva (not invented from scratch):

- **Page sections** (`StatementSection`, `SplitFeature`, `ServiceGrid`, `FounderBio`, `CTASection`, `ContactInfoGrid`, `SectionDivider`, `ProcessSteps`, plus `Hero`'s new `media` prop): patterns lifted from the "Vértice Criativo" one-pager site (`DAGtVSS42EY`) and the commercial-presentation deck (`DAG7WV89GkE`).
- **Instagram templates** (`SocialFrame`, `PostCover`, `StoryCover`): patterns lifted from the real carousel post (`DAG9p1CvuuM`) and the real Instagram Story design (`DAG90hewhGo`) in the team's own Canva folder. The user also pasted a screenshot of Canva's own template gallery as a style reference mid-task — confirmed it matches the `PostCover` pattern already built (full-bleed photo + gradient scrim + short headline + arrow CTA); didn't adopt the screenshot's serif/script fonts since those aren't in the real Vértice type system (Plus Jakarta Sans + Quicksand only).
- **Presentation slides**: no new components — they reuse the page-section primitives (`StatementSection`, `SectionDivider`, `ProcessSteps`) framed by `SocialFrame ratio="9:16"`, since the real decks are portrait-format and visually identical to the "statement"/"divider" page patterns.
- Two new text primitives (`TagPill`, `Highlight`) support both families — pill tags and colored-word emphasis inside headings, as seen throughout the real material.
- All photography in these components is **caller-supplied** (`image`/`media`/`photo` props) — nothing here ships an image. Previews use locally-generated inline-SVG placeholders (solid color + label text), never real client photos or unlicensed stock images, both for correctness (previews must render standalone, no network fetch) and because template components should be content-agnostic by design.

**Bugs found and fixed during preview authoring** (useful if similar patterns get added later):
- `.vds-section-divider-heading` inherited `color` from the `.vds-pattern-dots[data-tone=dark]` rule it shares an element with (that rule sets a very transparent rust for the dot pattern's `currentColor`) — the heading rendered almost invisible. Fixed by giving the heading its own explicit `color`. **Watch for this whenever a text element and a `currentColor`-driven background pattern share the same DOM node.**
- `SocialFrame`'s children used `width: 100%` inside a `display:flex` row with no `min-width: 0` — classic flexbox min-content-width bug, caused composed text to overflow and get clipped by `overflow: hidden` instead of wrapping. Fixed by adding `min-width: 0`.
- Several headings use `clamp(min, Nvw, max)` for responsive type. **`vw` resolves against the browser viewport, not the component's actual container** — inside a narrow `SocialFrame` (e.g. a 200px-wide story preview) these always rendered at the clamp's *max* size regardless of the frame being much narrower, overflowing badly. There's no full fix in place (would need CSS container queries — `container-type`/`cqw` — which weren't adopted to keep the CSS simple); the mitigation is `overflow-wrap: break-word` on the affected headings so an oversized word wraps (ugly mid-word break) instead of clipping/vanishing past the frame edge. **If `SocialFrame` gets heavy real-world use at very small preview sizes, revisit with container queries.**
- `StoryCover` originally used a `writing-mode: vertical-rl` rotated headline along the left edge (matching the real Instagram Story's aesthetic exactly) — abandoned after it visually collided with the top-right note text block in narrow frames (transform + vertical writing-mode sizing wasn't predictable enough to bound reliably). Replaced with a bottom-anchored horizontal heading (same pattern as `PostCover`) — less true to the specific reference image, but robust at any frame size. If someone wants the rotated-text look back, it needs real testing across frame sizes, not just the default preview size.

## Brand mark (Logo / LogoMark)

The real Vértice Criativo logo was pulled from the team's Canva account (folder "Vértice Criativo" → design "Vértice Criativo | Logo", `DAGn_mYqNhE`), not invented. How it got in:

- The Canva account connected to this session was initially the WRONG one (a different team's kit, "CTJ Baja") — the user had to disconnect/reconnect Canva to the right account before the "Vértice Criativo" folder became visible.
- The connected Canva account is on the **Free plan**, which blocks `export-design` entirely for this file (`Not allowed to access design` / transparent-PNG export also refused). Only the read-only thumbnail images from `read-design` (max ~447px) were available — that is the resolution ceiling for `Logo`/`LogoMark` today.
- Background removal was done locally (Python/Pillow + scipy connected-component flood-fill from the image border, so enclosed white/navy shapes inside the mark were preserved) — not a Canva feature.
- The horizontal lockup used by `Logo` (icon + wordmark side by side) is **assembled at render time from two separate cropped images** (`LogoMark`'s icon + a cropped wordmark strip), not a single exported horizontal asset — the only Canva pages actually reachable were a stacked (icon-above-text) composition, which reads illegibly at header-scale, so the component was written to force a horizontal layout out of the two raster pieces.
- All four images (icon ×2 tones, wordmark ×2 tones) are inlined as base64 `data:` URIs directly in `design-system/src/components/Logo.tsx` — no separate asset files, no build-time asset loader needed. This keeps the design-sync bundle self-contained but does mean the component's source file is large (~65KB) and not meant to be hand-edited.
- **Known quality ceiling**: at the ~40-43px source height the wordmark was rasterized at, the thin display font's counters (e.g. the hole in "O") partially lose definition. It's legible but not crisp. If the user's Canva plan is ever upgraded (or someone exports manually from the edit_url and hands over the file), re-run the same crop/background-removal pipeline against a higher-resolution export and replace the base64 constants in `Logo.tsx`.

## Re-sync risks

- **Design language is the source of truth.** If `index.html` is redesigned later, `design-system/src/styles.css` and the component `.tsx` files need to be manually re-ported — nothing here re-derives from the HTML automatically.
- Fonts were extracted once from `index.html`'s base64 `@font-face` blocks via a one-off script (not preserved in the repo) — if the brand fonts ever change, re-extract or source real `.woff2`/`.ttf` files directly.
- `.design-sync/conventions.md` is hand-authored; if new components are added to `design-system/`, re-validate the header's claims (class/token names) against the fresh build per the base skill's "Author the conventions header" step.
- The logo assets are a resolution ceiling, not a final source of truth — see "Brand mark" above before treating `Logo.tsx`'s embedded images as pixel-final.

## Upload status

**Not yet uploaded** — this session is headless (`claude.ai/code`) and `DesignSync` reported it needs design-system authorization that can't be granted non-interactively. The user must either run `/design-login` from an interactive Claude Code session on this machine, or use Claude Design's "Send to Claude Code Web" from claude.ai/design. Once authorized, a re-sync should find `ds-bundle/` already built/validated/graded (re-run `resync.mjs` to regenerate it fresh) and can go straight to `DesignSync(create_project)` → `finalize_plan` → upload.
