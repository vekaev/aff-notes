# Clarity review: Ukrainian (uk), 2026-11-17

Reviewer: aff-clarity-critic. Scope: Hero + number card, interface words (`ui.ts`, Settings, Author, FinalCheck), short titles/labels/chips in part1-4 and dropzone. Read-only: no app files changed. No `docs/i18n/glossary-uk.md` exists, so "official" below means the usual Ukrainian federation / USPA-translation usage; items marked (verify) need a Ukrainian instructor's check. Numbers, order of steps and meaning are untouched in every proposal. In `h()` the order is en, es, ru, uk; in `t()`/`l()` it is en, es, ru, uk as well.

## Findings, most confusing first

| # | Location | Now | Proposed | Why | status |
|---|---|---|---|---|---|
| 1 | Hero.tsx TAPE 6,000 (uk); part2.ts:235 title "Lock on" | лише висотомір | дивись лише на висотомір | Bare phrase; a first-timer does not know it is an instruction. Both places must match. The sub line "Більше жодних вправ" stays. | applied |
| 2 | part4.ts:543 "Bag lock" | Купол у камері | Купол застряг у чохлі (bag lock) | "Камера" is not the bag; it reads as a canopy cell. Bag lock = canopy stuck in the deployment bag. (verify) | not applied: "камера" is the usual Russian/Ukrainian term for the deployment bag; "Купол у камері" is correct |
| 3 | part4.ts:88, 92, 105, 177; part4.ts:36 (red/silver cards) | Дивись на кільце / Візьмися за кільце / Висмикни кільце / Дві ручки: ... кільце розкриває запасний | ... на срібне кільце / за срібне кільце / Висмикни срібне кільце / ... срібне кільце розкриває запасний | Bare "кільце" clashes with "Три кільця" (the release system, part1.ts:259). Panicked reader must not wonder which ring. Keep "срібне" like "червону" for red. | applied, changed: "кільце запасного" (the rig section's name, part1) instead of "срібне кільце" |
| 4 | Hero.tsx EMERGENCY 2,500 (uk) | виріши й дій (виправити чи відчеплення) до цієї висоти | до цієї висоти виріши й дій: виправ купол або відчепи його | Grammar breaks (infinitive + noun); "відчеплення" bare. Verb on both sides. | applied |
| 5 | Hero.tsx TAPE 10 ft (uk) | гальмування (flare), потім PLF | вирівнювання (flare), потім перекат (PLF) | Chapter title is "Вирівнювання (flare)" (part3.ts:794) but the card says "гальмування". Same thing, two words. PLF bare on the card; chapter glosses it as "приземлення з перекатом". | applied |
| 6 | part3.ts canopyCheck words (:67-84) | Є / Квадратний / Стабільний / Керований | Купол є / Купол квадратний (прямокутний) / Купол стабільний / Купол керований | A one-word "Є" on a big check tile means nothing; the subject is missing. (verify tile width) | applied to "Є" only ("Купол є"); the other three words are adjectives that already read as about the canopy |
| 7 | Hero.tsx TAPE 5,500 (uk) | розкриття парашута | розкрий парашут | EN is the verb "pull"; bare noun on a number card is a label, not an instruction. Same pattern as 1 and 4. | applied |
| 8 | Hero.tsx TAPE 2,500 (uk) | долітаєш до точки очікування? | чи долітаєш до точки очікування? (+ один раз пояснити: точка очікування — місце над посадкою, де чекаєш входу в схему) | "Точка очікування" is unknown on first sight; question has no "чи". The gloss can sit in the chapter at part3.ts:233 and be linked from here. (verify wording against chapter) | applied ("чи долетиш до точки очікування?"); the gloss stays in the chapter |
| 9 | Hero.tsx TAPE 1,000 (uk) | виходь на схему заходу | починай схему заходу на посадку | "Виходь на" sounds like "exit onto". "Схема заходу на посадку" is the aviation term and clearer. | applied, changed: "залиш точку очікування, починай схему заходу" (English says "leave it") |
| 10 | Hero.tsx TAPE 900 · 600 · 300 (uk) | схема заходу | схема заходу: три повороти (900 · 600 · 300) -- (verify: which turns the three numbers mark, per part3.ts pattern rows) | Three numbers with no hint what they are. | applied, changed: "схема заходу: по вітру, базова, фінал" (900 is the downwind entry, part3 pattern rows) |
| 11 | Hero.tsx EMERGENCY 1,000 (uk) | нижче не відчіплюйся: лише запасний (виняток: «даунплейн») | нижче не відчіплюйся: розкривай лише запасний (виняток: «даунплейн» — два куполи) | "Лише запасний" is again a fragment; "даунплейн" unexplained on the first screen. | applied, changed: gloss "обидва куполи вниз" |
| 12 | part2.ts:201 / 305 and hand signal :905 "3 practice touches" | 3 тренувальні дотики / Тренувальний дотик | 3 тренувальні дотики до ручки витяжного / Тренувальний дотик до ручки | "Дотики" to what? Only the chapter text says (the pilot-chute handle). | applied: "3 тренувальні дотики до витяжного" (title and photo caption) |
| 13 | part4.ts:289 "Hard deck" | Нижня межа | Нижня межа відчеплення (hard deck) | Bare "нижня межа" of what? Plus keep the term schools say. | applied |
| 14 | part4.ts:557 group "Out, but not flyable" | Вийшов, але не летить | Купол розкрився, але керувати ним не можна | "Вийшов" has no subject. | applied, changed: "Купол вийшов, але летіти на ньому не можна" |
| 15 | part4.ts:503 group "Nothing out, or almost nothing" | Нічого не вийшло або майже нічого | Купол не розкрився або майже не вийшов | "Нічого не вийшло" reads as "nothing worked". | applied, changed: "Нічого не вийшло з ранця або майже нічого" |
| 16 | part4.ts:526 "Pilot chute in tow" | Витяжний парашут у сліді | Витяжний тягнеться позаду, купол не виходить (pilot chute in tow) | "У сліді" is a literal calque, not skydiving speech. (verify) | not applied: "у сліді" is the established term for pilot chute in tow; the card text explains it |
| 17 | Hero.tsx T.where (uk) | Ти зупинився на | Місце, де ти зупинився(-лась) або нейтрально: Ти зупинився(-лась) на | Masculine form hard-coded; learners are women too. | applied, changed: neutral "Останній відкритий розділ" |
| 18 | ui.ts thumbCheck | Пальці до вух | Великі пальці до вух | Chapter title says "великі пальці" (part2.ts:48). "Пальці" alone loses the point (thumbs). | applied |
| 19 | Hero.tsx TIMERS 3 s (uk) | дивись на висоту, завжди | дивись на висотомір кожні 3 с, постійно | "Дивитися на висоту" is a calque; people look at the altimeter. Say what the 3 s are for. | applied, changed: "дивись на висотомір, постійно" (no extra number) |
| 20 | Hero.tsx TIMERS 5 s (uk) | рахунок після розкриття, потім перевірка купола | після розкриття порахуй до п'яти, потім перевір купол | Nouns for actions again; one sentence is easier to follow. | applied |
| 21 | Hero.tsx eyebrow vs ui.heroEyebrow | AFF категорія A · конспект / Прискорене навчання AFF · рівень 1 · конспект | one wording: Прискорене навчання AFF · категорія A · конспект | The two screens say "категорія A" and "рівень 1" for the same course; bare "AFF" on the first line explains nothing. | applied to the Hero eyebrow; `ui.heroEyebrow` left (English also differs there) |
| 22 | part1.ts:296 "Before exit"; part2.ts:179 "Exit, arch"; part4.ts:1093 chip "Exit"; Hero 13,000 | Перед відокремленням / Відокремлення, прогин / Відокремлення | Перед виходом з літака (відокремленням) / Відокремлення від літака, прогин / Відокремлення від літака | Official word kept, but bare it can be read as "separation" of anything (canopy, handles). Hero 13,000 already adds "від літака": copy that. | applied to the chips "Перед відокремленням від літака", "Відокремлення від літака, прогин"; the injury-chart bar label stays (chart of jump phases) |
| 23 | part1.ts:249 "Cutaway handle (red)" | Подушка відчеплення (червона) | Червона ручка відчеплення («подушка») | "Подушка" is the school term; a newcomer does not know it is a handle. Keep it in brackets. | not applied: the rig section names the handle "Подушка відчеплення (червона)"; owner: don't rename handles |
| 24 | dropzone.ts:9 "Your dropzone" | Твій майданчик | Твоя дропзона (місце, де ти стрибаєш) | "Майданчик" is also the landing area (dropzone.ts:47 "посадкового майданчика"). Two meanings of one word. | applied, changed: "Твій аеродром" (not "дропзона": slang); removes the clash with the landing area |
| 25 | part4.ts:568, 614, 876 cards "Streamer", "Horseshoe", "Downplane" | «Ковбаса» / «Підкова» / «Даунплейн» | «Ковбаса» (streamer) / «Підкова» (horseshoe) / «Даунплейн» (downplane) | Slang kept, but the English word is what the student will hear from instructors and see in manuals. | applied |
| 26 | part4.ts:1127, 1465, 1469, 1475, 2064 flare labels | Неправильний flare / Flare / Flare ривком / Flare надто високо | Неправильне вирівнювання (flare) / Різке вирівнювання (flare) / Вирівнювання (flare) надто високо | Three words for one action in the app: гальмування, вирівнювання, flare. Pick "вирівнювання (flare)" everywhere (see pattern 3). | applied: one word, "вирівнювання (flare)", in every Ukrainian string; "гальмування" for flare removed; the radio call «flare» kept |
| 27 | part2.ts:931 hand signal "Shaking you on exit" | Трусять після відокремлення | Інструктори струшують тебе після відокремлення | Reads like a passive noise; who shakes whom? | applied, changed: "Тебе трясуть після відокремлення" |
| 28 | part4.ts:96 "Peel and pull red" / :164 "Peel and punch red" | Відліпи і висмикни червону / Відліпи і пробий червону вниз | Відірви червону від липучки й висмикни / ... й сильно штовхни вниз | "Відліпити" is not the usual verb; say what peels off what. (verify) | applied, changed: "Відірви з липучки й висмикни/пробий червону" (same steps, same order) |
| 29 | ui.ts play | Пуск | Відтворити | "Пуск" is "launch" (rocket, engine), not a video button. | applied ("Дивитися", same as Russian "Смотреть") |
| 30 | ui.ts fixTip | ... не вийшло до 2 500 футів → EP → | ... не вийшло до 2 500 футів → аварійна процедура (EP) | "→ EP →" is two arrows around an abbreviation. | applied |
| 31 | Settings.tsx units | Одиниці | Одиниці вимірювання | Bare "Одиниці" reads as "ones/units (military)". | applied |
| 32 | FinalCheck.tsx examT / examS | 1. Тест з усього / 20 питань з усіх розділів... | 1. Тест з усіх розділів | "З усього" is casual and vague. | applied |
| 33 | FinalCheck.tsx aiT, copyAi | 3. Повтори з AI / запит для AI | 3. Потренуйся зі ШІ / запит для ШІ | Ukrainian uses ШІ (штучний інтелект); "AI" can stay once in brackets. "Повтори" is not "practise". | applied |
| 34 | FinalCheck.tsx title | Фінальна перевірка | Підсумкове повторення | "Repaso final" is a review, and "фінальна перевірка" sounds like a pass/fail gate (also name of the 20-question test). | not applied: "Фінальна перевірка" matches the English "Final check" |
| 35 | Author.tsx fbT / fbS / bubbleS / imagine | Допоможіть зробити краще / Напишіть мені / Уявіть... | Допоможи зробити краще / Напиши мені / Уяви... | Whole app says "ти"; the author pages switch to "Ви". (Keep "Ви" only if the owner wants a formal note.) | not applied: the Author page is the owner's personal note; "Ви" there is his choice |
| 36 | part3.ts:11 / 12 chapter title "Pull, count, check" | Розкриття, рахунок, перевірка | Розкриття, рахунок до п'яти, перевірка купола | Three bare nouns on a title chip; give the second and third their object. | applied ("Розкриття, рахунок до п’яти, перевірка купола") |
| 37 | part4.ts:1102-1107 chip "Other" | Інше | Інші частини тіла | Chip under "Яка частина тіла" with a bare "Інше". | not applied: the chart title "Яка частина тіла" gives the context |
| 38 | part4.ts:1129 "Bad landing position" | Неправильне положення тіла | Неправильна поза під час приземлення | "Положення тіла" is the freefall "box" elsewhere in the app. | applied |
| 39 | ui.ts heroTitle | від сидіння до землі | від посадки в літак до землі | "Від сидіння" is a word-for-word; what is meant is the whole jump. (verify tone) | applied |
| 40 | ui.ts mtNote | носій мови-інструктор | інструктор-українець (або: інструктор, для якого українська рідна) | Clumsy compound. | applied |
| 41 | ui.ts offline | Зберегти все для офлайну | Зберегти все, щоб працювало без інтернету | "Для офлайну" is slang. | applied |
| 42 | part2.ts:631 / part4.ts:1170 "Container opens early" | Ранець відкрився раніше | Ранець відкрився раніше часу | Without "часу" it reads as "earlier than something". | applied |
| 43 | part1.ts:209 AAD title (ok elsewhere) | AAD (страхувальний прилад) | keep; add the same in the 1,000 ft/AAD mentions in part2.ts:682 "AAD — це не план" → "AAD (страхувальний прилад) — це не план" | Bare AAD appears in titles before it is explained. | applied |

## Patterns

1. **Nouns where an action belongs.** Number-card labels use a bare noun or fragment where the EN has a verb or full thought: "лише висотомір", "розкриття парашута", "виріши й дій (... відчеплення)", "лише запасний". A first-timer cannot tell "what do I do here?". Rule: each card label is one complete instruction or one question.
2. **Bare "кільце", "відокремлення", "дотики", "Є".** The word is right in the chapter, but on a chip or card it has lost its object ("від літака", "до ручки витяжного", "срібне").
3. **One action, three words.** flare = гальмування / вирівнювання / flare. Choose "вирівнювання (flare)" (chapter title already) and use it in the Hero, canopy check ("пробне гальмування" in part3.ts canopyCheck "Steerable") and part4 labels.
4. **Official slang kept without the English word** (ковбаса, підкова, даунплейн, подушка): keep the term, add the English in brackets once, as schools do.
5. **Register and gender.** App is "ти" throughout, except Author.tsx ("Ви"). Hero "Ти зупинився" assumes a man.
6. **Calques from English/Russian**: "Пуск", "для офлайну", "дивись на висоту", "у сліді", "від сидіння".
7. **Missing glossary.** There is no `docs/i18n/glossary-uk.md`; the other languages have one. Suggest creating it first (federation terms for: відокремлення, купол, витяжний, запасний, подушка відчеплення, схема заходу, вирівнювання), so the fixer does not choose terms case by case.

## Not applied (why)

- #2: "камера" is the standard word for the deployment bag; the reviewer read it as a canopy cell.
- #16: "витяжний у сліді" is the established term; the card explains it.
- #23: handle names follow the rig section (part1); owner: don't rename handles.
- #34: "Фінальна перевірка" matches the English "Final check".
- #35: the Author page is the owner's personal note; "Ви" is his choice.
- #37: the chart title gives the context.
- Pattern 7 (glossary-uk.md): not created here; a separate task.

Fixer's note: flare is now "вирівнювання" everywhere in Ukrainian, with "(flare)" on titles, labels and the Hero card. Applied 2026-11-17.
