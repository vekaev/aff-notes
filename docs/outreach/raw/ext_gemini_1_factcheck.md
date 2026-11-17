# Fact-check: skydiving claims in Gemini run 1 (turn 6 table + research notes)

Checked 2026-11-17. Claims come from the `notes` column of `ext_gemini_1.unverified.csv.txt` and from Gemini's
research-progress notes (`ext_gemini_1.md`). Sources: USPA's 2023 Fatality Summary in *Parachutist*, Vigil's own RMA
page, and the papers' records in Europe PMC (PubMed and PMC refuse automated fetches). Claims already checked in
earlier runs are marked with that file. Nothing in the app was edited.

**Counts: 10 true · 7 partly · 2 false · 1 unverified (20 claims).**

| # | Claim (Gemini) | Verdict | Source | App coverage | Useful? |
|---|---|---|---|---|---|
| 1 | "High-experience jumpers now account for over 70% of fatal incidents" | partly | USPA 2023 Fatality Summary (parachutist.com articleid 9378): 7 of 10 deaths had 700+ jumps (exactly 70 %, one year; "high-experience" not defined) | covered: part4 low-turn stats | no |
| 2 | Deaths from no-pulls and equipment fell thanks to AADs | true | same: "widespread use of automatic activation devices and reserve static lines ... have nearly eliminated fatalities in categories that used to contribute significantly"; "Decades ago, most skydiving fatalities came from no/low pulls or equipment problems" | partly: part4 "46% of US deaths in 2001–2020 came from landing problems" | yes (one line, see task) |
| 3 | Deaths now come from landings under high wing-load canopies, not freefall equipment | partly | same: 2023 landing problems 6 of 10 (4 intentional low turns); wing loading not given | covered: part4 landing and low-turn stats | no |
| 4 | Procedural errors and landing misjudgments far outnumber equipment failures | true | same: equipment 1 of 10 in 2023 | covered | no |
| 5 | Jump stress "enhances executive functioning and attentional control immediately post-flight" | partly | Jamro et al. 2025 (already checked: `ext_chatgpt_1_factcheck.md` claims 3–4: sustained attention after the jump partly true, cognitive flexibility claim false) | not covered | no |
| 6 | Edouard: 10-year prospective study of 6.2 M jumps in France | true | Fer, Guiavarch, Edouard 2021 (`ext_ai_run2_factcheck.md` claim 2) | task already in plan | (done earlier) |
| 7 | Damhuis: 25-year study of 2.1 M jumps in the Netherlands | true | Damhuis et al. 2024 (`ext_ai_run3_factcheck.md` claim 1a) | covered | no |
| 8 | Rauer: systematic review of civilian skydiving injuries and fatalities | true | Barthel et al. 2023, Rauer corresponding (`ext_ai_run2_factcheck.md`) | covered (part4 chart source) | no |
| 9 | Westman: ACROPOSE neck-load study | true | Westman & Äng 2016, BMJ Open Sport Exerc Med, PMID 27900175 (study protocol) | not covered | no |
| 10 | Peyron: "forensic human error in skydiving fatalities study" | **false** | PMID 29567004 is Peyron, Margueritte, Baccino 2018, "Suicide in parachuting: a case report and review of the literature" | n/a | no |
| 11 | Gordon C. S. Smith: "parachuting injury literature author" | **false** | PMID 14684649 is Smith & Pell 2003, BMJ, the satirical "Parachute use to prevent death ... systematic review of randomised controlled trials" | n/a | no (row dropped) |
| 12 | Ejnisman: skydiving orthopaedic injury research | true | Ejnisman et al. 2011, scapular fractures captured on video during a skydive, PMID 22700612 | not covered | no |
| 13 | Piers Barry: "skydiving trauma case research" | partly | Newcomb ... Barry 2022, "Indoor Skydiving: An Emerging Cause of Anterior Shoulder Dislocations", PMC8929224 (tunnel, not sky) | not covered | maybe (read first, see task) |
| 14 | Jacoby: "Cardiac/HCM skydiving risk study" | partly | Papoutsidakis ... Jacoby 2019, PMID 31152873: survey of thrill-seeking activities in HCM patients, not skydiving-specific | n/a | no |
| 15 | Lizhen Wang: parachute landing lower-extremity injury biomechanics | partly | Jiang ... Wang 2020, PMID 33261723: joint kinematics and kinetics in landings with backpack and knee brace (military); measures loads, not injuries | not covered | no |
| 16 | McNeil: psychological skydiving experiences | true | McNeil et al. 2024, PMID 38663571 (jump experience, risk perception, anxiety, self-confidence) | not covered | no |
| 17 | Iowa State: autonomic stress reactivity to skydiving | true | White ... Shirtcliff 2019, PMID 30836116 (testosterone reactivity modulated by autonomic activation) | not covered | no |
| 18 | Downward Trend / Rhomech are Vigil's "official service hubs" | partly | vigil.aero/rma-instructions: they are Vigil's shipping partners for Australia and the UK; service is in Belgium | n/a | no |
| 19 | Vigil America is the Americas hub | true | same page: Vigil America, DeLand, for the US, Canada, Central and South America | n/a | no |
| 20 | Burble serves "108 US and 29 European DZs"; Skydiving Hubs lists "241 DZs across 47 states"; IBA lists "163 tunnels" | unverified | not checked: Burble's terms forbid scraping, skydivinghubs is behind a bot check (plan 6b), IBA list fetch blocked (6h) | n/a | no |

Not checked (not safety content): tunnel sizes, speeds and opening years; audience sizes; "7,100+ skydives".

## Content tasks (for `docs/PLAN.md`, not applied)
1. part4 `real`: one line on why the causes changed: "AADs and reserve static lines have nearly eliminated deaths
   from no pulls and equipment; most US deaths now happen under an open canopy, at landing" (USPA 2023 Fatality
   Summary, *Parachutist*, parachutist.com articleid 9378: 10 deaths, 6 landing, 1 equipment).
2. Optional, tunnel: Newcomb et al. 2022 (PMC8929224) reports anterior shoulder dislocations from indoor skydiving.
   Read the full text first (numbers, mechanism); if useful, a tunnel-safety tip next to the tunnel content, marked
   check.
