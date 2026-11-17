# AGENTS.md: rules for AI agents and LLMs working on AFF notes

Read this before changing anything, whatever tool you are (Claude Code, Codex, Cursor, Copilot, Gemini, Aider…).
Humans: the same rules are in [CONTRIBUTING.md](CONTRIBUTING.md) with more detail.

## What this is
A free study guide for AFF (Accelerated Freefall) skydiving students: everything from the plane door to the landing,
emergency procedures, the landing pattern, hand signals, real footage and a test after each chapter, in 32 languages.
**Mission:** help people learn to skydive safely and reduce injuries and deaths. A wrong number here can hurt someone,
so accuracy beats speed, style and completeness.

## Safety and facts (the most important rules)
- **Never invent, change or "improve" a number, altitude, procedure or order of actions without a source** (USPA SIM /
  ISP, the federation's manual, the manufacturer, the papers in `docs/research/`). Cite it in the commit message.
- Unsure, disputed or school-specific → mark it with `<q-check/>` ("check with your instructor") and add a question to
  the "ask the instructors" chapter. The student's instructors always win over this app; say so, never contradict it.
- Emergency procedures keep their exact order in every language. Do not merge, shorten or reorder steps.
- Metres are never silent conversions of USPA feet: units go through `src/units.ts` (marked "≈"); real metric numbers
  come from a federation's own document (`docs/i18n/DEEP-LOCALIZATION.md`, `docs/i18n/units-and-rules.md`).
- Don't present AI output (yours or another tool's) as fact. Research from other AI tools is saved as
  `*.unverified.*` and checked against its source before use.

## How the code is organised
- Vite + React 19 + TypeScript (TS 7 native compiler), Vitest, Playwright, Oxlint, Prettier, Husky + lint-staged.
- Content is typed data in `src/content/part*.ts` + `dropzone.ts`; interface words in `src/ui.ts`. Inline tags allowed:
  `<b>`, `<a href>`, `<q-check/>`. No emoji in content.
- **Languages:** English, Spanish, Ukrainian and Russian are inline in the content (`{ en, es, uk, ru }`); the other 28
  live in `src/content/i18n/<lang>.json`, keyed by a hash of the English sentence. Changing English text changes its
  key: run `npm run i18n`, then translate the new key in every JSON file (`npm run i18n:todo`). Never machine-translate
  safety text without the language's glossary (`docs/i18n/glossary-<lang>.md`) and a back-check (`docs/i18n/TRANSLATE.md`).
- Every translation keeps the same tags and the same numbers as English (tests enforce it).
- Clips in `public/media` are cut from other people's YouTube videos; the owner has asked the creators. Keep every
  clip, its credit and its link; never remove, replace or add clips without the owner.
- Design: monochrome ink on paper, bold headlines ending with a period, black pills, lots of air. Use the tokens in
  `src/styles.css` (spacing `--s1…--s10`); no raw colours or sizes.

## Before you commit
1. `npm run check` (types, lint, translations, formatting, tests) and `npm run build` must pass. The pre-commit hook
   and CI run them too; never skip them (`--no-verify`).
2. For any visible change: `npm run e2e`, and look at the changed screens yourself at 375 px and desktop, light and
   dark, in English plus at least one other language and one right-to-left language (Arabic or Hebrew).
3. Small, focused commits with a clear message saying what changed and the source of any fact.
4. Pull requests: say if AI helped and what you verified by hand.

## Never
- Commit secrets, personal data, or anything from the owner's private files.
- Send emails, post anywhere or contact anyone listed in `docs/outreach/` (public contacts collected for the owner's
  outreach; the owner sends, not agents).
- Delete content, tests, translations or clips to make a check pass.

## Project memory
- Plan and status: `docs/PLAN.md` (the owner's inbox; agents working for the owner follow `CLAUDE.md`).
- Specialist agent prompts used for reviews: `.claude/agents/` (expert fact-check, fixer, page guard, curriculum).
- Tooling decisions: `docs/TOOLING.md`.
- **All research lives in the repo**, never only in a chat or a temp folder: deep-research reports and their notes in
  `docs/research/` (`docs/research/notes/<title>/`), units and federation rules in `docs/i18n/`, contacts and every other
  AI tool's result in `docs/outreach/raw/` (`ext_<tool>_*`, unverified until checked), the prompts in
  `docs/outreach/deep-research-prompt*.md`. Save new research there and commit it.
