# Fixes: Part II "Freefall" (2026-11-16)

Report: `docs/review/expert/part2-freefall.md`. Edited: `src/content/part2.ts` only. `src/widgets.tsx` was not touched
(the main session took the Altimeter dial over). Checks: `npx tsc --noEmit -p tsconfig.json` exit 0, `npx vitest run`
exit 0 (7/7). Seen in the dev server: altitude chapter (EN desktop light, UK 375 px dark), flow (EN desktop), signals
(RU 375 px dark), ES strings checked on the page as text.

Sources opened: USPA ISP Category A (uspa.org/skydiveschool/A); Para Gear Altimaster III Galaxy listing
(paragear.com/skydiving/10000117/I11915/ALTIMASTER-III-GALAXY-SKYDIVING-ALTIMETER); FAI Skydiving Commission
(fai.org: belly-to-earth terminal velocity "about 200 km/h (about 120mph)"); the clip `public/media/arch.mp4` frame by frame.

| # | sev | where | decision | what changed or why | source |
|---|---|---|---|---|---|
| 1 | safety | altitude callout + quiz | fixed | Callout: "...pull at 5,500, or **right now** if you're already lower." Quiz answer "Altitude, arch, pull at 5,500 (or now, if lower)"; "why" adds "If the altimeter already reads lower, pull right now." 4 languages. | USPA Cat A: "The number-one priority on any skydive is to pull." |
| 2 | safety | altitude + flow | added | Altitude: red callout "Pull priorities (USPA), in this order: pull / pull at your altitude / pull stable, if you can / altitude comes before stability: unstable or spinning at 5,500? Pull anyway." New quiz question (unstable and spinning at 5,500 → pull now). Flow: callout "Unstable after exit: check altitude, arch until the horizon comes flat into view, follow your instructors' signals (USPA)." | USPA Cat A: the three priorities, "Always prioritize altitude over stability", "In case of instability, check your altitude, arch until the horizon comes flat into view, and follow your instructors' signals." |
| 3 | fact | altitude, Lock on card | fixed | "Watch the altimeter only: from 6,000 you have about **3 seconds** to 5,500. At 5,500 wave off and pull. Wave-off and pull together take about **1,000 ft** (USPA), so start on time." 3 s = 500 ft / 176 ft/s (120 mph). | USPA Cat A: wave-off "is the beginning of a slow, smooth, pull sequence that will take approximately 1,000 feet"; lock on at 6,000 "until you see it read 5,500"; FAI: ~120 mph belly to earth. |
| 4 | fact | flow, 5,500 row | fixed + ask-owner | Removed "if your school teaches it". Now: "**Wave off**: wave both arms smoothly over your head ('I know my altitude, I'm pulling'). How many waves your school wants <q-check/>. Then look, reach, throw..." The procedure (wave off at 5,500, then pull) is unchanged; only the wave count stays open. | USPA Cat A: "At 5,500 feet, wave off by waving both arms smoothly overhead." |
| 5 | fact | flow COA rows + quiz | ask-owner (owner's order kept) | Owner dictated "altitude → left → right → chin up" from the ground course: kept. First COA row adds "(USPA starts with the horizon: horizon → altitude → left → right.)". Quiz: no option is the USPA order, so it can't be marked wrong; the "why" now says the USPA order is fine too and that what matters is left (reserve side) before right and never skipping the altimeter. Clip caption (horizon, altimeter, instructors) left as is: it describes the credited video, which follows USPA. | USPA Cat A: heading on the horizon, altimeter, reserve-side then main-side instructor. |
| 6 | fact | widgets.tsx Altimeter | handled in main session | Handled in main session (dial redrawn: ticks for 6,000 and 5,500, colour only low on the dial). From this side: a muted note under the dial in `part2.ts` flow chapter: "A real student altimeter has colour only on the low part of the dial: the Alti-2 Galaxy, for example, has a yellow and red arc that starts at 3,000 ft (Para Gear). Nothing marks 6,000 or 5,500: read the numbers. Look at your own altimeter before the jump." The redrawn dial also has a legend line "colour on real dials starts low (check yours)": if that is enough, drop the note (or the legend) so it isn't said twice. | Para Gear: "yellow caution and red warning arc that starts at 3,000 feet." |
| 7 | fact | body, "Relax, breathe" | fixed | "USPA cue: **heading (horizon), altitude, arch, legs, relax**." | USPA Cat A: HAALR (Heading, Altitude, Arch, Legs, Relax). |
| 8 | fact | signals, "Shaking you on exit" | ask-owner | Card kept; "what" now adds "Not a USPA signal: ask your school what it means. <q-check/>". | USPA Cat A signal list has no shake signal; the page doesn't mention it. |
| 9 | fact | signals, Legs out card + quiz | fixed | Card: "Extend your legs **a little** (about 6 in / 15 cm) and **hold** (USPA). Thumbs up = good." Quiz option "Extend your legs about 6 in (15 cm) and hold"; "why": "...not all the way. A thumbs up means good." | USPA Cat A: "Extend Legs Six Inches and Hold". |
| 10 | wording | body, Legs | ask-owner | No change: the line already has `<q-check/>` and asks the school. USPA's related signal is "Knees Together Slightly -or- Toe Taps", so "legs together" is probably a correction cue, not a body position. | USPA Cat A: knees about shoulder width; signal "Knees Together Slightly". |
| 11 | wording | body, Arms square; Arms 90/90 card | fixed | Body: "Upper arms about **90°** or less from your body, elbows bent **90–120°**, hands near head level. **Relaxed**, not locked (USPA)." Card: "about 90° at the shoulder, 90–120° at the elbow, relaxed." | USPA Cat A: "upper arms positioned 90 degrees or less from the torso and relaxed", "elbows bent 90-120 degrees and relaxed". |
| 12 | wording | body, clip caption | rejected | Checked the clip: from ~0:10 the student faces the wall and pushes her hips toward it. "Against a wall" is right. | `public/media/arch.mp4` frames. |
| M1 | missing | signals | added (Open hand) / instructors (Legs in) | New card "Open hand": "An open hand, after you throw (USPA list; not in the filmed set)." → "**Let go** of the pilot chute: you're still holding it." "Legs in" not added: USPA names it ("retract legs slightly") but doesn't describe the hand shape, so the card can't say what you'd see. Moved to the instructors' questions. | USPA Cat A: "Open Hand (release pilot chute)", "Legs In (retract legs slightly)". |
| M2 | missing | pull priorities | added | See 2. | USPA Cat A. |
| M3 | missing | freefall duration (45–50 s) | rejected for now | Only the 6,000 → 5,500 "about 3 seconds" was added (finding 3). The full-freefall time needs time to terminal, which no source I opened gives. | none opened |
| M4 | missing | what a wave-off is | added | See 4. | USPA Cat A. |
| M5 | missing | unstable after exit | added | See 2. | USPA Cat A. |

Counts: fixed 6 (1, 3, 4, 7, 9, 11; 4 is also ask-owner), added 3 blocks (pull priorities + quiz question, instability callout, Open hand card) plus the altimeter note, ask-owner 4 (4, 5, 8, 10), handled in main session 1 (6), rejected 2 (12, M3).

## Questions for the owner

1. **Отмашка (4).** Сколько раз махать руками и когда начинать: ровно на 5 500 или чуть выше? Рекомендую: как по USPA — одна плавная отмашка на 5 500, сразу за ней раскрытие; если в школе учили иначе, напиши, поправлю строку и уберу метку.
2. **Круг внимания (5).** Оставил твой порядок «высота → левый → правый → подбородок вверх» и дописал «(USPA начинает с горизонта)». Так и оставить? Рекомендую: да, оставить порядок школы; если инструктор подтвердит порядок USPA, поменяю на «горизонт → высота → левый → правый».
3. **Трясут после отделения (8).** Что именно значила тряска за подвесную систему у вас в школе: «таз вперёд», «расслабься» или просто «прогнись»? Рекомендую: спросить на брифинге; до ответа карточка остаётся с меткой «уточнить».
4. **«Ноги вместе и вверх» (10).** Инструктор говорил это как положение тела или как поправку, когда ноги слишком широко? Рекомендую: это поправка → переписать как «колени чуть внутрь, пятки вверх, если ноги слишком широко» и убрать противоречие с позицией USPA (колени на ширине плеч).

## Questions for the instructors

1. How many times do you want the wave-off, and does it start exactly at 5,500 ft?
   ES: ¿Cuántas veces quieren el wave-off y empieza justo a 5,500 ft?
   UK: Скільки разів робити відмашку і чи починати її рівно на 5 500 футах?
   RU: Сколько раз делать отмашку и начинать её ровно на 5 500 футах?
2. What does it mean when an instructor shakes my harness right after exit?
   ES: ¿Qué significa que un instructor me sacuda el arnés justo después de salir?
   UK: Що означає, коли інструктор трусить мене за підвісну систему одразу після відокремлення?
   RU: Что значит, когда инструктор трясёт меня за подвесную систему сразу после отделения?
3. How do you show "legs in" and "let go of the pilot chute" in freefall?
   ES: ¿Cómo muestran "piernas adentro" y "suelta el extractor" en caída libre?
   UK: Як ви показуєте «підбери ноги» і «відпусти витяжний парашут» у вільному падінні?
   RU: Как вы показываете «подбери ноги» и «отпусти вытяжной» в свободном падении?
4. Which altimeter will I wear, and where does the colour on its dial start?
   ES: ¿Qué altímetro voy a llevar y dónde empieza el color en su esfera?
   UK: Який висотомір я одягну і з якої висоти на ньому починається кольорова дуга?
   RU: Какой высотомер я надену и с какой высоты на нём начинается цветная дуга?
