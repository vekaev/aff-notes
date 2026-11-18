# Clarity review, Italian (it), 2026-11-18

Scope: Hero labels, `src/ui.ts`, Settings/Author/FinalCheck, short titles/labels/chips in `part1`-`part4`, `dropzone`. Overall the Italian is good and mostly natural; the problems below are the ones a first-timer or an Italian AFF instructor would trip on. Glossary: `docs/i18n/glossary-it.md`. Numbers, order of steps and tags untouched.

| key (it.json) | now | proposed | why | status |
|---|---|---|---|---|
| 1g18b4d | L'apertura deve durare esattamente cinque secondi | La tirata dei comandi deve durare esattamente cinque secondi | In the "5, 4, 3, 2, 1" flare question "pull" is the toggle pull; "apertura" reads as the canopy opening, a wrong meaning (ES "tirón", RU "движение") | applied, as "La trazione dei comandi..." (keeps "trazione", the word used in 1tdx4dn) |
| 1sc7xbh | Tirare per cinque secondi pieni | Tirare i comandi per cinque secondi pieni | Same question: say what is pulled | applied |
| 548vyo, 5fzayi | Una sola trazione fluida, completata al contatto con il suolo / Un ritmo per mantenere la trazione fluida | Una sola tirata fluida dei comandi... / Un ritmo per tirare i comandi in modo fluido | Same question; "trazione" is technical, "tirata dei comandi" is what the student does | applied: "Una sola trazione fluida dei comandi..." (consistent with 1tdx4dn) / "Un ritmo per tirare i comandi in modo fluido" |
| 1q1neut | In rotazione e quasi nessuna trazione | In rotazione e apertura quasi mancata (tardiva) | "Trazione" is not "pull the handle"; the card is about a student who pulls very late | applied, as "In rotazione e quasi senza aprire" (like ES "casi sin abrir") |
| 1ckh001 | Se il principale è malfunzionante | Se il principale ha un malfunzionamento | "bad/malfunzionante" for a canopy is a calque; glossary says "malfunzionamento" | not applied: "malfunzionante" is normal Italian and the same word as 1ddzyq |
| 1qk7t94, pg02oy, os9nir (ui.frontView, backView, sideView) | davanti / schiena / vista laterale | da davanti / da dietro / vista laterale | These are camera angles of a clip; "schiena" reads as the body part | applied for front/back ("da davanti" / "da dietro"); side view already fine |
| 1uwtp9, 1ueeyse, grudt8 | Hard deck | Hard deck (quota minima per lo sgancio) on the heading; the sentences can stay | A bare English term on a card; the student has no idea what it is | applied on the heading 1uwtp9; sentences unchanged |
| 1qa7f9h, 9hvlw6 | Downplane / un downplane | Downplane (vela che picchia verso il basso) on the first card | Bare English term; sgancio at any altitude, so it must be understood | applied on 1qa7f9h with a corrected gloss "(due vele aperte rivolte verso il basso)": a downplane is two canopies, not one diving |
| a45l2k, 16mya0v | Bag lock / Bag lock, visto da fuori | Bag lock (principale rimasto nella sacca) | Bare term, one of the malfunction names | applied on a45l2k: "Bag lock (vela bloccata nella sacca)"; clip title 16mya0v unchanged |
| qmj1tw | Line-over | Line-over (fune passata sopra la vela) | Bare term | applied: "Line-over (fune sopra la vela)" |
| 1abpe18 | Pilotino esitante | Il pilotino esita (non parte subito) | Calque from "hesitates"; Italian says it does not leave / starts late | applied as "Pilotino esitante (resta dietro la schiena)", matching dswog4/129edoj |
| gllyxr, rprbzz | Lock on / lock on | Lock on (fissa lo sguardo sull'altimetro) / lock on: guarda solo l'altimetro | Bare slang; no gloss in the short label | applied on gllyxr; rprbzz not applied: label inside a drawing, no room for a gloss |
| 1hjxv3q | lock on: solo altimetro | lock on: guarda solo l'altimetro | Elliptical: "only altimeter" what? | applied |
| 13gi394 | Lock on: niente più esercizi | Lock on (guarda solo l'altimetro): basta esercizi | Same | applied as "Lock on (solo altimetro): basta esercizi" |
| y5qovb, 1w7iu6n, 1y648xh, 1yh5sqb, s1cqjv | Circle of awareness (alone) | Circle of awareness (giro di controllo) at least on the first card/heading of each chapter | Glossary gives the Italian gloss; a first-timer does not know the English phrase | applied on y5qovb and s1cqjv; the others keep the bare term (already glossed nearby) |
| 1cxd5ya | Problema: wave-off e apri subito | Problema: agita le braccia (wave-off) e apri subito | "wave-off" unexplained; glossary gloss "segnale di apertura" is itself vague | applied as "wave-off (agita le braccia)" |
| 1vqynzl, 42fces, 1w4a53m, 5dujpm, 1kus2m1, 1sngn2n, 17k2a14, h0h0l3, 1b9a8ma, k21wbt, vd7cbi | Guarda il rosso / Afferra il rosso / Stacca e tira il rosso / Tira l'argento / Afferra l'argento / Guarda l'argento / Tu, tirando subito l'argento | ...la maniglia rossa / ...la maniglia argentata (e.g. "Guarda la maniglia rossa", "Tira la maniglia argentata") | Colour used as a bare noun on the step cards; say which handle (safety steps, order unchanged) | applied on all 11 keys; order of steps unchanged |
| zwpecf, 5ccgeq | Nessuna apertura o apertura bassa | keep, but "Nessuna apertura o apertura troppo bassa" | "apertura bassa" is ambiguous (low opening or low altitude?) | applied on zwpecf; 5ccgeq not applied: it is "Spinning main, cutaway, reserve", not this card |
| 1v5g8rl | Apertura dura / non trovi la maniglia | Maniglia dura da tirare / non trovi la maniglia | "Apertura dura" does not say that the handle is hard to pull | applied |
| 977af1 | Solo riserva, atterra con entrambe | Solo riserva: atterra con entrambe le vele aperte | "con entrambe" is bare (both what?). Keep meaning: below 1,000 ft, no cutaway, land with both canopies | applied as "atterra con entrambe le vele" |
| dcngan, sy5nld | Tenerle entrambe, pilotare ... quella dietro / davanti | Tenere entrambe le vele, pilotare ... la vela dietro / davanti | "le/quella" refer to nothing on the card | applied |
| 53t40u | Affiancate: pilota quella dominante | Vele affiancate (side by side): pilota quella dominante | Bare adjective | applied as "Vele affiancate: pilota quella dominante" |
| hwo7x5 | Nessuno sgancio sotto | Sotto questa quota, nessuno sgancio | "sotto" what? | applied as "Nessuno sgancio al di sotto di": the label is followed by the altitude in the rules list, "questa quota" would be wrong |
| pdzz3m | Mantieni lì | Resta in attesa sopra il punto di attesa | Heading in the landing pattern; "Mantieni lì" is not Italian usage and sounds like "hold on" | applied as "Resta in attesa sopra il punto" |
| 1mz99fl, 4a2vj7, 7nv6gs, 7ru8da, fqzwmy, oeyc5v, ou61uv | Fare segno... / Liberare la vela, poi scendere / Guardare in basso... / Slacciarti e saltare... | keep the infinitive for test answers, but be consistent: do not mix "Slacciarti" (reflexive infinitive) with "Siediti" (imperative) in the same list; "scendere" -> "scendere dalla porta" where it is about the plane | Mixed registers | partly applied: oeyc5v "Slacciarsi..." (infinitive like its options), 4a2vj7 "scendere dall'albero" (the question is about a tree, not the plane); the rest already consistent |
| 1id3a0t | Avvicinarsi da dietro | Avvicinati da dietro | Rule card title in tu-imperative like its neighbours (ES/RU use tu) | applied |
| gwbd7g | Sgancio a una mano che fallisce sotto le forze della rotazione. | Lo sgancio con una sola mano non riesce a causa della forza della rotazione. | "fallisce" is a calque | applied: "Lo sgancio con una sola mano non riesce per la forza della rotazione." |
| 17mto0f, (part2 'Toe taps') | Tocchi delle punte | Toe taps: tocca le punte dei piedi tra loro | Bare name of a correction signal; student needs what to do | applied as "Tocca le punte dei piedi" (the card's text explains when) |
| 1rj4ywr | Regola dei 5 secondi | Regola dei 5 secondi (tempo massimo per decidere) | Bare noun on the number card; EN text says 5 s is the upper limit, not a wait | not applied: the card's own points already say "5 s al massimo per decidere... un limite, non un'attesa" |
| 1vur8sg | Su “5, 4, 3, 2, 1” | Il conteggio “5, 4, 3, 2, 1” | "Su" is a calque of "About" | applied |
| wfkqxj | Cosa fa il tuo corpo su “Arch!”? | Cosa fa il tuo corpo al comando “Arch!”? | "su" calque | applied |
| 1osbxw7, 1c8dyyg, rb8of7 | Prova di apertura / 3 prove di apertura / Tre prove di apertura | keep the glossary term, add gloss once per chapter: "prova di apertura (practice touch: tocca le maniglie)" | "Prova di apertura" sounds like a test of the opening | applied on 1osbxw7 (signal card): "Prova di apertura (tocco dell'hackey)"; counts unchanged |
| 1muo2lp | Mantieni, completa mentre scendi | Mantieni e completa la richiamata mentre la vela scende | Elliptical | applied as "Mantieni i comandi, completa la richiamata mentre scendi" |
| 6qoxw6 | Accelerated Freefall · livello 1 · appunti di studio | Caduta libera accelerata (AFF) · livello 1 · appunti di studio | English left in the hero eyebrow; glossary has the Italian | applied |
| 172gh9o, 1d5j1lh | il briefing ... vale sempre più di questa pagina | il briefing ... ha sempre la precedenza su questa pagina | "vale più di" is a literal calque of "wins over" | applied |
| 11lfqdu | Il briefing della tua scuola vale sempre. | Il briefing della tua scuola ha sempre la precedenza. | same | applied |
| y4k62d / vsu94t | Regole mostrate / cambia | Regole applicate / cambia regole | Bare verb "cambia" next to nothing | applied |
| p6o4id, w6pfwu | Dopo averla indossata / Prima di indossarla | Dopo aver indossato l'imbracatura / Prima di indossare l'imbracatura | "la" refers to nothing visible | applied with "l'attrezzatura" (the rig, icon 'rig'; glossary rig = attrezzatura), not "imbracatura" |

## Patterns

- Bare colour nouns for the handles ("il rosso", "l'argento"): always say "maniglia".
- Bare English terms with no gloss on the card (Hard deck, Downplane, Bag lock, Line-over, Lock on, Circle of awareness, wave-off): keep the English, add a few Italian words in brackets once.
- "Pull" translated three ways: "apri" (handle), "apertura" (canopy out), "trazione/tirata" (toggle pull); in the flare question "apertura" is the wrong one and must become "tirata dei comandi".
- View labels translated as body parts ("schiena" for back view).
- Calques: "vale più di", "su" for "about/on", "malfunzionante", "esitante", "fallisce".
- Ellipsis with dangling pronouns ("entrambe", "quella dietro", "averla", "sotto").
- Infinitive vs imperative mixed in the same list.
