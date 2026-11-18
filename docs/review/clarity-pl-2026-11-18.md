# Clarity review: Polish (pl), 2026-11-18

Keys are in `src/content/i18n/pl.json` (English in `en.json`). Scope: Hero labels, interface words, short titles and chips.
Glossary terms kept (wyczepienie, pilocik, sterówki, wysokość otwarcia, krąg świadomości, ...). Numbers, order of steps
and `<b>`/`<q-check/>` tags are unchanged in every proposal. Most confusing first.

| location (key) | now | proposed | why | status |
|---|---|---|---|---|
| pdzz3m (part3 holding area step) | Trzymaj tam | Czekaj nad punktem oczekiwania | Wrong: source is "wait over the point" (ru "Ожидание над точкой"); "Trzymaj tam" means nothing | applied |
| 1g18b4d (quiz option, flare) | Otwarcie musi trwać dokładnie pięć sekund | Ściągnięcie sterówek musi trwać dokładnie pięć sekund | "Otwarcie" = parachute opening; the question is about the flare, a wrong reading on a safety quiz | applied ("Ściąganie sterówek musi trwać…") |
| 5fzayi (quiz option, flare) | Rytm, żeby otwarcie było płynne | Rytm, żeby ściąganie sterówek było płynne | Same: "otwarcie" is the opening, not the flare pull | applied ("Rytm, żeby ściągać sterówki płynnie") |
| 7ym8b3 / cu3hb7 / d08r79 (quiz "How many practice touches") | Jeden / Trzy / Pięć | Jedno / Trzy / Pięć | "sięgnięcie" is neuter, "Jeden" does not agree (ru uses "Одно") | applied |
| 1hjxv3q (Hero tape: lock on) | lock on: tylko wysokościomierz | lock on: od teraz patrz tylko na wysokościomierz | Bare "only altimeter"; first-timer does not know what lock on asks of them | applied |
| 1l4xtad (Hero tape: exit) | wyjście | wyjście z samolotu | Bare noun; "wyjście" alone could be any exit (ru says "отделение от самолёта") | applied (glossary: wyjście z samolotu) |
| ryzuqy (Hero tape) | zostaw to, zacznij podejście | opuść punkt oczekiwania, zacznij podejście do lądowania | "zostaw to": what is "it"? (ru names the holding point) | applied ("opuść punkt oczekiwania…", the term used across pl.json) |
| 5mnkna (Hero tape) | podejście do lądowania | podejście do lądowania: z wiatrem, trawers, prosta | ru/uk list the three legs on the card; pl card is a bare term | applied |
| zx731q (Hero tape, 10 ft) | wyrównanie, potem PLF | wyrównanie (flare), potem lądowanie z przewrotem (PLF) | Two jargon words in a row, neither explained on the card | applied as "wyrównanie (flare), potem PLF (lądowanie z przewrotem)" (matches 1am3rs8) |
| zuax6m (Hero tape: pull) | otwarcie spadochronu | otwórz spadochron | Noun where the card is an instruction (rest of tape: "licz", "sprawdź") | applied |
| 17k2a14 / 42fces / 1sngn2n / 1vqynzl / h0h0l3 / 1kus2m1 / 5dujpm / 1b9a8ma / 1w4a53m / 2yc0j8 / 1o3x4zr / k21wbt / 1sngn2n | Chwyć srebrny; Chwyć czerwony; Ciągnij srebrny; Spójrz na czerwony; Oderwij i pchnij czerwony; Obie ręce na srebrnym; Srebrny, lewa strona klatki piersiowej ... | add the noun once per card: Chwyć srebrny uchwyt; Chwyć czerwony uchwyt; Oderwij i wypchnij czerwony uchwyt; Obie ręce na srebrnym uchwycie ... | Bare colour adjectives; a first-timer does not know "srebrny" = the reserve handle | applied to every listed key ("… uchwyt / uchwycie") |
| cynh8y | Pasy piersiowy i udowe | Pas piersiowy i pasy udowe | Ungrammatical (plural + singular adjective) | applied |
| m4w4cu | <b>Taśmy udowe i piersiowa</b>, <b>zawleczki</b> | <b>Pasy udowe i pas piersiowy</b>, <b>zawleczki</b> | Ungrammatical, and "taśmy nośne" in the glossary are the risers, not leg straps; also matches uigydt "pas piersiowy" | applied |
| 1abpe18 | Pilocik się waha | Pilocik nie wychodzi od razu (pilot chute hesitation) | "się waha" is a literal calque of "hesitates" | applied as "Pilocik zawisa za plecami" (no English in a title) |
| rd64o1 | "Arch!" · rozkołys i skok | „Arch!” · wychylenie na zewnątrz i wyskok | "rozkołys" is not the term; the same move is "wychylenie" in 1b4d8k8 and 1gky2e2 | applied |
| 3xwjfb (part3 list title) | Moment | Kiedy zacząć wyrównanie | Bare "Moment" (ru: "Когда начинать выравнивание") | applied |
| 14t6pth (hand signal "Good", thumbs up) | Trzymaj to, co masz teraz. | Trzymaj pozycję, którą masz. | "to, co masz": have what? Meaning is "keep your position" | applied as "Tak trzymaj." (Polish idiom, same as ru/uk "Так и держи") |
| q9gsu5 (canopy check word) | Jest | Czasza jest | Bare "Jest" on the card (ru "Купол є") | applied |
| 1psklkh (quiz feedback) | Dobrze. | Poprawnie. | "Dobrze" sounds like "OK/fine"; the sibling "Nie do końca" is a verdict, so use "Poprawnie." | not applied: "Dobrze." is the normal Polish verdict for a correct quiz answer |
| 1muo2lp / ln16y7 (flare steps) | Trzymaj, dokończ, gdy opadasz / Dokończ całkiem w dół i trzymaj | Trzymaj sterówki, dokończ wyrównanie, gdy opadasz / Ściągnij sterówki do końca w dół i trzymaj | No object: hold what? | applied: "Trzymaj sterówki, dokończ, gdy opadasz" / "Ściągnij sterówki do końca w dół i trzymaj" |
| 1o16gas | Pięć szybkich pompnięć sterówkami | Pięć szybkich ruchów sterówkami w dół i w górę | "pompnięć" is clumsy and unclear without the motion | not applied: "pompowanie sterówkami" is how Polish skydivers say it; the longer wrong option would stand out |
| 1xudcrj | Krąż, żeby stracić wysokość | Skręcaj, żeby stracić wysokość | "Krąż" suggests circling; the source says turn (x3rumg already uses "Skręć") | applied as "Skręć, żeby stracić wysokość" |
| 4scwt2 | Biplan | Biplan (jedna czasza przed drugą) | Bare term for the formation (o9mnid explains only on the next line) | not applied: title; o9mnid right under it explains it |
| 1yvepw | przyjmij pozycję bezpieczną | przyjmij pozycję ochronną (brace) | "pozycja bezpieczna" is not the term used in aviation safety briefings | not applied: "pozycja bezpieczna" is the Polish airline safety-card term for brace |
| 8ahyyx | Limit wiatru dla uczniów | Limit wiatru dla kursantów | Glossary: kursant, "uczniów" used nowhere else | applied |
| 1dse79j (rules table) | sprawdź | sprawdź na swojej wysokości / keep and add what is checked | Bare verb; check what? (low: depends on the row) | not applied: badge word, must match CheckBadge "sprawdź" in src/i18n.tsx (out of scope) |
| vsu94t (rulesChange) | zmień | zmień zasady | Bare verb next to "Pokazane zasady" | not applied: a link right after "Wyświetlane zasady: USPA ·", clear in context |
| y4k62d | Pokazane zasady | Pokazywane zasady szkoły | "Rules shown" reads like a past event | applied as "Wyświetlane zasady" (profiles are federations, not schools) |
| 1sm99fh | Kopiuj moje odpowiedzi | Skopiuj moje odpowiedzi | Imperative form should match the other buttons ("Skopiuj prompt dla mojego AI") | applied |
| 1wbxrac | Kopiuj e-mail | Skopiuj e-mail | Same | applied |
| 1nvepo7 | Otwórz w YouTube | Otwórz na YouTube | Polish says "na YouTube" | applied |
| g2xrb, nr8oh7, rd64o1, wfkqxj, stuii8, 7n9mgk, do21aj | "Check out", "Arch!", "L" in straight quotes | „Check out”, „Arch!”, „L” | Polish quotes „ ” used everywhere else | applied |
| 1yp... 8fguh9, 34670c, 2sab91, 9k33er, c0qknh, 1ngfvfx etc. | 6 000 ft / 2 500 ft next to 6000 ft / 2500 ft | pick one form (project style: 6000 ft, 5500 ft) | Mixed thousand spacing for the same kind of number, looks like different numbers | applied: every 4-digit number now written 6000 / 2500 (Polish style); 5-digit keep the space |

## Patterns

- Bare nouns, adjectives and verbs on cards and chips with no object: "Chwyć srebrny", "Jest", "Moment", "sprawdź", "zmień", "wyjście".
- "Otwarcie" used for the flare pull ("pull" translated by the nearest dictionary word, not by context): 1g18b4d, 5fzayi.
- Literal calques: "się waha", "pompnięć", "rozkołys", "Trzymaj tam".
- Mixed straight and typographic quotes; mixed "6 000" and "6000".
- Student addressed in masculine past forms in many titles ("Zacząłeś", "Nie znalazłeś", "Zatrzymałeś się", "Bądź gotowy"): consider neutral wording such as "Start był za wczesny", "Uchwytu nie znaleziono" (not applied here; owner decision).
- Hero tape: pl cards are shorter than ru/uk and drop the explanation (legs of the pattern, what lock on means).
