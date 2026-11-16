# Review: Part III "Under canopy" (src/content/part3.ts)

Reviewed 2026-11-16, read-only. Sources: docs/PLAN.md (0, 0b, 1, Facts to verify), docs/content-brief.md,
docs/research/notes/…/canopy_landing_plf.md, the Russian report, injury-data.md, skydive-california.md.
Screen: built-in browser, localhost:5173. Desktop (1358 px) light and dark, 375 px dark and light. Clips were
checked by playing them and by frame grabs.

Tags: [fact] [clarity] [lang-xx] [screen] [quiz]. Severity: **must** / **should** / **could**.
Note: `l()` in part3.ts takes its arguments in the order **en, es, ru, uk**. RU is the 3rd argument, not UK.

Owner checklist (PLAN §1 Part III): every item is present and correct. That covers the 5,500 ft pull and the 5-second
count; there / square / stable / steerable; 2,500 decide → over the holding point by 2,000 → hold to 1,000 →
900 / 600 / 300 → flare at ~10 ft; turn limits 180 / 90 / 45; the low turn with its diagram and clip; the four
hazards; never save the gear; the flare as a 5-4-3-2-1 count, eyes on the horizon, elbows back; PLF rolling on the
side; Q26–32. The numbers match Hero.tsx (tape and timers) and part4 (tips at lines 1082, 1652, 1676). No
contradictions with the research except the ones listed below.

---

## Chapter 9: deploy ("Pull, count, check")

- [screen] **should**. Deploy step 2 and the whole app: the space between a number and its unit is breakable. At
  375 px, "about 5 / s" wraps across lines, and so do "600 / ft" in Q26 and "10 / ft" in the obstacle cards. Fix:
  use ` ` between number and unit, in Rich or in the content ("5 s", "10 ft", "SIM 4-1", which also wraps
  as "4- / 1)" on desktop in the low-turn list).
- [screen] **could**. canopyCheck widget before you press Pull: about 150 px of empty card above a tiny dot
  (scale 0.15) on both desktop and phone. Fix: start at about 0.35 scale, or put a "Press Pull" hint in the empty area.
- [clarity] **should**. Steps: nothing tells you what to do after the check. Fix: add a 4th step, "Check altitude,
  look around for other canopies, find the holding point", which leads into the next chapter.
- [clarity] **could**. Step 1 says "throw it" but not how. Fix: "throw it out to the side at arm's length, back to
  the arch while you count" (the APF clip caption already says "arch, count").
- [clarity] **could**. Watch row: all 3 links repeat the 3 clips above at the same seconds, and each clip card
  already has "Watch the original". Fix: drop this `watch` block. The pattern chapter's single link is the same
  case: it repeats the holding clip.
- [fact] **could**. The Spaceland "deploy" clip shows an altimeter overlay reading 7,100 ft. A student may think
  that is the pull height. Fix: add "(their altitude, not ours)" to the caption, or start the cut later.
- [lang-ru] **could**. "Any no" callout: "Решить нужно до высоты принятия решения" uses the same word twice. Fix:
  "Решение — до 2 500 футов (высота принятия решения)". UK has the same pattern: "Вирішити… ухвалення рішення".
- [quiz] OK. All 3 questions can be answered from the chapter, and each has one clearly right answer.

## Chapter 10: pattern ("Flight plan and landing pattern", incl. turn limits and low turn)

- [screen] **must**. Pattern map: the highlight ring on the 900 row, which is selected by default, sits on top of
  the "900" label (text at 236,192, ring at 250,200 r=12). The map's key number can't be read on desktop or phone.
  Fix: move the label, e.g. `<text x="222" y="216">900</text>`, or draw the ring under the text.
- [screen] **should**. Pattern on the phone: the map comes after all 7 rows, so tapping a row moves a marker you
  can't see. Fix: below 768 px, put the map first and make it sticky (top: header height), or show the map
  inline under the tapped row.
- [screen] **should**. The map has no labels for "holding point", "landing area / target" or "2,000 → 1,000".
  At this size the dashed holding circle looks solid. Fix: add small mono labels ("holding", "target") and a
  "2,000→1,000" tag by the circle.
- [clarity] **could**. The map's wind comes from the right, but the text says "usually from the north". Fix: add
  "map drawn with the wind from the right, not to scale" to the caption, or draw a N arrow.
- [clarity] **should**. Rows 2,500 and 2,000 ask almost the same question ("Can you reach the holding point?"
  and then "can I reach the landing area from here?"). "Left or right pattern" is never explained. Fix: 2,500
  row: "Can you reach the holding point? Which side is the pattern on today (left-hand = all turns left), so that
  final points into the wind?" 2,000 row: keep only "Not sure you'll make the landing area? Pick a clear field
  now (USPA SIM 4-1: by 2,000 ft)". The `<q-check/>` there can go, because SIM 4-1 backs it; keep it only for
  the "playground" location.
- [clarity] **should**. The pattern rows say what to do but rarely why. Fix: one short reason each. Hold over
  the point = you stay upwind with height to spare and traffic stays predictable. Final at 300 = time to fly
  straight and level before the flare. Base at 600 = room to judge and adjust.
- [clarity] **could**. The "Hold there" row says "whatever the wind", which reads oddly. Fix: "Circle or S-turns
  over the point. Watch the windsock and the other canopies." Also add the 1,000 → 900 step: "at 1,000 leave
  the point and fly to the entry".
- [screen] **should**. Turn-limit cards: only the ≤ 45° card has text, so the other two are empty boxes. Fix: give
  each a line. ≤ 180°: "Setting up, looking around". ≤ 90°: "Pattern turns only (downwind → base → final)".
  Also add "Our dropzone's rule" under the heading, because research says the ladder is DZ-specific, not USPA.
- [clarity] **should**. "≤ 45° below 300, flat" appears 4 times in this chapter: the 300 row, the rule card, the
  callout and the lowturn points. The callout "A big turn low is the classic way…" repeats the next section's
  heading. Fix: drop that callout, and drop the first lowturn point ("Below 300 ft: about 45° max").
- [screen] **must**. Low-turn diagram: the red dashed path runs through the label "turn starts low", and
  "dives, speeds up" sits on the impact mark. This happens in both themes and at both widths. Fix: in
  widgets.tsx LowTurn, move the labels left and up (e.g. "turn starts low" at x=96 y=70; "dives, speeds up" at
  x=100 y=150) or give them a paper-coloured backdrop.
- [screen] **could**. Low-turn block: the text column uses plain browser bullets and no card, unlike every other
  list (accent squares in a card). On desktop the diagram (≈150 px tall) sits beside a column ≈380 px tall.
  Fix: wrap the right side in the list style, or stack the diagram above it at full width.
- [fact] **should**. The low-turn clip (Cronkite News, 6.5 s) shows canopies far away landing in grey weather. No
  low turn is visible, and the last frame jumps to another scene. Fix: replace it with one of the new
  "what went wrong" cuts that another chat is making (public/media/x_lowturn*.mp4, untracked right now), or
  trim the end.
- [clarity] **could**. The ES diagram label "giro muy bajo" means "very low turn", but EN says "turn starts low".
  Fix ES: "el giro empieza bajo".
- [lang-ru] **could**. "Поворот 90° на базовую" has no noun after "базовую". Fix: "на базовую прямую" (or
  "траверз"). Same in the quiz explanation and FAQ 26.
- [lang-es] **could**. Throughout: "5,500 ft" uses the English thousands comma. It is fine if that's a deliberate
  app-wide choice; otherwise use "5.500" or "5 500". Leave as is if the other parts do the same.
- [quiz] OK. 4 questions, each with one right answer. Q4 (200 ft, off target) is good. Could add one on "why
  both 2,500s differ", but Q1 already covers it.

## Chapter 11: obstacles ("Landing on an obstacle")

- [fact] **must**. Buildings card, point 2: "flare about 10 ft before" (RU "за 10 футов", UK "за 10 футів") reads
  as a distance. SIM 4-1 says to flare about 10 ft **above the first point of contact**, which is a height. The
  quiz Q3 "why" has the same wording. This settles the "Facts to verify" item. Fix EN: "Going to hit:
  **flare about 10 ft above where you'll touch**, then PLF". ES: "flare a unos 10 ft por encima del punto de
  contacto". RU: "flare примерно в 10 футах над точкой касания". UK: "flare приблизно за 10 футів над точкою
  дотику" → better "на висоті ~10 футів над точкою дотику". Tick that item in PLAN.
- [fact] **should**. Buildings card, roof point: SIM 4-1 says that after landing on an object in wind you should
  disconnect the RSL if you can and cut away. The app only says "collapse the canopy". Fix: add "or, if the wind
  drags you, cut away (disconnect the RSL first) `<q-check/>`".
- [fact] **should**. Water card: the brief and the owner listed a **PLF entry** (feet and knees together, ready to
  PLF). It's only half there ("feet and knees together"). The card also doesn't say "leave the gear", though the
  red callout covers that. Fix point 2: "Deep breath, feet and knees together, ready to PLF". The SIM wording
  (half brakes at ~10 ft, breath, stay in the harness until you're in the water) is correct. Tick "Water
  landing wording vs the current SIM 4-1" in PLAN.
- [lang-ru/uk/es] **should**. "Best plan", point 1: "уйди выше 1 000 футов" / "відходь вище 1 000 футів" / ES
  "aléjate por encima de 1,000 ft" read as "go higher than 1,000 ft". Fix RU: "Заметь заранее и уходи от него,
  пока ты выше 1 000 футов". UK: "…і відходь від неї, поки ти вище 1 000 футів". ES: "…y aléjate mientras estés
  por encima de 1,000 ft".
- [fact] **could**. "Can't make it? Pick a clear field and land there, into the wind." SIM 4-1 says into the wind
  only if it needs no low turn. Fix: add "…into the wind if you can do it without a low turn". At Tracy, one side
  of the landing area is farmland you must not land in (skydive-california.md), so add a question to the
  dropzone list: "which fields are OK alternates?"
- [fact] **could**. Trees: SIM also says to aim for the middle of a tall tree and hug the trunk or a main branch.
  Power lines: SIM also says to drop anything you're holding. Add if there is room.
- [screen] **should**. At 375 px the four hazard cards are two columns about 150 px wide. Text breaks after 2–3
  words and "Power / lines" wraps. Fix: one column below ~480 px for `rules` blocks with `points`.
- [lang-es] **could**. "Estar sobre el punto de espera a 2,000 ft" uses an infinitive among imperatives. Fix:
  "Llega sobre el punto de espera antes de 2,000 ft".
- [quiz] OK. All 4 can be answered from the chapter. Q3's "why" needs the same height wording as above.

## Chapter 12: flare (+ PLF)

- [fact] **should**. The first flare clip (Rhythm Skydiving) has an on-screen title "Start your flare about here
  ~12–15 ft". The step next to it says about 10 ft. Research says sources differ (10–20 ft). Fix: caption
  "Where to start the flare (this school says 12–15 ft; ours says ~10 ft, so ask)", or add `<q-check/>` to step 2.
- [fact] **should**. Step 4, "Arms fully extended until you're standing", conflicts with step 3 (elbows back,
  hands close to the body) and with AXIS (finish with the hands at the hips). Fix EN: "Hands **all the way down**
  (at or below the hips) until you're standing". RU: "Руки до упора вниз (у бёдер или ниже)". UK: "Руки до
  кінця вниз (біля стегон або нижче)". ES: "Manos **abajo del todo** (a la altura de la cadera o más abajo)".
- [clarity] **should**. Step 2: "Look at the horizon ahead, about 45° down" contradicts itself, because the
  horizon is 0° down. Fix EN: "Look **ahead**, about 45° down toward the horizon, not straight down at your feet".
  Same in the quiz option and in part4 line 1652. The question also needs a height cue. Fix: add "about the
  height of a one-storey roof or the windsock pole".
- [clarity] **should**. Step 1 says "No turns", but the 300 row allows small flat corrections up to 45°. Fix:
  "Only small flat corrections".
- [clarity] **should**. The "About 5, 4, 3, 2, 1" callout mixes three topics. It holds the count (good), the
  "5–6 s at full brakes" figure (which PLAN lists as unverified and which is canopy-dependent), and "flared too
  high" (which belongs in the Timing list). Fix: move "Flared too high: stop, hold…" into Timing. Reword the 5–6 s
  line to "Student canopies can usually hold full brakes for a few seconds without stalling `<q-check/>`", or
  drop it. Also say it differs from the deploy count: "Unlike the 5-second count after the pull, this one is
  just a rhythm".
- [clarity] **could**. "What the flare does" explains the why after the how. Fix: put it first in the left
  column. "A jerky flare spends that energy too early" refers to an energy the text never mentioned. Fix: "…spends
  the canopy's speed too early, and you drop the last few feet". Its last point repeats the deploy chapter
  ("practise a flare up high"), so drop it.
- [fact] **should**. Missing: the radio. Skydive California uses radio help under canopy, and research says
  "silent radio → flare anyway, you are the pilot". Fix: add to Timing: "No radio call? **Flare anyway.** The
  radio is a backup."
- [fact] **should**. PLF: the most common student landing injury cause in the 2024 USPA data is not lifting the
  legs or reaching for the ground with one leg. That's not in the chapter. Fix: add to the PLF steps or callout:
  "Legs together and slightly forward. Don't reach for the ground with one foot."
- [fact] **must**. FAQ Q31 point 5 says 'side of the **back** (the "push-up" muscle)'. The lat is the
  **pull-up** muscle (research: "pull-up muscle (lat)"). ES "el músculo de las flexiones" (push-ups) is wrong too.
  Fix EN: '(the "pull-up" muscle, the lat)'. ES: '(el dorsal ancho, el músculo de las dominadas)'. RU and UK
  are already right ("широчайшая", "найширший").
- [screen] **should**. The PLF clip starts on a black title card ("PARACHUTE LANDING FALL (PLF)"), which is also
  its poster, and ends on a USPA logo. Fix: re-cut from about 2 s to about 20 s and make a new poster from a
  frame of the roll.
- [screen] **could**. On desktop the flare split is lopsided: the left column (5 steps + Timing + 2 callouts)
  runs ≈500 px below the 3 clips. Fix: move "What the flare does" out of the split, full width under it. Or move
  PLF into its own chapter; the flare chapter is the longest in the part.
- [clarity] **could**. The PLF callout title "Not onto the stomach, then the back" starts with the wrong version.
  Fix: "On the side, not front-to-back".
- [lang-ru] **should**. PLF is called "падение с перекатом" in flare step 5 but "приземление с перекатом" in
  Q30, the watch label and elsewhere. Fix step 5: "приземлению с перекатом (PLF)".
- [lang-ru] **could**. "Timing" is translated "Темп" (= pace). Fix: "Момент" or "Тайминг" (UK "Момент"). "момент
  выходит неверным" is awkward. Fix: "ошибаешься с моментом" (in the step and in the quiz "why").
- [lang-es] **could**. "arruina el momento" is a calque. Fix: "te hace calcular mal el momento". "sin pérdida" →
  "sin entrar en pérdida".
- [quiz] OK. 4 questions, one right answer each. Q1's option B must change along with the "horizon / 45°" fix.

## Chapter 13: test ("Landing questions", Q26–32)

- [clarity] **should**. Q26's answer is one dense paragraph of 6 altitudes. On the phone it wraps badly
  ("2,000 → / 1,000 ft", "600 / ft"). Fix: make it a list, one altitude per line, same order as the map rows.
- [clarity] **should**. Q27 asks "at what altitude do you stop major turns". The answer gives the whole ladder
  and puts the actual answer last ("The handwriting on the sheet says 300 ft and 45°"). Fix: lead with "**300
  ft.** Below it, only flat corrections up to 45°." Then: "Our full ladder: ≤ 180° above 1,000, ≤ 90° from
  1,000 to 300."
- [clarity] **could**. Q29 says "Hold them where they are", but the flare chapter says "stop, hold, fly
  straight, finish as you sink". Use the same words in both places.
- [quiz] **could**. Both quiz questions repeat FAQ 28 and 32 almost word for word, so the student just re-reads
  the card. Fix: swap one for "Q29: you flared too high, what now?" or "Q31: the 5th point of contact" (after
  fixing the lat). The "Other canopies" distractor in the hazards question is arguably a hazard; "on the ground"
  saves it, but "A parked car" would be cleaner.

---

## Top 5 to fix first

1. **[fact] Q31: "push-up" → "pull-up" muscle (lat)**, EN and ES (test chapter, FAQ 31).
2. **[fact] Buildings: "flare about 10 ft before" → "about 10 ft above the point of contact"**, in all 4
   languages, the card and the quiz "why". Then tick the PLAN "Facts to verify" item (and the water item).
3. **[screen] Pattern map "900" label hidden under the selection ring**, and the **low-turn diagram labels crossed
   by the red path** (widgets.tsx, both themes, both widths).
4. **[fact/clarity] Flare chapter**: "arms fully extended" → hands down at the hips; "horizon … 45° down" →
   "ahead, about 45° down"; tell the 12–15 ft clip apart from our ~10 ft; move the unverified "5–6 s" line out of
   the count callout and mark it `<q-check/>`.
5. **[fact] Add the two missing safety lines the research ranks highest**: "No radio call? Flare anyway" and
   "legs together and slightly forward, don't reach for the ground with one foot" (PLF). Also add a
   non-breaking space between numbers and units (5 s, 10 ft, 600 ft, SIM 4-1).

Also worth doing soon: put the map first and sticky on phones, use one column for the hazard cards at 375 px,
re-cut the PLF clip (title card and logo), and swap the low-turn news clip for a real low-turn cut.

Not checked: the in-page player for "watch" links (clips played in place), other languages on screen (EN only;
ES/RU/UK were checked in the source).
Side effect: one answer was clicked in the test-chapter quiz (Q1 of 2, at 375 px), so it may show as started in
this browser's local progress.
