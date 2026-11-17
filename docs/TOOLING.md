# Tooling: what this app uses, what it doesn't, and why

Written 2026-11-17. The app: a static, multilingual (32 languages) PWA study guide for AFF students, one scrolling
page, no server, no accounts, used at dropzones with weak signal, now public and open to contributors.
So the questions are: will contributors break something without noticing, is the first load and offline install
small, can people share and find a page in their language.

Measured on today's build: main JS 240 KB gzip (app + all content + the 4 inline languages), each extra language
40–50 KB gzip, offline install (service-worker precache) 4.9 MB, of which **3.2 MB are the 28 extra languages**.
Clips (17 MB) are cached only when played.

## Adopted (on main)

| Tool | What it gives here | Cost / risk |
| --- | --- | --- |
| **Oxlint** + oxlint-tsgolint (`.oxlintrc.json`) | React, hooks, jsx-a11y, TypeScript, unicorn, import, vitest rules; type-aware rules that run on TypeScript 7. Whole repo in under 1 s. | Low. Rules relaxed with a reason each; a11y warnings to fix in the format pass. |
| **Prettier** (`.prettierrc.json`, `.editorconfig`) | One format for every contributor. | App code not reformatted yet (other branch edits it): one-time pass planned. |
| **Husky + lint-staged** | Pre-commit: format + lint staged files, types, en.json check, all tests (~2 s). | Low. `--no-verify` exists; CI repeats everything. |
| **Translation checks** (`npm run i18n:check`, `i18n:todo`) | en.json can't go stale; every language has every key, same tags and numbers. | None. |
| **GitHub Actions CI** | Types, lint, translations, formatting, tests, build, size budget, screen tests, screenshots as an artifact. | ~1–2 min per push. |
| **Size budget** (`npm run size`, `scripts/size-check.mjs`) | Fails CI if main JS > 300 KB gzip, a language > 70 KB, CSS > 20 KB, offline install > 6 MB. | None. Raise a limit on purpose in the same PR. |
| **Playwright screen tests** (`npm run e2e`, `e2e/smoke.spec.ts`) | On the real build: 7 languages (en es uk ru de ar ja) × phone/desktop × light/dark. Checks right language and direction, headline translated, no "undefined"/NaN, no sideways scroll, no console errors; saves a screenshot of each. | ~10 s locally; CI downloads Chromium (~30 s). |
| **Dependabot** | Monthly grouped updates for npm and GitHub Actions. | PRs to merge; CI tells if they're safe. |
| CONTRIBUTING, Code of Conduct, issue forms, PR template | How to fix a translation or a fact without reading code. | None. |

## Considered, not adopted

| Tool | What it would give | Why not (now) |
| --- | --- | --- |
| ESLint + typescript-eslint | The classic setup. | typescript-eslint needs TypeScript < 6.1; the TS 7 package has no JS API, ESLint crashes on it. |
| Biome | Lint + format in one fast tool. | Its type checks are its own inference, not TS 7 itself; Oxlint is the linter Vite+ ships. A fine choice too, just not both. |
| Oxfmt (instead of Prettier) | Faster Prettier-compatible formatter, part of Vite+. | Still 0.x. It aims at Prettier-compatible output; swap when it reaches 1.0. |
| **Vite+** (`vp`, MIT, 1.x) | One CLI over Vite, Vitest, Oxlint, Oxfmt, Rolldown; cached task runner. | We already use the same tools underneath. 1.7 is a day old and moving fast; contributors know `npm run`. Revisit with Oxfmt. |
| Rolldown / Oxc | Faster bundling and transforms. | Already in: Vite 8 bundles with Rolldown. Nothing to do. |
| Vitest browser mode | Component tests in a real browser. | Our risk is whole pages in many languages, which Playwright on the build covers. Add later if components get complex logic. |
| Visual snapshot diffs (Playwright `toHaveScreenshot`) | Pixel-exact regression check. | Fonts differ between macOS and Linux CI, so baselines are flaky; screenshots are uploaded for people to look at instead. |
| Bundle analyzer (vite-bundle-analyzer, rollup-plugin-visualizer) | Treemap of what's in the bundle. | One-off use is enough: `npx vite-bundle-analyzer`. The size budget guards the numbers. |
| i18next / Lingui / Paraglide | Standard i18n libraries. | The typed `{en, es, uk, ru}` content (missing translation = type error) plus hashed JSON catalogues already does what they would, with checks. No gain for the migration. |
| TanStack **Query** | Server-data caching and refetching. | No server data: content is bundled, translations are static JSON loaded once, progress is in localStorage. |
| TanStack **Form** | Typed forms with validation. | No forms (feedback is a mail link, tests are click-to-answer). |
| TanStack **Store** | Small reactive store. | State is a language/units context and localStorage; React state is enough. |
| TanStack **Virtual / Table** | Long lists, data tables. | Longest list is the 32-language menu. |
| TanStack devtools | Inspect router/query state. | Only useful with Router/Query. |

## Proposals for the owner (bigger changes, not started)

Details and steps are in `docs/PLAN.md` under "Owner decides later".

1. **Real URLs and pre-rendered pages per language** (`/fr/`, `/de/`, …). Today the language is `?lang=fr` and the
   page is built in the browser, so search engines and link previews see English only. Two ways:
   - *Light (recommended first):* a build step renders the page once per language with React's server renderer into
     `dist/<lang>/index.html` (translated title, description, `hreflang` links, sitemap); the app reads the language
     from the path; `?lang=` links (used in outreach emails) keep working and redirect. No router, ~1 day, touches
     `main.tsx`, `i18n.tsx`, `vite.config.ts`, `vercel.json`.
   - *Full:* **TanStack Router + Start** with static prerendering: type-safe routes, per-chapter pages
     (`/fr/emergencies/cutaway`) and a natural place for more pages later. Several days, rewrites the app shell and
     how chapters are found (today `#anchors` on one page); worth it only if the app grows beyond one page.
2. **Smaller offline install**: stop pre-downloading all 28 extra languages (3.2 of 4.9 MB). Precache the app and the
   reader's language, cache other languages when picked. Trade-off: switching to a never-used language offline shows
   English. Config-only change in `vite.config.ts`.
3. **Translation platform** (Weblate, free for open source): native speakers fix translations in a web page,
   Weblate opens pull requests to the JSON files, CI checks tags and numbers. Good once outside translators show up.
