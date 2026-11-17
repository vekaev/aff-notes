# AFF notes — plan

**Mission.** A guide that helps people jump safely: everything a student needs from the plane door to the landing,
true to the sources, grouped the way a jump happens, short, readable and shown with real footage. If one student
remembers the right thing at the right second because of it, it was worth it. Every change is checked against that:
is it true, is it clear, does it help someone on their next jump?

Personal study app for AFF (Accelerated Freefall) after the ground course at Skydive California (Tracy, CA).
For personal use for now; maybe later shared with the dropzone, or turned into an app for beginner skydivers.
Every request from the owner goes here first. `[x]` = in the app (content tests pass); `[ ]` = not done.
Seen on screen 2026-11-16: hero, climb-out, hand signals, deploy + canopy check, landing pattern, EP, malfunctions
(desktop, light, EN); canopy check, obstacles, a chapter test (phone, dark, RU).

## Owner requests: the inbox (every ask lands here first, nothing is dropped)
Rule: each thing the owner asks for, in any message, gets a line here **before** work starts, with the date and the
owner's words in short. Status: `[ ]` open · `[~]` in progress · `[x]` done and seen on screen (commit) ·
`[?]` waiting on the owner (the question is under "Waiting on you"). The 2-hourly run and the autopilot work the open
lines top down; a line is closed only when it's done and seen, or the owner drops it.

2026-11-16 (chat, outreach):
- [~] Research every skydiving school / dropzone worldwide (US, Australia, UK, Canada, Europe, rest of the world),
      plus coaches, gear makers, associations: one CSV (docs/outreach/contacts.csv), public business contacts only.
- [~] Also creators and communities: YouTube, Instagram/TikTok, blogs, podcasts, Reddit, Discord, Facebook groups,
      forums (where to post, their rules). Goal: as many contacts as possible (owner: "thousands").
- [~] Research how to ask strangers for expert help so they answer (cold outreach, wording, subject lines), and the
      rules for bulk email (CAN-SPAM US, GDPR/PECR UK-EU, CASL Canada, Spam Act Australia).
- [ ] Rewrite the email: the owner's mission (help people get the A license, fewer injuries and deaths, contribute
      to the sport) and the asks (feedback, cross-check facts, books, links, saved materials, what matters most,
      forums, new ideas, a community chat or calls, a version personalised for their school). Plus a Reddit post.
- [~] Owner (2nd msg): go wider and deeper: every country (Nordics, Italy, Russia, Ukraine, Africa, Latin America,
      Asia…), look for ready-made lists (CSV, directories, datasets, Wikidata), creative directions (Reddit, clubs,
      tunnels, events, researchers, non-English communities). Second wave of agents, raw files in docs/outreach/raw.
- [x] One big copy-paste prompt for other deep-research tools (ChatGPT, Gemini, Perplexity, Grok…) that returns the
      same CSV, so the owner can run it elsewhere and compare (docs/outreach/deep-research-prompt.md).
- [?] Before sending to anyone: private link ready, clips question (the app holds cuts of other people's videos),
      sending tool and pace. Nothing is sent without the owner's OK.

2026-11-16 (chat):
- [x] Remove "decide by 2,500" under part IV of the jump picture (bb861dd).
- [x] Content general, not tied to Tracy; Skydive California only in Part V (6eea713).
- [x] Find the dropzone's email, draft the review/help email in the owner's words, don't send (docs/email-draft.md).
- [?] Private link only the dropzone can open (Cloudflare Access proposed); owner removes the public Vercel site first.
- [x] Future ideas into "Owner decides later": open source, ML model for packing mistakes.
- [x] Sections felt cramped: more space, margins, sizes (6eea713).
- [x] Incident cards: the clip opens the full YouTube video (6eea713).
- [x] Numbers tape: 2,500 = can you reach the holding point; emergency numbers separate (6eea713).
- [x] Real pictures next to every drawing, the rig first: rig back/front clips and the 8 rig-part photos placed;
      exit (Part I count), altimeter (Part II flow, poster now shows the dial), canopy-check POV (Part III deploy) and
      pattern POV (Part III pattern) placed 2026-11-16 14:00 run, seen EN/ES/UK/RU, light/dark, desktop/375 px.
- [?] Photo of the dropzone map from the ground course → next to the pattern drawing and in Part V (owner sends it).
- [x] Phone scrolling jumped: rail no longer catches touches (6eea713). Owner to confirm on the iPhone.
- [x] Header: title left, language and theme right (6eea713).
- [x] Independent expert fact-check of every line (6 reviewers, docs/review/expert/), fixes by fixer agents
      (docs/review/fixes/): Parts II, III done (8a2c519); I, dropzone, IV injuries in progress; IV emergencies next.
- [x] 24-hour finishing run every 2 h, then it stops itself (task aff-notes-finish-review).
- [x] Page guard and curriculum reviewer agents (.claude/agents/); mission at the top of this plan.
- [x] Altimeter unreadable: redrawn, reading under the dial (f4a136c).
- [x] Jump picture labels not vertically centred (bb861dd).
- [x] Video that can't be embedded: opens on YouTube, plus a button under every video (bb861dd).
- [x] Altimeter needle direction explained in the legend (counterclockwise when falling) (bb861dd).
- [x] Holding point: S-turns across the wind (east–west with a north wind), not circles (68e8d72).
- [x] Header highlight wrong after clicking a part (scroll stopped 8 px short of the line); fixed, all 5 parts checked.
- [x] Make sure every ask is tracked and done: this inbox + rule in CLAUDE.md + the 2-hourly run reads it.
- [~] Curriculum proposals: new chapters (landing off the DZ and after landing; other canopies; wind for students),
      decision-style test questions, "act now" rules where they're used. One per run, sourced.
      16:00 run (29068bb): Part II "When freefall goes wrong" (proposal #2: early container opening, pilot-chute hesitation,
      can't find the handle, the AAD is not a plan, 4 decision questions; USPA SIM 4-1 E + Cat A).
      20:00 run: #3 landing priorities and #5 low-turn recovery were already in Part III (low-turn chapter); built #4
      "Traffic: other canopies around you" in the pattern chapter (after opening steer away with rear risers, look before
      you turn, turn right / head-on both right, lower canopy has right of way but fly the same pattern; USPA SIM 4-1 + Cat G
      academics) and 2 decision questions in the Part III test (head-on canopy; low turn at 150 ft).
      22:00 run: #6 "Landing off the dropzone, and after you land" in the obstacles chapter (field by 2,000 ft, poles not
      wires, fences in straight lines, turbulence behind trees, into the wind but no low turn, PLF; livestock, gates, crops,
      report damage; USPA SIM 4-1 G re-read at uspa.org/SIM/4-1) + 2 decision questions; "tell the DZ" and "wind drags you
      on the ground" are not in the SIM → <q-check/> + 2 instructor questions. Next: #7 after you pull silver.
- [x] EP / FIX labels on the malfunction groups: EP links to the emergency procedure with a hover hint
      ("how to do the emergency procedure →"); FIX explains "two tries only, keep checking altitude, not fixed by 2,500 → EP".
      Make "two tries + watch altitude" stand out in the malfunctions chapter.
- [x] Numbers block: say what the numbers are (feet above the ground), "ft" next to each altitude, no word breaks.
- [x] Know your rig: a real photo for each of the 8 parts (reserve, main, pilot chute handle, AAD, red handle, silver
      handle, three rings, straps), shown next to the drawing when the part is picked.
- [x] Re-check every owner message of this whole chat (before and after the summary) against this inbox; add what's
      missing; result in docs/review/owner-asks-audit.md.
- [x] Rule: every owner message is first split into tasks / subtasks / questions, written here, and the reply points to
      these lines (CLAUDE.md + ~/agent-tools/rules/working.md).
- [x] Final check at the end of the app: a "test yourself on everything" button (mixed decision-style questions from all
      chapters), a list of open self-answers to show an instructor, and "practise with your AI": one button copies a
      ready prompt (all key facts + quiz instructions) to paste into ChatGPT / Claude / any assistant (2026-11-16).
- [x] A reusable team for learning any new skill or certificate (diving, pilot, driving, drift…): research (Reddit,
      YouTube, pros, official manuals), a study app like this one, expert fact-check, curriculum review, page guard,
      notes capture, final exam + AI-tutor prompt, then reinforcement after the course. Skill `/study` in agent-tools,
      mission: knowledge that can save a life (2026-11-16). Done: ~/agent-tools/skills/study (+ /factcheck, /autopilot sprint).
- [~] Page guard findings (docs/review/page-guard/2026-11-16-full.md). Done 14:00 run: "ft" on the big altitude cards
      (altitude, EP, dropzone), count chips labelled "Count, not altitude", hero ring line "x/20 tests passed", UK
      "відокремлення"; "ft" on the dive-flow and pattern timelines and the altimeter legend (page guard
      docs/review/page-guard/2026-11-16-1415.md). Still open: bare altitudes in prose; big numbers per language format
      ("2,500 ft" over "2 500 футов"); RU "выброска" vs "отделение"; "ft" on every altitude everywhere (cards, prose,
      altimeter rows, legend, pattern labels, hero axis); label the canopy-check count chips as the count, not altitudes;
      one number format per language (UK/RU "5 500" vs "5,500"); translate the English injury-chart sources in ES/UK/RU;
      UK "викидання" → "відокремлення"; label the hero "0/20" ring; phone: sticky exit-count drawing covers the steps.
      16:00 run done (29068bb, seen headless EN/ES/UK/RU, light/dark, 375/1280; page guard 2026-11-16-1615.md): "ft" in prose (dropzone cards, altitude, pattern, malfunctions, mistakes, quiz answers), big numbers
      and timelines per language (UK/RU "2 500 фт", "3 с"), map labels and altimeter legend with units, RU "выброска" →
      "отделение", injury-chart sources translated, hero ring shows done/total inside (count no longer twice), exit-count
      picture smaller on phones, pattern clip poster shows the drawn pattern.
      18:00 run (page guard 2026-11-16-1615.md open problems 1–10): "ft" on the last bare altitudes (flow, altitude
      chapters, all 4 languages); ffwrong and mal quizzes no longer put the right answer in A again and again (now BCAC,
      ABCC); first-screen card label without "bad main:" repeat; height tape gives its first column more room; percent in
      each language's format (1,9 %); category letter stays with its number ("E 4 500 футів"); long instructor
      questions split one per line. #1 altimeter caption, #4 "Prop" quotes and #6 list heading were already fixed in 29068bb.
      Page guard 2026-11-16-1800.md: all of the above seen headless EN/ES/UK/RU, light/dark, 375/1280. Also fixed: UK/RU
      quiz end text after a wrong answer read as "chapter passed" (now "passed when all answers are right"; checks pass,
      not yet seen on screen). 20:00 run: the other long instructor questions split one per line (aircraft emergency, which
      aircraft, wave-off/D/E/D-1, radio); seen headless by page guard 2026-11-16-2000.md, which also asked for: wrong quiz
      options as long as the right one (done), same words ("Hit early", ES "esos frenos") (done). Still open: split the
      remaining long instructor questions (two canopies out, on the map, flare one/two-stage, ES EP, hard pull); ranges like "6,000 or 5,500 ft" carry the unit once (fine to read? owner).
- [?] Big reorder (Part IV "act now" first, statistics and real cases in their own part, EP button in the header): ask.

Added by the owner-asks audit (docs/review/owner-asks-audit.md):
- [x] Email draft: also ask for the ground-course presentation (slides, pictures, videos) the owner wanted from the dropzone (from 2026-11-16)
- [~] Hand signals: owner remembers about 15 instructor signals from the course, the app has 13; find the missing ones (USPA Cat A list, ground course) or ask (from 2026-11-16).
      16:00 run: research done (docs/research/hand-signals-gap.md): the USPA chart (SIM App. A) has 11, the app covers 9;
      missing **legs in** and **OK** (+ wave-off as a student signal). Needs filmed hands for the two new cards; the
      instructor question (how they show legs in / OK, closed fist = practice touch or pull now?) added to "questions".
- [x] Part IV emergencies expert fixes (both reports, the safety items in docs/review/fixes.md) applied, checked and committed; the expert fact-check line above is ticked but this scope is still todo (from 2026-11-16)
- [x] Collect the ask-owner questions from every fixer log (docs/review/fixes/*.md) into "Waiting on you", one question each with a recommended answer; fixes.md says they are there, they are not (from 2026-11-16)
- [x] Put the two open questions under "Waiting on you": lowercase headlines everywhere (§0b) and the big reorder (line above) (from 2026-11-16)
- [x] Run the page guard (.claude/agents/aff-page-guard.md) on all chapters: never run yet, docs/review/page-guard/ doesn't exist (from 2026-11-16)
- [x] Tidy stale ticks: §0c "Two more checkers" and "24-hour finishing run" are [ ] while this inbox has them [x] (from 2026-11-16)

### Standing preferences (apply to all future work)
- Real footage or photos over drawings; a picture or clip next to every piece of text; moving clips over still images.
- Lists with bold key words, not paragraphs; plain bold, no highlighter.
- Don't save space: generous margins, gaps and text sizes; calm and readable, not stark white.
- Content stays general ("your dropzone"); one dropzone's facts only in Part V.
- When the owner states a fact, check it against the sources and tell him plainly where he was wrong.
- For a redesign, propose a few options first and let the owner pick; animations smooth and not distracting.

## Waiting on you
- **Instructor briefing:** the app's last Part IV chapter "questions for your instructors" (18, by jump phase) holds every
  school-specific doubt from the fact-check (count 3 or 5 after the pull, where to look in the flare, aircraft-emergency
  altitudes, which instructor is outside, hard pull: reserve only or cut away first, RSL/MARD, reserve handle type,
  wave-off count, the shake on exit, AAD model). Bring the answers; each fixes a `check` badge.
- Hand signals: add **legs in** and **OK** (USPA chart, SIM App. A) as two new cards? They need filmed hands; the
  instructors' version (and whether a closed fist means practice touch or pull now) is in the questions chapter.
  Recommended: yes, add both once a clip is found.
- Ground-school test photo: Q27 key says 300 ft or 1,000 ft? (Q28 already asks about 300.)
- Lowercase headlines everywhere (Stoic) or sentence case like the first screen? Recommended: sentence case.
- Big reorder: Part IV "act now" chapters first, statistics and real cases in their own part "learn from others", an
  always-visible EP button in the header? Recommended: yes.
- Email to Skydive California (info@skydivecalifornia.com, checked on their contact page): review request + offer to
  help for free + "what would you add for your school?". Draft: `docs/email-draft.md` (not sent). Needs the private link.
- Private link only the dropzone can open: Cloudflare Pages + Cloudflare Access (email one-time code, allow-list)?
  Needs your Cloudflare account and OK; the clips are other people's videos, so keep the allow-list small.

- Photo of the dropzone map the instructors drew in ground school (holding point, pattern, landing area): send it and
  it goes next to the pattern drawing in Part III and into Part V.

- aff-notes.vercel.app (public, created 2026-11-16, auto-deploys on push): owner removes it (2026-11-16).

## Owner decides later
- Publishing: **private GitHub repo only** (vekaev/aff-notes, owner 2026-11-16); the app itself is not published. A web version would need the clips replaced by links or own footage.
- Public version for the dropzone / other students (needs own footage or licensed clips instead of YouTube cuts).
- Native app version (iPhone) built on the same content files.
- Reuse for other dropzones: content is now general ("your dropzone"); dropzone facts live only in Part V. Needs rights
  from the clip creators (or own footage) before anyone else gets it.
- Open source the app (code + content, without the YouTube clips).
- ML model that spots packing mistakes in a video of someone packing (idea, 2026-11-16).

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
- [x] Section-by-section review by 3 helpers (docs/review/), content fixes applied (parts I–V); screen findings partly done.
- [x] PWA and sharing: favicon (SVG + PNG), app icons incl. maskable, link-preview image (og.png 1200×630), description,
      keywords, Open Graph + Twitter tags, theme-color light/dark, manifest, service worker (app shell precached,
      clips cached on play + "Save everything for offline" button), skip link, aria-current, labelled player,
      security headers in vercel.json. Icons/preview regenerate with `node scripts/icons.mjs`.
- [ ] Verify the service worker in real Chrome/Safari (the app's built-in browser refuses to register it).
- [ ] When hosted: set VITE_SITE_URL in .env to the absolute URL so link previews show the image.
- [x] Private GitHub repo vekaev/aff-notes (private), autopilot pushes there.

## 0c. Round 4 (owner, 2026-11-16, late)
- [x] Jump picture: no "decide by 2,500" line under part IV.
- [x] Incident cards: wide, the video is a play button that opens the full YouTube video at the right second.
- [x] More air everywhere: one spacing scale (--s1…--s10), bigger gaps between blocks and chapters, more padding in
      cards, 15–16 px text in cards, list cards one per row on phones.
- [x] Content general, not tied to Tracy: "your school / your instructors / ask your dropzone"; Skydive California facts
      (north wind, holding point by the playground, turn limits 180/90/45) only in Part V, now "Your dropzone, example".
- [x] Phone scrolling jumped: the progress rail on the right edge caught the thumb and jumped the page. On touch screens
      the rail now only shows progress; the header re-renders alone when the part changes. No layout shifts measured.
- [x] Header: title left, part in the middle (numeral only on phones), language + theme pinned right.
- [x] Numbers stay with their units on one line ("5 s", "2 500 футов", "SIM 4-1"); quiz button "Next question";
      holding point: S-turns / figure-eights within the 180° limit (asked the instructors: circles allowed?).
- [x] Independent expert fact-check: `.claude/agents/aff-expert-reviewer.md` (an AFF instructor seeing the app for the
      first time, checks every claim against USPA SIM/BSR, manuals, Parachutist). 6 reviewers, reports in
      `docs/review/expert/`; then one list of fixes: clear ones applied, the rest asked.
- [x] Two more checkers: `.claude/agents/aff-page-guard.md` (page still works and reads well: every chapter, 4 languages,
      light/dark, phone/desktop) and `.claude/agents/aff-curriculum-reviewer.md` (what's missing, new sections, more and
      better tests, visuals). Reports in `docs/review/page-guard/` and `docs/review/curriculum/`.
- [x] 24-hour finishing run: task `aff-notes-finish-review`, every 2 hours from 2026-11-16 12:00 to 2026-11-17 10:00,
      then it switches itself off. Each run processes the open review findings and reports.
- [ ] Owner to re-check scrolling on the iPhone (the fix is seen in the emulator only).
- [x] Numbers tape fixed: 2,500 = can you reach the holding point (canopy plan), then 2,000 over it, 1,000 leave it;
      the emergency 2,500 (decide and act on a bad main) and 1,000 (no cutaway below) moved to their own red row.
- [x] Real footage next to every drawing (rig with its parts first, exit, altimeter, pattern POV, canopy check POV).
- [x] Email draft rewritten in the owner's words (review + free help + what to add); not sent.

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
