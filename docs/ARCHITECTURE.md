# How AFF notes is built (start here)

One page to understand the whole project. People and AI agents should read this before exploring the code: it
answers most "where is / how does" questions without opening files.

## The idea in one paragraph
A static, offline-capable web app (PWA) that teaches AFF skydiving students everything from the plane door to the
landing, in the order it happens, with drawings, real clips and a test after each chapter, in 32 languages.
No server and no database: the whole course is typed data compiled into the site. Mission: help people learn to
skydive safely and reduce injuries and deaths ([README](../README.md)).

## Stack
| Layer | What | Why |
|---|---|---|
| UI | React 19, TypeScript (TS 7, native `tsc`) | typed content catches a missing translation at build time |
| Build / dev server | Vite 8 (Rolldown) + `@vitejs/plugin-react` | fast dev, small static build |
| Offline | `vite-plugin-pwa` (service worker, install prompt; languages load on demand) | works at the dropzone without signal |
| Tests | Vitest 5 (content, translations, units, language detection) | runs in ~0.2 s, in the pre-commit hook |
| Screen tests | Playwright (7 languages, phone + desktop, light + dark) | catches layout breaks CI can't see in code |
| Lint / format | Oxlint (type-aware, React, hooks, a11y) + Prettier | Rust-fast; works with TS 7 |
| Git hooks | Husky + lint-staged | format + i18n + tests before every commit |
| CI | GitHub Actions (`.github/workflows/ci.yml`) | typecheck, lint, i18n, format, tests, build, size budget, screens |
| Deps | Dependabot | weekly update PRs |
| Hosting | Vercel (auto-deploys `main`), strict security headers in `vercel.json` | free, CDN, previews |
Only two runtime dependencies: `react`, `react-dom`. No router, no state library, no CSS framework, no backend.
TanStack (Router/Start for per-language pages) is evaluated in [TOOLING.md](TOOLING.md).

## Folder map
```
src/
  main.tsx            entry: theme, PWA, <App/>
  App.tsx             page: header (language + ⋯ menu), parts, chapters, final check, about, feedback bubble
  content/            THE COURSE as typed data
    types.ts          Block union, L = {en,es,uk,ru}, ALL_LANGS (32), RTL
    part1–4.ts        Plane, Freefall, Under canopy, When it goes wrong
    dropzone.ts       Your dropzone (the only school-specific part)
    i18n/             key.ts (hash of the English text) + <lang>.json for the 28 other languages + en.json (generated)
  components/         Blocks (renders every block type), Quiz, Player (YouTube), Hero, SkyRail, FinalCheck,
                      Author (mission, feedback), Settings (language menu, ⋯ menu: units + theme), Offline …
  widgets.tsx, widgets/  interactive drawings: exit count, altimeter, landing pattern, rig, canopy check …
  i18n.tsx            language context, t(), browser/link language, number formats, RTL, rich text tags
  units.ts            ft / ft+m / m: one formatter for every altitude, default by language/region
  ui.ts               interface words · styles.css: design tokens (--s1…--s10), components, dark mode
public/media/         133 clips + photos (480 px, silent, H.264); each credited + linked in content
scripts/              i18n-extract / i18n-todo (translation workflow), size-check, icons, check-embeds, merge-contacts
tests/  e2e/          Vitest unit/content tests · Playwright screen tests
docs/                 PLAN (owner's plan), research/, i18n/ (glossaries, units & rules), outreach/, review/, TOOLING
.claude/agents/       review agents: expert fact-check, fixer, page guard, curriculum
AGENTS.md CLAUDE.md   rules for any AI agent / for agents working for the owner
```

## How content and languages work
- A chapter is a list of typed blocks (`steps`, `rules`, `cards`, `quiz`, `clip`, `widget`…) in `src/content/part*.ts`.
  Every visible string is an `L`: `{ en, es, uk, ru }` inline. Inline tags only: `<b>`, `<a href>`, `<q-check/>`.
- 28 more languages live in `src/content/i18n/<lang>.json`, keyed by a hash of the English text. `npm run i18n`
  regenerates `en.json`; `npm run i18n:todo` lists what each language still needs. Tests fail if any language misses a
  key or changes a tag or a number. Each language has a glossary of its federation's terms (`docs/i18n/glossary-*.md`).
- Language comes from `?lang=` in the link → saved choice → browser languages. Units: `?units=` → saved → language /
  region default (metric-training countries → m, feet federations → ft, others → ft + m). Metres are always "≈"
  conversions until school-rules profiles land (see `docs/i18n/DEEP-LOCALIZATION.md`).

## Everyday commands
`npm run dev` · `npm run check` (everything CI checks) · `npm run build` · `npm run e2e` · `npm run i18n` ·
`npm run i18n:todo` · `npm run size`. Details: [CONTRIBUTING.md](../CONTRIBUTING.md).

## How it ships
1. Work on a branch (agents: their own git worktree), small commits.
2. Pre-commit hook: Prettier on staged files, `en.json` freshness, tests.
3. Push / PR → CI (about a minute) must be green; Playwright screenshots are uploaded as an artifact.
4. Merge to `main` → Vercel builds and deploys https://aff-notes.vercel.app automatically.
License: MIT (code), CC BY-SA 4.0 (notes, translations, drawings); clips belong to their creators.

## How the content stays true (the process behind it)
- Every fact has a source (USPA SIM/ISP, federation manuals, papers in `docs/research/`); unsure → `<q-check/>` + a
  question for instructors. Reviews by agents in `.claude/agents/` (expert fact-check per part → fixer → page guard →
  curriculum), logs in `docs/review/`.
- Outside AI research is saved unverified and checked row by row (`docs/outreach/raw/ext_*`).
- The owner's plan and inbox: `docs/PLAN.md` (every ask, status, redo lines).
- Which agent tools and skills built the project: [AGENT-TOOLS.md](AGENT-TOOLS.md).

## Lessons that save time (and tokens)
- Read this page, `AGENTS.md` and the relevant `docs/` file before opening code; most answers are here.
- Change English text only when needed: each change re-keys the string in 28 files.
- Keep numbers out of prose where a widget or formatter can render them (units, future school rules).
- Run `npm run check` locally: it is exactly what CI runs.
