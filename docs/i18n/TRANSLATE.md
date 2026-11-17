# Translating AFF notes into a new language (one agent per language)

The app's English text is in `src/content/i18n/en.json` ({ key: english }). Your language goes in
`src/content/i18n/<lang>.json` with exactly the same keys. A missing key shows in English. This is safety content
for skydiving students: a wrong word can hurt someone. Accuracy beats style.

## Steps
1. **Glossary first** (`docs/i18n/glossary-<lang>.md`): find the terms your country's skydiving federation and
   schools actually use for: AFF, main/reserve canopy, container, pilot chute, hackey, cutaway (red) handle, reserve
   (silver) handle, AAD, RSL/MARD, three-ring, line twists, slider, end cell closure, malfunction, high/low speed
   malfunction, emergency procedure, canopy check, controllability check, flare, PLF, landing pattern, holding area,
   downwind/base/final legs, wind line, decision altitude, pull altitude, break-off, wave-off, arch, box position,
   circle of awareness, practice touches, spot, jump run, exit, climb-out, poised exit, hand signals (legs out, arch,
   relax, check altitude, pull), altimeter, toggles, rear risers, brakes set/stowed, steering lines, collapse, PRO /
   pin check, gear check, wind limits. Sources: the federation's training manual or exam questions (e.g. FFP
   "Manuel du parachutiste", DFV Ausbildung, ENAC/Aero Club d'Italia, CBPq, Aeroklub Polski, SFF utbildningshandbok,
   NLF håndbok, DFU, Suomen Ilmailuliitto, Arabic: UAE/Skydive Dubai or military parachuting terms). Where the sport
   keeps the English word (many say "cutaway", "flare", "AFF" in English), keep it and add the local word in
   brackets once if it helps. Link each source.
2. **Translate** every value of en.json into `<lang>.json` (same keys). Work in chunks (e.g. 200 keys at a time) and
   merge; keep the file valid JSON.
   - Keep every inline tag exactly: `<b>…</b>`, `<a href="…">…</a>` (do not change the href), `<q-check/>`.
   - Keep every number and its value; write numbers in your language's normal format (2 500 / 2.500) but Western
     digits only (also in Arabic). Keep units `ft`, `s`, `m`, `kt`, `mph` as they are (the app formats them).
   - Keep names (USPA, SIM, ISP, Skydive California, brand names, YouTube channel names) as they are.
   - Short, plain, imperative, like the English. Same meaning, nothing added or dropped. Emergency procedures: the
     order of actions must stay exactly the same.
   - Lowercase headline style with a period is applied by the app; just translate the words.
3. **Check**: `cd /Users/yevheniipetrenko/Documents/dev/aff-notes-i18n && npx vitest run tests/i18n.test.ts` must pass
   for your language (all keys, same tags, same numbers). Fix and rerun until it does.
4. **Back-check safety**: in the glossary file, add a section "Back-translation" with 30 of the most safety-critical
   strings (emergency procedures, malfunctions, altitudes, landing, PLF) translated back into English by you, and
   note anything that drifted and how you fixed it.

## Rules
- Write ONLY `src/content/i18n/<lang>.json` and `docs/i18n/glossary-<lang>.md`. Do not edit other files, do not
  commit. Other translators work in the same folder at the same time.
- Finish with: keys translated, test result, the 5 terms you were least sure about (for a native instructor to check).
