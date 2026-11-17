# AFF notes

Study app for AFF skydiving students: from the plane to the landing, emergencies, real footage, a test after each
chapter. 32 languages. Live at [aff-notes.vercel.app](https://aff-notes.vercel.app). Study help only: your
instructors' briefing always wins.

    npm install
    npm run dev      # http://localhost:5173
    npm run check    # types, lint, translations, formatting, tests (same as CI)
    npm run build    # dist/ (+ dist/artifact.html for the claude.ai artifact host)

Content lives in `src/content/part*.ts` as typed data with English, Spanish, Ukrainian and Russian side by side; the
other 28 languages are in `src/content/i18n/<lang>.json`. Clips in `public/media` are short excerpts from other
people's YouTube videos, each credited and linked; they are third-party content.

Want to fix a translation or a fact? See [CONTRIBUTING.md](CONTRIBUTING.md). Plan and status: `docs/PLAN.md`.

## License

Code: [MIT](LICENSE). Written notes, translations and drawings: [CC BY-SA 4.0](LICENSE-CONTENT). The video clips in
`public/media` belong to their creators (each is credited and linked in the app) and are not covered by either license.
