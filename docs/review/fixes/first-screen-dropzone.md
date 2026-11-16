# Fixes: first screen + Part V "Your dropzone"   (2026-11-16)

Report: `docs/review/expert/first-screen-dropzone.md`. Edited: `src/content/dropzone.ts` only.
Hero.tsx, SkyRail.tsx, ui.ts, widgets.tsx are being fixed by the main session; part2/3/4 text belongs to the other
fixers. Their findings are logged below with the current line so nothing is lost.
Checks: `npx tsc --noEmit -p tsconfig.json` exit 0, `npx vitest run` exit 0 (7 tests). Not looked at in the browser.

| # | sev | where | decision | what changed or why | source |
|---|-----|-------|----------|---------------------|--------|
| 1 | safety | Hero.tsx:53 timer "5 s · count after the pull" | main session | Part III (part3.ts:37, :134) already says "our ground course counts to five, USPA's AFF syllabus to three, ask" with <q-check/>. Still open: Hero timer (main session) and part2.ts:244 "Then <b>look, reach, throw</b> and count to five (Part III)." (other fixer: add "or three, ask" / <q-check/>). | uspa.org/skydiveschool/A |
| 2 | safety | part4.ts:262 vs :1728 | other fixer | Current lines: part4.ts:262 "Fixable problem: <b>two tries</b> or ~5 s, never below 2,500"; part4.ts:1728 "Clearly getting better? Another 5 s, rarely more than 15 in all, and as a student never below 2,500 ft." Two limits for the student. | SIM 4-1; Parachutist "Five-Second Rule" |
| 3 | fact | Hero.tsx:52; part2.ts:381, :464, :470 | main session + other fixer | Hero (main session). Other fixer, current lines: part2.ts:381 "<b>Every 3 seconds</b> (USPA). <b>All the time.</b>"; part2.ts:470 "USPA says every 3 seconds, all the time…". SIM 4-1 says 5 s; part4.ts:1604/:2004 already note "some schools teach about 5". | uspa.org/skydiveschool/A; uspa.org/sim/4-1 |
| 4 | fact | dropzone.ts callout + quiz why | fixed | The suspension rule moved out of "What jumpers say" into the facts list as "Dropzone rule", linked to skydivecalifornia.com/experienced. "Fly the proper pattern" (now covered by the rule) removed from the callout. Quiz "why" now says it is the DZ's written rule and why the pattern matters; the unsourced farmland sentence dropped from the why. | skydivecalifornia.com/experienced: "Repeated failure to fly the correct landing pattern will result in a suspension." |
| 5 | fact | dropzone.ts:18 wind | ask-owner (kept, per owner) | Kept "usually from the north (ground course)" with <q-check/>, plus what the data shows and "check the windsock before every jump". Reviewer partly wrong: I pulled Tracy Municipal (KTCY) hourly reports 2023–24 (IEM ASOS, winds ≥ 3 kt, 11,830 obs). All hours: NW 24%, W 22%, N 13%, SE 13%. Daytime 08–17: NW 34%, N 24%, W 16%. So in jump hours it's mostly north-west, then north; "north" is close, not wrong. The pattern drawing's east wind (widgets.tsx:218) is main session. | mesonet.agron.iastate.edu ASOS TCY; owner's ground course |
| 6 | fact | widgets.tsx:222 holding-point circle | main session | Drawing flies 360°, text says ≤ 180°. Text side (part3.ts:246) already says "180° or less <q-check/>"; part4.ts:2103 asks the instructors. | dropzone.ts:20; part3.ts:246 |
| 7 | fact | SkyRail.tsx:31 | main session | Linear altitude on the rail. | browser measurement in the report |
| 8 | fact | dropzone.ts categories card | fixed (+ ask-owner on D) | Added **A** ("two instructors hold you, pull at 5,500"), B gets "forward movement", names now C-1, D-1/D-2, E-1/E-2 (7 jumps, matches "7 training jumps" in the course price), plus "the last AFF jump is your first fully solo skydive". Did not write "D = first solo exit": the DZ guide doesn't say it; USPA Cat D only says "you will perform a solo exit". | skydivecalifornia.com AFF training guide; uspa.org/skydiveschool/D |
| 9 | fact | dropzone.ts pull card; Hero tape; part2.ts:450 | fixed (Part V) + main session (Hero) | Pull card: "USPA lowers the pull later: D 5,000, E 4,500 <q-check/>". Hero label "pull (cat. A–C)" is main session. part2.ts:450 "Ask about later categories." is fine as is. | uspa.org/skydiveschool/D ("5,000 feet"), /E ("4,500 feet") |
| 10 | wording | Hero.tsx:184-192 timers | main session | Timers read as part of the emergency group. | — |
| 11 | wording | part2.ts:404 "pull takes about 1,000 ft" | other fixer (looks done) | Current part2.ts:439 already reads "from 6,000 you have about 3 seconds to 5,500". Nothing left for me. | — |
| 12 | wording | Hero.tsx:152; ui.ts:6-12 | main session | Hero.tsx:152 already says "their briefing always wins over this page"; unused ui.heroText keys remain. | — |
| 13 | wording | Hero.tsx:22; ui.ts:6 "AFF level 1" | main session | → "AFF category A". | SIM Section 4 (ISP) |
| 14 | wording | Hero.tsx:61, 102-103 canopy line | main session | Level line then vertical drop. | SIM Category A |
| 15 | wording | dropzone.ts "Read and watch next", SIM 4-1 | fixed | "The rule book itself" → "USPA's emergency procedures; the rules themselves are the Basic Safety Requirements (SIM 2-1)", with a link to /sim/2-1. Note: the reviewer's title is off: 4-1 is titled "Skydiving Emergencies", not "Emergency Procedure Recommendations"; the point (rules = BSRs, 2-1) holds. | uspa.org/sim/4-1; uspa.org/sim/2-1 "Basic Safety Requirements" |
| 16 | wording | dropzone.ts Online Ground School | fixed | "the whole course" → "a free refresher on gear, exit, … It doesn't replace your ground school." | USPA: "not a course that can be used as complete training" |
| 17 | wording | dropzone.ts watch credits | fixed | Student Cat A video: credit "AV (student)", label "(2022)". Graduation: label "AFF graduation jump here (2015)". | YouTube oEmbed + uploadDate 2022-07-18 and 2015-02-19 |
| 18 | wording | dropzone.ts:19, :20, :33-34 | partly fixed; ladder rejected | Holding point keeps <q-check/>. Farmland line gets "Find it on the ground-school map <q-check/>" (source is Reddit). Turn ladder: no <q-check/> added: it is the owner's own ground-course version (docs/PLAN.md:145, "owner's final version"), and the line already says "taught here". The map question goes to the instructors (below). | docs/research/skydive-california.md; docs/PLAN.md:145 |
| M1 | missing | Radio failure plan | ask-owner | Not in SIM Cat A; school-specific. Proposed as an instructors' question. | — |
| M2 | missing | After AFF: A license | added | Card point: "Then the A license: 25 jumps, oral and written test, check-out dive". | skydivecalifornia.com/learn-to-skydive |
| M3 | missing | Later pull altitudes | added | See #9. | uspa.org/skydiveschool/D, /E |
| M4 | missing | "Be prepared to PLF every landing" | not added | Hero already has "flare, then PLF" and Part V links the DZ PLF page. | — |
| M5 | missing | DZ facts: AAD required, grassy landing area | added | Facts list: "AAD required for every jumper. A big grassy landing area." The BSR 2-1 J.3 ground-to-air note is not added: it is a DZ duty, not a student action, and "radio help under canopy" is already listed. | skydivecalifornia.com/experienced: "AADs are required for ALL skydivers", "Big ol' grassy landing area" |
| x | small | ES/RU/UK term notes | not changed | ES "Lock on" on the pull card is the app's term everywhere (part2.ts:235, :437). RU/UK "выброски/викидання" vs Hero "отделение": left for the main session, which owns the Hero. | — |

## Questions for the owner
1. Ветер: в наземном курсе сказали «обычно с севера». Данные аэропорта Трейси за 2023–24 днём: чаще всего с северо-запада (34%), потом с севера (24%). Оставить «с севера» с пометкой и цифрами, как сейчас? **Рекомендую: да, оставить как есть**, и уточнить у инструкторов, с какой стороны обычно строят заход.
2. Категория D: в USPA это прыжок с самостоятельным отделением. В Skydive California это тоже первый выход без инструкторов? **Рекомендую: не писать «первый самостоятельный выход», пока инструкторы не подтвердят** (вопрос ниже).
3. План при отказе радио: добавить в часть V короткий пункт «радио молчит: лети свою схему 900/600/300 и садись против ветра»? **Рекомендую: добавить только после ответа инструкторов** (вопрос ниже), потому что сигнал и план у каждой школы свой.

## Questions for the instructors
1. EN: Can you show me on the map the holding point, the side we must not land on, and the alternate fields?
   ES: ¿Me puede mostrar en el mapa el punto de espera, el lado donde no se puede aterrizar y los campos alternativos?
   UK: Можете показати на карті точку очікування, бік, де не можна сідати, і запасні поля?
   RU: Можете показать на карте точку ожидания, сторону, где нельзя садиться, и запасные поля?
2. EN: Which way does the wind usually blow here, and which side is the usual pattern?
   ES: ¿De dónde suele soplar el viento aquí y por qué lado se hace normalmente el circuito?
   UK: Звідки тут зазвичай дме вітер і з якого боку зазвичай будують схему заходу?
   RU: Откуда здесь обычно дует ветер и с какой стороны обычно строят схему захода?
3. EN: What is the pull altitude on categories D and E here?
   ES: ¿A qué altura se abre aquí en las categorías D y E?
   UK: На якій висоті тут розкриваються на категоріях D і E?
   RU: На какой высоте здесь раскрываются на категориях D и E?
4. EN: Is D-1 my first exit without instructors holding me?
   ES: ¿En D-1 salgo por primera vez sin que me sujeten los instructores?
   UK: На D-1 я вперше відокремлююсь без інструкторів, які тримають?
   RU: На D-1 я впервые отделяюсь без инструкторов, которые держат?
5. EN: If my radio is silent or I can't understand it, what do I do, and is there a signal from the ground?
   ES: Si la radio no suena o no la entiendo, ¿qué hago? ¿Hay alguna señal desde el suelo?
   UK: Якщо рація мовчить або я не розумію, що кажуть, що робити? Чи є сигнал із землі?
   RU: Если рация молчит или я не понимаю, что говорят, что делать? Есть ли сигнал с земли?
