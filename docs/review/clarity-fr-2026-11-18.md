# Clarity review, French (fr), 2026-11-18

Scope: Hero labels, interface words, short titles/labels/chips in part1-4 and dropzone. Keys are in
`src/content/i18n/fr.json` (English in `en.json`). Glossary: `docs/i18n/glossary-fr.md`. Keep tags, numbers, order of steps.
Items marked (check) touch a safety idea: confirm with an instructor before applying.

| key | now | proposed | why | status |
|---|---|---|---|---|
| ryzuqy (Hero, holding area) | la quitter, commencer le circuit | quitte la zone d'attente, commence le circuit | "la" points to nothing on the number card | applied |
| zx731q (Hero, flare) | arrondi, puis roulé-boulé | arrondi (tire les commandes pour freiner), puis roulé-boulé (PLF) | a first-timer knows neither word; RU/UK explain both | applied: "arrondi (tire les commandes pour freiner), puis roulé-boulé (PLF)" |
| rprbzz (Hero, lock on) | lock on | lock on : regarde seulement l'altimètre | bare English word; the glossary's own gloss is missing on the card (the sibling card 1hjxv3q has it) | applied (also the altimeter dial legend) |
| 1hjxv3q | lock on : altimètre seulement | lock on : regarde seulement l'altimètre, rien d'autre | bare noun phrase, not clear what to do (RU: "дальше смотри только на высотомер") | applied as "lock on : regarde seulement l'altimètre" (", rien d'autre" dropped as redundant) |
| 1l4xtad (Hero) | sortie | sortie de l'avion | bare noun; RU says "отделение от самолёта" | applied |
| zuax6m (Hero) | ouverture | ouvre ton parachute | bare noun on a number card; "ouverture" can read as "the canopy opens" | applied (also the altimeter dial legend) |
| 1oijso8 (Hero) | peux-tu rejoindre la zone d'attente ? | as-tu assez de hauteur pour rejoindre la zone d'attente ? | the point is altitude; RU says "хватит высоты" | applied |
| 7b1m24 (Hero) | décide et agis (corrige ou libère) avant ici | avant cette hauteur : décide et agis (corrige ou libère) | "avant ici" is a calque (check wording only; steps unchanged) | applied (wording only, meaning same as RU/UK) |
| 15abr6m (Hero, hard deck) | pas de libération en dessous : tire seulement le secours (une exception : un downplane) | pas de libération sous cette hauteur : tire seulement le secours (exception : downplane, les deux voiles plongent) | "en dessous" of what; downplane unexplained (check) | applied: "sous cette hauteur", gloss "deux voiles qui piquent vers le sol" (same idea as RU "оба купола вниз"; USPA SIM 4-1 downplane), rule unchanged |
| fcc3q8 (Hero) | compte après l'ouverture, puis contrôle la voile | après l'ouverture, compte jusqu'à 5, puis contrôle la voile | "compte" alone: count what? (number is the card's 5 s) | applied as "compte jusqu'à cinq" (digit 5 would add a number the English line lacks; i18n test) |
| 1ckh001 (Hero ifBad) | Si la principale a un problème | Si la voile principale a un problème | bare "la principale" | applied |
| q6wbsq (Hero) | Tu t'es arrêté à | Dernier chapitre ouvert | label before a chapter name; gender, and reads as odd (RU: "Последняя открытая глава") | applied |
| pdzz3m (part3 pattern step) | Garde là | Attends au-dessus de la zone d'attente | "Garde là" is not French; the step is "hold over the holding point" | applied as "Attends au-dessus de la zone d'attente" |
| 1rntt8 | Tirer régulièrement, les deux mains ensemble | Tirer en douceur et sans à-coups, les deux mains ensemble | "régulièrement" means "often", not "smoothly" (flare answer) | applied as "Tirer les commandes en douceur, les deux mains ensemble" |
| 548vyo | Un seul geste régulier, terminé au toucher du sol | Un seul geste continu, terminé au toucher du sol | same false friend | applied as "Un seul geste fluide, terminé au toucher du sol" |
| 5fzayi / 1q97bon | Un rythme pour garder l'arrondi régulier / garder l'arrondi <b>régulier</b> | ... garder la traction des commandes <b>fluide</b> | English "pull" is the toggle pull, not the "arrondi"; "régulier" false friend | applied as "Un rythme pour garder un geste fluide" / "un geste <b>fluide</b>" (matches RU "движение"; keeps quiz options alike) |
| 1g18b4d | L'ouverture doit durer exactement cinq secondes | La traction des commandes doit durer exactement cinq secondes | "ouverture" is the deployment; this answer is about the flare pull (wrong word, changes the meaning) | applied as "Le geste doit durer exactement cinq secondes" (wrong word "ouverture" fixed; shorter to match the other options) |
| 1sc7xbh | Tirer pendant cinq secondes pleines | Tirer les commandes pendant cinq secondes pleines | bare verb, object missing | applied as "Tirer les commandes cinq secondes pleines" |
| 14t6pth (hand signal "Good") | Garde ce que tu as maintenant. | Continue comme ça. | calque of "Hold what you have"; this is the thumbs-up "keep going" signal | applied |
| 1muo2lp | Garde, termine en descendant | Garde les commandes, termine en descendant | "Garde" what? (flare answer) | applied as "Garder les commandes, finir en descendant" (infinitive like the other options) |
| ln16y7 | Terminer tout en bas et garder | Tirer les commandes jusqu'en bas et les garder | bare "garder" | applied as "Descendre les commandes jusqu'en bas et les garder" |
| 1qa7f9h (+ 14j2mjn, 9hvlw6) | Downplane | Downplane (les deux voiles plongent) on first mention | English word with no explanation; RU explains it (check) | applied on the title 1qa7f9h and the hero 15abr6m: "(deux voiles qui piquent vers le sol)"; 14j2mjn / 9hvlw6 not changed (they follow the explained title) |
| 1abpe18 | Hésitation de l'extracteur | Hésitation de l'extracteur (il reste derrière ton dos) | official term, student does not know it; RU/UK commit 122fe6c uses "behind your back" | applied |
| qmj1tw | Line-over | Line-over (suspentes passées par-dessus la voile) | bare English word, first mention | applied as "Line-over (une suspente passe par-dessus la voile)" |
| 11fxqxi | Torche | Torche (voile sortie mais pas gonflée) | glossary term, no hint for a beginner | applied |
| 1wgbwx | le virage commence bas | le virage commence trop près du sol | "bas" is vague (chip) | applied as "le virage commence trop bas" (short chip) |
| 1h18zap / jczuqp | Virages bas / Un virage bas | Virages près du sol / Un virage trop près du sol | "bas" reads as "low-set", not "low to the ground" | not applied: "virage bas" is the usual French skydiving term; the chip 1wgbwx now says "trop bas" |
| 8tq7bu | Chiffres des écoles métriques à confirmer | Chiffres des écoles qui enseignent en mètres, à confirmer | "écoles métriques" is not a phrase people use | applied |
| 9zqkzd | Pourquoi j'ai fait ça | Pourquoi j'ai fait ces notes | too colloquial and vague as a heading | applied as "Pourquoi j'ai créé ces notes" |
| 1j7152i | Me trouver : | Retrouve-moi : | infinitive label breaks the "tu" register used elsewhere | applied |
| 1kus2m1, 5dujpm, 42fces, 1vqynzl, 1w4a53m, o3x... (the "red/silver" lines) | Décolle et pousse la rouge / Saisis la rouge / Regarde l'argentée | add "poignée" at least once per card: Saisis la poignée rouge | glossary says "Saisis la poignée argentée"; the red line drops "poignée" | applied: "poignée" added to every red line (1vqynzl, 42fces, 1w4a53m, 1kus2m1, 5dujpm) and to "Regarde l'argentée" h0h0l3, matching the silver lines |
| 1osbxw7 / 1c8dyyg / rb8of7 | Poignée témoin / 3 poignées témoin | 3 poignées témoin (touche chaque poignée) on first mention | FFP term, but a first-timer does not know it means a touch without pulling | applied on first mention 1c8dyyg: "3 poignées témoin (touche sans tirer)"; signal name 1osbxw7 and caption rb8of7 unchanged (explained nearby) |
| wy3szq / 12ncsos / 1kghru | Pomper quelques fois aux commandes / pompe aux commandes | Pomper plusieurs fois sur les commandes / pompe sur les commandes | "quelques fois" is wrong (quelquefois), "aux commandes" is a calque | not applied: "quelques fois" (two words) is correct French for "a few times"; "aux commandes" is understood and matches the sibling option 1o16gas |
| zwpecf | Pas d'ouverture ou ouverture basse | Pas d'ouverture, ou ouverture trop basse | "basse" needs "trop" to mean an error | applied |
| 1qy5p8e (Hero eyebrow) | AFF catégorie A · notes de cours | AFF (PAC), catégorie A · notes de cours | glossary: "(PAC)" is the FFP name French speakers know | applied (glossary: "(PAC)" once) |
| kack2k (Settings) | système | auto (comme ton appareil) | "système" alone is unclear in a theme picker | applied as "comme ton appareil" (shorter for the theme menu, like UK/RU "як у системі") |
| kr3kuo | Twists, sans rotation | Twists (suspentes vrillées), sans rotation | first-time term (glossary) | applied (glossary) |

## Patterns

- Bare nouns on the number card (sortie, ouverture, lock on, arrondi): add the action ("sortie de l'avion", "ouvre ton parachute", "regarde seulement l'altimètre").
- Pronouns and "here" without a referent ("la quitter", "avant ici", "Garde là"): name the thing.
- False friends: "régulier/régulièrement" for "smooth", "ouverture" for the flare pull. The flare "pull" is the toggle pull.
- English terms left bare with no gloss on first mention (downplane, line-over, lock on, bag lock is fine): keep the word, add a short explanation in brackets.
- "garder/tenir" with no object in flare and signal answers: say what is held (les commandes).
- Infinitives as labels ("Me trouver", "Pomper") mixed with "tu" imperatives: keep one register (tu imperative for instructions, infinitive only in answer options).
- Glossary terms (poignée témoin, torche, hésitation de l'extracteur) are right but need one explaining phrase for a student who has not done ground school.
