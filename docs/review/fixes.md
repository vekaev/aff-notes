# Review fixes: tracker

One line per review scope. The per-finding table (id, severity, where, decision, source) lives in each scope's fixer
log `docs/review/fixes/<scope>.md`; this file sums them up. Updated by the finishing run (`aff-notes-finish-review`).

Expert reports: `docs/review/expert/<scope>.md`. A second, independent pass on Part IV emergencies (written while the
first one was being fixed) is kept in `docs/review/expert/second-opinion/part4-emergencies.md`: compare it with the fixer
log when Part IV is done.

## Final summary (2026-11-17 10:00 PST, last run of the 24-hour review task)

The 24-hour review round is over; the regular autopilot (`autopilot-aff-notes`, twice a day) takes over from here.

- **Expert fact-check, 6 scopes, all processed**: 69 fixed, 21 added, 7 rejected (claim didn't hold against the
  source), 17 ask-owner (school-specific; each is a line in the app's "questions for your instructors" chapter and
  a `check` badge until the instructors answer).
- **Curriculum**: proposals #1–#6 built (final check, rig photos, "when freefall goes wrong", traffic, landing off);
  #7 (after the silver handle) is the next one, todo.
- **Real footage**: 6 clips + 8 photos placed, all with credit and link.
- **Todo (needs nothing from the owner)**: Part IV: 4 left for later (#17, M1, M2, C3 elsewhere); optional source
  checks from the AI-run fact-checks: MARD line, "Two instructors" line, 73–88 % anchors, USPA 2024 fatality figure,
  tunnel shoulder study; curriculum #7.
- **Still open, waiting on the owner** (docs/PLAN.md "Waiting on you"): instructor briefing answers, hand signals
  "legs in" + "OK", Q27 key (300 or 1,000 ft), headline case, big reorder of Part IV, the dropzone map photo.
- **2026-11-18 06:00 PST**: the task kept firing after the deadline; it can't switch itself off or the autopilot
  on without the owner's approval in an unattended run. Asked under "Waiting on you" in docs/PLAN.md. No content changes.
- **2026-11-18 12:00 PST**: fired again; switching the task off and the autopilot on was refused again (needs the owner's approval, nobody opened the run). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **2026-11-19 06:00 PST**: fired a third time; switching the task off and the autopilot on was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **2026-11-19 14:00 PST**: fired a fourth time; switching the task off and the autopilot on was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **2026-11-20 02:00 PST**: fired a fifth time; switching the task off and the autopilot on was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **2026-11-20 10:00 PST**: fired a sixth time; switching the task off and the autopilot on was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **2026-11-20 20:00 PST**: fired an eighth time; switching the task off and the autopilot on was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **2026-11-21 02:00 PST**: fired a ninth time; switching the task off and the autopilot on was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **2026-11-21 08:00 PST**: fired a tenth time; switching the task off and the autopilot on was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **2026-11-21 10:00 PST**: fired an eleventh time; switching the task off and the autopilot on was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **2026-11-21 14:00 PST**: fired a twelfth time; switching the task off and the autopilot on was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **2026-11-21 18:00 PST**: fired a thirteenth time; switching the task off was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **2026-11-22 18:00 PST**: fired again (fifteenth+ time); switching the task off was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **2026-11-23 13:00 PST**: fired again; switching the task off and the autopilot on was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **In progress elsewhere**: school-rules profiles, draft PR #6 (not merged; needs a merge of main, regenerate en.json).

## Status 2026-11-17 08:00 PST

08:00 run: part4 `real` new stat "6/10": 6 of the 10 US deaths in 2023 happened at landing under an open canopy, 1
was an equipment problem; AADs and reserve static lines have nearly ended the no-pull and equipment deaths that once
caused most of them. Source re-read this run: "A Widespread Improvement: The 2023 Fatality Summary", Parachutist,
2024-04-09 (parachutist.com ArticleID 9378): record low of 10; landing problems 6 (4 intentional low turns); equipment 1;
"automatic activation devices and reserve static lines have nearly eliminated fatalities in categories that used to
contribute significantly". All 32 languages. Still open (optional): MARD line, "Two instructors" line, 73–88 % anchors,
USPA 2024 fatality figure, tunnel shoulder study. School-rules PR #6 still a draft (no content collision: it doesn't
touch this stat).

## Status 2026-11-17 06:00 PST

06:00 run: the school-rules sub-chat saved its work as draft PR #6 (05:58, not merged; it changes all four part files
and every language file), so this run edited on its own branch and kept the change to two lines; #6 will need a merge
of main (regenerate en.json, keep both sides).
- part4 EP chapter: "More than 4,000 cutaways a year (USPA, 2019)" → "About 4,777 reserve rides in 2025 in the US
  (USPA survey estimate, 1 per 726 jumps)". Source re-read: uspa.org/find/faqs/safety (2025 USPA Member Survey).
  The page has no 2023 figure; the "2023: 4,913" in PLAN is unconfirmed.
- part4 tips: new line "Later, downsize one size at a time, and change size or canopy type, never both at once (USPA
  downsizing checklist)". Source re-read: uspa.org/downsize (USPA Downsizing Checklist PDF: "Downsize one size at a
  time"; "Change planform (type of canopy) or size, not both"). UK/France binding size rules left for the school-rules
  profiles.
- All 32 languages. Still open from the AI-run fact-checks: MARD line, "Two instructors" line, 73–88 % anchors, USPA
  2024 fatality figure (all optional).

## Status 2026-11-17 04:00 PST

04:00 run: no content edits: the school-rules sub-chat is running (since ~04:01) with all four part files, dropzone.ts
and the language files open and uncommitted in its worktree; editing them on main now would collide. Done instead:
the four open "Facts to verify" lines in docs/PLAN.md checked against USPA SIM 4-1 (uspa.org/sim/4-1, section G):
- Water: "Flare to half brakes at 10 feet above the surface" = the app. Building: "flare 10 feet above the first point
  of contact" = a height, as the app says. Both closed.
- Slider stuck: SIM 4-1 has no procedure; the app already says toggles (some schools rear risers) + q-check +
  instructor question. Closed. "5–6 s at full brakes" no longer in the app. Closed.
- Cutaways a year: part4 says "more than 4,000 (USPA, 2019)"; USPA's safety FAQ now gives ~4,777 reserve rides in 2025
  (~1 per 726 jumps, member survey). Open content task: update the line once the school-rules chat commits.
Still open from the AI-run fact-checks: downsizing line, MARD line, "Two instructors" line, 73–88 % anchors, USPA 2024
fatality figure.

## Status 2026-11-17 02:00 PST

02:00 run: two more content tasks from the AI-run fact-checks (PLAN "Resume here" step 4), sources re-checked:
- part4 `ep` RSL line: "if your rig has one <q-check/>" → "Student rigs must have an RSL (USPA BSR 2-1 M): … pull
  silver anyway, straight away." Source: USPA BSR 2-1 M.2.b ("a reserve static line" required for all students until
  the A license) and SIM 4-3 F ("RSL use is mandatory for students"). q-check resolved (safety).
- part2 "Overloaded or lost?": one-line why: first-jump stress impairs learning of complex new tasks (Taverniers et
  al. 2011, Cogn Affect Behav Neurosci 11:332–343, 61 cadets). The false "cognitive flexibility" claim not used.
- All 32 languages (28 JSON by a translator agent from each language's old wording + glossary; back-checked ar, th,
  zh). Native check wanted: sr ("samo pomoć" replaced an odd "rezerva za rezervu"), hu, sl, ko/ja bold placement.
- Checks: `npm run check` 0, `npx vite build` 0, strings present in the build. **Not seen on screen**: the dev-server
  preview was declined in this unattended run. Page guard not run (text-only change).
- Still open from step 4: downsizing line (part4 tips), MARD line, "Two instructors" line, 73–88 % anchors, USPA 2024
  fatality figure (optional ones).

## Status 2026-11-17 00:00 PST

00:00 run: content tasks from the AI-run fact-checks (PLAN "Resume here" step 4), sources re-checked this run:
- part1 AAD card: "around 750–1,000 ft <q-check/>" → model figures: Student CYPRES 2 ~750 ft in freefall, ~1,000 ft
  under a canopy still faster than 29 mph (cypres.aero/?p=3130); Vigil II Student 1,040 ft at ≥20 m/s (Vigil II
  manual v2.0.6 §3.3.2); "ask which one is on your rig". q-check resolved.
- part4 two canopies: new line on how a student gets two out (late pull / riding a fast malfunction below ~1,000 ft
  lets the student AAD fire); pull on time, act by decision altitude (CYPRES page above).
- part4 `real`: new stat "49 injuries and 0.57 deaths per 100,000 jumps, no tandem deaths" and the source link
  "Fer 2021, FFP 2010–19" (doi:10.1016/j.jsams.2020.11.002; abstract via Europe PMC: 6.2 M jumps, 35 deaths, 3,015
  injuries, RR 6.1 students).
- All 32 languages updated (tests: same numbers and tags). Not done yet: part2 Taverniers line, 73–88 % anchors,
  USPA 2024 fatality figure (optional).
- Seen: RU phone light (ft+m), UK phone dark, ES desktop light, EN by text. Page guard not run (text-only change).
- docs/PLAN.md not ticked this run: it had another chat's uncommitted edits.

## Status 2026-11-16 22:00 PST

22:00 run: curriculum #6 landing off + after you land (Part III obstacles chapter), 2 decision questions, 2 instructor questions (wind drag on the ground and telling the DZ are not in SIM 4-1: <q-check/>).

## Status 2026-11-16 20:00 PST

20:00 run: curriculum #4 traffic block + 2 decision questions in Part III; the last long instructor questions split.

## Status 2026-11-16 18:00 PST

18:00 run: page guard 1615 open problems 1–10 closed (3 were already fixed), quiz end text in UK/RU fixed; page guard 1800 passed.

| scope | report | fixer log | fixed | added | rejected | ask-owner | status |
|---|---|---|---|---|---|---|---|
| part1-plane | yes | yes | 10 | 4 | 3 | 2 (+6 questions) | done 92dd8f4 |
| part2-freefall | yes | yes | 6 | 5 | 2 | 3 (4 questions) | done 8a2c519 |
| part3-canopy | yes | yes | 13 | 7 | 1 | 4 | done 8a2c519 |
| first-screen-dropzone | yes | yes | 6 | 3 | 0 | 2 (3 questions) | done 92dd8f4 |
| part4-emergencies | yes | yes | 18 | 1 | 0 | 3 | done 8f436c7; 4 left for later (#17, M1, M2 not added, C3 elsewhere) |
| part4-injuries-tips | yes | yes | 16 | 1 | 1 | 3 (+1 listed) | done d99a86a |
| curriculum | 2026-11-16.md | | | | | | proposals; final check (543718d), rig photos (8084813), "When freefall goes wrong" (16:00 run) built; #3 and #5 were already there; #4 traffic built (20:00 run); #6 landing off built (22:00 run); next: #7 after silver |
| real footage | real-footage.md | | 6 clips + 8 photos placed | | | | done (rig 8084813; exit, altimeter, canopy check, pattern: 14:00 run) |

## Safety items from Part IV (applied in 8f436c7 / d99a86a; kept as the checklist)

From the two Part IV reports (both passes agree on these):
- Biplane: don't flare, toggles stowed, steer the front canopy with its rear risers (USPA SIM 4-1).
- Side by side: steer the canopy most directly overhead with rear risers, not "the bigger one"; say what the RSL means.
- Spinning canopy: 5-second rule, not "two tries"; "cut away if the spin gets faster" invites waiting.
- Overloaded tip: "pull at 5,500, or right now if you're lower".
- "Legs up" on landing is for tandems; a solo student lands feet and knees together, ready to PLF (USPA Cat A).
- Flare: start at about twice your height, finish 1–3 ft above ground; the "full flare at ~10 ft, hold" line reads as too high.
- AAD: it won't save you after a cutaway because it waits until about 1,000 ft, not because of speed.
- Cutaway method B is not USPA's recommendation (credit is wrong); USPA adds a look over the right shoulder.

## Open questions for the owner

See "Questions for the owner" in each fixer log; collected in docs/PLAN.md "Waiting on you".
- **2026-11-21 22:00 PST**: fired a fourteenth time; switching the task off and the autopilot on was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
- **2026-11-23 04:00 PST**: fired again; switching the task off was refused again (no person to approve). No content changes. Owner: disable `aff-notes-finish-review` and enable `autopilot-aff-notes` by hand.
