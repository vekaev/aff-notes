# AFF notes

Free study notes for AFF (Accelerated Freefall) skydiving students: from the plane door to the landing, emergencies,
real footage, and a short test after each chapter. Works offline on a phone (install it from the browser).
Live at **[aff-notes.vercel.app](https://aff-notes.vercel.app)**. Study help only: your instructors' briefing always
wins.

## Mission

Imagine: if these notes help even one person remember the right thing at the right second, they save a life. The
greatest thing we can do now is share what we know and build, together with skydivers all over the world, the most
complete place to learn to skydive: fewer injuries and deaths, and more people enjoying their life and the feeling of
flight.

Every change is checked against that: is it true (with a source), is it clear, does it help someone on their next jump?

## 32 languages

English · Español · Français · Deutsch · Italiano · Português · Nederlands · Polski · Čeština · Slovenčina · Magyar ·
Română · Български · Hrvatski · Srpski · Slovenščina · Ελληνικά · Türkçe · Lietuvių · Svenska · Norsk · Dansk · Suomi ·
Українська · Русский · עברית · العربية · 中文 · 日本語 · 한국어 · ไทย · Bahasa Indonesia

Open the app in a language with a link like [aff-notes.vercel.app/?lang=de](https://aff-notes.vercel.app/?lang=de).
English, Spanish, Ukrainian and Russian are written alongside the original; the other 28 are translated from English
and not yet checked by native-speaking instructors. **Found a wrong word in your language? That is the most useful
help right now**: see [CONTRIBUTING.md](CONTRIBUTING.md) or open an
[issue](https://github.com/vekaev/aff-notes/issues/new/choose).

## Run it

    npm install
    npm run dev      # http://localhost:5173
    npm run check    # types, lint, translations, formatting, tests (same as CI)
    npm run e2e      # screen tests in 7 languages, phone and desktop, light and dark
    npm run build    # dist/ (+ dist/artifact.html for the claude.ai artifact host)

Content lives in `src/content/part*.ts` as typed data with English, Spanish, Ukrainian and Russian side by side; the
other 28 languages are in `src/content/i18n/<lang>.json`. Why these tools: [docs/TOOLING.md](docs/TOOLING.md). Plan
and status: [docs/PLAN.md](docs/PLAN.md).

## License

Code: [MIT](LICENSE). Written notes, translations and drawings: [CC BY-SA 4.0](LICENSE-CONTENT). The video clips in
`public/media` are short excerpts from other people's YouTube videos; they belong to their creators (each is credited
and linked in the app) and are not covered by either license.

## How it's built

The whole project on one page: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Contributing: [CONTRIBUTING.md](CONTRIBUTING.md).
