# Expert review: Part I "In the plane"   (2026-11-16)

Scope: `src/content/part1.ts` (chapters `plane`, `gear`, `climb`, `count`), the climb-out, exit-count and rig drawings
in `src/widgets.tsx` (`Climb`, `ExitCount`, `Rig`) and their labels (`src/ui.ts` `backView` / `frontView`), the
Part I numbers on the first screen (`Hero.tsx`), and the clips/links credited in Part I.

## Summary

Mostly sound and close to USPA Category A. Seatbelts, brace position, "parachute opens in the plane", the 100 ft walk-away,
the four gear checks, the handle locations and the 5,500 ft pull all match the sources. Four things need fixing before
the first jump. (1) The exit count says the **inside** instructor is on the **reserve** side and the outside one on the
**main** side. For a left-door aircraft (Caravan, Twin Otter) the published student material says the opposite.
(2) The aircraft-emergency list leaves out the "exit and open the **main** right away" band. Its "High: normal exit"
also conflicts with USPA Cat A ("ensure your parachute is open immediately"). (3) The 180-day reserve repack is
credited to USPA, but it is an FAA rule. (4) The AAD numbers are expert-mode numbers. A student-mode AAD fires higher
(about 1,000–1,300 ft), and it can also fire under a fast-spinning canopy, not only in freefall. The climb-out
sequence depends on the aircraft and cannot be checked from public sources. Skydive California flies a Caravan
(left door) and a Cessna (right door), so the student must confirm it.

## Findings

| # | sev | verdict | where (file:line, chapter) | the app says (EN, exact) | what's right, with source | fix (EN) | needs-owner |
|---|-----|---------|----------------------------|--------------------------|---------------------------|----------|-------------|
| 1 | safety | missing / misleading | part1.ts:59–72, `plane`, "Aircraft emergency" points | "**Low**: stay in, belt on, brace" / "**Mid altitude**: exit on command; the instructor may tell you to pull the **reserve** right away" / "**High**: normal exit" | USPA Cat A (uspa.org/skydiveschool/A, Aircraft emergencies) lists four possible commands: land with the plane, exit and use the reserve, exit and use the **main**, or a normal exit. For any emergency exit it says to "ensure your parachute is open immediately". A published DZ student guide (Alabama Skydiving, AFF student guide, ch. 2, "Aircraft emergency procedure") gives the bands as: below 1,000 ft land with the plane; 1,000–2,500 ft exit on the **reserve**; 2,500–5,000 ft exit on the **main**; above 5,000 ft exit as planned. The app has no "main right away" band. A student who hears "get out" at 4,000 ft could think "normal exit" and free-fall. ES/UK/RU say the same as EN (same gap). | Four points: "**Low**: stay in, belt and helmet on, brace" · "**Lower-middle**: exit on command and pull the **reserve** right away" · "**Upper-middle**: exit on command and pull the **main** right away" · "**High**: exit as the instructor says, maybe a normal exit". Keep "Your school's altitudes: <q-check/>". | yes: ask the instructors for the exact altitude bands at Skydive California and which aircraft they apply to |
| 2 | fact | wrong (for a left-door aircraft) | part1.ts:451 and 460, `count`, steps 1–2; also :505 callout; same in ES/UK/RU | "Look at the instructor **inside** the plane (reserve side)." / "Look at the instructor **outside**, in the door (main side)." | Alabama Skydiving AFF student guide, ch. 3 "Climbout and exit", Twin Otter (left door): the **left**-side jumpmaster (student's left = **reserve** side) "climbs out". The right-side (main-side) one stays inside. "CHECK IN" goes to the jumpmaster on your **right**, "CHECK OUT" to the one on your **left**. USPA Rating Corner "AFF tips" (uspa.org/uspa-news/rating-corner-aff-tips): with an Otter, the reserve side ends up "down and away from the plane" and the main side "just barely out the door". The app's own climb-out ("set up facing the propeller") in a left-door Caravan also puts the open door, and so the outside instructor, on your **left**. USPA Cat A only says "inside instructor" / "outside instructor", with no side. This pairing was added after the earlier review (`docs/review/part1-2.md` §Exit count); that suggestion has no source. | Drop the side words, or reverse them for the Caravan: "Look at the instructor **inside** the plane. They answer 'OK'." / "Look at the instructor **outside** the door. They answer 'OK'." Then add "(on a left-door plane: inside = your right, main side; outside = your left, reserve side) <q-check/>". | yes: which instructor is inside and which outside, on the Caravan and on the Cessna |
| 3 | fact | misleading | part1.ts:185, `gear`, AAD card (also rig part :218 and quiz :300) | "Fires the reserve **automatically** if you are still in freefall **too low** (around 750–1,000 ft, by model and mode)" | Student rigs run student mode. CYPRES 2 Student: about **1,000 ft** at ≥13 m/s (≈29 mph). 750 ft is CYPRES Expert at ≥35 m/s (cypres.aero Student spec; CYPRES 2 user guide). Vigil Student: 1,040 ft at ≥20 m/s (Vigil 2 manual). Vigil Cuatro Student: about 1,040–1,300 ft (Vigil Cuatro manual). A threshold of 13–20 m/s can trigger under a **spinning or badly malfunctioning canopy**, not only in freefall. Below the 1,000 ft cutaway hard deck (SIM 4-1) that can mean two canopies out. | "Fires the reserve **automatically** if you are still falling **fast** low down: on a student rig about **1,000 ft** or a bit higher, also under a spinning canopy. It is **only a backup**." Drop "750" from the student text, or add "(750 ft is the expert setting)". | no (yes, if you want the exact unit: ask which AAD and mode the student rigs use) |
| 4 | fact | wrong (attribution) | part1.ts:173, `gear`, Reserve card | "every **180 days** (USPA) <q-check/>" | The 180-day reserve repack comes from the FAA, not USPA: 14 CFR 105.43(b), only a certificated rigger, "within 180 days" for synthetic canopies. The number is right, so the check badge can go. ES/UK/RU also say "(USPA)". | "every **180 days** (FAA rule)" and remove `<q-check/>`. | no |
| 5 | fact | unsupported | part1.ts:325–357, `climb`, intro + six steps; drawing `Climb` | "<b>Six moves</b>, always in this order. <b>Right side first</b>, then left …" / "Set up facing the propeller" / "Grab the door handle (the bar by the door)" | No USPA text gives a hand/foot order. USPA Cat A only says to set up so that "your belly should face the relative wind". The order depends on the aircraft and the school. Skydive California's own site says it flies "Caravan and Cessna aircraft" (skydivecalifornia.com/facilities). A Caravan has a left door; a Cessna 182/206 has a right door, so the first side flips. "Always in this order" contradicts "depends on which side the door is on" in the same sentence. The credited Spaceland clip shows hands on an **overhead horizontal** bar, not a bar beside the door. | "Six moves in a fixed order. **On our aircraft** (<q-check/>): right side first, then left." Change "the bar by the door" to "the handle/bar at the door (on many planes it runs across the top of the door)". | yes: which aircraft AFF students jump, which way you face, which hand/foot goes first, which bar you hold |
| 6 | fact | unsupported | part1.ts:213, `gear`, rig part "Pilot chute handle" | "The little <b>ball</b> at the bottom of the container, <b>right side</b>. Right hand." | BOC on the bottom right is the norm (Alabama guide: "bottom right side of container"; USPA Cat A describes finding the main handle by feeling along the bottom of the container). Some student rigs use a ripcord or a different handle (not a ball). | Keep, and add "<q-check/> on your student rig" if not confirmed. | yes: handle type on the school's student rigs |
| 7 | wording | misleading | part1.ts:373, `climb`, clip caption | "Real climb-out and exit, step by step" | The clip (Skydive Spaceland Houston, "Skydiver Training Program: Dive Flow 1", ufz1HjyYs_0) is a **ground mock-up** in the hangar with one instructor, not a real aircraft. | "Climb-out practised in a mock-up door" | no |
| 8 | wording | unclear | part1.ts:498, `count`, callout | "Words <b>differ</b> by school and aircraft ("Ready, set, go", "Out, in, out")" | USPA Cat A gives the two AFF counts as "Up, down, arch!" or "Out, in, arch!" (uspa.org/skydiveschool/A). "Out, in, out" isn't a published count. "Ready, set, go" is used (Alabama guide). | "… ("Out, in, arch!", "Ready, set, go")" | no |
| 9 | wording | unclear | part1.ts:515, `count`, watch link | label "Real AFF exit with instructors", credit "Perris" | The YouTube video kd8HVlIfzqc is "AFF Exit Count, Perris CA 2011", 30 s, uploaded by the channel "Fluxed". It has **embedding disabled** (`playableInEmbed: false`), so the in-page player shows an error. The user has to tap "open on YouTube". | Credit "Fluxed (Perris)". Open this one straight on YouTube, or swap it for an embeddable clip. | no |
| 10 | wording | unclear | part1.ts:61, `plane`, Low point | "stay in, belt on, <b>brace</b>" | USPA Cat A for landing with the plane: "ensure your **helmet** and seat belt or restraint are on", then the safety position with hands clasped behind the head. The Alabama guide adds goggles. | "stay in, **helmet and belt on**, brace (hands clasped behind your head)" | no |
| 11 | wording | unclear | part1.ts:164 and :208, `gear`, Main card + rig part | "Opened by <b>you</b>, at 5,500 ft" / "You open it at <b>5,500 ft</b>." | USPA Cat A: AFF deployment at 5,500 ft. That figure is for category A; later categories may differ, and Part II already says to "ask about later categories". | "at 5,500 ft (category A)" | no |
| 12 | wording | unclear | part1.ts:503, `count`, callout | "<b>One instructor</b> on each side" | True for two-instructor jumps. USPA Cat C: a student "now" may have only one AFF instructor, and "the instructor will revise the climb-out procedure". The BSRs also allow tunnel-trained students to start with one instructor. | "<b>Two instructors</b> on your first categories, one on each side; later just one, and the climb-out changes." | no |

## Missing

- **Exit and open the main right away** as an aircraft-emergency option (finding 1). This is the most likely emergency
  exit at mid altitude (USPA Cat A; Alabama guide 2,500–5,000 ft band).
- **What gets checked** (part1.ts:256–262) leaves out the altimeter, the helmet and the goggles. SIM 4-4 lists
  "Altimeters: checked and set", helmet fit and chin strap, and goggles secure and clean. A student must at least
  know the **altimeter is set to zero** on the ground. Add "<b>altimeter</b> set to zero, <b>helmet</b> and
  <b>goggles</b> on" to the list.
- **Approach the plane from behind**, away from the propeller (USPA Cat A: "Always approach a fixed-wing aircraft from
  behind"). It fits the "ride up" rules.
- **Lost both instructors → pull now** (USPA Cat A: "If you lose both instructors, pull immediately"). It belongs
  next to the exit count; Part II may already cover it, so check there before adding.

## Checked and fine

44 claims checked and correct. Among them: seatbelt from boarding through taxi and take-off (FARs, quoted in Cat A);
handles protected and moving only on the instructor's signal; brace with hands clasped behind the head; "parachute
opens in the plane: contain it, tell the instructor, follow it out the door"; walk at least 100 ft away; the reserve
packed only by a certificated rigger (14 CFR 105.43(b)); the main packed by a packer or rigger (105.43(a), under rigger
supervision); the AAD is only a backup and pulling is your job; reserve on top, main below; AAD in the reserve and
switched on; cutaway on the right main lift web, reserve handle on the left; three rings on each shoulder; snug
straps; RSL, pins and seal; the four checks (before and after putting on, before boarding, before exit); the exit-count
order Check in / OK / Check out / OK / Prop / Up (out) / Down (in) / Arch; hips into the relative wind with chin up; the
"hill" a few seconds later; and all quiz answers except where findings 2–3 change the wording.

The rig drawing's sides are correct (front view: jumper's right is on picture-left; back view: pilot chute bottom right).
The first-screen numbers 13,000 / 6,000 / 5,500 match Part I. The climb clip no longer opens on a title slide.

Main sources: USPA SIM Cat A (uspa.org/skydiveschool/A), SIM 4-1 and 4-4, USPA Cat C, BSR summary, USPA Rating Corner
"AFF tips", 14 CFR 105.43, CYPRES 2 Student/Expert specs, the Vigil 2 and Vigil Cuatro manuals, the Alabama Skydiving
AFF student guide, the Skydive California facilities page, and YouTube metadata for the four credited videos. The
Skydive Fundamentals link (LpoztnjW5c8 at 2:14) falls inside the chapter "What Happens on the Jump" (1:55–3:05); a
transcript wasn't available, so "exit count explained" is likely but not verified. The Rhythm video (7YxgNbzzwHk, "Door,
Spotting and Climbout") does not name the aircraft, so "Twin Otter" in its label is not verifiable.
