# Fixes: Part III "Under canopy" (2026-11-16)

Report: `docs/review/expert/part3-canopy.md`. Edited: `src/content/part3.ts` only. `npx tsc --noEmit` and `npx vitest run` pass.
Sources opened: USPA ISP Category A (uspa.org/skydiveschool/A), USPA SIM 4-1 (uspa.org/sim/4-1, sections B, F, G),
YouTube oEmbed titles for 5Lj_O4MLo0M and tUFSss3guic.

| # | sev | where | decision | what changed or why | source |
|---|---|---|---|---|---|
| 1 | safety | deploy step 2, quiz 1, flare callout | ask-owner | The ground course's 5-count stays, now labelled "the count from our ground course", next to "USPA's AFF syllabus counts to three, then checks the pilot chute and canopy" with `<q-check/>`. Dropped the unsourced "a canopy needs about 5 s to open fully" and "Don't judge it earlier". Title "Count 5 seconds" → "Count to five". Quiz right option → "At the end of your count, then look up"; the why names both counts. Flare callout "5-second count" → "count". | ISP Cat A: "counting by thousands to 3,000"; "After the count of three, visually check for pilot-chute and main-canopy deployment" |
| 2 | safety | flare step 2, flare quiz 1 | ask-owner | Step now says look ahead, not straight down; "Our ground course: eyes on the horizon. USPA: forward and down at about 45°" with `<q-check/>`. Quiz right option → "Ahead, not straight down at your feet" (true under both); the why names both. | ISP Cat A: "looking forward and down at a 45-degree angle" |
| 3 | safety | obstacles, Water + water quiz why | fixed | Added "Time permitting: loosen the chest strap, disconnect the RSL"; "In the water: cut away, arms back, swim forward out of the harness"; "Canopy on top of you: follow one seam to its edge; swim upwind, away from the lines". Quiz why updated. Flotation device left out (students rarely wear one). | SIM 4-1 G Water landings |
| 4 | safety | test Q27 | ask-owner | Answer 300 ft kept (it's the school test), plus `<q-check/>` and one line: Q28 asks about 300 ft too, so the key may say 1,000 ft. | Owner's test; USPA gives no number |
| 5 | safety | low turn points | added | "Already in a low turn? Opposite toggle down to stop the turn and bring the canopy back overhead. Then flare from those brakes, get ready for a hard landing (PLF). Hit early? Keep flying the canopy." | SIM 4-1 F |
| 6 | safety | canopy check, Steerable | fixed | "Line twists? Kick them out first. Then unstow the toggles…" (terms as in part4.ts). | ISP Cat A: "Line twists must be fixed first … release the brakes only after clearing the twist" |
| 7 | safety | flare Timing list | fixed | Replaced the unsourced "student canopy can stay at full brakes for a few seconds" with "Why hold: letting the toggles back up makes the canopy dive. Stop where you are, finish the flare as you get close, then PLF." How long the school's canopy holds full brakes → instructors. | ISP Cat A: "stop flaring and hold the toggles where they are" |
| 8 | safety | obstacles, Power lines | fixed | "Slow the canopy (brakes), feet and knees tight, turn your head, ready to PLF"; hanging: nobody touches you until the power company confirms the power is off and stays off; new: "Feet on the ground, canopy in the wires: disconnect the RSL, cut away, leave the main". Did not add the reviewer's "don't cut away while hanging": SIM doesn't say it. | SIM 4-1 G Power lines |
| 9 | safety | deploy callout, "Two different 2,500 ft" callout, deploy quiz 3 | fixed | "Try the fixes in Part IV. Not fixed: decide and act by 2,500 ft." / "By now you have acted: fixed it or cut away." Quiz 3 asks "decide and act"; why mentions closed end cell / slider fixed with a control check. | SIM 4-1 ("decide upon and take the appropriate actions … no lower than 2,500 feet for students"); ISP Cat A (minor problems, canopy-control check) |
| 10 | fact | low turn points | fixed | "Must turn low? A braked flat turn: from half brakes, let one toggle up a little and pull the other down a little more. No dive. Then flare from there." | SIM 4-1: "Make any low-altitude avoidance turns from braked flight" |
| 11 | fact | pattern list | fixed | "Final normally points into the wind (or the landing direction the dropzone sets)…" | ISP Cat A; SIM 4-1 G "desirable, but not at the risk of a low turn" |
| 12 | fact | low turn points | fixed | "half brakes; the smallest flat braked turn that misses it, or go into it with feet and knees together, flare and PLF. Never a hard turn." | SIM 4-1: "make the minimum, flat, braked turn necessary to miss it" |
| 13 | fact | Buildings | fixed | Dropped `<q-check/>`, added "if you can; USPA SIM 4-1". Kept "collapse the canopy" (harmless). | SIM 4-1 G: "disconnect the RSL if possible, and cut away" |
| 14 | fact | PLF step 2 | ask-owner | Kept the five military points (school test Q31) and added one line: USPA rolls through the small of the back, then diagonally to the opposite shoulder. Q31 and its quiz unchanged. | ISP Cat A PLF |
| 15 | fact | pattern caption | fixed | Caption now says the map is a right-hand pattern (turns to the right). Checked the geometry in the rows: downwind west, right turn to base (north), right turn to final (east). A label on the map itself would need widgets.tsx. | rows' `point` coordinates |
| 16 | fact | low-turn clip caption | fixed | "a swoop (a planned fast landing turn) started too low; the canopy is still diving at the water". | YouTube title "Skydive swoop crash, what not to do" |
| 17 | wording | pattern list | fixed | Deleted the duplicate "Check the windsock before you board." | — |
| 18 | wording | Power lines RU | fixed | "чтобы коснуться только одного". | — |
| 19 | wording | flare clip caption | rejected (no change) | Video exists (title "The landing flare"); 12–15 ft at 0:33 not checkable without audio. Leave; check by ear. | oEmbed |
| M1 | missing | low turn points | added | Landing priorities: 1 level wing, flying straight; 2 a clear area, even a farther one; 3 flare and PLF. | SIM 4-1 B |
| M2 | missing | deploy step 1 | added | "left hand overhead for balance". | ISP Cat A |
| M3 | missing | deploy step 1 | added | "Can't find it or it won't come out? Two tries or 5 s, then Part IV" (link to `#mal`). | ISP Cat A: "no more than twice or for 5 seconds" |
| M4 | missing | flare Timing list | added | "USPA: arms all the way down when your feet are about 1–3 ft off the ground." Also in flare step 2: USPA starts at about twice your height. | ISP Cat A |
| M5 | missing | Trees | added | "ready to PLF: you often go through to the ground"; "Cover your face with your hands, elbows tight to the chest". | SIM 4-1 G Trees |
| M6 | missing | Water | added | Seam + swim upwind away from the lines (in #3). Reserve floats ~45 min left out to keep the list short. | SIM 4-1 G |

## Changes needed elsewhere
- `src/components/Hero.tsx:53`: the "5 s — count after the pull" tile. Once the owner answers Q1: either keep "5 s" or change to "3 s". Until then it isn't wrong for this school.
- `src/widgets.tsx` CanopyCheck (`[1..5].map → 1000…5000`, comment "count to five"): same; follow the owner's answer to Q1.
- `src/widgets.tsx` Pattern: an optional small "right-hand pattern" label on the map (#15). The caption already says it.

## Questions for the owner
1. **Счёт после раскрытия.** На наземке считали до пяти; в программе AFF USPA до трёх, потом проверка вытяжного и купола. Инструкторы Skydive California сказали считать до 5 и смотреть только после? Рекомендую: спросить и, если «до 3», поменять счёт везде (Part III, Hero, виджет); пока стоят оба варианта с `<q-check/>`.
2. **Куда смотреть при flare.** Вас учили «на горизонт», USPA — «вперёд и вниз под 45°». Сейчас в тексте оба. Рекомендую: оставить как есть до ответа инструктора; если подтвердят горизонт — убрать строку USPA.
3. **Q27 в тесте.** Ответ «300 футов» совпадает с Q28. Что в ключе к тесту (или на фото)? Рекомендую: проверить фото теста; если там 1 000 футов — поменять ответ.
4. **5 точек PLF.** В Q31 школы — стопы, икра, бедро, ягодица, бок спины (как у военных). Так в ключе? Рекомендую: да, оставить; строка про USPA просто для справки.

## Questions for the instructors
1. Count after the pull: three or five, and what exactly do we check at the end of the count?
   - ES: Cuenta tras abrir: ¿hasta tres o hasta cinco, y qué revisamos exactamente al terminar la cuenta?
   - UK: Рахунок після розкриття: до трьох чи до п’яти, і що саме перевіряємо наприкінці рахунку?
   - RU: Счёт после раскрытия: до трёх или до пяти, и что именно проверяем в конце счёта?
2. During the flare, where do we look: the horizon, or forward and down at about 45°?
   - ES: Durante el flare, ¿adónde miramos: al horizonte o adelante y abajo a unos 45°?
   - UK: Під час flare куди дивимося: на горизонт чи вперед і вниз приблизно під 45°?
   - RU: Во время flare куда смотрим: на горизонт или вперёд и вниз примерно под 45°?
3. How long can our student canopy stay at full brakes before it stalls?
   - ES: ¿Cuánto tiempo aguanta nuestra vela de alumno a frenos completos antes de entrar en pérdida?
   - UK: Скільки наш студентський купол може летіти на повних гальмах, перш ніж звалиться?
   - RU: Сколько наш студенческий купол может лететь на полных тормозах до сваливания?
4. Ground-school test Q27: what altitude stops major turns, 1,000 ft or 300 ft?
   - ES: Pregunta 27 del examen: ¿a qué altura se dejan los giros grandes, 1,000 ft o 300 ft?
   - UK: Питання 27 тесту: на якій висоті припиняємо великі розвороти, 1 000 чи 300 футів?
   - RU: Вопрос 27 теста: на какой высоте прекращаем большие развороты, 1 000 или 300 футов?
