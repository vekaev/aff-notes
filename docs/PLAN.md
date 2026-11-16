# AFF notes — plan

Personal study app for AFF (Accelerated Freefall) after the ground course at Skydive California (Tracy, CA).
For personal use for now; maybe later shared with the dropzone, or turned into an app for beginner skydivers.
Every request from the owner goes here first. `[x]` = in the app (content tests pass); `[ ]` = not done.
Seen on screen 2026-11-16: hero, climb-out, hand signals, deploy + canopy check, landing pattern, EP, malfunctions
(desktop, light, EN); canopy check, obstacles, a chapter test (phone, dark, RU).

## Waiting on you
- Send the dropzone the email asking for the ground-school slides? Draft: `docs/email-draft.md` (not sent).

## Owner decides later
- Publishing: **private GitHub repo only** (vekaev/aff-notes, owner 2026-11-16); the app itself is not published. A web version would need the clips replaced by links or own footage.
- Public version for the dropzone / other students (needs own footage or licensed clips instead of YouTube cuts).
- Native app version (iPhone) built on the same content files.

---

## 0. Round 2 (owner, 2026-11-16, evening)
- [x] Keep working through this plan: autopilot task `autopilot-aff-notes`, 9:30 and 21:30 daily.
- [x] "Test yourself" as cards: one question per card, next/previous, score.
- [x] Parts and chapters visibly separated: full-width tinted band per part, cover with roman numeral, icon and
      contents; accent tick per chapter; header takes the part's tint (design review applied).
- [x] Icons where there was only text: plane rules, gear (+ 4-check timeline), altitude rules, obstacles.
- [x] Less wall of text: every chapter rewritten as short bullet lists with bold key words (helpers, all 5 files).
- [x] Gear chapter drawing of the rig (design review #12). 2026-11-16 autopilot: "Know your rig" — back and front
      drawing, tap one of 8 parts (reserve, main, pilot chute, AAD, red, silver, three rings, straps) and it lights up.
- [x] Climb-out drawing: hands grab the door handle and stay on it as the body moves.
- [x] Videos open inside the page (player at the right second), not a new tab; same for the "watch" links.
- [x] Exit count: steps clickable to see each pose (check in, check out, …).
- [x] "Hide the names" button renamed to "Test yourself: hide the names" with a hint.
- [x] Design review by a separate agent; new palette (paper vs card contrast), posters for clips, quiz styles.
- [x] Text review agents: all 5 content files reviewed in EN/ES/RU (~700 fixes; terms unified).
- [x] More research: where people get injured → `docs/research/injury-data.md`; 4 bar charts in the injury chapter (phase,
      body region, leg, landing causes); fixed 73–90% → 73–88%, ankle 30–60% (unsourced) removed, the 20% is tandems.

- [x] New first screen (owner picked A + C + D): the jump as a clickable picture, continue where you stopped with
      test progress, and the key numbers as cards.

- [x] Scroll progress as a jump: a skydiver falls down a rail on the right (sits in the plane, flies the box,
      hangs under the main, red reserve in emergencies), lands among trees and houses, cheers with confetti;
      the rail replaces the scroll bar (click or drag).
- [ ] At the very end the jumper also dances (today: arms up + confetti only).

## 0b. Round 3 (owner, 2026-11-16, night)
- [x] Gradient between part bands (and smoother in dark: lighter dark bands, oklab fade).
- [x] Jump picture redrawn full width + one-time flight animation with replay; box pose (seen from above) in
      freefall, upright under canopy; works on phones.
- [x] Number cards → altimeter tape in jump order + two timers.
- [x] Climb-out clip bigger (single clips full width, title slide cut); step 6: head and chest out of the door.
- [x] Scroll rail: plane drawn with the jumper in the door; smoother scrolling (transform, no re-render per frame).
- [x] Clip cards fully clickable → in-page player.
- [x] Key words: plain bold (the highlighter band was hard to read).
- [x] Header: frosted glass tinted by the part underneath, plain paper over the first screen; settings chips in header colour.
- [x] Language menu that scales to more languages + theme button (system/light/dark) with an instant tooltip.
- [x] Ukrainian everywhere: interface and all 5 content files (~950 strings), type-checked like the others.
- [x] First screen text rewritten, sentence case: "Your first jump, step by step."
- [ ] Other headlines are still lowercase (Stoic style). Owner disliked lowercase on the first screen — same everywhere? (ask)
- [x] Real "what went wrong" videos: new chapter with 13 clips (low turns, flare, wind, obstacles, collision, AFF freefall,
      cutaway), each with what happened + the lesson + the original in the in-page player (docs/research/incident-videos.md).
- [x] Card grids redesigned: top-left aligned, icon + title on one row, equal heights; gear checks as a numbered row with arrows.
- [~] Section-by-section review by 3 helpers (docs/review/), then fixes.
- [ ] PWA and sharing: favicon, preview image, search/social tags, manifest, offline, accessibility pass, security headers.
- [x] Private GitHub repo vekaev/aff-notes (private), autopilot pushes there.

## Facts to verify (doubts raised by the text reviewers; check against sources, then fix or mark <q-check/>)
- [x] Arms 90/90 = thumb and pinky: confirmed by the video's narration (lines along thumb and pinky form 90°).
- [ ] Slider stuck: we say pump the rear risers; many sources say pump the toggles/brakes.
- [ ] "~4,000 cutaways a year, about one per 700–800 jumps": check against USPA jump totals (~3.5 M → ~1 per 875).
- [ ] "5–6 s at full brakes without stalling" depends on the canopy.
- [ ] Water landing wording vs the current SIM 4-1; "flare about 10 ft" before a building: height or distance?
- [x] Tips now say "category A/B/C" like the rest of the app.
- [x] Source links for the injury charts (Sweden 2007, USPA, Netherlands 2024).

## 1. Content the owner dictated (must all be on the page)

### Part I — plane and exit
- [x] Seatbelt on from take-off until told; helmet on; instructors lead you to the door.
- [x] Aircraft emergency: what to do by altitude (details forgotten → marked "check"; USPA options added).
- [x] Gear: you don't pack; main by a packer, reserve only by a certified rigger, sealed; AAD; 4 gear checks. (msg 10)
- [x] Climb-out, 6 steps: face the prop · right hand · right foot closer · left hand · left foot closer · head out, chin up, chest out.
- [x] Exit count: "Check in" → OK, "Check out" → OK, then rock out–in–out ("Prop, up, down, arch") and go.

### Part II — freefall
- [x] Body position after exit: hips down/forward, arms "square", thumb-to-ear check, legs (owner said "together and up" → check).
- [x] Altitude checks: every 3 s (USPA; the owner's "every 3") / ~5 s; before and after every maneuver; when in doubt; on the instructor's signal (the forgotten 4th).
- [x] Circle of awareness: altitude → left instructor → right instructor → chin up → altitude (English name + explanation searched).
- [x] 3 practice touches: left hand over the head, right hand back to the pilot chute; then COA again.
- [x] 6,000 lock on; **pull at 5,500** (corrected from 5,000).
- [x] Hand signals, real filmed hands, ~12+: pull (one finger), arch (thumb down), legs out, good, relax, arms 90/90, toe taps, COA, practice touch, chin up, check altitude (wrist), shaking on exit.

### Part III — under canopy
- [x] Pull: right hand to the pilot chute "ball" at the bottom right; count 5 ("one thousand … five thousand") before judging.
- [x] Canopy check: there / square / stable / steerable; unstow toggles, turns, practice flare.
- [x] Holding point (by the playground): over it at 2,000, hold/circle 2,000 → 1,000; **at 2,500 decide** if you can reach it and left- or right-hand pattern.
- [x] Pattern: 900 downwind → 600 base (90°) → 300 final into the wind → full flare at ~10 ft (3 m); wind usually from the north.
- [x] Turn limits: above 1,000 ≤ 180°; 1,000–300 ≤ 90°; below 300 ≤ 45° (owner's final version).
- [x] Low turn explained (turned too sharply right at the end) with a picture + video.
- [x] Four hazards + what to do: trees (half brakes, feet together, protect face, wait), water (half brakes, breath, out of the harness, swim away, leave gear), buildings (flare/PLF, along a wall not into it), power lines (parallel, touch nothing, nobody touches you, wait). Never save the gear.
- [x] Final: full flight, hands up, canopy level, legs together; flare smoothly as a count (5-4-3-2-1), not 5 full seconds; arms: elbows back, hands close; look at the horizon, not the ground.
- [x] PLF: 5 points of contact, roll along the side (owner said "stomach, back" → corrected), video.
- [x] Ground-school test page Q26–32 (from the owner's photo) with answers.

### Part IV — emergencies
- [x] Two parachutes: main and reserve; the reserve flies like the main.
- [x] EP: look red, (grab), look silver, (grab), peel red, pull silver, arch, check reserve; one-hand vs two-hand versions; video.
- [x] Owner's unclear bit "clear the lines right to left toward the shoulder" → listed as a question.
- [x] Decision altitude 2,500; hard deck 1,000; 5-second rule; "two tries" for fixable problems.
- [x] Malfunction families: nothing out (hard pull, PC in tow, bag lock), out but not flyable (streamer, line-over / "caught on top", spinning), fixable (line twists: risers apart + kick, don't release toggles; slider; end cells). First-person clips.
- [x] Two canopies: biplane (don't cut away), side by side (don't cut away), downplane (cut away main); videos.

## 2. Research the owner asked for
- [x] COA / exit count / hand signals in English (USPA, dropzones).
- [x] Reddit + USPA: why people get injured or die → chapter "how people actually get hurt".
- [x] Deep research per stage (YouTube, Reddit, USPA, coaches): mistakes, tips, videos → `docs/research/Ошибки и советы для студентов AFF.md`, chapter "mistakes and tips".
- [x] Public tutorial videos with timestamps for every stage → clips + "watch" links.
- [x] The dropzone at 25001 Kasson Rd, Tracy = Skydive California → `docs/research/skydive-california.md`, Part V.
- [x] Reading list (USPA online ground school, dive flows, SIM 4-1, Brian Germain, Parachutist) → Part V "read and watch next".
- [ ] Check every owner statement against the sources and list the corrections in one place (partly done inline as "check").

## 3. Visuals
- [x] Real footage instead of drawings (silent looping clips, 43 cut).
- [x] Hand signals as real hands; malfunctions first person; flare, landing, PLF, EP, two canopies, deployment, COA, body position.
- [x] Keep the climb-out drawing (owner found it clear); exit count, altimeter, landing pattern map, low-turn diagram.
- [ ] Obstacles: no footage yet (find training clips for tree / water / power-line landings).
- [ ] Aircraft emergency, climb-out on our aircraft type: no footage.

## 4. App and design
- [x] Real app: Vite + React + TypeScript; content in typed files with en/es/ru side by side (missing translation = build error).
- [x] Languages: English (default), Spanish, Russian, in that order; remembered; no layout jumps (system font, fixed video boxes).
- [x] Stoic design: paper, ink, white cards, bold lowercase headlines with a period, black pills, lots of air; chapters kept.
- [x] Reading progress bar at the top.
- [x] Test after each chapter; passed tests remembered; score in the header.
- [x] Fix: Russian text overflowing in the canopy check list.
- [ ] Check every chapter in all 4 languages, light and dark, phone width (partly done: spot checks only).
- [x] Commit (local git).
- [x] Publish: decided — private GitHub repo only; the app is not published (clips are other people's videos).

## 5. Other
- [x] Email to the dropzone asking for the slides: draft only (`docs/email-draft.md`).
- [x] Moved the work out of the temporary folder into `~/Documents/dev/aff-notes`.
