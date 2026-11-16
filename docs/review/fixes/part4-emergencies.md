# Fixes: Part IV emergencies (ep, mal, two) + questions   (2026-11-16)

Report: `docs/review/expert/part4-emergencies.md`. Edited: `src/content/part4.ts` only: chapters `ep`, `mal`, `two`,
`questions`, plus two lines in `real` and `tips` to resolve the "5 s" inconsistency (caller's item 3).
`npx tsc --noEmit`, `npx vitest run`, `npm run check` and `npx vite build` all pass (exit 0). Not looked at in the browser.

Sources opened this round: USPA SIM 4-1 (uspa.org/sim/4-1), ISP Category A and B (uspa.org/skydiveschool/a, /b),
Parachutist July 2019 "The Five-Second Rule" (Planche Wallace), USPA Safety Check "Spinning Line Twists" (Crouch, 2019).

| # | sev | where | decision | what changed or why | source |
|---|---|---|---|---|---|
| 1 | safety | `mal` FIX "Line twists" | fixed | Card is now "Line twists, not spinning": canopy straight overhead, not spinning or diving; rear risers apart, kick, toggles stowed; "Two tries, check altitude. It starts to spin? Emergency procedure now." Clip swapped to APF `m_twists` (calm twists, credit kept as card source). `pov_twist` (USPA VR "Spinning Line Twists") moved to the EP card "Spinning, can't control", which now names spinning twists, "or you're not under the canopy", and says "Emergency procedure now. Don't kick, don't wait: a spin can cost up to 300 ft a turn." Line-twist quiz now says "not spinning" and its why adds the spinning case. | Crouch 2019 ("immediately pull the cutaway handle", up to 300 ft per revolution, kicking wastes altitude); ISP Cat A (spread risers, kick, brakes after) |
| 2 | safety | `mal` "Cut away anyway if…" | fixed | "It spins or dives and you can't stop it: act now." | Crouch 2019 |
| 3 | safety | `ep` 5-second card + quiz | fixed | Card: "Unclear canopy: 5 s at most… A limit, not a wait"; new point "Spinning, diving, or clearly not a flying canopy: no 5 s, act now". Quiz asks "looks odd, not sure it's bad. How long at most?", why says 5 s is the upper limit and a spin gets no 5 s. | Planche Wallace 2019 (5 s decision window); Crouch 2019; ISP Cat A ("respond within 5 seconds") |
| 4 | safety | `two` biplane card + quiz why | fixed | Steer the front one with its rear risers, only if needed; leave the back one alone; no flare; PLF. Why explains the flare/overfly risk. "Leave the back one's brakes stowed" not added: VR #6/7 not opened. | SIM 4-1 E (rear risers of front canopy, do not flare, PLF); ISP Cat A |
| 5 | safety | `ep` sequences | ask-owner + added note | Steps unchanged. Intro now starts "First, altitude: above 1,000 ft you cut away; below it, silver only (USPA ISP)", keeps the `<q-check/>`. | ISP Cat A ("check your altitude … above your cutaway hard deck of 1,000 feet") |
| 6 | fact | `ep` red callout + quiz why | fixed (RSL part ask-owner) | AAD "fires only very low, at a preset altitude". Added RSL line ("if your rig has one… backup: pull silver anyway", `<q-check/>`). Quiz why: "Pulling the handles is always your job (USPA ISP)". No CYPRES numbers given (unit/mode unknown). | ISP Cat A (AAD "pre-set altitude and speed"; RSL definition; "always your job to pull the handles") |
| 7 | fact | `ep` method B heading | fixed | "B. Two hands on red (taught at many schools)". | Bell 2019 gives no hand method of his own |
| 8 | fact | `ep2` caption; "Both hands on silver" step | fixed + ask-owner | Caption: "(method B). Why: in spins, some jumpers couldn't pull red with one hand (Parachutist, 2019)." Silver step adds "One or two hands on silver: ask your school. `<q-check/>`". | Bell 2019; USPA "Don't Delay, Cut Away" (both hands may be needed) |
| 9 | fact | `mal` "Hard pull / can't find the handle" | fixed + ask-owner | "Two tries or 5 s, whichever comes first. Then your school's EP: reserve only (USPA SIM) or cut away, then reserve. `<q-check/>`" | SIM 4-1 ("no more than two attempts or … five additional seconds"; "When no main pilot chute deploys … deploy the reserve"); ISP Cat A/B |
| 10 | fact | `two` intro, downplane | fixed + ask-owner | Intro: "USPA adds: if there's time, disconnect the RSL first; ask if and where your school teaches it. `<q-check/>`". Downplane: "(RSL first if there's time). Then steer the reserve and land normally." | SIM 4-1 E |
| 11 | fact | `two` side by side + quiz option | fixed | "Steer the dominant one (more overhead) gently with its rear risers, only if needed. No flare, PLF." `<q-check/>` removed. Quiz option "steer the dominant one". | SIM 4-1 E ("dominant canopy (more overhead)"); ISP Cat A |
| 12 | fact | `ep` 5-second card "Why" | fixed | "Why (Parachutist, 2019): in the 10 years before… with working gear…" | Planche Wallace 2019 ("equipment was in good order and no secondary malfunction") |
| 13 | fact | `two` | added | Callout "One open, the other still coming out": trap it between your legs; opens anyway → RSL off if possible, let it inflate, see which case. Now matches the "all 5 configurations" watch link. | SIM 4-1 E |
| 14 | fact | `mal` horseshoe | fixed + ask-owner | EP kept; adds: bridle round an arm or leg → ISP allows limb to the sky, two tries or 5 s, then EP; "Ask what your school teaches. `<q-check/>`" | ISP Cat A (pilot-chute entanglement) |
| 15 | wording | `mal` clips row `m_lineover` | fixed (dropped) | Clip removed: its source (APF) teaches two flares and a 2,000 ft decision, against the card. `pov_lineover` already shows it. `m_twists` also left the row (now on the card). | reviewer's APF transcript; USPA VR (per report) |
| 16 | wording | `mal` intro | fixed | "Some clips are first person (USPA's VR malfunction series); the rest are mostly from outside (APF "Cutaway!")." | uspa.org/vrvideos |
| 17 | wording | `Hero.tsx:49` | not done (out of scope) | Not a file I may edit. Still says "no cutaway below: pull the reserve only" with no downplane exception. Needs the next Hero fixer: "no cutaway below (except a downplane): pull the reserve". | ISP Cat A |
| 18 | wording | "silver handle" throughout | ask-owner | Not changed (dozens of lines in all parts). Reserve-handle type and colour added to the instructors' list. | ISP Cat A |
| 19 | wording | `two` intro | fixed | "The reserve is a real canopy: you steer and land it like the main." | reviewer |
| 20 | wording | `ep` "clear the lines… shoulder" | ask-owner | Callout kept as is (already marked). Instructors' question now asks "A bridle over the shoulder, or the RSL?" | ISP Cat A |
| 21 | wording | `mal` slider, end cells | partly rejected | The reviewer's "pump at the bottom, twice / hold until they open" cites a search excerpt; I opened ISP Cat A and Cat B and neither has it (Cat A lists them only as minor problems: continue or worse → EP by 2,500). Technique and `<q-check/>` kept; both cards now end "Two tries, check altitude between them" to match the green FIX rule. PLAN "Facts to verify" item stays open. | ISP Cat A/B |
| M1 | missing | toggle unstowed on opening | not added | Source (USPA VR #11 description, APF Ch 2) not opened this round; Tips already covers it. | — |
| M2 | missing | pilot-chute hesitation, hard pull technique, lost handle | not added | Already in Tips; confirmed in ISP Cat B. The hard-pull card points to the school's EP instead. | ISP Cat B |
| C1 | owner | FIX rule everywhere | fixed | Decision-altitude card: "Fixable canopy problem: two tries only, check your altitude between them" / "Not fixed by 2,500 ft? Emergency procedure" (no more "~5 s" there). FIX group sub adds "not spinning". All three FIX cards end with "Two tries, check altitude". | owner rule; ISP Cat A |
| C2 | consistency | `tips` 5-second line; `real` "Late or wrong EP" | fixed | Two rules now kept apart everywhere: handle/pull problems = two tries or 5 s, whichever first (SIM 4-1); canopy = 5 s at most to decide, spin = act now, fixable = two tries + altitude, 2,500 ft. Tips: the article's extra 5-s blocks (rarely past 15 s) are kept as the article's, "as a student it's still two tries, and never below 2,500 ft". Real: "Unclear canopy? 5 s at most…; spinning line twists: cut away right away (USPA, 2019)". | Planche Wallace 2019 ("rarely should efforts persist beyond 15 seconds"); Crouch 2019; SIM 4-1 |
| C3 | consistency | "pull takes about 1,000 ft, so … pull at 5,500" | not in part4 | No such line in part4.ts. The nearest is `part2.ts:439` ("Wave-off and pull together take about 1,000 ft (USPA), so start on time"), not my file. SIM 4-1 only says ~1,000 ft per 5 s of freefall; worth a look by the Part II fixer. | SIM 4-1 |
| Q | questions | `questions` chapter | rewritten | Grouped by phase (Gear, In the plane, Freefall, Opening and emergencies, Canopy and landing), 18 items, merging all fix logs' questions without duplicates; rewrites from part4-injuries-tips applied (2,500/1,000, 180°, two canopies, nothing out, spinning twists as "USPA says X; do you teach it?"). | all fix logs |

Counts: 21 findings + 2 missing + 3 caller items. Fixed 15 (1, 2, 3, 4, 6, 7, 9, 11, 12, 13, 15, 16, 19, C1, C2), fixed with an
owner question 4 (8, 10, 14, and 6's RSL line), ask-owner without a text change 3 (5 note only, 18, 20), partly rejected 1
(21), out of scope 2 (17 Hero, C3 part2), not added 2 (M1, M2).

Other things I noticed, not changed: `real` l.~1282 "USPA's safety director: all avoidable with an early decision": that
quote is from Ed Scott, USPA Executive Director ("Don't Delay, Cut Away"), not the safety director.

## Questions for the owner

1. **Первые слова аварийной процедуры.** USPA ISP начинает с высоты («выше 1 000 футов? тогда отцепка»). Я добавил это строкой
   над двумя способами, шаги не трогал. Как в твоей школе: «высота, прогиб, смотрю на красную…»? Рекомендую: спросить и вписать
   их слова первым шагом в оба списка.
2. **Тугое вытягивание / нет ручки: сразу запасной или отцепка?** SIM USPA говорит «сразу запасной», многие школы учат отцепку.
   В карточке теперь оба варианта и `<q-check/>`. Рекомендую: оставить так до ответа инструкторов.
3. **RSL / MARD на студенческих системах и отсоединяют ли его студенты при двух куполах?** Я добавил строку «RSL — страховка, кольцо
   всё равно дёргаешь» и «если есть время, сначала отсоедини RSL» с `<q-check/>`. Рекомендую: спросить, где RSL и учат ли его
   отсоединять; если нет — убрать вторую строку.
4. **Одной или двумя руками на кольцо (способ B)?** Отмечено `<q-check/>`. Рекомендую: спросить.
5. **«Подкова» с обмотанной стренгой: сначала стряхнуть или сразу аварийная?** ISP разрешает стряхнуть (две попытки или 5 с).
   Рекомендую: спросить; по умолчанию сразу аварийная.
6. **Ручка запасного: металлическое кольцо или мягкая подушка, какого цвета?** Во всём приложении «серебряное кольцо». Рекомендую:
   спросить; если подушка — заменить по всему приложению одной правкой.
7. **Hero.tsx: «ниже не отцепляйся» без исключения для «даунплейна».** Не мой файл. Рекомендую: дописать «(кроме даунплейна)».

## Questions for the instructors

Added straight into the `questions` chapter (I was the only fixer on it). New ones from this report, merged there:

1. Emergency procedure first words, hands on red and silver
   - EN: Emergency procedure: the exact first words ("altitude, arch, look red…"?), one hand per handle or both hands on red, and one or two hands on silver?
   - ES: Procedimiento de emergencia: ¿las primeras palabras exactas ("altura, arco, mira la roja…"?), una mano por manija o las dos en la roja, y una o dos manos en la plateada?
   - UK: Аварійна процедура: точні перші слова («висота, прогин, дивлюся на червону…»?), по руці на ручку чи обидві на червону, однією чи двома руками на кільце?
   - RU: Аварийная процедура: точные первые слова («высота, прогиб, смотрю на красную…»?), по руке на ручку или обе на красную, одной или двумя руками на кольцо?
2. Bridle round a limb
   - EN: Pilot chute bridle round an arm or leg: shake it off first (limb to the sky, two tries or 5 s), or straight to the emergency procedure?
   - ES: Brida del extractor enrollada en un brazo o una pierna: ¿primero soltarla (el miembro al cielo, dos intentos o 5 s) o directo al procedimiento de emergencia?
   - UK: Стренга витяжного обмотала руку чи ногу: спершу струсити (рука чи нога в небо, дві спроби або 5 с) чи одразу аварійна процедура?
   - RU: Стренга вытяжного обмотала руку или ногу: сначала стряхнуть (рука или нога в небо, две попытки или 5 с) или сразу аварийная процедура?
3. Reserve handle type and RSL (merged into the "Student rigs" question with AAD and pilot chute handle)
   - EN: Student rigs: which pilot chute handle, which reserve handle (metal ring or soft pillow, what colour), which AAD, mode and firing altitude, and is there an RSL or a MARD (Skyhook)?
   - ES: Equipos de alumno: ¿qué manija del extractor, qué manija de reserva (anilla metálica o almohadilla blanda, de qué color), qué AAD, modo y altura de activación, y llevan RSL o MARD (Skyhook)?
   - UK: Студентські системи: яка ручка витяжного, яка ручка запасного (металеве кільце чи м'яка подушка, якого кольору), який AAD, режим і висота спрацювання, чи є RSL або MARD (Skyhook)?
   - RU: Студенческие системы: какая ручка вытяжного, какая ручка запасного (металлическое кольцо или мягкая подушка, какого цвета), какой AAD, режим и высота срабатывания, есть ли RSL или MARD (Skyhook)?
4. Two canopies and the RSL
   - EN: Two canopies out: USPA says land a biplane or side by side with no flare, and cut away a downplane. Do students disconnect the RSL first, and where is it on our rigs? Walk us through all the cases on the ground.
   - ES: Dos velas abiertas: USPA dice aterrizar biplano o lado a lado sin flare y liberar un downplane. ¿Los alumnos desconectan antes el RSL y dónde está en nuestros equipos? Repasar todos los casos en tierra.
   - UK: Два куполи: USPA каже — біплан і пліч-о-пліч садити без flare, при «даунплейні» відчіплятися. Студенти спершу від'єднують RSL, і де він на наших системах? Розібрати всі випадки на землі.
   - RU: Два купола: USPA говорит — биплан и бок о бок садить без flare, при «даунплейне» отцепляться. Студенты сначала отсоединяют RSL, и где он на наших системах? Разобрать все случаи на земле.
