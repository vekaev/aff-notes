# Clarity review, Spanish (es), 2026-11-18

Reader: a first-timer who has never jumped, plus a Spanish AFF instructor. Read-only: no app files changed.
Scope: (1) Hero + number card (`src/components/Hero.tsx`), (2) `ui.ts`, Settings, Author, FinalCheck, (3) short titles in
`part1`-`part4`, `dropzone`. No Spanish glossary exists: Spain dropzone usage assumed ("batidores" kept; vela = canopy,
"viento en cola / base / final" for the pattern). `h()` argument order is en, es, ru, uk. Numbers, order of steps and
meaning are untouched. Items marked (q) need the owner or a Spanish instructor to confirm.

## 1. Hero and "numbers to know by heart"

| # | location | now | proposed | why | status |
|---|---|---|---|---|---|
| 1 | Hero TAPE `lockOn` (6,000) | solo el altímetro | a partir de aquí, mira solo el altímetro | bare fragment on a number card; says neither what to do nor from when | applied |
| 2 | Hero TAPE `10 ft` | flare y PLF | flare (frenada) y luego PLF (caída de aterrizaje con rodada) (q) | PLF is never expanded on the card; "flare" is a bare English word (q: which word schools use) | applied ("flare (frenada) y luego PLF (caída de aterrizaje)"; PLF gloss as in the part3 glossary, "frenada" is the usual Spanish gloss) |
| 3 | Hero EMERGENCY `hardDeck` (1,000) | por debajo no liberes: solo la reserva (excepción: downplane) | por debajo de esta altura no liberes: abre solo la reserva (excepción: downplane, los dos paracaídas abiertos y tirando hacia abajo) | "downplane" unexplained; "solo la reserva" has no verb; "por debajo" of what | applied ("las dos velas abiertas apuntando hacia abajo", "vela" as elsewhere) |
| 4 | Hero EMERGENCY `decision` (2,500) | decide y actúa (arreglar o liberar) antes de aquí | antes de llegar a esta altura, decide y actúa: arregla la vela o libérala | infinitives in brackets mix with imperatives | applied |
| 5 | Hero TAPE `patternEntry` (1,000) | déjalo, empieza el circuito | deja el punto de espera y empieza el circuito | "déjalo" has no noun on its own | applied |
| 6 | Hero TAPE `holdingReach` (2,500) | ¿llegas al punto de espera? | ¿te da la altura para llegar al punto de espera? | reads as a question about skill; it is about height | applied |
| 7 | Hero TAPE `downwind/base/final` (900/600/300) | circuito | circuito: viento en cola, base y final | three numbers with a bare noun | applied |
| 8 | Hero TIMERS `3 s` | mira el altímetro, siempre | mira el altímetro cada pocos segundos (o: sin dejar de mirar el altímetro) | "siempre" contradicts "3 s" | applied as "cada pocos segundos, siempre" (the card shows 3 s) |
| 9 | Hero TIMERS `5 s` | cuenta tras abrir y revisa la vela | tras abrir, cuenta hasta cinco y revisa la vela | noun phrase hides what is counted | applied |
| 10 | Hero TAPE `pull` (6,000/5,500) | apertura del paracaídas | abre el paracaídas | the card is made of actions; keep one style | applied |
| 11 | Hero `T.eyebrow` | AFF categoría A · apuntes | AFF (caída libre acelerada), categoría A · apuntes | "AFF" is unexplained on the first screen | applied |
| 12 | Hero `T.ifBad` | Si la principal falla | Si la vela principal da problemas | "falla" = failure; twists or a slow opening are also "problems" | applied |
| 13 | Hero `T.where` | Te quedaste en | Última parte que abriste | clause ends in nothing; the chapter title follows after a colon | applied as "Último capítulo que abriste" (a chapter title follows) |
| 14 | `ui.heroTitle` | del asiento al suelo | del asiento del avión al suelo | "asiento" alone sounds like a chair | applied |

## 2. Interface words

| # | location | now | proposed | why | status |
|---|---|---|---|---|---|
| 15 | `ui.fixTip` | sin arreglar a 2,500 ft | si a 2,500 ft aún no está arreglado | "a" reads as "at that moment"; the rule is "not later than" (keep 2,500 ft) | applied as "si al llegar a 2,500 ft aún no está arreglado" |
| 16 | `ui.fixRule` | ¿Sin arreglar a 2,500 ft? | ¿Aún sin arreglar al llegar a 2,500 ft? | same, in a safety line | applied |
| 17 | `ui.footer` | no son instrucción | no sustituyen la formación con un instructor | "no son instrucción" is an English calque ("not instruction"); a safety point | applied ("Apuntes de uso personal; no sustituyen la formación con un instructor.") |
| 18 | `ui.thumbCheck` | Pulgares a las orejas | Comprobación: pulgares a las orejas | bare label; ru/uk already say "Проверка:" | applied |
| 19 | `ui.countLabel` | Conteo, no altura: | Aquí cuentas segundos, no altura: | bare label; say what is counted | applied |
| 20 | `ui.pull` | Abrir | Abrir el paracaídas | bare verb on a button, no object | applied |
| 21 | `ui.next` | Siguiente | Siguiente paso | ambiguous next to "Siguiente pregunta" | applied |
| 22 | `ui.retry` | Repetir | Intentar otra vez | "Repetir" = repeat what: the chapter? the test? | applied |
| 23 | `ui.wrong` | No exactamente. | No del todo. | calque of "Not quite" | applied |
| 24 | `ui.someWrong` | Con todo correcto, lo apruebas. | Se aprueba con todas las respuestas correctas. | stiff, "lo" has no clear referent | applied |
| 25 | `ui.hideNames` | Ponte a prueba: ocultar los nombres | Ponte a prueba: oculta los nombres | imperative and infinitive mixed | applied |
| 26 | `ui.unitsLabel` | Unidades: pies, ambos, metros | Unidades: pies, pies y metros, metros | "ambos" is not a unit (Settings already says "Pies y metros") | applied |
| 27 | `ui.unitsNote` | ...que enseña una escuela métrica: sigue a tu escuela | ...que enseña una escuela que usa metros: haz lo que te enseñe tu escuela | "sigue a tu escuela" is a calque | applied |
| 28 | `ui.trFix` | ¿Una palabra mal o una traducción mejor? | ¿Hay una palabra incorrecta o una traducción mejor? | clipped fragment | applied |
| 29 | `ui.rulesUnofficial` | De escuelas y apuntes, no de un documento oficial. | Salen de escuelas y de material de estudio, no de un documento oficial. | "apuntes" here is not the student's notes; confusing next to the app name | applied |
| 30 | `ui.mtNote` | ...aún no lo ha revisado un instructor nativo | ...aún no lo ha revisado un instructor que hable este idioma como lengua materna | "instructor nativo" is a calque | applied |
| 31 | Settings `system` | sistema | como el sistema | "Tema: sistema" is unclear | applied |
| 32 | Author `why` / `title` | Por qué hice esto | Por qué hice estos apuntes | bare "esto" | applied |
| 33 | Author `notNow` | Ahora no, ocultar | Ahora no, ocultar este aviso | bare verb | applied |
| 34 | FinalCheck `examT` | 1. Prueba de todo | 1. Prueba de todos los capítulos | "de todo" is vague | applied |
| 35 | FinalCheck `ownT` | 2. Con tus palabras | 2. Explícalo con tus palabras | fragment | applied |
| 36 | FinalCheck `copyAi` | Copiar el prompt para mi IA | Copiar las instrucciones para mi IA | English "prompt" left in | applied |
| 37 | FinalCheck OWN[0] | Explica tu salida a la puerta y la cuenta de salida. | Explica paso a paso cómo sales a la puerta y qué cuenta haces antes de salir del avión. | "tu salida a la puerta" is a calque of "climb-out" | applied as "Explica paso a paso cómo te colocas en la puerta y la cuenta de salida." (keeps "cuenta de salida") |
| 38 | FinalCheck OWN (flare) | Flare y PLF: cuándo, cómo y qué sale mal más a menudo? | ¿Flare y PLF: cuándo, cómo y qué sale mal más a menudo? | missing opening "¿" (typo) | applied |
| 39 | FinalCheck OWN (twists) | Twists: ¿cuándo los arreglas...? | Vueltas en las líneas (twists): ¿cuándo las arreglas y cuándo es una emergencia? (q) | English left in; check the school word | applied (matches part3 "¿Vueltas en las líneas?") |
| 40 | FinalCheck OWN (two canopies) | Dos velas fuera | Dos velas abiertas | "fuera" is a calque of "out" | applied |

## 3. Titles, chips, short items

| # | location | now | proposed | why | status |
|---|---|---|---|---|---|
| 41 | part2 `Lock on` (two places, l.235 and l.449) | Lock on | Lock on: a partir de aquí, solo el altímetro | the only language where the step stays bare; ru/uk spell it out | applied as "Lock on: desde aquí, solo el altímetro" (both places) |
| 42 | part3 callout l.310 | Dos 2,500 ft distintos | Dos cosas distintas a 2,500 ft | "distintos" what? the callout says: landing plan vs. decision altitude | applied |
| 43 | part3 l.297 / l.795 | Flare / El flare | Flare (frenada) / El flare (la frenada) (q) | bare English word as a heading; first appearance should explain it | applied (gloss kept beside the English term: "Flare (frenada)", "El flare (la frenada)") |
| 44 | part2 hand signal `Te sacuden al salir` | Te sacuden al salir | Los instructores te agitan al salir: tú, relajado | sounds like an attack; the sign is about the instructors shaking you | applied in part: "Un instructor te sacude el arnés al salir"; "tú, relajado" not added (meaning is school-specific, the line already has <q-check/>) |
| 45 | part2 `Toque de puntas` | Toque de puntas | Toca con la punta de los pies | noun for an action sign; other signs are imperatives | applied in part: "Toque de puntas de los pies" (other sign names are nouns: "Toque de práctica", "Barbilla arriba") |
| 46 | part2 l.201 | 3 toques de práctica | 3 toques de práctica a la manija | touches to what? (ru/uk have "к вытяжному") | applied as "a la manija del extractor" (rig section name) |
| 47 | part2 l.48 | Pulgares a las orejas | Comprobación: pulgares a las orejas | same as 18, ru/uk have the prefix | applied |
| 48 | part2 l.242 | ABRIR | ABRE EL PARACAÍDAS | bare verb in capitals | applied |
| 49 | part2 l.460 | Abrir | Abrir el paracaídas | same | applied as "Abre el paracaídas" (imperative, like the other card titles) |
| 50 | part3 l.17 | Abrir, contar, revisar | Abre, cuenta, revisa | infinitives in a list of imperatives | applied |
| 51 | part1 l.12 | La subida | La subida en el avión | "subida" alone is a rise of what | applied |
| 52 | part3 l.97 | ¿Algún "no"? | Si respondes "no" a algo, ¿qué haces? | bare question, needs the check it refers to (q: needs context) | applied as "¿Alguna respuesta es “no”?" (follows the check questions; matches ru/uk) |

## Patterns

- **Bare nouns/fragments on the number card** ("solo el altímetro", "circuito", "flare y PLF", "déjalo"): write what to do and from when.
- **English left in without a gloss**: "flare", "downplane", "twists", "prompt", "lock on" with nothing beside it. Keep the English in brackets after a Spanish word.
- **Calques from English**: "no son instrucción", "No exactamente", "instructor nativo", "dos velas fuera", "sigue a tu escuela".
- **Mixed infinitive/imperative** in the same list (ui.hideNames, EMERGENCY labels, part3 l.17, hand signs).
- **"a 2,500 ft" in the fix rule** reads as "at", not "not later than": check across part2/part3 `<b>2,500 ft</b>` fix lines too.
- **Bare verbs on buttons/titles** (Abrir, Repetir, Siguiente): add the object.
- Good already: "viento en cola", "punto de espera", "batidores", "vela" for canopy, "extractor", "manija".
