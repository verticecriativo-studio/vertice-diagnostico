# Design-sync notes

## Origin of this design system

The repo had no component library — only a single static `index.html` (the Diagnóstico de Marketing survey page, embedded base64 fonts and all). At the user's request this sync **built** `design-system/` from scratch as a real React/TypeScript component library that ports that page's visual language 1:1 (colors, both fonts as real `.woff2` files, all 20 UI patterns: Hero, Card, RadioGroup, ContactCard, etc.). It is not a reimplementation of an existing DS — it *is* the DS now; `index.html` itself was left untouched.

## Build

- `pkg`: `vertice-design-system`, built with `tsup` (`design-system/npm run build` → `dist/index.js` + `dist/index.d.ts` + `dist/styles.css` + `dist/fonts/`).
- No Storybook — package shape. No monorepo, no workspace deps.
- `cfg.overrides.TextArea` / `TextField`: `cardMode: "column"` — both flagged `[GRID_OVERFLOW]` as full-width inputs; fixed via targeted `preview-rebuild.mjs`.
- Playwright version pin: the pre-installed chromium cache in this environment is build **1194**, which matches **playwright@1.56.0** (not latest — latest pins build 1243 and fails to launch). If re-syncing in a fresh environment, re-check `~/.cache/ms-playwright/` or `$PLAYWRIGHT_BROWSERS_PATH` against `node_modules/playwright-core/browsers.json` before assuming latest is fine.

## Preview scope

All 20 components were authored and graded `good` (none left on the floor card) — the component count is small enough that "author everything" was the obvious choice.

## Re-sync risks

- **Design language is the source of truth.** If `index.html` is redesigned later, `design-system/src/styles.css` and the component `.tsx` files need to be manually re-ported — nothing here re-derives from the HTML automatically.
- Fonts were extracted once from `index.html`'s base64 `@font-face` blocks via a one-off script (not preserved in the repo) — if the brand fonts ever change, re-extract or source real `.woff2`/`.ttf` files directly.
- `.design-sync/conventions.md` is hand-authored; if new components are added to `design-system/`, re-validate the header's claims (class/token names) against the fresh build per the base skill's "Author the conventions header" step.

## Upload status

**Not yet uploaded** — this session is headless (`claude.ai/code`) and `DesignSync` reported it needs design-system authorization that can't be granted non-interactively. The user must either run `/design-login` from an interactive Claude Code session on this machine, or use Claude Design's "Send to Claude Code Web" from claude.ai/design. Once authorized, a re-sync should find `ds-bundle/` already built/validated/graded (re-run `resync.mjs` to regenerate it fresh) and can go straight to `DesignSync(create_project)` → `finalize_plan` → upload.
