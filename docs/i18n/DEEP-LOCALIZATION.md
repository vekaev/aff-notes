# Deep localization: language, units, school rules

Text translation is one of three independent axes. Mixing them (e.g. "Russian means metres and FPS rules") breaks
for a Russian speaker training at Skydive Dubai, or a Brazilian in Florida. So the app keeps them apart:

| Axis | What it changes | Chosen by | Default | Where |
|---|---|---|---|---|
| **Language** | every word | the menu | the browser's preferred languages | `src/i18n.tsx`, `src/content/i18n/*.json` |
| **Units** | how a quantity is shown (ft, ft + m, m) | the `ft / ft·m / m` chip | the browser region (metric-training countries → ft + m) | `src/units.ts` |
| **School rules** (phase 2, built) | numbers, procedures, links and names that differ by federation | "School rules" in the ⋯ menu, `?rules=` | from the region (US → USPA, UK → British Skydiving…) | `src/content/rules/index.ts`, `src/rules.ts` |

Common software practice behind this: CLDR/ICU separates *locale* (language + region) from user *preferences*
(units, calendar); `Intl.NumberFormat` handles separators; the measurement system is a preference, not a language.
Aviation and sports apps keep regulations as data keyed by jurisdiction, not as translated text.

## Phase 1 (built): units
- The content stays USPA's, in feet, in every language (translators keep numbers and `ft`, a test enforces it).
- `convertQuantities(text, lang, units)` is the only place that turns "5,500 ft" into "5,500 ft (≈1,700 m)" or
  "≈1,700 m". It runs inside `t()` and `num()`, so every string, drawing label and big number follows the setting.
- Metres are rounded the way people say them (≥1,000 m to 50, ≥30 m to 10) and always marked **≈**, with a note:
  "Feet are the USPA numbers. Metres are conversions, not the round numbers a metric school teaches: follow your
  school." A converted 2,500 ft is ≈760 m; an FPS school may teach a different decision height. That gap is why
  phase 2 exists.
- Tests: rounding, ranges, already-converted text left alone, Russian/German formats, and "no bare N ft left in metres
  mode" for every language file.

## Phase 2 (built 2026-11-18): how it works
- Profiles `uspa | dfv | ffp | bs | ruua` in `src/content/rules/index.ts`; each value `{ n, unit, src, check?, note? }`.
- The English text marks rule numbers right after the quantity: `pull at 5,500 ft{pull}`, `13,000{exit} → 5,500 ft{pull}`.
  `{~}` = reviewed, stays USPA's number (dropzone facts, numbers cited as USPA's). `{uspa}` at the start = a sentence
  that only makes sense with USPA numbers (hidden under other rules). Blocks can have `only: ['ruua']`.
- Marks live only in English; keys and display strip them. Translations are matched by value (the same number in
  the same string), so translators keep numbers as they are and nothing else changes. Tests: every key altitude is
  marked, every mark finds its number in all 32 languages, every value has a source.
- A missing value shows USPA's with the check badge; metric rules show it as ≈ m. Quiz questions that still use a
  bare USPA number (a scenario at 2,100 ft, a wrong answer 5,000 ft) are left out under other rules.

## Phase 2 design notes (original plan)
Facts that differ by federation (pull altitude, decision altitude, canopy-size limits for students, A-licence
requirements, minimum age, AAD/RSL requirements, wind limits, licence names, the manual to read and its link) move
out of prose into a typed table:

```ts
// src/content/rules/index.ts
export type Fed = 'uspa' | 'bpa' | 'ffp' | 'dfv' | 'apf' | 'cspa' | 'cbpq' | 'fps' | 'fpsu' | 'knvvl';
export const RULES = {
  pullAltitude:   { uspa: { ft: 5500, src: 'USPA SIM 4-1 Cat A' }, fps: { m: 1500, src: '…' }, … },
  decisionAlt:    { uspa: { ft: 2500, src: 'SIM 5-1' }, bpa: { ft: 2500, src: '…' }, fps: { m: 600, src: '…' } },
  manual:         { uspa: { name: 'Skydiver’s Information Manual', url: 'https://www.uspa.org/sim' }, … },
} satisfies Record<string, Partial<Record<Fed, Rule>>>;
```
- Text refers to a rule with a tag the translators keep, e.g. `<rule id="pullAltitude"/>`, rendered from the reader's
  federation in the reader's units; an unknown or missing value falls back to USPA with a "check with your school"
  badge, never a guess.
- Blocks that only apply to one federation get `only: ['bpa']` / `except: [...]` (e.g. British canopy-size chart).
- Every value carries its source; a test fails if a rule has no `src`, and each federation's values come from that
  federation's own document (research: `docs/i18n/units-and-rules.md`).
- The picker sits next to the units chip; the hero says "Rules shown: USPA" so nobody is misled.

## Migration order
1. Research the rule table per federation (`units-and-rules.md`), USPA first, then the federations with most contacts.
2. Replace the handful of hard-coded rule numbers in content with `<rule/>` tags (a script finds them; translations
   keep the tag automatically because numbers move out of the text).
3. Add federation-only blocks where a rule is a whole procedure, not a number.
4. Ask a native instructor of each federation to check its column (the outreach list has their federations).
