# Contributing to AFF notes

Thank you for helping. AFF notes is a free study app for AFF (Accelerated Freefall) skydiving students, live at
[aff-notes.vercel.app](https://aff-notes.vercel.app). It is safety content: a wrong number or a wrong word in an
emergency procedure can hurt someone, so accuracy comes before style, and every fact needs a source.

The most useful help:

1. **Translation fixes** from skydivers who speak the language (32 languages, most translated from English by AI and
   not yet checked by a native instructor).
2. **Fact checks** with a source (USPA SIM / ISP, your federation's manual, a dropzone document).
3. Bug reports with a screenshot.

You can open an [issue](https://github.com/vekaev/aff-notes/issues/new/choose) without touching code.

## Using an AI agent?

Claude Code, Codex, Cursor, Copilot, Gemini and similar tools read [AGENTS.md](AGENTS.md): facts need a source,
emergency steps keep their order, every language keeps the same tags and numbers, and the checks must pass. Say in
your pull request if AI helped and what you checked by hand.

## Set up

Node 22 or newer.

```bash
git clone https://github.com/vekaev/aff-notes.git
cd aff-notes
npm install        # also installs the pre-commit hook
npm run dev        # http://localhost:5173
```

| Command                    | What it does                                                                                                                                               |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run check`            | Everything CI checks: types, lint, translations, formatting, tests                                                                                         |
| `npm run build`            | Production build into `dist/`                                                                                                                              |
| `npm run lint`             | [Oxlint](https://oxc.rs) with React, hooks, accessibility and type-aware rules                                                                             |
| `npm run format`           | [Prettier](https://prettier.io)                                                                                                                            |
| `npm run i18n`             | Rebuild `src/content/i18n/en.json` from the English text in the code                                                                                       |
| `npm run i18n:check`       | Fail if `en.json` is stale or any language is incomplete                                                                                                   |
| `npm run i18n:todo [lang]` | List what each language still needs (`--prune` removes keys nobody uses)                                                                                   |
| `npm run e2e`              | Build, then screen tests in 7 languages, phone and desktop, light and dark (screenshots in `test-results/`; first time: `npx playwright install chromium`) |
| `npm run size`             | Size budget of the build (main bundle, languages, offline install)                                                                                         |

The pre-commit hook formats and lints the files you staged, then runs the type check, the `en.json` check and the
tests (about two seconds). CI on GitHub runs the same checks plus the build, the size budget and the screen tests on every pull request; the screenshots are attached to the run. Why these tools: [docs/TOOLING.md](docs/TOOLING.md).

## How the text works

- **Content** (chapters, procedures, tests) is typed data in `src/content/part*.ts` and `src/content/dropzone.ts`.
  Interface words are in `src/ui.ts`.
- Four **core languages** are written inline next to the English: `{ en, es, uk, ru }`. Leaving one out is a type
  error.
- The other **28 languages** live in `src/content/i18n/<lang>.json`. The key is a short hash of the English sentence
  (`src/content/i18n/key.ts`), the value is the translation. `en.json` lists every English string and is generated:
  never edit it by hand.
- Allowed inline tags: `<b>…</b>`, `<a href="…">…</a>`, `<q-check/>` (the "check with your instructor" badge). No
  emoji.

### Fix a translation in one of the 28 JSON languages

1. Find the sentence: search `src/content/i18n/<lang>.json` for a few words of the wrong text.
2. Change only the value, never the key.
3. Keep every tag and every number exactly as in English (you may write `2 500` or `2.500` as your language does,
   with Western digits). Keep `ft`, `m`, `s`, `kt`, `mph`, and names like USPA, SIM, ISP.
4. Use the words your federation and schools use. The glossary for your language is in
   `docs/i18n/glossary-<lang>.md`; add to it if a term is missing, with a link to the source.
5. `npm run i18n:check`, then open a pull request.

### Fix Spanish, Ukrainian or Russian

These are inline in `src/content/*.ts` next to the English. Edit the `es`, `uk` or `ru` value in place.

### Change the English text

Changing an English sentence gives it a new key, so every JSON language needs it translated again:

1. Edit the `en` value in `src/content/*.ts` (and update `es`, `uk`, `ru` next to it).
2. `npm run i18n` to rebuild `en.json`.
3. `npm run i18n:todo` shows each language's missing strings; `npm run i18n:todo -- --prune` removes the old ones.
4. Translate the new strings in every `<lang>.json` (if you can't, say so in the pull request and we'll handle it).

### Add a language

Follow [docs/i18n/TRANSLATE.md](docs/i18n/TRANSLATE.md): glossary first, then the JSON file, then add the code to
`ALL_LANGS` and `LANG_NAMES` in `src/content/types.ts`.

## Facts and safety

- Never change a number (altitude, time, wind limit) or the order of a procedure without a source. Put the source in
  the pull request.
- Schools differ. Where something depends on the school or the country, the text says so and carries `<q-check/>`.
- The student's own instructors' briefing always wins over this app.

## Video clips

Clips in `public/media` are short excerpts from other people's YouTube videos, each with its credit, link and start
time in the content. They are third-party content, not covered by this repository's licenses, and kept with the
authors' knowledge. Don't add clips without a credit and a link, and don't remove or replace existing ones in a pull
request; open an issue instead.

## Code

- React 19 + TypeScript 7 (native compiler) + Vite. No server: the app is static and works offline (PWA).
- Design: paper, ink, bold lowercase headlines with a period, black pill buttons; colour only for content. Tokens
  are in `src/styles.css`.
- For a UI change, look at it in light and dark, at desktop width and 375 px, in English and at least one other
  language (one right-to-left, `?lang=ar`, if layout changed), and attach screenshots.
- Keep pull requests small and about one thing.

## License of your contribution

Code you contribute is under the [MIT license](LICENSE); text, translations and drawings under
[CC BY-SA 4.0](LICENSE-CONTENT), the same as the rest of the project. Video clips are third-party content and are
not covered by either.

By contributing you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).
