# Fixes: Part IV, injuries, real footage, tips   (2026-11-16)

Report: `docs/review/expert/part4-injuries-tips.md`. Edited: `src/content/part4.ts`, chapters `real`, `mistakes`, `tips`
only. The `questions` chapter and the emergency chapters (ep / mal / two) were not touched: question changes are listed
below for the next fixer. `npx tsc --noEmit` and `npx vitest run` pass (exit 0). Not looked at in the browser.

| # | sev | where | decision | what changed or why | source |
|---|---|---|---|---|---|
| 1 | safety | `real` "Bad flare, no PLF", "Legs down on a tandem"; `tips` landing bad list | fixed | "Legs up" removed for solo jumps. Now: feet and knees together, knees slightly bent, feet touch first, PLF every time. The tandem card says lifting the legs is a tandem rule. Tips bad list: "Feet apart, or reaching for the ground with one foot or a hand." | USPA ISP Cat A ("press your feet and knees together with your knees slightly bent", "Allow your feet to contact the ground first"); USPA 2024 non-fatal summary (leg lift is about tandem students only) |
| 2 | safety | `real` "Late or wrong emergency procedure" | fixed | "Two tries" for a spinning canopy replaced with the 5-second rule: about 5 s to see it clearly getting better, otherwise cut away and reserve, as a student never below 2,500 ft. Now matches the `tips` chapter. | Planche Wallace 2019 (5-second rule, "rarely ... beyond 15 seconds", no "two tries" rule); ISP Cat A (two tries / 5 s is for handle problems) |
| 3 | fact | `real` "Low turns" | fixed | "7% of all reported 2024 incidents (about 13% of landing incidents)". 15 of 215 incidents; 15 of 112 landing incidents = 13%. | USPA 2024 non-fatal summary, Part One |
| 4 | fact | `real` stats ~6× and 41% | fixed | ~6× now says "(France 2010–19, 6.2 M jumps)". 41% now says most of those students were on static line, not AFF. | Fer 2021 (RR 6.1, 6.2 M jumps); Westman 2007 Table 2 (97 of 107 student injuries "conventional", 8 AFF; AFF 0.81 vs licensed 0.31 per 1,000) |
| 5 | fact | `mistakes` "Can't find the handle" | fixed | what: he stopped arching as he reached back, the handle rode up his back. act: "Keep the arch while you reach. Two tries or 5 s, then the emergency procedure." | Zach Foreman's description of `qidpLSdggOo` ("biggest mistake was not arching ..."); ISP Cat A ("no more than twice or for 5 seconds") |
| 6 | fact | `real` case "Distracted at 6,000 ft" | added + ask-owner | New last point, procedure-neutral: "Pilot chute wrapped or in tow: emergency procedure now, by 2,500 ft. The AAD is not a plan." Which procedure (reserve only or cutaway then reserve) is left to the school. | USPA Rating Corner 2023 (case facts, "automatic"); SIM 4-1 (act by 2,500 ft for students; both pilot-chute-in-tow procedures accepted) |
| 7 | fact | `mistakes` "Downwind landing" | fixed | what: he saw the wrong T at 300 ft, 19 canopies around, chose not to turn low. act: "Wrong way low, with traffic around? Don't turn low: land downwind, flare fully, PLF." | Paul Lewis's description of `tG63N8Y-ti4`; SIM 4-1 ("Landing into the wind is desirable, but not at the risk of a low turn"; landing priorities) |
| 8 | fact | `tips` freefall good list (tunnel) | rejected (wording tightened) | The claim has a source the reviewer didn't open: Andy Pointer (CCI, Skydive Algarve), Skydive Mag, 1 Dec 2020: "10 minutes in a wind tunnel before your course ... lowers the risk of needing to repeat AFF levels", and tell the tunnel instructors you have AFF booked. Kept the number, now attributed to "one AFF instructor"; added "Pointer 2020" to the chapter's sources. | Skydive Mag, "5 Hot Tips for your AFF course" |
| 9 | fact | `real` quiz Q1, why | fixed | "In the Swedish study, exit and freefall together were under 5%." | Westman 2007 Table 4 (5 + 7 of 257) |
| 10 | fact | `real` "Bad flare, no PLF" | fixed | "flaring too early, too late or not at all". "Half" and "jerky" removed (a correctly timed half flare had the lowest ISI; "jerky" isn't in the report). | USPA 2024 non-fatal summary (early 2.0, late 2.5, none 2.7; uneven/half 1.0) |
| 11 | wording | `mistakes` intro | fixed | "No injury is shown on screen." | Two cards name fractures |
| 12 | wording | `mistakes` "Flare stabbed too fast" | fixed | what: the uploader says only "too fast of a flare". He hits hard and tumbles. The act line (flare smoothly and all the way, PLF) stays as general advice. | Description of `N8vpe-olEYs`: "Too fast of a Flare." |
| 13 | wording | `real` bar charts | fixed | Leg chart title: "Inside the leg: where it gets hurt". Source labels now say 77% fractures, 12% "leg, not specified" not shown, and that "Other" on the body-part chart is the remainder, not given in the papers. | Forrester 2023 (LER); Barthel 2023 Table 1 (51 / 19 / 18%) |
| 14 | wording | `tips` landing bad list | fixed | "the single worst injury among 2024 US landings without a turn" | USPA 2024 ("The most severe injury in this group came from a dropped toggle", ISI 3.0) |
| 15 | wording | `questions` (180°) | ask-owner (not edited) | Off limits for this fixer. No USPA source sets 180°; it's the school's own ladder. | SIM 4-1, ISP Cat A–C |
| 16 | wording | `questions` (decision altitude) | ask-owner (not edited) | Off limits. SIM 4-1 already gives 2,500 / 1,000 ft; the open point is whether the DZ wants higher. | SIM 4-1 |
| 17 | wording | `questions` (two canopies, nothing out) | ask-owner (not edited) | Off limits. SIM 4-1 gives two accepted procedures for each; hard pull is reserve. | SIM 4-1 |
| 18 | wording | `tips` quiz Q2, option 3 | fixed | EN/ES now "Only at 6,000 ft", same as RU/UK. | consistency |
| M1 | missing | `real` Canada callout | fixed | "Canada, Jan–May 2025". Opened the PDF: 2025S-02/03/04 are slow or unfinished flare, no PLF. The extra case 2025S-01 (half flare at 250 ft, pond) was not added: optional, the callout is short on purpose. | CSPA "AIM Analysis as of May 2025" |
| M2 | missing | `real` 46% stat | fixed | `<q-check/>` removed; now "about half of them low turns, more often deliberate than accidental". 2001–2020: landing 45.8%, non-turn 11.7, unintended low turn 8.8, intended low turn 13.7 (8.8 + 13.7 = 22.5, about half of 45.8). | USPA 2020 fatality summary |
| M3 | missing | `tips` A-license | fixed | "oral exam (100%)" | USPA A-license page ("Pass the oral exam with 100%") |
| M4 | missing | `questions` additions | listed below | Off limits for this fixer. | BSR 2-1 M.2, ISP Cat A / C (per the report) |

Counts: 18 findings + 4 missing items. Fixed 17 (1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 18, M1, M2, M3, plus 6 added), rejected 1 (#8, wording tightened), ask-owner 4 (#6 procedure, #15, #16, #17), listed for the questions fixer: #15–17 and M4.

## Questions for the owner

1. **Случай «Distracted at 6,000 ft»: вытяжной обмотал ногу.** Я добавил нейтральную строку «аварийная процедура сразу, не ниже 2 500 футов, AAD — не план», без выбора процедуры. SIM разрешает два варианта при вытяжном в следе: сразу запасной или отцепка, потом запасной. Какой учит твоя школа? Рекомендую: оставить строку нейтральной, пока инструкторы не ответят, потом дописать их вариант.
2. **Вопрос в главе «questions» про 180° выше 1 000 футов.** Это из вашего наземного курса, а не правило USPA? Рекомендую: да, переписать как «наш наземный курс сказал: до 180° выше 1 000 футов».
3. **Вопрос про высоту решения и hard deck.** USPA уже даёт 2 500 и 1 000 футов. Переписать вопрос в «USPA говорит 2 500 и 1 000. У вас выше?» Рекомендую: да.
4. **Вопросы про два купола и «ничего не вышло».** Разделить: тугое выдёргивание = запасной; вытяжной в следе и два купола рядом = «SIM разрешает два варианта, какой учите вы, и где отсоединяется RSL на наших системах?» Рекомендую: да.

## Questions for the instructors

For the `questions` chapter (fixer after me). Changes to existing questions: #15, #16, #17 above.

New questions (from the report's "Missing"):

1. RSL or MARD
   - EN: Do the student rigs have an RSL or a MARD (Skyhook)? After a cutaway, do I still pull the reserve handle?
   - ES: ¿Los equipos de alumno tienen RSL o MARD (Skyhook)? Después de liberar, ¿igual tiro de la manija de la reserva?
   - UK: На студентських системах є RSL чи MARD (Skyhook)? Після відчеплення я все одно смикаю ручку запасного?
   - RU: На студенческих системах есть RSL или MARD (Skyhook)? После отцепки я всё равно дёргаю кольцо запасного?
2. AAD
   - EN: Which AAD is on the student rigs, and at what altitude does it fire?
   - ES: ¿Qué AAD llevan los equipos de alumno y a qué altura se activa?
   - UK: Який AAD стоїть на студентських системах і на якій висоті він спрацьовує?
   - RU: Какой AAD стоит на студенческих системах и на какой высоте он срабатывает?
3. Spinning line twists
   - EN: Line twists that are spinning: kick out first, or cut away right away?
   - ES: Twists que giran: ¿primero patear para deshacerlos o liberar enseguida?
   - UK: Перекрут строп, який обертається: спочатку розкручуватися чи одразу відчіплятися?
   - RU: Перекрут строп с вращением: сначала раскручиваться или сразу отцепляться?
4. Radio
   - EN: Is there a radio check under canopy, and what do I do if the radio is silent?
   - ES: ¿Hay prueba de radio bajo la vela y qué hago si la radio no se oye?
   - UK: Чи є перевірка радіо під куполом і що робити, якщо радіо мовчить?
   - RU: Есть ли проверка радио под куполом и что делать, если радио молчит?
5. Pattern here
   - EN: Where is the holding area, what are the pattern altitudes, and what shows the landing direction here?
   - ES: ¿Dónde está la zona de espera, cuáles son las alturas del circuito y qué indica aquí la dirección de aterrizaje?
   - UK: Де зона очікування, які висоти схеми і що тут показує напрямок посадки?
   - RU: Где зона ожидания, какие высоты схемы и что здесь показывает направление посадки?
6. Local hazards
   - EN: Where are the power lines and other hazards around the dropzone if I land off?
   - ES: ¿Dónde hay cables y otros peligros alrededor de la zona si aterrizo fuera?
   - UK: Де дроти та інші небезпеки навколо дропзони, якщо сяду поза майданчиком?
   - RU: Где провода и другие опасности вокруг дропзоны, если сяду вне площадки?
