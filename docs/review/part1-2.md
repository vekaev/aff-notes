# Review: Part I (In the plane) and Part II (Freefall)

Read-only review, 2026-11-16. Sources: `src/content/part1.ts` (with the uncommitted working-tree change another
session made to the gear "Main" card), `src/content/part2.ts`, `docs/PLAN.md`, `docs/content-brief.md`,
`docs/research/skydive-california.md`, `docs/research/notes/…/plane_exit_freefall.md` (USPA SIM Cat A quotes).
On screen: built-in browser, localhost:5173, desktop width (1358 px) and 375 px, light and dark, EN. Other
languages were checked in the source files, not on screen. The language setting is shared across tabs, so I left it alone.

Tags: [fact] [clarity] [lang-xx] [screen] [quiz]. Severity: **must** / **should** / **could**.

---

## Numbers across the app

| Number | Where | Status |
|---|---|---|
| Exit **13,500** | Part I range `~13,500`, Part II range `13,500` (no `~`), flow row 1 `~13,500` + "not confirmed" check, Hero tape `13,500`, SkyRail `13500` | **Conflicts** with Part V (`dropzone.ts`): "Students exit at **13,000 ft**", sourced from the DZ's own AFF guide (`skydive-california.md`) |
| Pull **5,500** | flow, altitude, gear quiz, gear "Main" card (new), Hero, Part V | Consistent |
| Lock on **6,000** | flow, altitude, Hero, Part V | Consistent |
| Altitude check | Hero timer **3 s**; flow row title "every **3–5 s**"; altitude rule big "**3–5 s**"; Part IV tips "every 3 seconds (… some ~5)" | Mixed. The owner and USPA both say 3 |
| Wave off | Part III clip captions "Lock on, **wave off**, reach, throw" | Never explained in Part II, where it happens (USPA Cat A: "lock on 6,000, wave off and pull 5,500") |

---

## Chapter 1: The ride up (`plane`)

- [fact] **should**. *Seatbelt rule.* "From **take-off**": USPA/FAA say belts on for **taxi**, take-off and landing. Fix: "From **boarding** (before the plane taxis) until the instructor says it's time to get ready."
- [fact] **should**. *Aircraft emergency callout.* This is missing USPA's most likely in-plane emergency: a **container opening in the plane**. USPA: hold it closed and tell the instructor; if it goes out the door, you go out right after it. Add it as a point. It is also the "why" behind "handles covered".
- [fact] **should**. *Aircraft emergency, "Mid altitude: exit on command".* USPA's possible commands are: land with the plane, exit and **pull the reserve**, exit and pull the main, normal exit. Fix: "Mid altitude: exit on command; the instructor may tell you to pull the **reserve** right away."
- [fact] **could**. *Helmet rule.* The `<q-check/>` on "protect your handles" can go: USPA SIM 4-1 says to move carefully and keep the rig off the door frame. Could add "walk to the plane from behind, never near the prop" (USPA Cat A).
- [lang-ru] [lang-uk] **should**. *Brace.* "в группировке" / "у групуванні" means a tuck. The aircraft brace is "**поза безопасности**" (RU) and "**поза безпеки**" (UK). Change it in the callout, quiz option 2 and quiz "why".
- [clarity] **could**. *Callout intro.* "Covered in the course, not in these notes" is followed straight away by a list of rules, so it reads as a contradiction. Fix: "Your DZ sets the details (ask). The usual rule:".
- [screen] OK. Three even cards on desktop; stacked on phone; fine in dark.
- [quiz] OK. All three questions can be answered from the chapter and each has one clear answer.

## Chapter 2: Your gear (`gear`)

- [fact] **should**. *Reserve card.* "Inspected and sealed **on a schedule**" is vague. Fix: "every **180 days** (FAA rule)".
- [fact] **could**. *AAD card.* Say *when* it fires: "if you are still in freefall low (around 750–1,000 ft, depending on the unit's mode) <q-check/>". Without that, "only a backup" has no "why".
- [fact] **could**. *What gets checked.* Student rigs have an **RSL**. Add "RSL hooked up", plus "reserve pin and seal".
- [clarity] note. *Main card.* The uncommitted version has 3 points (packer · instructor check · opened by you at 5,500). It is better and the cards are now nearly even. It still needs committing by whoever is editing.
- [lang-es] **could**. *Reserve card.* For neutral Spanish, use "se **sella**" instead of "se precinta", which is Spain-only.
- [screen] **could**. *Timeline at 375 px.* The 2×2 grid makes "Before you put it on" wrap to 3 lines next to cards with 2 lines. Fix: one column on phone, or shorter labels ("Before putting on" / "After putting on").
- [quiz] **could**. *Q2.* The right answer is the only long, detailed option, so the length gives it away. Fix: give the wrong options similar detail (for example "Three times: on the ground, in the plane, in the door").

## Chapter 3: Climb-out (`climb`)

- [screen] **should**. *Clip.* `climb.mp4` frame 0 is still the **title slide** ("FREE FALL OBJECTIVES … 2 PRACTICE HANDLE THROWS … 5,500'"). On load the browser shows that frame instead of the clean `climb.jpg` poster. On desktop it is the first thing you see, and "2 handle throws" contradicts our "3 practice touches". Fix: re-cut starting ~0.2 s, or use `preload="none"`.
- [fact] **could**. *Steps 2 and 4.* The text says "On the **door frame**". PLAN §0 and the drawing say the hands grab the **door handle** (bar). Pick one word to match the drawing.
- [clarity] **should**. *Step 3.* "Right foot **closer**" leaves open: closer to what? Fix the titles: "Right foot to the door edge" and "Left foot next to the right".
- [clarity] **could**. *Intro.* There is no "why" for "right side first". Add one line: it depends on which side the door is on, and on our aircraft it's the right side first <q-check/>.
- [screen] **should**. *At 375 px.* The drawing renders **below** the 6-step list, so tapping a step changes a picture that's off-screen. Fix: on phone, put the drawing above the list and make it sticky (also see `count` and `flow`).
- [screen] **could**. *Desktop.* The drawing card is ~40 px shorter than the list, leaving empty space. Make it `position: sticky` so it follows the list.
- [lang-es] **could**. *Title.* "Colocarse en la puerta (climb-out)" is fine. To match the tú style, "Colócate en la puerta (climb-out)".
- [quiz] OK.

## Chapter 4: Exit count (`count`)

- [fact] **should**. *Steps 1–2.* "first / second instructor" is vague, and the callout keeps "who you check first" as a check. The common USPA meaning is: "**Check in**" = the instructor **inside** the plane (reserve side), "**Check out**" = the one **outside** (main side). Write that, and keep `<q-check/>` only for our DZ.
- [fact] **should**. *Step 6.* USPA's launch cue is "hips **into the relative wind**, head and eyes up". The app says "Hips forward", while the body chapter says "hips **down toward the ground**" *right after exit*. Fix: in `count` keep "hips forward, into the wind (toward the prop)". See the body-chapter fix for the rest.
- [clarity] **could**. *Steps 4–6.* There is no "why" for the rock. Add one line: "the rock gives the instructors your timing so all three leave together."
- [screen] **should**. *At 375 px.* The exit drawing is below the list, so the same off-screen problem as `climb`.
- [screen] **could**. *Watch pills at 375 px.* "2:14 · Exit count explained · Skydive Fundamentals" wraps into three ragged columns. Fix: put the credit on its own line under the label on narrow screens. This applies to all `watch` blocks.
- [quiz] OK. Q2 checks order and Q3 checks the body; each has one clear answer.

## Chapter 5: Body position: the box (`body`)

- [fact] **should**. *Intro and step 1.* "Right after exit: push the hips **down toward the ground**" is wrong right after exit. You leave facing the relative wind, not the ground. USPA: hips into the wind on launch, then a relaxed arch into belly-to-earth. Fix: "On exit: hips **forward into the wind**, chin up. Seconds later you're belly to earth, and the hips are the lowest point." The same applies to the "Arch" signal card ("forward / down": say it once and explain it).
- [fact] **should**. *Legs step.* The USPA neutral position is: knees about shoulder width, legs **slightly extended (knees ~45°)**, toes pointed. Lead with that. Move "You said 'legs together and up'" into the `<q-check/>` note. It contradicts the toe-taps card ("legs too wide") only if read as the rule.
- [clarity] **should**. *Legs step, and the "Arch" signal card.* "You said …" / "the thumb down you remembered" are notes to the owner, not study text. They read oddly and won't work if the app is shared. Move them into the PLAN's "Facts to verify", or into a muted "my note" line.
- [clarity] **could**. *Body list.* Add "**Relax, breathe**" (USPA's cue is "altitude, arch, legs, relax"). Stiffness is the most common student fault in the research notes.
- [lang-ru] [lang-uk] **should**. *Thumb-to-ear step.* "разведи руки **обратно**" / "розведи руки **назад**" read as "move your arms backward". Fix: RU "верни руки в стороны", UK "знову розведи руки в сторони".
- [screen] **could**. *Arch clip.* The poster shows two women standing in a room, not the arch. Pick a frame with the arch.
- [quiz] **could**. *Q1 and Q3.* Both test "hips down / lowest point". Replace Q3 with legs ("Where are your knees? About shoulder width") or with relax.

## Chapter 6: Freefall dive flow (`flow`)

- [fact] **must**. *Row 1 and the part ranges.* The exit altitude is "~13,500 … not confirmed", but the DZ's own AFF guide (Part V) says **13,000 ft** for students. Fix everywhere: "13,000 ft" (Part I and II ranges, flow row 1 with value 13, Hero tape, SkyRail max). Drop the check, or keep "13,000 (DZ site)".
- [fact] **should**. *Row 1.* USPA's first item after exit is "**breathe**, check body position, then COA". Add "Breathe." to the row.
- [fact] **should**. *5,500 row.* Wave off is missing. Fix: "**Wave off, look, reach, throw**. Then count to five (Part III)." This matches the Part III clips and USPA Cat A.
- [fact] **should**. The flow has no USPA safety rule for losing the instructors. Add a line or a muted row: "Lost **one** instructor: carry on. Lost **both**: pull now." Today it only appears in a Part IV quiz.
- [fact] **should**. *"Hold the box" row.* "check altitude every 3–5 s" does not match the Hero "3 s". Fix: "every **3 s**" (the owner's number and USPA's). The "some schools ~5" note can stay in the altitude chapter only.
- [clarity] **could**. *COA rows.* "chin up" is really the **horizon/heading** look; the clip caption says "horizon, altimeter, instructors". Fix: "chin up (horizon)".
- [lang-ru] [lang-uk] **should**. *PULL row.* RU "**выдерни**" and UK "**витягни**" mean "yank out", while Part III says "выбросить / викинути" (throw). Use "выбрось" / "викинь".
- [lang-uk] **could**. *Lock on.* "Тільки висотомір" here, but the Hero says "лише висотомір". Pick one.
- [screen] **should**. *At 375 px.* The altimeter dial renders below all 7 rows, so "Tap a line to see the altimeter" shows nothing you can see. Fix: dial first and sticky on phone.
- [screen] **should**. *Altimeter dial.* 0 is bottom-left on a 270° sweep. Real wrist altimeters (the one you'll wear) have **0 at the top**, clockwise round the full circle. Draw it that way so the picture trains the real glance.
- [screen] **could**. *Desktop.* The dial card stops halfway down the list, leaving a large empty column. Make it sticky.
- [screen] **could**. *Middle rows.* Their altitude column shows only "↓". Approximate numbers ("~12,500") or nothing would read better than a lone arrow.
- [quiz] **could**. *Q3.* "What happens at 6,000?" repeats the altitude chapter's Q2. Replace it with "What do you do between every block? Check altitude."

## Chapter 7: When to check altitude (`altitude`)

- [clarity] **should**. *Callout bullet 2.* "Your 'every 3' is USPA's rule" repeats rule card 1. Delete it.
- [clarity] **could**. *Last rules block.* The 6,000 / 5,500 cards repeat the flow chapter. That's fine for drilling, but add the missing "why": "the pull takes ~1,000 ft, so lock on at 6,000 leaves time to wave off and pull at 5,500" (USPA).
- [fact] **could**. *5,500 card.* "Our pull altitude is 5,500, not 5,000." Part V says 5,500 is for **category A**. Add "(category A; ask for later categories)".
- [fact] **could**. *Rule 4.* The `<q-check/>` on "instructor signal" could go: USPA and the filmed signals both have it (wrist tap).
- [screen] **should**. *Rule cards.* Card 1 has a big "3–5 s" above its icon, while cards 2–4 have no big text and 1–2 words. On desktop they look unrelated. At 375 px the 2×2 grid leaves cards 2–4 mostly empty. Fix: big "3 s" and the text as one wide card on its own row, with the other three as a compact list (or one column on phone).
- [quiz] OK. Each has one clear answer.

## Chapter 8: Hand signals (`signals`)

- [screen] **should**. *Pull card.* The `key` tone is invisible. `.card.key` is an inset 3 px top bar, and the clip image covers it. Fix: accent border round the whole card, or an accent "Pull" label.
- [screen] **should**. *At 375 px.* Twelve full-width cards make ~4,500 px of scrolling. Fix: 2 columns on phone (the hand clips still read at ~160 px).
- [screen] **could**. *"Shaking you on exit" card.* It has no picture, so its row on desktop has an empty top. Fine, but a simple icon would even it out.
- [clarity] **could**. *Arch card.* "Push your hips forward / down": the slash is unclear. Use "hips forward (toward the ground)".
- [clarity] **could**. *Intro.* The 12 cards come in recording order. Order them by importance: Pull, Check altitude, Arch, Legs out, Relax, then the rest.
- [lang-uk] **could**. *Check altitude card.* "плескання по зап’ястю" sounds odd. "поплескування / удар по зап’ястю" is more natural.
- [lang-es] OK. The filmed-signal names and actions match EN.
- [quiz] OK. Q1 (pull), Q2 (wrist), Q3 (V) and Q4 (thumb down) each have one clear answer. Q4's answer is still marked "confirm with your school", which is fine.

## Cross-chapter

- [lang-ru] [lang-uk] **could**. Exit altitude is "Высота **отделения**" / "відокремлення" in Part II and the Hero, but "Высота **выброски**" / "викидання" in Part V. Use one term.
- [clarity] **could**. The quiz button says "**Next step**" (`ui.ts` `next`, shared with the climb/exit widgets). In a quiz, "Next question" would be clearer, so split the string.
- [screen] OK. No horizontal overflow at 375 px. Dark mode is readable in all 8 chapters. Quiz feedback (red/green and the "why") works.

---

## Top 5 to fix first

1. **Exit altitude 13,500 vs 13,000** (flow row 1, Part I/II ranges, Hero, SkyRail). Use the DZ's published 13,000 everywhere.
2. **"Hips down toward the ground right after exit"** (body chapter, Arch card). Exit cue is hips **forward into the wind**; belly-to-earth comes seconds later. Make `count`, `body` and `signals` say the same thing.
3. **Missing USPA safety lines in the flow:** wave off at 5,500, breathe after exit, "lost both instructors → pull now", and in the plane "container opens in the plane".
4. **Phone layout of the interactive widgets** (climb drawing, exit drawing, altimeter). They sit below their lists, so tapping a step changes nothing visible. Put them first and sticky. Also draw the altimeter with 0 at the top, like the real one.
5. **Climb clip opens on the title slide** ("2 practice handle throws"), and the **Pull signal's key tone is invisible**. Re-cut the clip from ~0.2 s and give the key card a visible accent.
