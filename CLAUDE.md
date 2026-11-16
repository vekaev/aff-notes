# AFF notes: working rules

Personal study app for AFF skydiving (Vite + React + TypeScript). Plan and status: `docs/PLAN.md`.

- **Every ask is tracked.** Each thing the owner asks for (in any message, even mid-task or by voice) gets a line in
  the inbox at the top of `docs/PLAN.md` before work starts, and is closed only when done and seen on screen (with the
  commit) or dropped by the owner. Before ending a turn, check the inbox against the owner's last messages.
- **Every message is split first.** Before acting on an owner message, break it into tasks, subtasks and questions,
  write each as a line in the inbox (questions also under "Waiting on you"), then work; the reply names which lines
  were added and which are done.

Research: `docs/research/`. Content brief: `docs/content-brief.md`.

- **Private repo only.** Remote: github.com/vekaev/aff-notes (**private**). Push commits there; never make it public,
  never publish the app (artifact, Vercel or anywhere): `public/media` holds clips cut from other people's YouTube
  videos, fine for personal use only. The owner decides later about a public version.
- **Content** lives in `src/content/part*.ts` + `dropzone.ts` as typed data; every string is `{ en, es, uk, ru }` (languages listed in `LANGS` in `types.ts`).
  Interface words in `src/ui.ts`. Inline tags allowed: `<b>`, `<a href>`, `<q-check/>`. No emoji in content.
- **Facts**: never change a number or procedure without a source (USPA SIM / ISP, the dropzone, the research
  notes). Unsure → `<q-check/>` and a line in the "ask the instructors" chapter. The instructors' briefing wins.
- **Checks before every commit**: `npm run check` (types + content tests) and `npx vite build`. Then look at the
  changed chapters in the browser (`npx vite --port 5193`), light and dark, desktop and 375 px, in EN, ES, UK and RU.
- **Design**: Stoic-like (`~/agent-tools/skills/bootstrap/references/design-taste.md`): paper, ink, bold lowercase
  headlines with a period, black pills; colour only for content and part tints. Tokens in `src/styles.css`.
- Clips: cut with ffmpeg to 480 px, silent, H.264, `+faststart`, into `public/media/<name>.mp4`; credit + YouTube id
  + start second in the content entry.
