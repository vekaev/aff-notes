# Pull requests and the Codex translation review: 2026-11-18

Scheduled run (`aff-notes-prs-and-codex-translations`). The owner wasn't present; nothing was posted, commented or
sent anywhere.

## 1. Open pull requests from other people

`gh pr list --repo vekaev/aff-notes --state open` lists one PR: #6 "School-rules profiles", the owner's own draft.
It's skipped as the task says. **There are no contributor or Dependabot PRs**, so there's nothing to review or merge.

## 2. What the Codex conversation suggested

The owner's most recent translation chat is "Review translation quality" in ChatGPT (2026-11-17, 10:16 PM). It was
read only, in the owner's browser, and the tab was closed afterwards. The chatgpt.com/codex page showed only the
product page, so the chat was found in the chatgpt.com sidebar.

**The owner's ask:** judge every page in every language as a first-time reader. Find literal translations (example:
Russian "отделение" for exit), propose fixes that keep the meaning, suggest free tools or services, open a PR.

**What Codex reported** (5 sub-agents: first visit, Slavic, Europe west, Europe central, Asia + right-to-left, plus a
cloud browser):
1. In the canopy check, several languages say "square" where the lesson describes a rectangle.
2. On the Russian page in metres mode, only the last number of some altitude ranges is converted.
3. Spanish uses "batidores" for the steering toggles (Codex counted this as an error).
4. Japanese says the jumper is lying on their back in the sentence about a pilot chute stuck behind them.
5. It walked through all 32 languages × 23 chapters and all 74 chapter questions, and said its build passed 94 unit
   and 33 browser tests.

**What it didn't deliver:** GitHub refused to let its connected app create a branch, and the run stopped at a GitHub
sign-in that had expired. Its outputs panel is empty, and no Codex branch or PR exists on GitHub. **Its patch and
"translation workbook" never left the chat**, so each finding was checked here against the repository.

## 3. What was checked and applied

| Codex finding | Checked against | Verdict | Done |
|---|---|---|---|
| "Square" vs rectangle | every `<lang>.json`, glossaries | Mostly fixed already: de, fi, hr, it, lt, nl, pl, ro, sk, sl say "rectangular". **Arabic** still had "مربّعة" (geometric square) although `glossary-ar.md` had already chosen "مستطيلة"; that one spelling was missed. | **#28 merged** (Arabic). Other languages: owner question below. |
| Metres mode converts only the last number of a range | `src/units.ts`, every string in all 32 languages | **Real, and wider than reported**: every language, English too. "2,000 to 1,000 ft" showed "2,000 to ≈300 m"; arrows ("13,000 → 5,500 ft") and the landing-plan list ("2,500, 2,000, … 300 ft") had the same bug. A student in metres mode could read a foot value as metres. | **#29**: joining words per language, arrows, lists; tests that fail on the old code. Old vs new output diffed for every string: only real ranges and the one list changed. |
| Japanese "lying on their back" | `ja.json` vs English | **Real**: "Still on your back: emergency procedure" (pilot-chute hesitation) was "まだ仰向け" (still lying face-up). Now "まだ背中の後ろにある" (still behind your back). | **#30** |
| Spanish "batidores" | content, no Spanish glossary yet | **Not an error**: "batidores" is the toggle word used at Spanish dropzones. Latin American students may know "mandos" or "frenos". | Not changed: owner question below. |

Every applied PR: `npm run check` and `npm run build` pass. The changed screen was checked at 375 px, light and dark,
with headless Playwright screenshots (the preview pane was declined because nobody was at the keyboard). Ranges were
also checked across the whole page in en, ru (m and ft + m), de and ar: no half-converted heights, no sideways scroll.

## 4. Process ideas from the Codex run (for the owner, not applied)
- **Split reviewers by language family** (Slavic, Europe west, Europe central, Asia + right-to-left), each reading the
  live page as a first-time student. This fits the existing `aff-clarity-critic` agent. Only ru and uk have had a
  clarity pass so far (`docs/review/clarity-*.md`); the next 26 could run in four family batches.
- **Click through every chapter test in every language** in a browser (Codex did 74 questions × 32). Our Playwright
  smoke test covers 7 languages and doesn't answer the questions.
- **Spot checks a translation test can't catch**: the same term used for the tile label and its description ("square"
  vs "rectangle"); units shown the same in every mode. #29 adds a units sweep test; a glossary-consistency test
  (label word = glossary word) would have caught the Arabic miss.
- **A filterable translation workbook** (one row per key × language, with the English and a status) is a cheap first
  step before Weblate (already under "Owner decides later").
- **A Spanish glossary** (`docs/i18n/glossary-es.md`) is missing; the inline languages (es, ru, uk) have none. Spain vs
  Latin America terms (batidores / mandos / frenos) belong there.

## 5. Left for the owner
1. **"Square" in other languages.** The canopy-check tile word is still a literal "square" in bg, cs, el, fr, he, pt,
   sr, tr (and ru/uk "Квадратный"), while its line says "rectangle". Each glossary chose the literal word on purpose,
   maybe because instructors say "square". Recommendation: use the rectangle word on the tile and keep "square" in
   brackets once, as the Dutch glossary does; change each only if its glossary agrees.
2. **Spanish toggles.** Keep "batidores" (Spain) or add "(mandos)" at first mention for Latin American readers?
   Recommendation: add it once, and start `glossary-es.md`.
3. **Arabic/Hebrew pattern label.** The image label "2,000→1,000 ft" is shared and untranslated, so in right-to-left
   text its arrow reads against the line. Recommendation: give it a translated label with "←" like the other ar/he
   ranges. This is older than today's fix.
4. **Russian/Ukrainian "Всё ещё на спине" / "Досі на спині"** (pilot-chute hesitation) has the same double meaning
   as the Japanese line ("still lying on your back"), softened by the line above. Recommendation: "Всё ещё за спиной" /
   "Досі за спиною". Not changed: the ru/uk clarity review didn't flag it, and the owner reads both languages.
5. Ask Codex to re-send its patch or workbook as a file in the chat, if the owner wants its full list: it was never
   pushed.
