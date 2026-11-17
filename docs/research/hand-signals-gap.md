# Freefall hand signals: what the app has and what it misses

Research date: 2026-11-16. Research only, no app changes. The question: the owner remembers about 15 signals from
ground school, and the app's chapter `signals` (src/content/part2.ts) has 13.

## Sources

| # | Source | What it is |
|---|---|---|
| S1 | [USPA SIM Appendix A, Freefall Hand Signals (PDF, ©2022)](https://www.uspa.org/Portals/0/SIMages/AppendixA.pdf) | Official USPA chart: 11 signals |
| S2 | [USPA ISP Category A](https://www.uspa.org/skydiveschool/A) | Cat A lesson; lists the same signals as S1 for the first AFF jump |
| S3 | [First jump course slides (US school, on SlideShare)](https://www.slideshare.net/slideshow/first-jump-course/48713050) | A dropzone's FJC deck; nearly the same set the app uses |
| S4 | [Skydive Tecumseh, Top Skydiving Hand Signals](https://www.skydivetecumseh.com/2023/10/31/skydiving-hand-signals/) | Dropzone blog |
| S5 | [Skydive Monroe, Skydiving Hand Signals](https://skydivemonroe.com/blog/skydiving-hand-signals-what-to-know/) | Dropzone blog |
| S6 | [Skydive Paraclete XP, Learn Skydiving Hand Signals](https://skydiveparacletexp.com/2020/06/22/learn-skydiving-hand-signals) | Dropzone blog (photos, no shape text) |
| S7 | [Skydive Taupo (NZ), AFF Stages instructor notes (PDF)](https://www.skydive.co.nz/wp-content/uploads/sites/5107/2021/02/AFF-Stages.pdf) | A non-US school's set, for contrast |
| S8 | Skydive Fundamentals videos `V4rn53L4isw`, `o6hGuKffq1k` | Already the app's main source |

Not useful: Skydive Langar (UK) page says signals are taught on the day and are "fairly standard", but lists none.
I did not find hand-signal pages for Perris, Spaceland, Chicago, California, Arizona or Elsinore.

## The app's 13 (as they are now)

| # | App name | Hand (app) | Student does (app) | Also in |
|---|---|---|---|---|
| 1 | Pull | One finger pointed, any direction | Pull right now | S1, S3, S4, S5, S6 |
| 2 | Check altitude | Slap or tap on the wrist | Look at the altimeter | S3 (S1/S2 use circle of awareness for this) |
| 3 | Arch | Thumb down (marked q-check) | Hips forward, arch more | S1, S2, S4, S5, S6, S7 |
| 4 | Legs out | Two fingers, V | Extend about 6 in / 15 cm and hold | S1, S2, S3, S4, S5, S6 |
| 5 | Relax | Shaking, floppy hand | Breathe, loosen up | S1, S2, S3, S4, S6 |
| 6 | Good | Thumbs up | Hold what you have | S3, S4 |
| 7 | Arms 90/90 | Thumb and pinky out, "L" (shaka) | Check arm position | S1, S2, S3, S4, S5 |
| 8 | Toe taps | Bent flat hand | Even out legs, toes together | S1, S2, S3 |
| 9 | Circle of awareness | Fingers bunched | Do the circle of awareness | S1, S2, S4, S5, S6 |
| 10 | Practice touch | Fist | One more practice touch | S1, S2 ("perform practice deployment sequence"), S3 |
| 11 | Open hand | Open hand after the throw | Let go of the pilot chute | S1, S2 |
| 12 | Chin up | Tap on the chin | Head up | S3 |
| 13 | Shaking you on exit | Instructor shakes harness (q-check) | Arch harder | S3 ("arch"), S7 ("shake = arch harder") |

## Missing candidates

"Cat A–C" = whether a student meets it on the first three AFF levels.

| Candidate | Hand | Student does | Sources | Cat A–C? |
|---|---|---|---|---|
| **Legs in** | V with fingers bent (S4); USPA chart has its own picture | Retract the legs slightly (bend knees a little) | **4**: S1, S2, S4, S6 | **Yes**: in the USPA Cat A list |
| **OK** (instructor's answer) | Thumb and index in a ring | Nothing to fix; on Cat A you look left and right in the circle of awareness and get an OK from each instructor | **3**: S1, S2, S7 ("wait for OK, both right and left") | **Yes**: Cat A, every circle of awareness |
| **Wave-off** (student gives it) | Both arms swept over the head | You give it before pulling (USPA: by 5,500 ft on Cat A) | **4**: S2, S4, S5, S7 | Yes, every jump. Already taught in the pull chapter, not in `signals` |
| Pull now, closed fist variant | Closed fist | Pull now | **1**: S7 (NZ) | NZ only. **Clash**: in the app a fist means "practice touch" |
| Check altitude, head-slap variant | Slap on the head/helmet | Check altimeter now | **1**: S7 | NZ only |
| Arch, flat hand variant | Shake or flattened hand | Arch harder | **1**: S7 | NZ only |
| "No more work" | Head shake (student gives it at 7,000 ft) | Stop tasks, lock on to the altimeter | **1**: S7 | NZ only |
| Long spot "L" | "L" with the hand | Nothing; tells jumpers the spot is long | **1**: S4 (called unofficial) | No. Also clashes with the app's "L" = arms |
| Turn / heading, stop, look at me / eyes, track | none found | none found | **0** | Not as hand signals in any source. Turns (Cat D–E) and tracking (Cat E+) are briefed on the ground; the student does them, the instructor doesn't signal them |

## Recommendation

Add these, in order:

1. **Legs in**: the clearest gap. It is on the official USPA chart and the Cat A list, and the app has only half
   of the leg pair (legs out). Most likely one of the owner's "missing" ones.
2. **OK**: on the USPA chart; on Cat A the student needs the OK from both instructors during the circle of
   awareness. Easy to confuse with "circle of awareness" and "thumbs up", so worth a card of its own.
3. **Wave-off**, if the chapter should list what the student shows too: a card that links to the pull chapter.

That gives 15 or 16, matching the owner's count. Also worth a note on the "Pull" card: some schools (S7) use a
**closed fist for pull**, the same hand the app gives for "practice touch".

Question for the instructors (one line):
"Which hand do you show for legs in, for OK, and does a closed fist mean practice touch or pull now at this school?"
