# AFF notes: working rules

@AGENTS.md

The rules above apply to every agent. Below: how agents working **for the owner** run the project. Plan and
status: `docs/PLAN.md`.

- **Every ask is tracked.** Each thing the owner asks for (in any message, even mid-task or by voice) gets a line in
  the inbox at the top of `docs/PLAN.md` before work starts, and is closed only when done and seen on screen (with the
  commit) or dropped by the owner. Before ending a turn, check the inbox against the owner's last messages.
- **Every message is split first.** Before acting on an owner message, break it into tasks, subtasks and questions,
  write each as a line in the inbox (questions also under "Waiting on you"), then work; the reply names which lines
  were added and which are done.

Research: `docs/research/`. Content brief: `docs/content-brief.md`.

- **Public repo** (owner's decision 2026-11-17): github.com/vekaev/aff-notes is public, including `docs/outreach`
  (the owner chose to publish the contact research as is). The site is public at aff-notes.vercel.app (auto-deploys on
  push). Clips in `public/media` are cut from other people's YouTube videos; the owner has asked the creators (not a
  clearance: don't call them cleared). Keep every clip, its credit and its link; never remove or replace clips
  without the owner. Never commit secrets or the owner's private data (that lives in ~/me).
- **Content** lives in `src/content/part*.ts` + `dropzone.ts` as typed data; every string is `{ en, es, uk, ru }` (languages listed in `LANGS` in `types.ts`).
  Interface words in `src/ui.ts`. Inline tags allowed: `<b>`, `<a href>`, `<q-check/>`. No emoji in content.
- **School rules** (`src/content/rules/index.ts`, `src/rules.ts`, design in `docs/i18n/DEEP-LOCALIZATION.md`): a rule
  number in English text gets a mark right after it (`5,500 ft{pull}`); exit, lock-on, pull, decision and hard-deck
  altitudes must carry one (`{~}` if it must stay USPA's, e.g. the dropzone chapter). A profile value needs a source;
  no source → leave it out (USPA + check shows). Unofficial values get `check: true`.
- **Facts**: never change a number or procedure without a source (USPA SIM / ISP, the dropzone, the research
  notes). Unsure → `<q-check/>` and a line in the "ask the instructors" chapter. The instructors' briefing wins.
- **Checks before every commit**: `npm run check` and `npm run build` (see AGENTS.md). Then look at the changed
  chapters in the browser (`npx vite --port 5193`), light and dark, desktop and 375 px, in EN, ES, UK and RU plus one
  JSON language and one right-to-left language.
- **Design**: Stoic-like (`~/agent-tools/skills/bootstrap/references/design-taste.md`): paper, ink, bold lowercase
  headlines with a period, black pills; colour only for content and part tints. Tokens in `src/styles.css`.
- Clips: cut with ffmpeg to 480 px, silent, H.264, `+faststart`, into `public/media/<name>.mp4`; credit + YouTube id
  + start second in the content entry.
