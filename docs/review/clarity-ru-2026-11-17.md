# Clarity review, Russian (ru), 2026-11-17

Reader: a first-timer who has never jumped, plus a Russian-speaking AFF instructor. Read-only: no app files changed.
Scope: (1) Hero + number card, (2) interface words (`ui.ts`, Settings, Author, FinalCheck), (3) part/chapter titles and
short chips in `part1`-`part4`, `dropzone`. Argument order in `h()` is en, es, ru, uk. Numbers, order of steps and
meaning are untouched in every proposal. Items marked (q) need the owner or an instructor to confirm.

## 1. Hero and "numbers to know by heart" (`src/components/Hero.tsx`)

| # | location | now | proposed | why | status |
|---|---|---|---|---|---|
| 1 | Hero TAPE `6,000` label | только высотомер | дальше смотри только на высотомер | owner's example: a bare "only altimeter" does not say what to do or from when | applied |
| 2 | Hero TAPE `13,000` label | отделение от самолёта | выход из самолёта (отделение) | "отделение" is the federation word but meaningless alone; say it plainly, keep the term in brackets | not applied: already "отделение от самолёта" (owner keeps the term, written out) |
| 3 | Hero TAPE `10 ft` label | торможение (flare), потом PLF | выравнивание (flare), потом приземление с перекатом (PLF) | "торможение" conflicts with "Выравнивание (flare)" in part3:794; PLF is never expanded on the card | applied |
| 4 | Hero TAPE `2,500` label | долетаешь до точки ожидания? | хватит высоты долететь до точки ожидания? | question reads as a yes/no about skill; the meaning is "do you have enough height", and "точка ожидания" is a new term | applied |
| 5 | Hero TAPE `1,000` label | уходи в схему захода | оставь точку ожидания, начинай схему захода | "уходи" sounds like "leave/bail"; the action is to leave the holding point and start the pattern | applied |
| 6 | Hero TAPE `900 · 600 · 300` label | схема захода | схема захода: высоты трёх поворотов | three numbers with a bare noun; say what the numbers are | applied, changed: "схема захода: по ветру, базовая, финал" (900 is the downwind entry, not a turn; part3 pattern rows) |
| 7 | Hero TAPE `6,000`/`5,500` label | раскрытие парашюта | раскрой парашют | on a card of actions the others are imperatives; or keep noun but see pattern B. Low priority | applied |
| 8 | Hero EMERGENCY `2,500` | реши и действуй (исправить или отцепка) до этой высоты | до этой высоты реши и действуй: исправь купол или отцепись | "исправить или отцепка" mixes infinitive and noun, ungrammatical | applied |
| 9 | Hero EMERGENCY `1,000` | ниже не отцепляйся: только запасной (исключение: «даунплейн») | ниже не отцепляйся: раскрывай только запасной (исключение: «даунплейн», см. главу об аварийных процедурах) | "даунплейн" is unexplained on the card; "только запасной" lacks a verb | applied, changed: gloss "оба купола вниз" instead of a chapter reference (the card already links to EP) |
| 10 | Hero TIMERS `3 s` | смотри на высоту, всегда | смотри на высотомер каждые 3 секунды | "всегда" contradicts "3 с"; say the interval | applied, changed: "смотри на высотомер, постоянно" (no extra number: the card already shows 3 s) |
| 11 | Hero TIMERS `5 s` | счёт после раскрытия, потом проверка купола | после раскрытия считай до пяти, потом проверь купол | noun phrases hide who does what; "счёт" alone is unclear | applied |
| 12 | Hero `T.eyebrow` | AFF категория A · конспект | AFF (ускоренное обучение), категория A · конспект | "AFF" unexplained on the first screen; `ui.heroEyebrow` says "уровень 1" for the same thing: pick one | applied to the Hero eyebrow ("Ускоренное обучение AFF, категория A"); `ui.heroEyebrow` left: English also says "level 1" there |
| 13 | Hero `T.where` | Ты остановился на | Ты остановился(-ась) на / Последнее место: | masculine only; other student stories use feminine ("Отвлеклась"): see pattern E | applied, changed: neutral "Последняя открытая глава" instead of a (-ась) form |
| 14 | Hero `T.tests` / `allDone` | тестов сдано | тестов пройдено | "сдано" is exam slang; "пройдено" is natural for a self-study app (same for `ui.passed`, `testsDone`, `allRight`) | applied |
| 15 | Hero `T.ifBad` | Если с основным куполом проблема | Если с основным куполом что-то не так | fine meaning; "проблема" as a clause is slightly clipped. Optional | applied |

## 2. Interface words

| # | location | now | proposed | why | status |
|---|---|---|---|---|---|
| 16 | `ui.fixTip` | не вышло к 2 500 футов | не вышло до 2 500 футов | "к ... футов" is ungrammatical (needs "футам"); "до" is also how the chapters say it | applied |
| 17 | `ui.fixRule` | Не исправил к <b>2 500 футов</b>? | Не исправил до <b>2 500 футов</b>? | same grammar error, in a safety line | applied |
| 18 | `ui.heroTitle` | от сиденья до земли | от места в самолёте до земли | "сиденье" reads like a chair or bicycle seat | applied |
| 19 | `ui.countLabel` | Счёт, не высота: | Здесь считаем секунды, а не высоту: | bare label; say what is counted | applied |
| 20 | `ui.next` | Дальше | Следующий шаг | "Дальше" alone is ambiguous next to a button group | applied |
| 21 | `ui.play` | Пуск | Смотреть | "Пуск" is a machine start button; on a video use "Смотреть" or "Воспроизвести" | applied ("Смотреть") |
| 22 | `ui.notPlaying` | Не играет здесь? | Не воспроизводится здесь? | calque of "doesn't play" | applied |
| 23 | `ui.thumbCheck` | Пальцы к ушам | Проверка: большие пальцы к ушам | the chapter title already says "большие пальцы"; keep both the same | applied, shorter: "Большие пальцы к ушам" (chapter title keeps "Проверка: …") |
| 24 | `ui.unitsNote` | ...школа с метрической системой: слушай свою школу | ...школа, где высоты дают в метрах: следуй тому, чему учит твоя школа | "школа с метрической системой" and "слушай школу" are calques | applied |
| 25 | `ui.unitsLabel` / Settings `units` | Единицы: футы, оба, метры / Единицы | Единицы измерения: футы, футы и метры, метры / Единицы измерения | "оба" is not a unit; "Единицы" alone is ambiguous | applied |
| 26 | `ui.trFix` | Неверное слово или перевод лучше? Напиши мне | Нашёл неточность в переводе или знаешь слово лучше? Напиши мне | stiff clipped fragments | applied, changed: gender-neutral "Есть неточность в переводе или слово лучше?" |
| 27 | `ui.mtNote` | ...инструктором-носителем языка | ...инструктором, для которого русский родной | "инструктор-носитель языка" is machine-translation smell | applied |
| 28 | `ui.offline` | Сохранить всё для офлайна | Сохранить всё для работы без интернета | "для офлайна" is jargon; `offlineDone` already says "без интернета" | applied |
| 29 | `ui.allRight` / `someWrong` | Глава сдана | Глава пройдена | see #14 | applied |
| 30 | `ui.footer` | Конспект для личного использования, а не инструкция | Это личный конспект, а не учебное пособие: учит инструктор | "не инструкция" can be read as "not instructions to follow" (a safety-relevant ambiguity) | applied, changed: "Личный конспект: он не заменяет обучение у инструктора." (keeps the meaning of "not instruction") |
| 31 | Settings theme | системная | как в системе | "Тема: системная" is unclear | applied |
| 32 | Author (whole page) | Помогите сделать лучше / Представьте / напишите мне | Помоги сделать лучше / Представь / напиши мне | page switches to "вы" while the whole app uses "ты" (`fbT`, `fbS`, `imagine`, `bubbleS`); `trFix` uses "ты" | not applied: the Author page is the owner's personal note; "вы" there is his choice |
| 33 | Author `eyebrow` | Об этих заметках | Об этом конспекте | the app is "Конспект AFF" everywhere else: see pattern D | not applied: "заметки" is used across the Author page and FinalCheck; a brand-wide rename is the owner's call |
| 34 | FinalCheck `aiT`, `copyAi`, `aiNote` | Повтори с AI / запрос для AI / AI тоже ошибается | Повтори с ИИ / запрос для ИИ / ИИ тоже ошибается | Russian uses "ИИ"; keep ChatGPT, Claude, Gemini names | applied |
| 35 | FinalCheck `examT` | 1. Тест по всему | 1. Тест по всем главам | "по всему" is vague | applied |
| 36 | FinalCheck OWN[0] | Расскажи выход в дверь и счёт на отделение | Расскажи по шагам, как выходишь в дверь и что считаешь перед отделением | "расскажи выход" is not Russian | applied ("Расскажи по шагам, как выходишь к двери и что считаешь перед отделением от самолёта") |
| 37 | FinalCheck OWN | Ты садишься на деревья, в воду или у проводов | Ты приземляешься на деревья, в воду или рядом с проводами | "садишься" is colloquial; elsewhere the app says "приземление" | applied |
| 38 | FinalCheck OWN | Вышли два купола | Раскрылись оба купола (основной и запасной) | "вышли" reads as "went out" | applied |

## 3. Part and chapter titles, chips, short items

Most worst first.

| # | location | now | proposed | why | status |
|---|---|---|---|---|---|
| 39 | part2:235, part2:449 (chip title) | Только высотомер | Дальше смотри только на высотомер (6 000 футов: «лок-он») | owner's example. The English is the term "lock on"; Russian gives no action, no moment. Keep "lock on" in brackets, since schools say it | applied without the number (the row already shows 6,000 ft): "Дальше смотри только на высотомер" |
| 40 | part1:495, part1:535, part2:179, part1:296, `dropzone:25` and about 15 more | Счёт на отделение / отделиться / Отделение, прогиб / Перед отделением / Высота отделения | Счёт перед выходом из самолёта (отделение); качнуться и выйти; Выход из самолёта, прогиб; Перед выходом; Высота выхода (отделения) | owner's example "отделение" alone. Explain once at first use ("выход из самолёта, по-парашютному «отделение»"), then the short word is fine | applied as the owner asked: "отделение от самолёта" in the exit-count title, "Перед отделением от самолёта", "Отделение от самолёта, прогиб"; the term is kept, not replaced by "выход" |
| 41 | part4:88, 92, 173, 177, 186; part4:36 | Смотри на кольцо / Возьмись за кольцо / Выдерни кольцо / «кольцо раскрывает запасной» | Смотри на серебряную ручку / Возьмись за серебряную ручку / Выдерни серебряную ручку | on a US rig the reserve handle is a silver handle; "кольцо" is only explained once (part4:52). Chip must stand alone (q: check against the rig drawing) | not applied: "кольцо" is the normal Russian term and the rig section (part1) names it "Кольцо запасного (серебристое)"; step titles now say "кольцо запасного" to match it, and "серебряное" became "серебристое" |
| 42 | part4:36 | Две ручки: красная отцепляет, кольцо раскрывает запасной | Две ручки: красная отцепляет основной, серебряная раскрывает запасной | "отцепляет" without what; red/silver should pair as colours | applied, keeping "кольцо": "красная отцепляет основной, кольцо раскрывает запасной" |
| 43 | part3:297 (title), part3:794 | Flare / Выравнивание (flare) | Выравнивание (flare) in both places | the chip is bare English; the second is the school term. Hero #3 uses a third word ("торможение") | applied: one word, "выравнивание (flare)", in every Russian string (Hero, chips, body text, quizzes, widget); "(flare)" kept on titles and labels; the radio call «flare» kept as said |
| 44 | part3:221 | Решаем, куда лететь | Решаем, куда лететь: хватит ли высоты до точки ожидания | chip does not say what is decided | not applied: the decision also covers the pattern side; the line below the title says both |
| 45 | part3:245 | Ожидание над точкой | Кружим над точкой ожидания | "ожидание" suggests standing still; a canopy flies S-turns | not applied: "кружим" suggests circling, but the chapter limits turns to 180° or less |
| 46 | part3:309 | Две разные отметки 2 500 футов | Два разных решения на 2 500 футах | "отметки" is a map mark; the point is that the same altitude means two different decisions | applied |
| 47 | part4:264, 289, 305 | Высота принятия решения / Нижняя граница / Число то же, вопрос другой | keep «Высота принятия решения» / Нижняя граница (hard deck): ниже не отцепляться / Та же высота, другое решение | "Нижняя граница" does not say what is limited; add the term "hard deck" in brackets for schools | applied, changed: "Нижняя граница отцепки (hard deck)"; "Та же высота, другой вопрос" (keeps "question" like the English) |
| 48 | part4:605 | Вытяжной «завис» | Вытяжной парашют не вышел (завис) | "вытяжной" alone is not clear to a first-timer; "завис" is slang | applied, changed: "Вытяжной парашют «завис» за спиной" (hesitation means it is out but hanging in the burble, not "не вышел") |
| 49 | part4:630 (part2:630) | Ранец открылся раньше | Ранец открылся сам, раньше времени | "раньше" than what? | applied |
| 50 | part2:605 | Вытяжной «завис» | see #48 | duplicate chip | see 48 (part4 has no separate chip title; the body line already explains it) |
| 51 | part4:727 | «Колбаса» | «Колбаса»: купол не раскрылся | pure jargon, no gloss | applied to the clip label only ("«Колбаса»: купол не наполнился"); the card keeps the name, its first line explains it |
| 52 | part4:729 | Слайдер застрял | Слайдер не спустился (застрял наверху) | slider is a new object; say it stays up | applied ("Слайдер застрял наверху") |
| 53 | part4:728 | Закрыты концевые секции | Закрылись боковые секции купола | "концевые секции" is not what jumpers say; add "купола" (q: instructor to confirm "end cells" term) | not applied (q): end-cells term needs a Russian instructor |
| 54 | part4:823, part4:937 | Два купола / Два купола: все 5 вариантов | Оба купола раскрыты / Оба купола раскрыты: 5 вариантов | "Два купола" can read as "two canopies sold" | applied |
| 55 | part4:1253 | Отвлеклась на 6 000 футах | Отвлёкся(-лась) на 6 000 футах | gender; neighbours say "Перепутал"; keep one | not applied: a real case of a female student, so the feminine form is correct |
| 56 | part3:898 | Про «5, 4, 3, 2, 1» | Про счёт «5, 4, 3, 2, 1» на посадке | the chip does not say it is the landing count | applied |
| 57 | part3:871 | Когда тянуть | Когда начинать выравнивание | "тянуть" is ambiguous: pull what | applied |
| 58 | part3:97 | Хоть одно «нет»? | Хотя бы один ответ «нет»? | "нет" to what; add "в проверке купола" (q: check callout above) | applied |
| 59 | part3:560, 565 | Посадка на препятствие / Лучший план: туда не попасть | Посадка на препятствие: деревья, вода, здания, провода / Лучший план: до этого не доводить | "туда не попасть" is vague | applied, changed: "Лучший план: не допустить такой посадки"; the title stays short |
| 60 | part1:12 | Набор высоты | Подъём на высоту | "Набор высоты" is the aircraft term; a student says "подъём" | applied |
| 61 | part2:12 | Положение тела: «коробочка» | Положение тела: «коробочка» (box) | the term is a loan from "the box"; keep English for schools | applied |
| 62 | part2:190, 212, 315 | Круг внимания | Круг внимания: проверь высоту и инструкторов (circle of awareness) | not obvious what the "circle" is | not applied: the chip sits on a row whose text spells out the circle (altitude, left, right, horizon) |
| 63 | part2:430 | Приоритеты раскрытия (USPA), именно в таком порядке | Что важнее при раскрытии (USPA), строго по порядку | "приоритеты раскрытия" stiff | applied |
| 64 | part2:682 | AAD — это не план | AAD (страхующий прибор) — не план: не рассчитывай на него | "AAD" is first shown in part1:209; here the full word helps | applied |
| 65 | part4:2159 / 2160 | Перед следующим занятием / Спросить у инструкторов | Перед следующим занятием / Вопросы инструкторам | "Спросить" is an infinitive heading | applied |
| 66 | part3:998 | PLF — приземление с перекатом | Приземление с перекатом (PLF) | good, but order should be Russian first, term in brackets | applied |
| 67 | dropzone:26 | Раскрытие, категория A | Раскрытие парашюта, категория A | fine, optional | applied |

## Patterns

- **A. Bare nouns on the number card and chips** ("только высотомер", "отделение", "схема захода", "всегда", "счёт") are the main
  failure: a number card line must be readable alone. Put a verb or the full phrase on it.
- **B. Inconsistent verb forms on one card**: imperatives ("уходи", "реши") next to nouns ("раскрытие", "торможение") and
  infinitives ("исправить"). Pick imperative for what the student does, noun for what happens.
- **C. Term drift**: flare = "торможение" (Hero) = "Выравнивание (flare)" (part3) = bare "Flare" (chip). Pick
  "выравнивание (flare)". Same for "тест сдан/пройден", "Заметки/Конспект".
- **D. Brand name**: "Конспект AFF" (brand), "заметки" (Author, FinalCheck prompt, `mtNote`, `ui.trFix`). Use one.
- **E. Gender and register**: "ты" in lessons but "вы" on the Author page; masculine "остановился" next to feminine "отвлеклась".
- **F. Official terms never glossed**: "отделение", "даунплейн", "колбаса", "слайдер", "вытяжной", "AAD" appear as chips
  before or without the sentence that explains them. Keep the term, add the plain words once, on the chip itself.
- **G. Grammar slips in safety lines**: "к 2 500 футов" (`fixTip`, `fixRule`); "исправить или отцепка" (Hero).
- **H. Calques**: "Не играет здесь", "школа с метрической системой", "инструктор-носитель языка", "Пуск", "для офлайна".

Findings: 67 rows (some are duplicate chips counted once each), 38 of them in scopes 1 and 2.

## Not applied (why)

- #2: already written out as "отделение от самолёта".
- #32, #33: the Author page is the owner's personal note ("вы", "заметки"); a register or brand change is the owner's call.
- #41: "кольцо" stays (normal Russian term; rig section says "Кольцо запасного (серебристое)"). Steps now say "кольцо запасного".
- #44: the 2,500 ft decision also covers the pattern side; the proposal narrowed it.
- #45: "кружим" would suggest circling; the chapter limits turns to 180° or less.
- #53 (q): "концевые секции" vs another term needs a Russian instructor.
- #55: the case is about a female student; feminine is correct.
- #62: the row text already lists what the circle is.

Fixer's note: flare is now "выравнивание" everywhere in Russian, with "(flare)" on titles, labels and the Hero card. Applied 2026-11-17.
