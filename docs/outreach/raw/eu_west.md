# eu_west: dropzones, schools, tunnels and federations in DE, AT, CH, FR, BE, NL, LU, ES, PT, IT

CSV: `eu_west.csv` has 458 rows, and 412 of them have an email. It was merged from four per-country parts in `parts_eu_west/`.
Nobody was contacted, no form was submitted and no email was guessed.

| Country | Rows | With email | Official list vs got |
|---|---|---|---|
| Germany | 113 | 109 | DFV lists 98 clubs, got all 98, plus 5 not on the list, 8 tunnels, DFV and DAeC |
| France | 173 | 160 | FFP lists 165 structures (49 approved schools), got 158; 7 left out on purpose (paragliding only, Monaco) |
| Austria | 36 | 36 | ÖAeC parachuting section lists 33, got all; 8 of them are non-school clubs, typed "other" |
| Switzerland | 28 | 27 | Swiss Skydive lists about 24 schools and clubs, got all, plus Skydive Interlaken and the Windwerk tunnel |
| Belgium | 10 | 10 | FWCP (Wallonia) lists 3, got all; Flanders comes only from the operators' own sites (no federation site found) |
| Netherlands | 10 | 8 | KNVvL lists 8, got all (the KNVvL email is hidden; it has a contact form) |
| Luxembourg | 2 | 2 | FAL plus the only dropzone (Noertrange) |
| Spain | 23 | 13 | RFAE publishes no centre list; built from DZSpotter. Several sites are dead or now gambling domains |
| Portugal | 29 | 24 | FPPQ lists about 27, got all |
| Italy | 34 | 23 | ENAC's list of authorised schools (xlsx) has 33, got 32; 8 have no working site |

Types: 263 dropzone, 91 community (mostly French clubs with no school of their own, many military), 58 association
(federations, plus French regional leagues and departmental committees), 24 tunnel, 11 coach_school, 11 other.
Confidence: 198 high (email on their own site), 221 medium (directory only), 39 low (no contact or no working site).

## Best sources
- Germany: dfv.aero "Plätze Vereine" alphabetical list and its detail pages.
- France: ffp.asso.fr/ou-pratiquer/liste-de-toutes-les-structures-ffp/ (holds almost all French rows).
- Austria: the aeroclub.at club finder data. Switzerland: home.swissskydive.org/schulen-clubs.
- Netherlands: knvvl.nl/parachutespringen. Belgium: fwcp.be. Portugal: fppq.pt/saltar/ace.html and dz.html.
- Italy: ENAC "Elenco Scuole di Paracadutismo" spreadsheet. Spain: DZSpotter.

## Gaps
- The shared web-search limit ran out for all four helpers. Dropzones outside the federation lists may be missing:
  - Germany: schools run under the DAeC rather than the DFV.
  - France: commercial centres that are not FFP members.
  - Belgium and Switzerland: a few commercial operators.
  - Spain: Spain is the least complete country.
- No separate Belgian national or Flemish parachuting federation site was found. FIPS (Italy) was not found online; Aero Club d'Italia is used instead.
- Many directory emails are club officers' personal addresses (gmail, gmx, web.de, bluewin), published as the club's
  contact. Each is kept as published and marked in that row's notes.
- Duplicates by operator: several in Germany (Nuggets, Albatros, Soest, Tandem-Skydive); check before mailing.
- languages: filled for 450 of 458 rows.

## Summary
- Rows written: 458 (10 countries).
- Rows with email: 412.
- Completeness: near-full against each official list (DFV, FFP, ÖAeC, Swiss Skydive, KNVvL, FPPQ, ENAC); weaker for Spain, Flanders and non-federation commercial dropzones.
- Best single sources: the FFP structure list (France) and the DFV list (Germany), together about 60% of rows.
- Next: a rerun with a fresh search budget for Spain, Flanders and non-member commercial dropzones.
