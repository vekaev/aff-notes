# Clarity review: Portuguese (pt), 2026-11-18

Scope: `src/content/i18n/pt.json` (keys are in the first column; English in `en.json`). Checked Hero, `ui.ts`, Settings, Author, FinalCheck, and every English string of 8 words or fewer from `part1`-`part4` / `dropzone`. Glossary: `docs/i18n/glossary-pt.md` (Brazilian usage, "comandar", "você").
Overall: the base is good. Hero, Settings and FinalCheck have no real problems. The problems are in the short step and card labels. Numbers, order and tags stay as in English; the fixer keeps `<b>`, `<q-check/>`.

| key (pt.json) | now | proposed | why | status |
|---|---|---|---|---|
| 14t6pth | Mantenha o que você tem agora. | Mantenha a posição que você tem agora. | "o que você tem" means nothing alone; Spanish source says "mantén la posición" (the dive-flow step: hold the position) | applied |
| pdzz3m | Mantenha ali | Espere sobre o ponto de espera | "Hold there" is the holding point (ES "Espera ahí", RU "ожидание над точкой"); "Mantenha ali" has no object | applied |
| q9gsu5 | Está lá | Está aberto, acima de você | "There" in the canopy check "there, square, stable, steerable" is a bare phrase on a card; say what is there | applied as "Está aberto acima de você" |
| o8mh8v, gcs795 | Está lá, quadrado, estável, pilotável | Está aberto acima de você, quadrado, estável, pilotável | same check, read out in full; keep the four-word order | applied ("Aberto acima de você, quadrado, estável, pilotável"; order kept) |
| 1gky2e2, rd64o1, 1b4d8k8, 1ca1v2n, 1r9q1yo | "Arch!": balança para fora e sai do avião / ... e vai / "Up" · balança para fora / "Down": balança para dentro | "Arch!": balance para fora e saia do avião / ... e saia / "Up" · balance para fora / "Down": balance para dentro | "balança", "sai", "vai" are tu-forms; the rest of the app is "você" | applied ("balance … saia" everywhere; "e vai" → "e saia") |
| 15f4i4 | Balança para dentro, em direção ao avião, cabeça para baixo | Balanço para dentro, em direção ao avião, cabeça para baixo | it describes the move, so a noun; "balança" reads as a command to the wrong person | not applied: it answers "What does your body do?", so third person "(o corpo) balança" is right, same as the matching option 1w7o7rc |
| 1gre5qj | "Vai" | "Go" (Vai) | the exit calls are kept in English at the school (glossary); keep the English word, add the local one | applied as "\"Go\" (vai)", parallel to the option "\"Arch\" (arco)" |
| cla75q | PUXE | COMANDE | hand signal "pull"; glossary says "comande"; "PUXE" clashes with "Comande" elsewhere | applied ("COMANDE"); note: it is the 5,500 ft altitude-step title, not a hand signal |
| 1t2mpi6 | Comandar | Comando da abertura | step title (the "Pull" step); bare verb "Comandar" does not say what is commanded | applied as "Comandar a abertura" (keeps the glossary verb) |
| 15m3l6g | Altitude de comando | Altitude de comando (onde você abre) | official term, but a first-timer does not know "comando"; explain once on the label | applied as "Altitude de comando (abertura)" |
| 1q1neut | Girando e quase sem tração | Girando e quase sem abertura | "pull" here is the opening (ES "casi sin abrir"); "tração" suggests towing | applied |
| zwpecf | Sem comando ou comando baixo | Não comandou a abertura ou comandou baixo | noun "comando" twice is unclear; say who did what | applied |
| 1v5g8rl | Comando duro / não encontra o punho | Punho duro de puxar / não encontra o punho | "comando duro" is not a phrase people say; the handle is hard to pull | applied |
| 8tq7bu, 1xiskq1 | Escolas métricas (Rússia, Ucrânia) / Números de escolas métricas a confirmar | Escolas que usam metros (Rússia, Ucrânia) / Números das escolas que usam metros, a confirmar | "escolas métricas" is jargon; a student does not know it means metres instead of feet | applied (note: the keys are the other way round: 8tq7bu is "to confirm", 1xiskq1 is the "(Rússia, Ucrânia)" label) |
| uigydt | Segure a peitoral com as duas mãos | Segure a fita do peito (peitoral) com as duas mãos | "a peitoral" is a gender error and the strap is not named | applied differently: "a cinta peitoral" (not a gender error: Brazilian jumpers say "a peitoral", short for "a cinta peitoral", and the app uses "a peitoral" elsewhere; the strap is now named) |
| 42fces, 17k2a14, 1sngn2n, 1kus2m1, 5dujpm, h0h0l3, 1vqynzl | Pegue o vermelho / Pegue o prateado / Puxe o prateado / Descole e empurre o vermelho / Olhe o prateado | Pegue o punho vermelho / Pegue o punho prateado / Puxe o punho prateado / Descole e empurre o punho vermelho / Olhe o punho prateado | bare colours; "o vermelho" is slang a first-timer has not heard yet (glossary lists it only as a nickname after the full term) | applied to all seven, plus 5dujpm ("Descole e puxe o punho vermelho") |
| 1fludss | Esteja pronto para um em todo pouso. | Esteja pronto para um PLF em todo pouso. | "um" refers to something three lines away | applied |
| c0qknh | Dois 2.500 ft diferentes | Dois sentidos para 2.500 ft | not clear what is "different" (a decision altitude and a landing one) | applied as "Duas decisões diferentes a 2.500 ft" (RU source: two different decisions) |
| 53t40u, dcngan, sy5nld, o31xcx | pilote o dominante / pilote forte o de trás / Fique com os dois, pilote o da frente suavemente / Biplano: pilote o da frente | pilote o velame dominante / pilote forte o velame de trás / Fique com os dois velames, pilote o da frente suavemente / Biplano: pilote o velame da frente | "o dominante" and "o de trás" do not say canopy | applied ("Fique com os dois velames, …") |
| 1muo2lp | Mantenha, termine conforme desce | Mantenha e termine o movimento enquanto desce | the verbs have no object (the flare); "conforme" reads as "according to" | applied as "Mantenha e termine o flare enquanto desce" (imperative, like the other options) |
| ln16y7 | Termine até embaixo e mantenha | Leve os batoques até embaixo e segure | same: what is finished and held | applied |
| 548vyo | Um puxão suave, terminado no toque no chão | Um movimento contínuo e suave, que termina ao tocar o chão | "puxão" means a jerk, the opposite of smooth; also in 5fzayi ("puxão suave" -> "movimento suave") | applied as "Um movimento suave e contínuo, até tocar o chão"; 5fzayi → "movimento suave" |
| a0kd8i | cambalhotas, rolamentos, tracking | cambalhotas, giros laterais (rolls), tracking | "rolamento" is already used for PLF ("rolamento de pouso") | applied |
| 19goou0 | Rígido e com medo: não aprende, não pode ser solto. | Rígido e com medo: não aprende e não pode ser liberado para saltar sem instrutor. | "ser solto" sounds like being let go; say what release means | applied differently: "released" in AFF is the instructors letting go of the student in freefall, not solo clearance; now "você não aprende e os instrutores não podem soltar você" |
| 94f2vv | Punho fechado. | Mão fechada. | "punho" also means handle (punho do reserva) in this app | applied |
| scfckz | Na alça da porta, ao lado da direita | Na alça da porta, ao lado da mão direita | "ao lado da direita" lacks a noun | applied |
| 6qoxw6 | Queda Livre Acelerada · nível 1 · notas de estudo | AFF (Queda Livre Acelerada) · nível 1 · notas de estudo | glossary: AFF is the word used in Brazil; the full name alone is not what schools say | applied |
| of9bbo | Telhado e fios por uma decisão tardia | Telhado e fios depois de uma decisão tardia | "por" reads as "because of"; it is a sequence | applied |
| 5e9d9p, 1abpe18 | Extrator em reboque / Extrator hesita | Extrator em reboque (preso atrás de você, sem abrir o velame) / Extrator hesita (não sobe) | the school terms are right but a student has never seen it; add one short explanation (keep the term) | not applied: both are titles whose next line already explains the term ("o extrator voa atrás de você…", "fica no ar calmo atrás das costas"); "não sobe" would also be inexact |
| hwo7x5 | Sem cutaway abaixo de | Sem desconexão (cutaway) abaixo de | the app says "desconexão" elsewhere; the half sentence before a number should be a clear term | applied |
| 195ve72 | Posição de pouso ruim | Posição de pouso errada | "bad" for "wrong": the position is not a bad thing but the wrong one | applied |
| fea24z | Rever o salto | Repetir o salto | Hero button replays the animation; "rever" means look back over | applied as "Ver o salto de novo" (more natural than "Repetir") |

## Patterns
- **Bare nouns and bare colours on cards** ("Está lá", "o prateado", "o vermelho", "Comandar", "o dominante"): add the missing noun (punho, velame, abertura).
- **tu-forms mixed into "você"** in the exit calls ("balança", "sai", "vai"): use "balance", "saia".
- **"Pull" is translated four ways** (comandar, puxar, comando, tração): comandar/comando for the opening, puxar only for pulling a handle or toggles; do not use "comando" as a noun for "a pull that was low".
- **Half sentences** that only make sense with the card next to them ("Mantenha ali", "Mantenha o que você tem agora", "Termine até embaixo e mantenha"): add the object.
- **"Puxão"** for a smooth action: avoid.
- **Jargon kept without help** ("escolas métricas", "extrator em reboque"): keep, but add a few words once.
