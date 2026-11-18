# Clarity review: German (de), 2026-11-18

Scope: Hero.tsx labels, ui.ts, Settings, Author, FinalCheck, and short titles/labels/chips in part1-4 and dropzone. 64 findings, most confusing first. Location = JSON key in `src/content/i18n/de.json` (English in `en.json`). Glossary terms (Hauptschirm, Kappe, Hilfsschirm, Trenngriff, Reservegriff, Landefall (PLF), Hard Deck, Lock-on, Flare) are kept. Tags, numbers and step order unchanged. The proposals assume the `{...}` rule marks stay out of the text, as in the extractor.

Not found wrong, left as is: most long sentences in FinalCheck and Author, Settings (Darstellung, Fuß, Meter), the exit-count shouted words, and the quiz options.

| key (de.json) | now | proposed | why | status |
|---|---|---|---|---|
| 1psklkh | Rechts. | Richtig. | "Rechts." is the direction, not "correct": the answer feedback tells the student he turned right | applied |
| 1vur8sg | Über „5, 4, 3, 2, 1“ | Etwa „5, 4, 3, 2, 1“ | "Über" reads as "above 5, 4, 3, 2, 1"; the English means "about"/"roughly" | applied, changed: "Über" here means "on the topic of" (not "above") and "Etwa" would be wrong; now „Zum Zählen „5, 4, 3, 2, 1“ bei der Landung“ (as RU) |
| 1u5k6q4 | Flare zu schnell gestochen | Flare ruckartig durchgezogen | "gestochen" is a calque of "stabbed"; not how flaring is described | applied |
| 1hjxv3q | Lock-on: nur Höhenmesser | Lock-on: ab jetzt nur noch auf den Höhenmesser schauen | Number card: "nur Höhenmesser" is a bare fragment; the RU review had the same fix (say what to do) | applied |
| gllyxr | Lock-on | Lock-on: nur noch den Höhenmesser beachten | Bare term as a heading; a first-timer does not know "Lock-on" | applied |
| zuax6m | Öffnung | Hilfsschirm ziehen (Öffnung) | "Öffnung" alone is a noun for the event; the card tells the student to act: pull the handle | applied, changed: "Ziehen: Hauptschirm öffnen" (keeps the shouted word, says what it does) |
| cla75q | ÖFFNUNG | ZIEHEN (Schirm öffnen) | "ÖFFNUNG" does not say what to do at this step | applied, changed: "ZIEHEN (Hauptschirm öffnen)" |
| 1t2mpi6 | Ziehen | Hilfsschirm ziehen | Bare "Ziehen": pull what? Short, so keep it a chip-sized phrase | applied, changed: "Ziehen (Schirm öffnen)" (same key is the hand-signal name and a button) |
| ryzuqy | verlassen, Landeeinteilung beginnen | Wartepunkt verlassen, Landeeinteilung beginnen | "verlassen" has no object; the English "it" is the holding point | applied |
| zx731q | Flare, dann Landefall | Flare (durchbremsen), dann Landefall (PLF) | Landefall bare; glossary says "Landefall (PLF)", and the flare needs the German word beside it for a first-timer | applied |
| 7b1m24 | bis hier entscheiden und handeln (beheben oder trennen) | bis zu dieser Höhe entscheiden und handeln: Störung beheben oder Hauptschirm trennen | "beheben oder trennen" has no objects; "bis hier" is unclear on a card | applied |
| 15abr6m | darunter kein Trennen: nur die Reserve ziehen (eine Ausnahme: eine Downplane) | darunter nicht mehr trennen: nur die Reserve ziehen (Ausnahme: Downplane, beide Schirme zeigen nach unten) | Safety card: "Downplane" was unexplained (RU version explains it); "kein Trennen" is a noun where the rule is a command | applied |
| 9bojui | Höhe prüfen, die ganze Zeit | ständig auf den Höhenmesser schauen | Calque word order "die ganze Zeit"; "Höhe prüfen" next to a 3 s number invites "check what" | applied |
| fcc3q8 | nach dem Ziehen zählen, dann die Kappe prüfen | nach dem Ziehen bis fünf zählen, dann die Kappe prüfen | The number card says 5 s but the line does not say count to five | applied |
| 1l4xtad | Absprung | Absprung aus dem Flugzeug | Bare noun on a number card; "Absprung" alone can be read as any jump (RU used "отделение от самолёта") | applied |
| q6wbsq | Du hast aufgehört bei | Zuletzt gelesen: | Sentence breaks off before a chapter name; "aufgehört bei" sounds like quitting | applied, changed: "Zuletzt geöffnetes Kapitel" (a label above the chapter name, as RU) |
| 5w0l1v | Mit dem Lesen beginnen | Jetzt lesen | "Mit dem Lesen beginnen" is long for a button; "Los geht's" style is how German apps say it | not applied: "Mit dem Lesen beginnen" is already clear; style only |
| 1f9x7ou | Teste dich | Teste dich selbst | "Teste dich" alone is incomplete in German (teste dich worauf / Test dich selbst) | applied |
| 126u6h1 | Zählen, nicht Höhe: | Hier zählst du Sekunden, keine Höhe: | Bare fragment; says what to do (RU: "здесь считаем секунды, а не высоту") | applied |
| 7i71nj | In Ordnung. Kapitel bestanden. | Alles richtig. Kapitel bestanden. | "In Ordnung" means "OK"; the English means every answer is right | applied |
| k8gs2s | Lies das Kapitel nochmal und versuch es erneut. Alle Antworten richtig heißt bestanden. | Lies das Kapitel noch einmal und versuche es erneut. Mit lauter richtigen Antworten ist es bestanden. | "Alle Antworten richtig heißt bestanden" is clipped, "nochmal" is colloquial | applied, reworded: "Bestanden ist es, wenn alle Antworten richtig sind." |
| bloe4a | Daumen-ans-Ohr-Check | Daumen an die Ohren (Check) | Hyphen chain is hard to read; it checks the arms' position | applied, changed: "Check: Daumen an die Ohren" |
| 18qw6t8 | Behebbar, aber nur zwei Versuche: bis 2.500 ft nicht behoben → EP → | Lässt sich beheben, aber nur zwei Versuche: bis 2.500 ft nicht behoben → Notfallverfahren (EP) → | "Behebbar" is stiff; "EP" alone not known at this point | applied |
| pg02oy | hinten | Ansicht von hinten | Bare adverb as a picture label | applied |
| 1qk7t94 | vorn | Ansicht von vorn | Bare adverb as a picture label | applied |
| vsu94t | ändern | Regeln ändern | Bare verb on a link; ändern what? | applied |
| 1fciy42 | Regeln der Schule | Regeln deiner Schule | "Regeln der Schule" is a calque; the app addresses the student with du | applied |
| 11lfqdu | Das Briefing deiner Schule gilt immer. | Das Briefing deiner Schule hat immer Vorrang. | Elsewhere the app says "hat immer Vorrang"; "gilt immer" is inconsistent and weaker | applied |
| s8jd91 | Einheiten: Fuß, beides, Meter | Einheiten: Fuß, Fuß und Meter, Meter | "beides" is unclear read aloud by a screen reader | applied |
| wtsfx1 | Fuß sind die Zahlen der USPA. Meter (≈) sind Umrechnungen, nicht die runden Zahlen, die eine metrische Schule lehrt: folge deiner Schule. | Die Fußwerte sind die Zahlen der USPA. Meter (≈) sind Umrechnungen, nicht die runden Zahlen, die eine Schule mit metrischen Angaben lehrt. Halte dich an deine Schule. | "Fuß sind die Zahlen" is ungrammatical in sense; "folge deiner Schule" is a calque of "follow" | applied |
| 18cl09h | Alles für offline speichern | Alles offline speichern | "für offline" is English word order | applied |
| 104tlsj | Einige Clips sind fehlgeschlagen, online erneut versuchen | Einige Clips konnten nicht gespeichert werden. Versuche es mit Internetverbindung erneut. | "Clips sind fehlgeschlagen" is a calque; clips do not fail, saving does | applied |
| q8xj20 | Lernnotizen für den persönlichen Gebrauch, keine Ausbildung. Die Clips sind kurze Ausschnitte aus öffentlichen Lehrvideos; jeder verlinkt auf sein Original. | Lernnotizen für den persönlichen Gebrauch, kein Ersatz für eine Ausbildung. Die Clips sind kurze Ausschnitte aus öffentlichen Lehrvideos; jeder verlinkt auf sein Original. | "keine Ausbildung" is a safety-adjacent disclaimer; say it does not replace training | applied |
| 1id3a0t | Von hinten heranlaufen | Von hinten zum Flugzeug gehen | "heranlaufen" is vague (to what?); this is the propeller-safety step | applied |
| cicl03 | Die Lehrer führen | Die Lehrer geben den Ablauf vor | "führen" can be read as "lead you by the hand"; it is who decides | applied, changed: "Die Lehrer führen dich zur Tür" (the text says they lead you to the door; "führen" is right) |
| 1dt0ds9 | AAD | AAD (Öffnungsautomat) | Bare abbreviation as a heading, glossary gives the German word | applied |
| dl3wz | Kenne dein Gurtzeug | Lerne dein Gurtzeug kennen | "Kenne dein Gurtzeug" is an English imperative calque | applied |
| 1bvypkk | Drei Ringe | Drei Ringe (Dreiringsystem) | Bare phrase; the glossary term helps a first-timer | applied |
| pqew28 | Ausstieg in die Tür | In die Tür steigen (Ausstieg) | "Ausstieg" is also the exit; first-timer reads "exit into the door" | applied |
| 18o12v8 | Ausstieg an einer Attrappen-Tür geübt | Ausstieg an einer Tür-Attrappe geübt | "Attrappen-Tür" is awkward compound | applied |
| 1yvepw | Drinbleiben, Helm und Gurt an, Schutzhaltung | Im Flugzeug bleiben, Helm und Gurt anbehalten, Schutzhaltung einnehmen | "Drinbleiben" is colloquial, and "brace" lacks its verb on a safety line | applied |
| y5qovb | Kontrollkreis | Kontrollkreis (Horizont, Höhenmesser, Lehrer) | Bare term; the card has no explanation (RU/UK review: same) | applied, changed: order as the app teaches it: "(Höhenmesser, Lehrer, Horizont)" |
| 1c8dyyg | 3 Übungsgriffe | 3 Übungsgriffe (die Griffe antippen) | Bare noun; first-timer does not know "Übungsgriffe" | applied, changed: "3 Übungsgriffe zum Hilfsschirm" (the touches are to the pilot chute, not "the handles") |
| k21wbt | Sofort Silber ziehen, vor allem anderen | Sofort den silbernen Reservegriff ziehen, vor allem anderen | "Silber" is a colour without a noun | applied |
| 1vqynzl | Rot ansehen | Den roten Griff ansehen | Bare colour as an imperative step; EP step label | applied |
| 42fces | Rot greifen | Den roten Griff greifen | Same | applied |
| h0h0l3 | Silber ansehen | Den silbernen Griff ansehen | Same | applied |
| 17k2a14 | Silber greifen | Den silbernen Griff greifen | Same | applied |
| 5dujpm | Rot abziehen und ziehen | Den roten Griff abziehen und ziehen | Same; "abziehen" is the Velcro peel, say what is peeled | applied |
| 1sngn2n | Silber ziehen | Den silbernen Griff ziehen | Same | applied |
| 1kus2m1 | Rot abziehen und stoßen | Den roten Griff abziehen und wegstoßen | Same | applied |
| 1uwtp9 | Hard Deck | Hard Deck: tiefste Höhe zum Trennen | Bare English term as a heading | applied |
| pba0t7 | Entscheidungshöhe | Entscheidungshöhe (bis hierhin handeln) | Bare term; add what it asks of the student | applied, changed: "(bis hierhin entscheiden und handeln)" |
| b96awe | Nichts draußen, oder fast nichts | Kein Schirm draußen, oder fast keiner | "Nichts draußen" is vague (nothing out of what?) | applied, changed: "Nichts kommt aus dem Container, oder fast nichts" (a pilot chute in tow is in this group, so "kein Schirm" was too narrow) |
| x7w7bu | Draußen, aber nicht flugfähig | Offen, aber nicht flugfähig | "Draußen" is the English "out"; German says the canopy is open | applied, changed: "Schirm offen, aber nicht flugfähig" |
| y1b48 | Etwas ist über deinem Kopf draußen. | Über deinem Kopf ist ein Schirm offen. | "Etwas ist draußen" is a calque (English "out") | applied, changed: "Über deinem Kopf hat sich etwas geöffnet." ("ein Schirm ist offen" claims more than the check says) |
| 48y2e | Etwas ist über deinem Kopf draußen | Über deinem Kopf ist ein Schirm offen | Same | applied, changed: same as y1b48 |
| q9gsu5 | Da | Da: ein Schirm ist offen | Bare "Da" as a heading; first-timer does not know it is the first of four checks | not applied: one of the four check words (glossary: da, rechteckig, stabil, steuerbar); the line next to it explains it |
| 1dwp8b7 | Eine Fläche wählen | Ein Landefeld wählen | "Eine Fläche wählen" is vague | applied |
| 1v5g8rl | Schwerer Zug / Griff nicht gefunden | Griff schwer zu ziehen / nicht auffindbar | "Schwerer Zug" is a calque | applied |
| snisaw | Programme der USPA, alle Kategorien | Sprungabläufe (Dive Flows) der USPA, alle Kategorien | "Programme" suggests software | applied |
| 8tq7bu | Metrische Schulzahlen zu bestätigen | Zahlen metrischer Schulen: bei der Schule bestätigen lassen | Heading is a noun pile; say who confirms | applied, "deiner Schule" |
| tpz4lq | Endanflug, Flare, ausgleiten, stehen | Endanflug, Flare, ausgleiten, stehen bleiben | "stehen" alone is ambiguous (stand still?) | applied |
| 17mto0f | Zehen tippen | Zehen antippen | Check the English meaning with an instructor; "tippen" has no object | not applied: needs a DFV instructor to confirm the signal |
## Patterns

- **A wrong word that changes the meaning**: "Right." became "Rechts." (a direction) and "About 5, 4, 3, 2, 1" became "Über ..." (above). Worth a scan of every short German line for false friends.
- **Bare nouns on number cards and headings**: Absprung, Öffnung, Lock-on, Kontrollkreis, Übungsgriffe, Hard Deck, Entscheidungshöhe, Drei Ringe, AAD. Add the object or the one-line meaning, keeping the official word.
- **Colour words without the noun** in the emergency-procedure steps ("Rot ansehen", "Silber ziehen"): say "den roten / silbernen Griff".
- **Unexplained English terms**: Downplane on the safety card has no explanation (the Russian card has one).
- **Calques from English**: "Flare gestochen" (stabbed), "Clips sind fehlgeschlagen" (clips failed), "Schwerer Zug" (hard pull), "Etwas ist draußen" (something is out), "folge deiner Schule" (follow).
- **Fragments that need the next word**: "Du hast aufgehört bei", "Zählen, nicht Höhe:", "verlassen" without object.
- **Bare view and verb labels**: "hinten", "vorn", "ändern", "beides".
- **Inconsistent register**: "Regeln der Schule" and "gilt immer" next to "hat immer Vorrang" and the du-form elsewhere.
- **Ausstieg vs Absprung**: the glossary uses Ausstieg for climb-out, but it also reads as "exit"; add the verb ("in die Tür steigen") where it matters.
- **To check with a DFV instructor**: "Toe taps" (Zehen antippen) is guessed from the English; the meaning of the signal should be confirmed.
