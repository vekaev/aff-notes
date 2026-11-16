# Fixes: Part I "In the plane" (2026-11-16)

Report: `docs/review/expert/part1-plane.md` (merged two-pass version, 13 findings + "Missing"). Edited: `src/content/part1.ts` only.
Checks: `npx tsc --noEmit -p tsconfig.json` exit 0, `npx vitest run` exit 0.

| # | sev | where | decision | what changed or why | source |
|---|-----|-------|----------|---------------------|--------|
| 1 | safety | `plane`, Aircraft emergency | fixed + ask-owner | Intro now says USPA lists four commands and the school sets the altitude for each. Points, low to high: land with the plane (helmet and belt on, brace) / exit and pull the **reserve** right away / exit and pull the **main** right away / exit as the instructor says, maybe normal. No altitude bands written; last line "altitude for each command: <q-check/>". Quiz option and "why" for the low case now say helmet too. | USPA ISP Cat A (uspa.org/skydiveschool/A), "Aircraft emergencies" (opened). Band order low→high follows the reviewer's DZ guide; not presented as a rule. |
| 2 | safety | `climb`, intro + quiz Q1 | ask-owner (wording fixed) | "always in this order" contradiction removed: "Six moves in a fixed order. As taught in the ground course: right side first, then left. Which side goes first depends on the door, check it for your aircraft <q-check/>". Quiz Q1 now asks about the ground-course climb-out; the "why" says it can be the mirror image with the door on the other side. Order kept, since the owner's ground course taught exactly these six moves. | Owner's ground course; Skydive California flies a Caravan and a Cessna (owner); USPA gives no hand/foot order. |
| 3 | safety | `gear`, AAD card | fixed | "still in freefall, 750–1,000 ft" → "still falling fast when low: in freefall, or under a bad canopy that still comes down fast. On a student unit, around 750–1,000 ft <q-check/>". q-check kept: which AAD/mode the school uses is unknown (Vigil Student fires at 1,040 ft). | CYPRES 2 User's Guide (2025) §2.3 and Technical Data "Student: 1000 / 750 ft, >29 mph (13 m/s)" (PDF read); Vigil 2 manual: Student 1,040 ft at 20 m/s. |
| 4 | fact | `count`, steps 1–2 + callout | fixed + ask-owner | Side words "(reserve side)" / "(main side)" removed from Check in / Check out. New callout line: outside instructor depends on the door side; on a left-door plane (Caravan) often the one on your left, reserve side. "Your aircraft: <q-check/>". | USPA Rating Corner "AFF Tips" (Otter: reserve side "down and away", main side "just barely out the door", opened). |
| 5 | fact | `gear`, Reserve card | fixed | "(USPA) <q-check/>" → "(FAA rule)", check badge removed, all 4 languages. | 14 CFR 105.43(b)(1), law.cornell.edu (opened): 180 days, certificated rigger. |
| 6 | fact | `gear`, rig part AAD | fixed | "Switched on before the jump" → "Switched on on the ground, before you gear up". "Your instructor does it" not added (no source). | CYPRES 2 User's Guide §4.3: switch on "at the takeoff site on the ground", ideally just before donning the rig, never in an aircraft. |
| 7 | fact | `gear`, rig part pilot chute handle | ask-owner | Text kept, "On your student rig: <q-check/>" added. | BOC bottom right is the norm; handle type on school rigs unknown. |
| 8 | wording | `climb`, clip caption + step 2 | fixed | Caption → "Climb-out practised in a mock-up door". Step 2: "door handle (in the mock-up below, a bar across the top of the door)". | Frames of `public/media/climb.mp4` checked: hangar mock-up, overhead horizontal bar. |
| 9 | wording | `count`, callout | fixed | Count examples → ("Out, in, arch!", "Ready, set, go"); "Out, in, out" removed. Meaning line → 'Usually "check **in**" = the instructor inside the plane, "check **out**" = the one outside. Your school: <q-check/>'. | USPA Cat A: "Up, down, arch!" or "Out, in, arch!" (opened). |
| 10 | wording | `count`, watch link kd8HVlIfzqc | rejected (left as is) | Per the main session: the video stays; the app now opens non-embeddable videos on YouTube (commit bb861dd). Credit "Fluxed (Perris)" not changed. | — |
| 11 | wording | `plane`, Low point | fixed | Merged into #1: "Stay in, helmet and belt on, brace (hands clasped behind your head)". | USPA Cat A: "ensure your helmet and seat belt or restraint are on". |
| 12 | wording | `count`, callout | fixed | "One instructor on each side" → "Two instructors on the first categories, one on each side; later just one, and the climb-out changes". | USPA ISP Cat C: "If you now have only one AFF instructor, the instructor will revise the climb-out procedure" (opened). |
| 13 | wording | `gear`, Main card + rig part | fixed | "at 5,500 ft" → "at 5,500 ft (category A)" in both places. | USPA Cat A altitude box: "AFF: 5,500 feet". |
| M1 | — | `plane`, emergency | added | "Main right away" option (see #1). | USPA Cat A. |
| M2 | — | `gear`, "What gets checked" | added | New line: altimeter set (zero on the ground), helmet chin strap done up, goggles clean and secure. | USPA SIM 4-4: altimeters "checked and set", helmet fit and chin strap, goggles "secure and clean" (opened). |
| M3 | — | `plane`, ride-up rules | added | New first card "Walk up from behind": approach the plane from the rear, away from the propeller. | USPA Cat A: "Always approach fixed-wing aircraft from the rear" (opened). |
| M4 | — | `plane`, emergency | added + ask-owner | New line: riding the plane down, a student-mode AAD should be switched off before the plane descends, or the descent can fire it. "Who does it: <q-check/>". | CYPRES 2 User's Guide §2.3 (Student CYPRES: switch off in the aircraft prior to descent if the jump is aborted). |
| M5 | — | AAD not armed below 1,500 ft exits | rejected | Not added: it is a jump-pilot note (CYPRES guide §8.1), not a student action; the emergency list already says to follow the instructor. | CYPRES 2 User's Guide §8.1. |
| M6 | — | "Lost both instructors: pull now" | rejected | Already in Part IV (`part4.ts` quiz "you've lost both instructors"). | USPA Cat A. |
| M7 | — | q-checks without an "ask the instructors" line | listed | Not editing the questions chapter (shared); lines below. | CLAUDE.md. |

Note: the ground course taught "right foot **closer**" / "left foot **closer**"; the app says "right foot to the door edge", "both feet at the door edge". Not changed (no finding); see question 4.

## Changes needed elsewhere

- None required in `widgets.tsx`: the `ExitCount` drawing is a side view (inside / outside), with no reserve/main side, so it stays correct after #4. The `Climb` drawing still shows right side first, which matches the ground course; if the instructors say the Caravan is the mirror image, the drawing must be flipped too.
- `part4.ts` "questions" chapter: add the instructor questions below (shared file, not edited here).

## Questions for the owner

1. **Аварийная ситуация в самолёте**: на каких высотах в Skydive California «садимся с самолётом», «прыгаем и сразу запасной», «прыгаем и сразу основной», «обычное отделение» — и одинаково ли на Caravan и Cessna? Рекомендую: спросить на брифинге и вписать цифры школы; пока в приложении только порядок без высот и <q-check/>.
2. **Кто снаружи на выходе**: на Caravan (дверь слева) инструктор снаружи стоит слева от тебя, со стороны запасного? Рекомендую: да, так обычно на самолётах с дверью слева; подтвердить у инструктора и потом убрать <q-check/>.
3. **Порядок выхода в дверь**: «сначала правая сторона» — это для Caravan или для Cessna? С какого самолёта прыгают студенты AFF? Рекомендую: оставить как учили на курсе, но уточнить самолёт; если на Caravan наоборот — перевернуть текст и рисунок.
4. **Ноги в двери**: на курсе было «правую ногу ближе» — это «носок на краю двери» или просто «подвинуть ближе к двери»? Рекомендую: уточнить и поправить подписи шагов 3 и 5.
5. **Ручка вытяжного на студенческих системах**: мягкая «медуза»/шарик внизу справа (BOC) или вытяжное кольцо? Рекомендую: BOC справа внизу — норма, подтвердить и убрать <q-check/>.
6. **AAD**: какой прибор и режим на студенческих системах (CYPRES Student / Vigil Student)? Кто выключает его, если садимся с самолётом? Рекомендую: спросить вместе с вопросом 5.

## Questions for the instructors

1. EN: At what altitudes do we land with the plane, exit on the reserve, exit on the main, or exit normally, and is it the same on the Caravan and the Cessna?
   ES: ¿A qué alturas aterrizamos con el avión, salimos con la reserva, salimos con la principal o hacemos una salida normal? ¿Es igual en el Caravan y en el Cessna?
   UK: На яких висотах ми сідаємо з літаком, відокремлюємося на запасному, на основному чи звичайно? Чи однаково на Caravan і Cessna?
   RU: На каких высотах мы садимся с самолётом, отделяемся на запасном, на основном или обычно? Одинаково ли на Caravan и Cessna?
2. EN: Which aircraft do AFF students jump, and which instructor is inside and which outside (my left or my right)?
   ES: ¿De qué avión saltan los alumnos AFF y qué instructor va dentro y cuál fuera (a mi izquierda o a mi derecha)?
   UK: З якого літака стрибають студенти AFF і хто з інструкторів усередині, а хто назовні (ліворуч чи праворуч від мене)?
   RU: С какого самолёта прыгают студенты AFF и кто из инструкторов внутри, а кто снаружи (слева или справа от меня)?
3. EN: In the climb-out on our aircraft, which hand and foot go first, and which bar do I hold?
   ES: En el climb-out de nuestro avión, ¿qué mano y qué pie van primero y de qué barra me agarro?
   UK: Під час виходу в двері на нашому літаку: яка рука й нога першими і за який поручень триматися?
   RU: При выходе в дверь на нашем самолёте: какая рука и нога первыми и за какой поручень держаться?
4. EN: What pilot chute handle do the student rigs have, and which AAD and mode?
   ES: ¿Qué manija del extractor tienen los equipos de alumno y qué AAD y modo?
   UK: Яка ручка витяжного на студентських системах і який AAD та режим?
   RU: Какая ручка вытяжного на студенческих системах и какой AAD и режим?
5. EN: If we ride the plane down, who switches off my AAD?
   ES: Si bajamos con el avión, ¿quién apaga mi AAD?
   UK: Якщо ми знижуємося разом із літаком, хто вимикає мій AAD?
   RU: Если мы снижаемся вместе с самолётом, кто выключает мой AAD?
