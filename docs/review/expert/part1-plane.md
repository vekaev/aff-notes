# Expert review: Part I "In the plane"   (2026-11-16)

Scope: `src/content/part1.ts` (chapters `plane`, `gear`, `climb`, `count`), the climb-out, exit-count and rig drawings
in `src/widgets.tsx` (`Climb`, `ExitCount`, `Rig`) and their labels, the Part I numbers on the first screen
(`Hero.tsx`), and the clips/links credited in Part I.

Note: two independent passes were made on this scope on the same day. This file merges them. Where they disagreed (the
AAD numbers, finding 3) the CYPRES 2 User's Guide was read directly and decides. Items marked "(pass 1)" cite a source
that the second pass did not reopen.

## Summary

Mostly sound and close to USPA Category A. Seatbelts, the brace position, "parachute opens in the plane", the 100 ft
walk-away, the four gear checks, the handle locations and the 5,500 ft pull all match the sources. Things to fix before
the first jump:
1. The aircraft-emergency list has no "exit and open the **main** right away" option.
2. The exit count puts the **inside** instructor on the **reserve** side. Skydive California flies a Caravan, which has
   a left door, and on a left-door plane the reserve-side instructor is the one **outside**.
3. The climb-out says "always in this order" but also that the order depends on the door. On a left-door Caravan,
   "right side first" may be reversed, and the quiz drills it as a fixed answer.
4. The AAD text says it fires only "in freefall". A student-mode AAD also fires at about 1,000 ft under a canopy that is
   still coming down fast.
5. The 180-day reserve repack is an FAA rule, not a USPA one.

## Findings

| # | sev | verdict | where (file:line, chapter) | the app says (EN, exact) | what's right, with source | fix (EN) | needs-owner |
|---|-----|---------|----------------------------|--------------------------|---------------------------|----------|-------------|
| 1 | safety | missing / misleading | part1.ts:59–72, `plane`, "Aircraft emergency" points | "**Low**: stay in, belt on, brace" / "**Mid altitude**: exit on command; the instructor may tell you to pull the **reserve** right away" / "**High**: normal exit" | USPA ISP Cat A (uspa.org/skydiveschool/A, "Aircraft Emergencies") lists four possible commands: land with the plane, "exit and use your reserve parachute", "exit and use your main parachute", or a normal exit. After an emergency exit it says "ensure your parachute is open immediately". The app has no "main right away" option. A student told "get out" at 4,000 ft could think "normal exit" and free-fall. Pass 1 cites a published DZ student guide (Alabama Skydiving) with these bands: below 1,000 ft land with the plane, 1,000–2,500 exit on the reserve, 2,500–5,000 exit on the main, above that exit as planned. ES/UK/RU have the same gap. | Four points: "**Low**: stay in, helmet and belt on, brace" · "**Lower middle**: exit on command, pull the **reserve** right away" · "**Upper middle**: exit on command, pull the **main** right away" · "**High**: exit as the instructor says". Keep "Your school's altitudes: <q-check/>". | yes: ask for the exact altitude bands for the Caravan and the Cessna |
| 2 | safety | misleading | part1.ts:325 and 391–404, `climb`, intro + quiz Q1; drawing `Climb` | "<b>Six moves</b>, always in this order. <b>Right side first</b>, then left: the order depends on which side the door is on" / quiz answer "Right hand, then right foot" | No USPA text gives a hand or foot order. ISP Cat A only says to set up with "hips, head, feet, and hands in the easiest position". Skydive California lists "Caravan and Cessna" aircraft (skydivecalifornia.com/facilities). Most jump Caravans use the converted **left** cargo door (Wikipedia, Cessna 208). A Cessna 182 has a right door. Facing the prop in a left door, the open side is on your **left**, so "right side first" may be the mirror image of what the student does on a Caravan. The sentence also contradicts itself ("always" vs "depends"). The quiz then drills "right" as the only answer, so a student may freeze or improvise in the door. | "Six moves in a fixed order. **On our aircraft** (<q-check/>): right side first, then left." Add a line to the "ask the instructors" chapter (the q-check has none there now). Reword the quiz Q1 "why" to "on our aircraft", or drop the quiz until it is confirmed. | yes: which aircraft AFF students jump from, which hand and foot go first, which bar you hold |
| 3 | safety | misleading | part1.ts:185, `gear`, AAD card (also rig part :218, quiz :300) | "Fires the reserve **automatically** if you are still in freefall **too low** (around 750–1,000 ft, by model and mode)" | CYPRES 2 User's Guide §2.3 "Student CYPRES" (p. 11): it fires at a descent faster than about 29 mph (13 m/s). The altitude is split: about **750 ft** at freefall speed, and about **1,000 ft** when the descent is slower than freefall but above 29 mph, "e.g. with partially opened canopy, or after a cutaway". It adds that a fully open canopy can go faster than 13 m/s. So 750–1,000 ft is right for a Student CYPRES. Correction to pass 1, which said 750 ft is only the Expert setting: the guide gives 750 ft for Student too. "Still in freefall" is the misleading part. A student AAD can fire under a spinning or malfunctioning main, which is why you deal with a bad canopy by the decision altitude and never cut away below 1,000 ft (first screen). Vigil numbers differ by model (Vigil FAQ: Pro mode about 840–1,100 ft). | "Fires the reserve **automatically** if you are still falling **fast** when low (freefall, or a bad canopy that is still coming down fast), around 750–1,000 ft on a student unit. It is **only a backup**." | no (optional: ask which AAD and mode the student rigs use) |
| 4 | fact | wrong (for the Caravan) | part1.ts:451 and 460, `count`, steps 1–2; also :505 callout; same in ES/UK/RU | "Look at the instructor **inside** the plane (reserve side)." / "Look at the instructor **outside**, in the door (main side)." | USPA Rating Corner "AFF Tips" (uspa.org/rating-corner-aff-tips), Twin Otter (left door): the formation leaves with "the reserve-side down and away from the plane and the main side just barely out the door". So on a left-door plane the **reserve-side** instructor is outside and the **main-side** one is inside. That is the opposite of the app. Facing the prop in a left door (Caravan), the outside is on your left, which is your reserve side. Pass 1 cites the Alabama Skydiving guide (Twin Otter) with the same pairing: "Check in" to the right-side instructor, "Check out" to the left. USPA Cat A itself names no sides. The app's pairing only fits a right-door plane (Cessna 182). | Drop the side words: "Look at the instructor **inside** the plane. They answer 'OK'." / "Look at the instructor **outside** the door. They answer 'OK'." Optional: "(on a left-door plane like the Caravan: inside = main side, outside = reserve side) <q-check/>". | yes: who is inside and who is outside on the Caravan (and on the Cessna, if students jump it) |
| 5 | fact | wrong (attribution) | part1.ts:173, `gear`, Reserve card (also the ES/UK/RU text) | "every **180 days** (USPA) <q-check/>" | 14 CFR 105.43 (law.cornell.edu/cfr/text/14/105.43): the reserve must be packed by a certificated parachute rigger "within 180 days before the date of its use" (synthetic materials). It is an FAA rule, not a USPA one. The number is right. | "every **180 days** (FAA rule)" and remove `<q-check/>`. | no |
| 6 | fact | misleading | part1.ts:218, `gear`, rig part AAD | "<b>Switched on</b> before the jump." | CYPRES 2 User's Guide §4.3 (p. 25): switch it on "at the takeoff site on the ground", ideally just before putting the rig on, and never inside an aircraft. It then runs for 14 hours. "Before the jump" could be read as "in the plane". The student won't usually do this, but it is part of the gear check. | "<b>Switched on</b> on the ground, before you gear up (your instructor does it)." | no |
| 7 | fact | unsupported | part1.ts:213, `gear`, rig part "Pilot chute handle" | "The little <b>ball</b> at the bottom of the container, <b>right side</b>. Right hand." | A BOC throw-out on the bottom right is the norm for sport and many student rigs. Some student programs use a ripcord or a different handle. Not confirmed for this DZ. | Keep it and add "<q-check/> on your student rig" if not confirmed. | yes: the handle type on the school's student rigs |
| 8 | wording | misleading | part1.ts:373, `climb`, clip caption | "Real climb-out and exit, step by step" | The clip (Skydive Spaceland Houston, "Skydiver Training Program: Dive Flow 1", ufz1HjyYs_0) shows a **ground mock-up** in a hangar, checked frame by frame from `public/media/climb.mp4`, not an aircraft. The hands go on an **overhead** horizontal bar, while the app says "the bar by the door". The count shown in the clip is "In … Go!", a different wording. | "Climb-out practised in a mock-up door". For step 2, change to "the bar at the door (on many planes it runs across the top)". | no |
| 9 | wording | unclear | part1.ts:498 and 505, `count`, callout | "Words <b>differ</b> by school and aircraft ("Ready, set, go", "Out, in, out")" / "Usual meaning: "in" = the instructor <b>inside</b>, "out" = the one <b>outside</b>." | USPA Cat A gives the AFF counts as "Up, down, arch!" or "Out, in, arch!". "Out, in, out" is not a published count. In the second line, "in" and "out" collide with the "Out, in, arch" rock words two lines up, so a student can't tell whether "in" means a person or a direction. | "… ("Out, in, arch!", "Ready, set, go")". Then: "'Check **in**' = the instructor inside the plane, 'check **out**' = the one outside. Your school: <q-check/>". | no |
| 10 | wording | unclear | part1.ts:515, `count`, watch link | label "Real AFF exit with instructors", credit "Perris" | YouTube kd8HVlIfzqc is "AFF Exit Count, Perris CA 2011" by the channel "Fluxed". Embedding is turned off (`playableInEmbed: false`), so the in-app player fails and the user has to tap "open on YouTube". | Credit "Fluxed (Perris)". Link it straight to YouTube or replace it with an embeddable clip. | no |
| 11 | wording | unclear | part1.ts:61, `plane`, Low point | "stay in, belt on, <b>brace</b>" | USPA Cat A: when landing with the plane, "ensure your helmet and seat belt or restraint are on", and "clasp your hands behind your head". The helmet is missing from the point. | "stay in, **helmet and belt on**, brace (hands clasped behind your head)". | no |
| 12 | wording | unclear | part1.ts:503, `count`, callout | "<b>One instructor</b> on each side" | True for two-instructor categories. From Cat C on, a student may jump with one instructor, and the climb-out changes (USPA ISP Cat C, pass 1). | "<b>Two instructors</b> on the first categories, one on each side; later one, and the climb-out changes." | no |
| 13 | wording | unclear | part1.ts:164 and :208, `gear`, Main card and rig part | "Opened by <b>you</b>, at 5,500 ft" | USPA Cat A: AFF pull at 5,500 ft. This is the category A figure; later categories can differ. | "at 5,500 ft (category A)". | no |

## Missing

- **Exit and open the main right away** as an aircraft-emergency option (finding 1). USPA Cat A lists it.
- **The altimeter, helmet and goggles in "What gets checked"** (part1.ts:256–262). Skydive Perris "Gear Checks" lists
  the altimeter reading zero on the ground, helmet fit and goggles. It also lists the main pin and closing loop, bridle
  routing, and that the pilot chute is in reach. The pin check covers the main pin, but "altimeter set to zero" is a
  must for a Cat A student, because the whole dive runs on it.
- **Approach the plane from behind**, away from the propeller (USPA Cat A, "Aircraft"). It fits the ride-up rules.
- **Student AAD when you land with the plane.** The CYPRES 2 User's Guide §2.3 says a Student CYPRES should be switched
  **off** in the aircraft before the plane descends if the jump is aborted, because the plane's descent can trigger
  it. §8.1 says the AAD does not work if you exit below about 1,500 ft above the airfield. These are the instructor's
  jobs, but one line helps the student understand the commands: "If we ride the plane down, your instructor turns off
  your AAD. Very low emergency exits happen before the AAD is armed."
- **"Ask the instructors" line for the climb-out side** (CLAUDE.md: every `<q-check/>` needs one). The climb-out
  q-check at part1.ts:325 has no matching question in part4.ts `questions`.
- **Lost both instructors: pull now** (USPA Cat A). It belongs near the exit count. Check Part II before adding.

## Checked and fine

46 claims checked and correct, all quiz answers included except where findings 2–4 change the wording. Among them:
seatbelt from boarding through taxi and take-off (Cat A: taxi, takeoff and landing; the app's rule is stricter, which
is fine); protect handles and avoid the door frame (SIM 4-1); move only on the instructor's signal; brace with hands
clasped behind the head; "parachute opens in the plane: contain it, tell the instructor, follow it out the door" (Cat
A); walk at least 100 ft away; the reserve packed only by a certificated rigger and the main by a packer under a
rigger's supervision (14 CFR 105.43); the AAD is only a backup and pulling is your job (Cat A); reserve on top, main
below; cutaway handle right, reserve handle left; three rings on each shoulder; RSL, pins and seal; the four checks
(Cat A: before you put it on, right after, before boarding, shortly before exit); ask for a pin check (SIM 4-1); the
count order Check in / OK / Check out / OK / Prop / Up / Down / Arch; hips into the relative wind with head up (Cat A);
belly to earth a few seconds later. The rig drawing's sides are correct: in the front view the jumper's right is on
the left of the picture, and in the back view the pilot chute is at the bottom right. The first-screen numbers
13,000 / 6,000 / 5,500 match Part I. The ES, UK and RU versions of the safety lines (seatbelt, emergency points,
container opening, AAD, handles) say the same as the EN.

Main sources: USPA ISP Cat A (uspa.org/skydiveschool/A), SIM 4-1, USPA Rating Corner "AFF Tips", 14 CFR 105.43,
CYPRES 2 User's Guide (cypres.aero, 2025 edition, §2.3, §4.3, §8.1) and the Student spec page, the Vigil FAQ, Skydive
Perris "Gear Checks", the Skydive California facilities and AFF guide pages, Wikipedia "Cessna 208" (door side),
YouTube metadata for the four credited videos, and frames from `public/media/climb.mp4`. Pass 1 also used the Alabama
Skydiving AFF student guide and USPA Cat C. The Skydive Fundamentals link (LpoztnjW5c8 at 2:14) and the Rhythm
"Door, Spotting and Climbout" video (the label says "Twin Otter") could not be checked against a transcript: not
verifiable.
