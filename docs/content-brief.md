# Content brief (for moving the old page into typed content)

Source page: `docs/legacy-page.html` (single HTML file; every string is in `<span class="en">`, `<span class="es">`,
`<span class="ru">` triples, plus `T('en','ru','es')` calls in its script for the JS-built parts: signals, dive flow,
pattern rows, malfunction groups, video links). Schema: `src/content/types.ts`. Research for facts:
`docs/research/Ошибки и советы для студентов AFF.md` and `docs/research/notes/`.

Write one TypeScript file per part, `src/content/partN.ts`, `export const partN: Part = {...}` using only the block
types in `types.ts`. Keep every existing fact and string (en/es/ru), reworded only where a correction below says so.
Inline markup allowed in strings: `<b>`, `<a href="...">`, and `<q-check/>` in place of the old CHECK/УТОЧНИТЬ/VERIFICAR
badge. No other HTML, no emoji. Copy style: short, plain, second person, calm. Spanish: neutral, informal "tú";
spoken commands stay English ("Check in", "Arch!").

Each chapter ends with a `quiz` block: 2–4 multiple-choice questions (3 options each) testing what that chapter says,
with `why` explaining the right answer. All three languages. Questions must be answerable from the chapter.

Each chapter that has footage gets a `clips` block (catalogue below) and keeps its `watch` links.
Use `split` to put a widget or clip next to steps where the old page had two columns.

## Corrections from the owner (2026-11-16) — apply these

- Turn limits under canopy: above 1,000 ft up to 180°; from 1,000 to 300 ft up to 90°; below 300 ft up to 45°, flat.
  (Replace the old "from 1,500 ft" wording; drop the old question about 1,500–1,000.)
- Landing pattern at our dropzone: at **2,500 ft** decide where to go: whether you can reach the holding point, and
  whether to set up a left-hand or right-hand pattern for today's wind. Over the holding point by 2,000, hold 2,000→1,000,
  enter at 900 downwind, 600 base, 300 final into the wind, flare at ~10 ft (3 m). This 2,500 ft canopy decision is
  different from the 2,500 ft emergency decision altitude; say so.
- Flare: we counted "5, 4, 3, 2, 1" while pulling down; that's a count, not five full seconds. Smooth, both hands,
  elbows back, hands close to the body, finished at touchdown. Look at the horizon ahead (about 45° down), not at
  the ground under you: looking down makes the ground rush and the timing wrong.
- Low turn: explain plainly that people turned too sharply right at the end, close to the ground, and the canopy dove.
- Obstacles (owner's notes + USPA SIM 4-1): trees: half brakes, feet and knees together, protect face, wait for help;
  water: half brakes ~10 ft, breath, PLF entry, get out of the harness in the water and swim away fast, leave the gear;
  buildings: flare ~10 ft before contact and PLF; near a wall fly along it (flat turn) rather than into it; on a roof
  collapse the canopy; power lines: land parallel so you touch only one, feet together, don't touch anything, nobody
  touches you, wait for help. Everywhere: never try to save the gear, it gets collected.
- Gear (Part I, new chapter "your gear"): as a student you don't pack anything. The main is packed by a packer; the
  reserve only by a certified rigger, inspected and sealed on a schedule; the AAD fires the reserve as a backup;
  gear is checked 4 times (before putting it on, after, before boarding, before exit). Trust it, but check it.
- Altitude checks: USPA says every 3 seconds (the owner's "every 3"); some schools teach ~5.
- Thumb down = arch (hips forward) in the filmed signals; ask to confirm.
- Pull at 5,500; lock on 6,000; EP decision altitude 2,500; hard deck 1,000 (no cutaway below; downplane is the exception).

## Clip catalogue (src → YouTube id, start second, credit)

climb ufz1HjyYs_0 28 Skydive Spaceland · arch 7OT3X9lVt8c 19 Skydive Fundamentals · tunnel YCe5OHjtQF0 129 Rhythm Skydiving ·
coa LpoztnjW5c8 233 Skydive Fundamentals · touches LpoztnjW5c8 274 Skydive Fundamentals · deploy ufz1HjyYs_0 146 Skydive Spaceland ·
throw PTYsjH7DSVA 124 APF · check PTYsjH7DSVA 154 APF · holding puD56VJ8loA 84 Skydive Spaceland · pattern puD56VJ8loA 110 Skydive Spaceland ·
flare_cue tUFSss3guic 33 Rhythm Skydiving · flare_land tUFSss3guic 85 Rhythm Skydiving · flare_end tUFSss3guic 148 Rhythm Skydiving ·
plf lCWKPIQuK8Q 0 USPA · ep1 nC6D6NHjccI 149 Bodyflight Spotlight (one hand per handle) · ep2 nC6D6NHjccI 192 Bodyflight Spotlight (two hands on red) ·
m_twists MZx3lN-lwok 65 APF · m_endcells MZx3lN-lwok 125 APF · m_slider MZx3lN-lwok 240 APF · m_tow iBNf-HsD3Ms 101 APF ·
m_baglock iBNf-HsD3Ms 242 APF · m_streamer iBNf-HsD3Ms 303 APF · m_horseshoe iBNf-HsD3Ms 407 APF · m_lineover UL87Ceo02L4 150 APF ·
pov_lineover d1HmyO1-Xn8 14 Sigma (USPA VR series, first person) · pov_tow nzu_QoUjy_M 16 Sigma · pov_baglock 8zYYkzqB62A 15 Sigma ·
pov_twist GEqbTMRseik 11 Sigma · two_bi or3MhI4MhAc 367 Skydive Vibes · two_side or3MhI4MhAc 508 Skydive Vibes ·
two_down or3MhI4MhAc 792 Skydive Vibes · lowturn 3dsAULINDhU 129 Cronkite News ·
signals (Skydive Fundamentals, V4rn53L4isw): s_arch 111 · s_legsout 113 · s_good 116 · s_relax 120 · s_arms 132 · s_toetap 137 ·
s_coa 152 · s_touch 154 · s_chin 163 · s_alt 166 · s_pull 181.

## Parts

- part1 "In the plane" (0 → ~13,500 ft): chapters plane (ride + aircraft emergency), gear (new), climb (use `climb`
  block with the 6 steps and captions), count (use `exit` block with the 6 exit-count steps).
- part2 "Freefall" (13,500 → 5,500): body (box position + thumb-to-ear check), flow (use `altimeter` block; rows with
  value in thousands of ft), altitude (when to check; 6,000 lock on; 5,500 pull), signals (`cards` with the 12 signal
  cards, clips s_*; the pull card tone 'key'; the "shaking you on exit" card without clip).
- part3 "Under canopy" (5,500 → ground): deploy (pull, count, `canopyCheck` with there/square/stable/steerable),
  pattern (use `pattern` block; rows with `point` coordinates in a 320×270 map: holding [275,205], 900 entry
  [250,200], 600 [60,200], 300 [60,70], flare [188,70]; add the 2,500 decision row first with point [275,205];
  then turn limits rules, `lowturn` block, obstacles chapter with the four hazards), flare (+PLF), test (the ground
  school test Q26–32 as `faq`).
- part4 "When it goes wrong" (tone 'red'): ep (cutaway & reserve steps, ep1/ep2 clips, decision 2,500 / hard deck
  1,000 / 5 s rules), mal (three `cards` groups with pill EP/EP/FIX; clips per card; plus "cut away anyway if…"
  rules), two (two canopies: biplane, side by side, downplane), real (how people actually get hurt: stats + ranked
  list), tips (the stage-by-stage mistakes and tips, `tips` block), questions (ask the instructors, `questions` block,
  drop questions already answered by the research: "every 3", decision altitude, thumb down → keep as "confirm").
