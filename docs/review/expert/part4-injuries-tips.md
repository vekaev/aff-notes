# Expert review: Part IV, injuries, real footage, tips, questions   (2026-11-16)

Scope: `src/content/part4.ts`, chapters `real` (l. 943–1334), `mistakes` (l. 1338–1485), `tips` (l. 1489–2053),
`questions` (l. 2057–2129). Every statistic was checked against the original paper, report or video description, not
against `docs/research/`. Earlier reviews in `docs/review/` were read only at the end, to avoid repeating items already fixed.

## Summary

This part is in good shape. Almost every number traces back to its source: Westman 2007, Fer 2021, Ellitsgaard 1987,
Damhuis 2024, Forrester 2023, the USPA 2024 non-fatal and 2020 fatality summaries, CSPA 2025, and the Parachutist /
Rating Corner pieces. The video captions match the uploaders' own descriptions. The worst problems:

1. **"Legs up" is given as landing advice for solo jumps.** It is tandem-passenger advice. USPA teaches a solo student
   to land feet first, with feet and knees together.
2. **"Two tries, then cut away" for a spinning canopy.** That rule exists for handle problems. A spinning main gets the
   5-second rule, or a cutaway right away if it is getting worse.
3. **One statistic has the wrong denominator.** The 7% of unintended low turns is a share of all 2024 incidents, not of
   landing incidents.
4. **The student-risk numbers lack context.** "~6×" and "41% on the first two jumps" come mostly from Swedish
   static-line students. Swedish AFF students were about 2.6× licensed jumpers.
5. **Some lessons are missing.** The "Can't find the handle" card leaves out the video's main lesson (keep the arch
   while reaching). Case 1 never says what the student should have done (pull the reserve).

## Findings

| # | sev | verdict | where (file:line, chapter) | the app says (EN, exact) | what's right, with source | fix (EN) | needs-owner |
|---|---|---|---|---|---|---|---|
| 1 | safety | misleading | part4.ts:1084 and 1093 (`real`, "The ones to remember"), 1769 (`tips`, landing, bad list) | "<b>Full flare at ~10 ft</b>, hold, legs up, feet and knees together"; "On your own jumps, <b>legs up</b> too."; "Not lifting the legs; reaching for the ground with a foot or a hand." | Lifting the legs is a **tandem passenger** instruction: the 2024 USPA summary blames tandem incidents on "students failing to lift their legs". For a solo jumper, USPA ISP Cat A says "press your feet and knees together with your knees slightly bent" and "Allow your feet to contact the ground first", with no leg lift. A solo student who lifts the legs lands on the seat or tailbone. Spinal fractures were 29% of major injuries in the Dutch study (Damhuis 2024). The RU/UK texts ("ноги вверх") carry the same error. | Step 1: "Full flare at ~10 ft, hold it, feet and knees together, knees slightly bent, feet touch first, <b>PLF every time</b>." Step 2: "20% were tandem landings, usually the passenger not lifting their legs. That's a tandem rule: on your own jumps, <b>feet and knees together, feet first</b>." Tips bad list: "Feet apart, or reaching for the ground with one foot or a hand." | no |
| 2 | safety | misleading | part4.ts:1143 (`real`, "Late or wrong emergency procedure") | "Too long fixing a spinning canopy? <b>Two tries</b>, then cut away, straight to the reserve." | "Two attempts or 5 s, whichever comes first" is the USPA rule for a **lost or hard-to-pull handle** and for a total malfunction (ISP Cat A; SIM 4-1 E). The rule for a spinning main is the 5-second rule: "rarely should efforts persist beyond 15 seconds" (Planche Wallace 2019), and if it isn't getting better you act at once. Bell 2019: all four 2019 deaths "could have been avoided" by recognising that they were not improving. The `tips` chapter (l. 1728) already teaches the 5-second rule, so this line contradicts it. | "Spinning canopy? <b>About 5 s</b> to see it clearly getting better; if not, cut away and pull the reserve, and as a student never below 2,500 ft." | no |
| 3 | fact | wrong | part4.ts:1120 (`real`, "Low turns") | "<b>7%</b> of all landing incidents were unintended low turns." | USPA 2024 Part One: "Unintentional low turns increased in 2024 to 7% of **all reported incidents**" (15 of 215). Landing incidents numbered 112, so the share of landing incidents is 13%. | "<b>7%</b> of all reported 2024 incidents (about 1 in 8 landing incidents) were unintended low turns." | no |
| 4 | fact | misleading | part4.ts:970–988 (`real`, stats "~6×" and "41%") | "<b>Students</b> are about six times as likely to be injured as licensed jumpers." / "of student injuries in a Swedish study happened on the <b>first two jumps</b>." | Westman 2007 Table 2: 97 of the 107 student injuries were "conventional" students (static line or IAD), only 8 were AFF. The Swedish 5.9× is 1.84 vs 0.31 per 1,000 jumps; for AFF students it was 0.81 vs 0.31, about 2.6×. The 41% (44 of 107) is mostly first static-line jumps. France backs ~6× for students overall (Fer 2021: RR 6.1, 95% CI 5.7–6.6, 6.2 M jumps). The numbers are true but get read as "AFF jumps 1–2". | ~6×: add "(France 2010–19, 6.2 M jumps)". 41%: "of student injuries in a Swedish study (mostly static-line students) happened on the first two jumps." | no |
| 5 | fact | missing | part4.ts:1446–1449 (`mistakes`, "Can't find the handle") | what: "The student searches for the pilot chute; the instructor docks and throws it for him." act: "<b>Two tries</b>, then the emergency procedure. Practise touches on the ground." | The instructor's description (Zach Foreman, `qidpLSdggOo`) calls this the student's "biggest mistake": he was "not arching when he went back to reach". That moved the handle "further up the student's back". The USPA limit is "no more than twice or for 5 seconds, whichever comes first" (ISP Cat A). | what: "...He stopped arching as he reached back, so the handle rode up his back; the instructor docks and throws it for him." act: "<b>Keep the arch</b> while you reach. <b>Two tries or 5 s</b>, then the emergency procedure." | no |
| 6 | fact | missing | part4.ts:1165–1186 (`real`, case "Distracted at 6,000 ft") | "It <b>wrapped her leg</b>; she froze" / "The <b>AAD fired</b> the reserve at about 700 ft" | The case is accurate (Bell, Rating Corner, 9 Mar 2023: goggles at ~6,000 ft, head-low at 5,000 ft, weak throw, right leg out of position, "I looked at my handles and froze in panic", AAD "somewhere around 700 feet"). But the card never tells the student what to do. A pilot chute wrapped on a limb is a pilot-chute-in-tow / entanglement, which means emergency procedures now. Bell's point is to practise until it's "automatic", not just comfortable. | Add a last point: "Pilot chute wrapped or in tow = <b>emergency procedure now</b>, by 2,500 ft. The AAD is not a plan." | yes: ask whether the school teaches reserve-only or cutaway-then-reserve for pilot chute in tow (SIM 4-1 E allows both) |
| 7 | fact | misleading | part4.ts:1398–1401 (`mistakes`, "Downwind landing") | "The landing direction was set wrong; he landed downwind, too fast, and his legs folded." act: "Check the <b>windsock</b> yourself. Downwind: flare fully and PLF." | The description (Paul Lewis, `tG63N8Y-ti4`) is accurate. But he saw the error at 300 ft and **chose** to land downwind instead of turning low among 19 other canopies. That was the right choice: SIM 4-1 landing priorities put a level wing and a clear area before landing into the wind. Without that, a student may learn "downwind = turn into the wind at any cost". | act: "Check the <b>windsock</b> yourself. Wrong way low with traffic around? <b>Don't turn low</b>: land downwind, flare fully, PLF." | no |
| 8 | fact | unsupported | part4.ts:1622 (`tips`, freefall good list) | "About 10 minutes of wind tunnel before AFF helps, if you tell the coach you're on AFF." | Not found in the cited sources I opened (Foundations of Flight, Sharp 2019/2022, Brodsky-Chenfeld, Grau, Scott Miller). Tunnel time before AFF is commonly recommended, but "about 10 minutes" has no source. | "Some wind-tunnel time before AFF helps; tell the coach you're an AFF student." Or add the source. | no |
| 9 | fact | misleading | part4.ts:1285 (`real` quiz Q1, why) | "In four national studies, 73–88% of injuries happened under canopy and at landing. Exit and freefall were under 5%." | 73–88% is right: SE 87.9% (Westman Table 4), FR 83.3% (Fer 2021), DK 83.8% of cases (Ellitsgaard 1987), NL 73% (Damhuis 2024). The "under 5%" for exit plus freefall is from Sweden only (1.9 + 2.7 = 4.6%). The others don't report it. | "...In the Swedish study, exit and freefall together were under 5%." | no |
| 10 | fact | misleading | part4.ts:1084 (`real`, "Bad flare, no PLF") | "<b>22%</b> of landing incidents without a turn: early, late, half or jerky, then trying to stand." | USPA 2024 lists early (ISI 2.0), late (2.5) and no flare (2.7). It says an uneven or half flare *timed correctly* had the **lowest** severity (1.0). "Jerky" isn't there, and stand-ups are discussed separately. | "<b>22%</b> of landing incidents without a turn: flaring too early, too late or not at all. No flare gave the worst injuries..." | no |
| 11 | wording | unclear | part4.ts:1345 (`mistakes`, intro) | "Nobody is badly hurt on screen." | Two cards say "Broken femur and ankle" and "Broken ankle", which a student will read as a contradiction. What's true is that no injury is *shown*. | "No injury is shown on screen." | no |
| 12 | wording | misleading | part4.ts:1380–1382 (`mistakes`, "Flare stabbed too fast") | "An AFF B student stabs the toggles down; the canopy still has speed at touchdown and he tumbles." | The uploader's whole description is "Too fast of a Flare". "Stabs the toggles" and "still has speed" are interpretation. Not verifiable beyond that line. | "An AFF B student; the uploader: 'too fast of a flare'. He hits hard and tumbles." | no |
| 13 | wording | unclear | part4.ts:1025 and 1021 (`real`, bar charts) | "Inside the leg: where it breaks"; "Which part of the body" ... Other 12 | Forrester 2023 (USPA reports Jul 2008–Apr 2023, 130 leg cases): 77% fractures, plus sprains and dislocations, and 12% "leg, not specified" left off the chart. Westman's 51% lower limb is in the paper. The 19% and 18% come only from Barthel 2023 Table 1. "Other 12" is a computed remainder that neither paper reports. | "Inside the leg: where it gets hurt"; label the last bar "Other (remainder)". | no |
| 14 | wording | unclear | part4.ts:1805 (`tips`, landing bad list) | "Dropping a toggle near the ground: the most severe injuries of all 2024 US landings without a turn." | USPA 2024: "The most severe injury in this group came from a dropped toggle" (ISI 3.0). That is a single case, inside the 86 non-turn incidents. | "...the single worst injury among 2024 US landings without a turn." | no |
| 15 | wording | unclear | part4.ts:2103 (`questions`) | "(the turn limit above 1,000 ft is 180°)" | No USPA source sets a 180° limit. SIM 4-1 and ISP Cat A–C give no degree limits. The ladder is the school's own (`dropzone.ts:20`, "taught here"). Written as a general fact, it reads like a USPA rule. | "(our ground school said up to 180° above 1,000 ft)" | yes |
| 16 | wording | outdated | part4.ts:2097 (`questions`) | "Your school's decision altitude and hard deck: 2,500 and 1,000 ft?" | The SIM already answers this: SIM 4-1 E says decide and act "no lower than 2,500 feet for students and A-license holders", with a "cutaway hard deck of 1,000 feet". The only open point is whether the DZ sets a higher number. | "USPA says 2,500 and 1,000 ft. Do you want us higher?" | yes |
| 17 | wording | unclear | part4.ts:2083 and 2091 (`questions`) | "Two canopies side by side: cut away or not?"; "Nothing out at all (hard pull, pilot chute in tow): cut away first, or reserve only?" | Good questions. SIM 4-1 E gives **two accepted procedures** for each: side by side means land both, or cut away if not entangled and altitude permits. Pilot chute in tow means reserve only, or cut away then reserve. Hard pull / no pilot chute out means reserve. Say so, so the student asks "which of the two do you teach?" | "Two canopies side by side: SIM allows landing both or cutting away; which do you teach, and where's the RSL disconnect on our rigs?" Split hard pull (reserve) from pilot chute in tow (school's choice). | yes |
| 18 | wording | translation | part4.ts:2000 (`tips` quiz Q2, option 3) | EN "Only at lock-on", ES "Solo en el lock on" | RU/UK say "Только на 6 000" / "Лише на 6 000" ("only at 6,000"). Close (lock-on is at 6,000 ft on Cat A), but the four versions are not the same answer. | Make RU/UK say lock-on, or make all four say "Only at 6,000 ft". | no |

## Missing

- **Questions to add** (`questions`):
  - "Do the student rigs have an RSL or a MARD (Skyhook)? After a cutaway, do I still pull silver?" (BSR 2-1 M.2 requires an RSL on student rigs.)
  - "Which AAD, and at what altitude does it fire?"
  - "Line twists that are spinning: kick out first, or cut away right away?" ISP Cat A says fix twists first and act by 2,500 ft if it worsens; the spinning case needs the school's answer.
  - "Radio check under canopy, and what if the radio is silent?"
  - "Holding area, pattern altitudes and landing-direction indicator here?" ISP Cat C starts the pattern from the holding area at 900 ft.
  - "Local power lines and off-field hazards?"
- **`real`, Canada callout (l. 1057).** The CSPA source is "AIM Analysis as of May 2025", so it covers January to May 2025. The three cases (jumps 2, 4 and 7) match: slow flare or flare not finished, no proper PLF. Say "Canada, Jan–May 2025". The same report has a useful extra case for students (2025S-01): a first-jump student half-flared at 250 ft under radio, then landed in a pond.
- **`real`, 46% stat (l. 993).** The `<q-check/>` can go. The USPA 2020 fatality summary gives Landing Problems a 2001–2020 average of 45.8%: non-turn 11.7%, unintentional low turns 8.8%, intentional low turns 13.7%. Most low-turn deaths over that period were *intentional* (swoops). Saying so tells the student "never practise hook turns", not only "beware accidental turns".
- **`tips`, A-license (l. 1885).** The oral exam needs 100% (USPA A-license page). Add it next to "written (75%+)".

## Checked and fine

About 80 claims are correct. Most of them:
- the Westman phase chart (5/7/19/226 of 257) and the 51% lower limb
- the Swedish rates (1.84 vs 0.31 per 1,000)
- Damhuis (31/30/19% of 234 landing injuries, 234 = 73% of 322)
- Forrester (37/25/23/10/6% of 130 cases)
- USPA 2024 (22.4/20/14.1/9.4%, no flare worst, imperfect PLF milder)
- 2020 fatality summary (45.8%)
- Bell 2019 (4 of 5 deaths, "could have been avoided", spins disorient and make the handle hard to pull)
- Bell 2024 (1,200+ jumps, 2,100 ft, hard deck 1,000 ft)
- Bell 2023 (case 1)
- Planche Wallace (4,000+ cutaways a year, 5-second rule, 15 s)
- CSPA 2025
- all 13 clip captions against the YouTube titles, descriptions and captions
- ISP Cat A (lose one instructor: continue; lose both: pull; altitude every 3 s; within 1,000 ft; two tries or 5 s; canopy check; hold a high flare; look 45° down)
- ISP Cat B (within 500 ft; 14 mph) and Cat C (pull at the assigned altitude, no margin)
- SIM 2-1 (8 h alcohol; 14 mph)
- SIM 4-1 (decide by 2,500; hard deck 1,000; both steer right head-on; alternate by 2,000; landing priorities; power-line facts)
- SIM 4-2 (30-day student currency)
- SIM 4-4 (four gear checks)
- the A-license page (25 jumps, card, check dive, 75%)
- Sharp 2019 (bare-minimum B rarely passes C) and Sharp 2022 (hips to the wind)
- Grau 2024 (skipped touch means "won't pull"; nine good pulls, then a freeze)
- Brodsky-Chenfeld 2022, Schock 2025 ("Good job!")
- Bell "When, Not If" 2021 (drill to the ground, 3×, a second problem under the reserve, "power lines!")
- Foundations of Flight (elbows back, hands close, no iron cross)

Reddit lines were checked only where an archive copy was reachable. "Late flare" matches: a tibial nail and 14 months of physical therapy; the target-fixation part was not visible.
