# Review: Part IV (When it goes wrong), Part V (Our dropzone), first screen and header

Reviewed 2026-11-16 against `docs/PLAN.md` (0, 0b, 1, Facts to verify), `docs/content-brief.md`,
`docs/research/injury-data.md`, `docs/research/notes/…/deployment_emergencies.md`, the Russian report and
`docs/research/skydive-california.md`. Checked on screen in the built-in browser: 1280 px light and dark, 375 px dark,
EN everywhere, RU on phone and desktop. Read only; no project file changed except this one.

Out of scope: the new chapter `mistakes` ("What went wrong: real jumps", commit 1a51e06) landed while this
review was running. It was not reviewed. None of the chapters in scope changed in that commit.

Tags: [fact] [clarity] [lang-xx] [screen] [quiz]. Severity: must / should / could.

---

## First screen (Hero.tsx) and header

- [fact] **must**: exit altitude disagrees across the app. Hero tape, jump picture axis, part ranges (part1 `0 → ~13,500`,
  part2 `13,500 → 5,500`) and SkyRail use 13,500. The dropzone chapter uses 13,000, which matches Skydive California's own
  AFF guide (`skydive-california.md`). Fix: keep one constant (`EXIT_ALT = 13,000` for our DZ) and use it in Hero.tsx
  (TAPE, axis, stop labels), part1/part2 `range`, part2 altimeter row and SkyRail.tsx.
- [clarity] **should**: "<q-check/> = confirm with them". Nothing in the sentence says who "them" is. Fix: "= confirm with your
  instructors" (ES "con tus instructores", RU "уточни у инструкторов", UK "уточни в інструкторів").
- [clarity] **should**: two different "5 s" rules. The hero timer "5 s: count after the pull" sits next to
  Part IV's "5 s / two tries, then emergency procedure", so the same number means two things. Fix: rename the timer
  "count 5 after the pull" or add a third timer "5 s / 2 tries: fix it, or emergency procedure → #ep". Note: USPA Cat A says
  count to **3,000** before looking (deployment_emergencies.md); the 5 is the owner's DZ. Mark the timer `<q-check/>` or say so in Part III.
- [screen] **should**: the resume card mixes cases. "You stopped at **pull, count, check.**" is lowercase with a period
  (`headline()`), while "Next test: The ride up" right under it is sentence case. The owner disliked lowercase on the first
  screen (PLAN 0b). Fix: in Hero.tsx show `t(lastCh.c.title)` without `headline()`.
- [screen] **could**: the language button reads only "EN" to a screen reader. Fix: `aria-label="Language"` (localised).
- [screen] **could**: on the phone (375 px) the header loses the "AFF notes" brand and the chips sit left-aligned with
  empty space on the right. Fix: keep a short brand, or right-align the chips.
- [screen] **could**: below the hero, the Part I cover's big roman "I" watermark reads as a stray grey bar (desktop
  right edge, phone bottom right). Fix: lower its opacity, or show it as "Part I" text.
- [lang-es] **could**: the hero says "Vídeos" (Spain); the content says "videos" (Latin America). Pick "videos" (neutral).
- [lang-uk] **could**: the hero uses ’ in "пам’ятати"; the content uses ' ("запам'ятати"). Use one form.
- [clarity] **could**: the eyebrow "AFF level 1 · study notes" is narrower than the content (tips cover AFF to the A-license).
  Fix: "AFF · study notes".
- Seen OK: tape and timers line up in light and dark at 1280 and 375. Language menu: EN/ES/UK/RU in that order, opens
  cleanly. Theme button works. The header takes the Part IV tint.

## Chapter `ep`: Emergency procedure: cutaway and reserve

- [clarity] **must**: the step list mixes the two methods. Step 2 "Grab red: Right hand, **or both hands**" is followed by step 4
  "Grab silver: Left hand", which can't happen if both hands are on red. A student under stress needs one clean
  sequence per method. Fix: two short lists side by side (or tabs):
  - *One hand per handle:* look red → right hand on red → look silver → left hand on silver → peel and pull red →
    pull silver → arch, check the reserve.
  - *Two hands on red:* look red → both hands on red → look silver → peel and punch red → left hand to silver,
    pull → arch, check the reserve.
  Then drop the `<q-check/>` from step 2 and keep the single "ask which way yours teaches" line.
- [fact] **should**: the owner's "**5-second rule**" isn't stated as a rule in this chapter. The "5 s / Don't delay" card only gives the
  statistic. The rule itself is only in Tips › Emergencies. Fix: card text = "Spot it → **5 s to decide** → act,
  counting out loud. Not clearly better? Emergency procedure." Move the "nobody who acted within 5 s died" statistic
  under it as the "why".
- [clarity] **should**: the red callout mixes two topics: "pull the reserve yourself / AAD won't fire" and "both hands vs one hand".
  Fix: keep the AAD point in the red callout. Move the hand-method points next to the two method lists above.
- [clarity] **should**: the list title "Two parachutes: the main and the reserve" sits over bullets that are about handles.
  Fix: either "Two handles: red cuts away, silver opens the reserve", or add the owner's line "The reserve is a full
  canopy and flies like the main" (today that line is only in `two`).
- [screen] **should**: desktop split. The steps column is about 2.5× taller than the ep1 clip, leaving a large empty
  area under the clip. Fix: put the ep2 clip under ep1 in the right column (this also pairs the two methods visually),
  or make the clip `position: sticky`.
- [fact] **could**: the 2,500 card says "Two tries or about 5 seconds to fix". The research gives "two tries **or** 5 s" for
  pull problems (hard pull, lost handle, hesitation, horseshoe). For canopy problems the limit is decision altitude.
  Fix: "Fixable problem: two tries or ~5 s, never below 2,500".
- [lang-ru] **should**: step 5 "Peel and pull red" → RU "Выдерни красную" drops "peel", which is part of the owner's
  sequence (peel red). Fix: RU "Отклей и выдерни красную", UK "Відклей і висмикни червону", ES is fine.
- [lang-ru] **could**: the silver handle is "Серебряная" in quiz Q1 but "кольцо" everywhere else. Use "Серебряное кольцо".
- [quiz] **should**: the answer is always option A here. Shared problem, see "Quiz, all chapters" below.
- Facts OK: look red / look silver / peel red / pull silver / arch (with the grabs); one-hand vs two-hand both shown with
  clips; 2,500 decision (SIM 4-1); 1,000 hard deck with the downplane exception; "same number, different question"
  callout; the "clear the lines…" doubt listed as a question.

## Chapter `mal`: What can go wrong

- [fact] **should**: the hard-pull card says "**Two more** tries"; everywhere else it's "two tries" (research: "no more than two
  tries or 5 s"). Fix: "<b>Two tries or 5 s</b>, then emergency procedure."
- [fact] **should**: slider stuck → "Pump the rear risers" is still an open item in "Facts to verify". The research
  (deployment_emergencies.md l.75) says pumping the brakes is the widely taught way. Fix: "Pump the **brakes (toggles)** or rear risers
  a few times <q-check/>", and add the question to `questions` (see below).
- [fact] **should**: the line-twists card leaves out the exit. The research (l.99) says spinning or diving twists, or twists you can't get
  out of → cut away by 2,500. Fix: add "Spinning faster, or not out by 2,500 ft: emergency procedure."
- [clarity] **should**: horseshoe appears only as a gallery clip, with no family card, so the student can't place it.
  Fix: add a card to "Out, but not flyable" (what: "part of the main is out, something still holds it"; act:
  "Emergency procedure"), with clip `m_horseshoe`. Drop it from the gallery.
- [clarity] **could**: the gallery clips and the "watch" links repeat each other (line twists, PC in tow, bag lock,
  line-over, streamer appear twice). Fix: keep the watch links only for videos that aren't already clips.
- [screen] **should**: 3 cards sit in a 4-column grid on desktop, leaving an empty right column (all three
  families, and the `two` chapter too). Drawing cards (hard pull, spin) also have taller media than clip cards, so titles
  don't line up across the row. Fix: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` for 3 items, and one
  fixed media aspect ratio for drawings and clips.
- [screen] **could**: on desktop the gallery's 5th clip (horseshoe) sits alone on its own row. This goes away with the
  horseshoe card above.
- [screen] **could**: on the phone the chapter is about 6,800 px (one full-width card per malfunction with large media). Fix:
  shorter media (16:9 → 2:1) or 2 columns on phones.
- [lang-es] OK; [lang-ru] OK; [lang-uk] OK. Spot-checked all cards.
- [quiz] OK on content: every question is answered in the chapter and each has one right answer. Answer is always A (see below).

## Chapter `two`: Two canopies out

- Facts OK: biplane and side-by-side → don't cut away; downplane → cut away the main at any altitude; matches the owner
  and SIM 4-1. Side-by-side is still `<q-check/>` and in questions (good).
- [quiz] **should**: Q3 "What does this page say to do?" is a meta question about a fact marked unverified.
  Fix: replace it with "Main and reserve are tangled together. Cut away?" → "No: clear what you can, get ready to PLF".
- [clarity] **should**: the entanglement callout ends with "Ask the instructors to walk through all three cases". That's
  a question, not an action, and it's in the wrong box. Fix: move it to `questions`. The research (l.100) adds a concrete
  step: "pull in the less-inflated canopy hand over hand". Add that as the second bullet.
- [clarity] **could**: the chapter doesn't say why two canopies happen. Fix: one line: "Usually the AAD fired, or the reserve
  was pulled while the main was still coming out."
- [screen] **should**: same 3-in-4 grid gap as `mal`.
- [lang-ru] **could**: "Даунплейн" has no quotes here but «даунплейн» does in `ep`; UK uses «» everywhere. Pick one.

## Chapter `real`: How people actually get hurt

- [quiz] [fact] **must**: Q2 "What is the usual **student** mistake in landing incidents? → Not lifting the legs". The "why"
  says "students and tandems were 20%". `injury-data.md` (Corrections) says the 20% is **tandem** landings and must not be
  read as AFF students. The stat card above has it right. Fix: change Q2 to "In the Dutch study, what was the top
  cause of landing injuries?" → "Wrong flare (31%)"; distractors "Terrain", "Opening shock".
- [fact] **should**: the "Inside the leg" chart has the wrong source link. The label says "USPA incident reports, 130 leg injuries", but
  the link goes to the USPA ankle article (Galdamez), which injury-data.md marks as **weak, unsourced**. The real
  source is Forrester 2023, Lower Extremity Review (`https://lermagazine.com/?p=39724`). Fix: the label
  "USPA incident reports 2008–2023 (Forrester 2023), 130 leg injuries" with that link. Also fix the same link in the sources line.
- [fact] **should**: the body-region chart says "via a 2023 review" but links to Westman. Fix: link to
  `https://pmc.ncbi.nlm.nih.gov/articles/PMC9859333/`.
- [fact] **should**: "US: about 4,000 cutaways a year, roughly one per 700–800 jumps" is still open in "Facts to
  verify" (~3.5 M jumps → about 1 per 875), and the source says "more than 4,000". Fix: "more than 4,000 cutaways a
  year (USPA, 2019)" and drop the per-jump ratio, or mark it `<q-check/>`.
- [fact] **could**: the "46% of US deaths 2001–2020 from landing problems" figure is flagged in injury-data.md as "not re-checked". Mark it
  `<q-check/>` or re-check it.
- [fact] **could**: the landing-cause chart leaves out "Other 20%", so the bars sum to 80%. The source label "2.1 M jumps"
  isn't in injury-data.md. Fix: add the Other bar; label "Netherlands 2015–2020, 234 landing injuries".
- [screen] **should**: every bar chart scales to its own maximum. "Wrong flare 31%" and "Ankle 37%" draw as full-width
  bars that look like 100%. Fix: scale bars to 100% (or to the largest value across charts), at least for the
  three % charts.
- [clarity] **should**: the chapter is long (≈3,700 px desktop, ≈5,900 px phone) and repeats itself. "Flare errors / no flare worst"
  appears in a stat, in the callout, in the ranked list and again in Tips. Fix: keep one stats row (73–88%, ~6×, 41%), the phase chart
  and the cause chart; fold the USPA 2024 stats into the ranked list ("Bad flare, no PLF — 22% of no-turn landing
  incidents"); drop the leg-detail chart or collapse it.
- [clarity] **could**: "The ones to remember, most common first" claims an order the data doesn't give (obstacles 14% are listed
  above low turns 7%; EP errors are 6th but cause most deaths). Fix: "The ones to remember".
- [lang-es] **could**: "Mid-May 2019" → "Mayo de 2019" loses "mid". Fix: "A mediados de mayo de 2019".
- [lang-ru]/[lang-uk] OK on spot-check.
- [screen] **could**: in dark mode the grey source links under the charts are low contrast.
- [quiz] Q1 and Q3 OK.

## Chapter `tips`: Common mistakes and tips, stage by stage

- [fact] **should**: Emergencies › "5-second rule … another 5 s, rarely more than 15 in all" (Planche Wallace) says an
  experienced jumper may wait up to 15 s. For a student that clashes with the `ep` chapter's "two tries or ~5 s, decide by 2,500".
  Fix: add "(students: never below 2,500 ft)", or drop the 15 s part.
- [fact] **could**: Plane and exit › "Lost both [instructors]: pull now". Fine, but it's the only place this rule appears, and
  the quiz tests it. Add the source (ISP Cat A) or `<q-check/>`.
- [clarity] **could**: "Sloppy pull altitude: category A allows 1,000 ft off, category B 500 ft…" is hard to parse. Fix:
  "Pull altitude counts: Cat A passes within 1,000 ft of the planned altitude, Cat B within 500 ft."
- [clarity] **could**: "Dropping a toggle near the ground: the worst landing case without a turn in 2024". Say what "worst" means
  (highest injury severity).
- [screen] OK: the accordion opens and closes, mistakes/tips columns are even. The source line is a wall of 20 links. Could go
  in a "Sources" disclosure.
- [quiz] OK: all four are answerable from the chapter. Answer is always A.

## Chapter `questions`: Ask the instructors

- [clarity] **should**: open `<q-check/>` items in Part IV have no matching question. Add:
  "Slider stuck / end cells: pump toggles or rear risers?" and "Our decision altitude and hard deck: 2,500 / 1,000?"
  (dropzone.ts says the emergency altitudes aren't published). Also add the moved "walk us through two-canopy cases on the ground".
- [lang-ru] **could**: "Отцеп:" here vs "отцепка" everywhere else. Use "Отцепка:".
- [screen] OK. **could**: make the items tickable (checkboxes remembered like the tests) so asked ones can be marked.

## Part V, chapter `sdca`: Skydive California

- [fact] **must**: 13,000 here vs 13,500 in the rest of the app (see first screen).
- [clarity] **should**: the list repeats the cards right under it (13,000 and 5,500 appear twice). Fix: drop the second
  list item; keep "USPA dropzone" and "radio help".
- [screen] **should**: uneven cards. "13,000" and "5,500" have one short line, "A → E" has four bullets, leaving large
  empty boxes on desktop. Fix: turn the categories into their own list (with A: arch, pull on time), and keep two
  number cards; or give the number cards two lines each (e.g. "Lock on 6,000 · wave off").
- [screen] **should**: the headline renders "skydive california." in lowercase, a brand name. Fix: don't lowercase
  proper nouns (exempt this title in `headline()`, or render it as written).
- [fact] OK: B 90° turns, C first release, D 180°/360°, E flips/rolls/tracking match skydive-california.md.
- [quiz] **could**: no test for Part V. Fine for the reading list; for `sdca`, a 2-question quiz (exit altitude, the side
  you must not land on) would help.

## Part V, chapter `read`: Read and watch next

- OK. **could**: say why SIM 4-1 is third, not first (it is the actual rule book for emergencies).

## Quiz, all chapters in Part IV

- [quiz] **must**: all 18 Part IV questions have `answer: 0`, and Quiz.tsx doesn't shuffle. The right answer is always
  option A, and is usually the longest one. The test can be passed without reading. Fix: shuffle options per render in Quiz.tsx
  (keep the index map), or vary `answer` in the content.
- [quiz] **could**: the button under each question says "Next step". Use "Next question".

## Screen, whole page

- [screen] **must** (phone, RU): the page scrolls sideways (scrollWidth 388 on 375). The cause is a Part III obstacles
  label "Линии электропередачи" overflowing (it belongs to the Part III review, but it shifts the scroll rail in every chapter).
  The rail's plane, jumper and ground also stick out about 10 px past the right edge on phones. Fix: `overflow-wrap:anywhere` on that
  label; keep the rail inside `100vw`.
- [screen] **should** (phone): the watch-link pill with a long title ("Cutaway and reserve: one hand per handle, then two
  hands · Bodyflight Spotlight") wraps into three ragged columns. Fix: put the credit on its own line under the title
  on narrow screens.
- [screen] **could**: big numbers in the cards aren't localised (RU card "2,500" next to "2 500 футов" in the text).
- [screen] **could**: once, opening the language menu on the phone moved the page about 400 px up. Not reproduced; note only.
- Seen OK: scroll rail shows the red reserve in Part IV and the jumper landing at the end; dark Part IV band
  readable; clips load with posters; quiz cards work in light and dark.

---

## Top 5 to fix first

1. **Quiz answers are always A** (all 18 in Part IV): shuffle the options in Quiz.tsx. [quiz, must]
2. **`real` quiz Q2 says students fail to lift their legs**: the 20% is tandem landings (injury-data.md). Replace the
   question. [fact/quiz, must]
3. **EP steps mix the one-hand and two-hand methods** (both hands on red, then left hand on silver): split them into two clean
   sequences, with the "peel" in RU/UK. [clarity, must]
4. **One exit altitude everywhere**: 13,000 (Skydive California) vs 13,500 in the hero, part ranges and rail. [fact, must]
5. **Unverified numbers and wrong sources in `real`**: the leg chart links the weak USPA ankle article (should be
   Forrester 2023); "4,000 cutaways, 1 per 700–800"; bars scaled to their own max look like 100%. [fact/screen, should]
