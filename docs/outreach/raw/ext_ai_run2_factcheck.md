# Fact-check: ext_ai_run2.md (safety and training numbers)

Checked 2026-11-16 against the papers (PMC full text, Europe PMC abstract record) and the FFP's own pages. Read-only on the app.

**Counts: 6 true · 2 partly · 0 false · 1 unverified** (9 claims)

| # | Claim (as in the report) | Verdict | Source | App coverage | Cite in app? |
|---|---|---|---|---|---|
| 1a | "Rauer et al." review covered ">62 million jumps" | **partly** | PMC9859333, Abstract vs Section 3 (Results, first paragraph) | Paper already linked as "Barthel 2023 review" in part4 `real` sources and body-part chart | No for the 62 M figure |
| 1b | Average injury rate 0.044 % | **true** (as written in the Abstract) | PMC9859333, Abstract and Section 3 | Not in app | No (see notes) |
| 1c | Average fatality rate 0.0011 % | **true** (as written in the Abstract) | PMC9859333, Abstract and Section 3 | Not in app | No (see notes) |
| 1d | Injuries most commonly at landing | **true** | PMC9859333, Abstract; Section 3.2 (Westman 87.9 % flight/landing); Discussion (French study 83.3 % landing) | Yes: part4 `real`, stat "73–88% under canopy and at landing" | Already cited; fine |
| 2 | Fer / Guiavarch / Edouard 2021, FFP 2010–2019: 35 deaths, 3,015 injuries, ~6.2 M jumps (519,620 skydivers; 0.57 deaths and 49 injuries per 100,000 jumps) | **true** | Europe PMC record for PMID 33257175, Abstract | Partly: part4 `real` stat "~6x students… (France 2010–19, 6.2 M jumps)" uses this paper, but the paper is **not linked** in the sources line | **Yes**: add link; add the per-100,000 rates |
| 3 | FFP: 55,950 licensees in 2024 "per FFP 2025 dossier" | **unverified** | The public excerpt of the FFP *Dossier sportif 2025* (paramag.fr) has no licence count; FFP April 2024 release says 64,701 licensees in 2022 | Not in app | No (outreach data, not student content) |
| 4 | FFP 2025 dossier: 152 clubs, 57 schools, 10 tunnels | **partly** | FFP release 24 Apr 2024 (via paperblog.fr): 152 clubs, **56** écoles, **7** souffleries agréées; 57 / 10 not found in the dossier excerpt | Not in app | No |
| 5 | FAI: "over 100 members from 91 nations" (Jan 2026) | **true** (Olympedia says this) | olympedia.org/organizations/34 | Not in app | No |
| 6 | SkydivingFatalities.info: searchable fatality database with "lessons" and links to Dropzone.com reports | **true** as a description; operator **unverified** | Indexed search pages of skydivingfatalities.info (e.g. `search.asp?Category=LAND`), "out of a total of 833 incidents" | Not in app | No as a fact source (see notes) |

## Full citations

- **Claim 1:** Barthel C, Halvachizadeh S, Gamble JG, Pape H-C, Rauer T. *Recreational Skydiving—Really That Dangerous? A Systematic Review.* Int J Environ Res Public Health. 2023;20(2):1254. doi:10.3390/ijerph20021254. PMID 36674008, PMCID PMC9859333. https://pmc.ncbi.nlm.nih.gov/articles/PMC9859333/
- **Claim 2:** Fer C, Guiavarch M, Edouard P. *Epidemiology of skydiving-related deaths and injuries: A 10-years prospective study of 6.2 million jumps between 2010 and 2019 in France.* J Sci Med Sport. 2021;24(5):448–453. doi:10.1016/j.jsams.2020.11.002. PMID 33257175. Epub 13 Nov 2020.
- **Claim 4:** FFP press release, 24 Apr 2024 ("Cet été, vole vers ton brevet B"), mirrored at https://www.paperblog.fr/10132813/
- **Claim 3:** FFP *Dossier sportif 2025* (excerpt), https://paramag.fr/wp-content/uploads/2025/10/820-Dossier-sportif-FFParachutisme-2025extrait.pdf
- **Claim 5:** https://www.olympedia.org/organizations/34

## Notes

- **1a, wrong name and a shaky number.** Rauer is the last and corresponding author. The paper is Barthel et al. 2023, which is how the app already names it. The Abstract says "more than 62 million jumps", but Results, Section 3, says nearly ten million jumps were reviewed (about 610,000 a year). The paper contradicts itself, so the 62 M figure shouldn't be repeated.
- **1b / 1c, why not to cite them.** The 0.044 % and 0.0011 % figures are averages over very different sources: 10 studies plus 34 federation reports. 0.0011 % works out to 1.1 deaths per 100,000 jumps. That is about twice the French prospective figure (0.57 per 100,000) and well above recent USPA years. A single prospective national dataset (claim 2) is the cleaner number for a student app. In the review, "landing" is often grouped with "parachute flight" (Westman 87.9 % is flight + landing), which is how the app already words it.
- **2, all numbers match.** The Abstract also gives: students vs experienced, injury rate ratio 6.1 (95 % CI 5.7–6.6), which backs the app's "~6×"; tandem had no deaths and an injury rate ratio of 0.07; men vs women, death rate ratio 4.8; 83.3 % of injuries happened at landing. The report's "JSMS" means *J Sci Med Sport* (JSAMS).
- **3 / 4, outreach only.** These are federation counts, useful for the contact list but not for the app. Correct the FFP row to: 152 clubs, 56 écoles, 7 approved tunnels (April 2024); 64,701 licensees in 2022. Neither 55,950 nor 57 / 10 could be confirmed.
- **6, SkydivingFatalities.info.** The site was unreachable from here (connection reset), so its operator and last update are unverified. Indexed pages show one entry per death with "Description" and "Lessons" fields, about 833 incidents, and links to Dropzone.com fatality threads. Those threads are community reports, not official investigations. The lessons are unsigned editorial summaries. They mostly agree with the USPA SIM (no low turns, a downwind landing beats a low turn, the value of AADs and RSLs), but they aren't a primary source and seem not to be kept current. Use them as background reading at most. For facts, use the USPA annual fatality and non-fatal summaries (Parachutist) and the FAI ISC annual safety report.
- **Also checked in the app.** part4 `real` ("How people actually get hurt") already covers: the landing share (73–88 %), students about 6× more injured, 41 % of student injuries on the first two jumps, US deaths 2001–2020 from landing problems, and charts from Westman 2007, Forrester 2023 (USPA reports), Damhuis 2024 and USPA 2024. Its sources line links Barthel 2023 but not Fer 2021. No overall injury or death rate appears anywhere in part1–4 or dropzone.ts.

## Content tasks to propose

1. part4 `real`, sources line (all 4 languages): add a link "Fer 2021: France 2010–19", doi:10.1016/j.jsams.2020.11.002. The "~6×" stat already depends on it (source: Fer et al. 2021 Abstract, RR 6.1).
2. part4 `real`, stats: add a "how rare" stat, "49 injuries and 0.57 deaths per 100,000 jumps (France 2010–19, 6.2 M jumps; no tandem deaths)" (source: Fer et al. 2021 Abstract).
3. part4 `real`, "73–88%" stat: optionally name the two anchors in the source note, Westman 2007 87.9 % (flight + landing) and France 83.3 % (landing) (sources: Barthel 2023 Section 3.2 and Discussion; Fer 2021 Abstract).
4. Don't add Barthel 2023's ">62 M jumps / 0.044 % / 0.0011 %" headline. The paper contradicts itself (Abstract vs Results, Section 3), and the rates are pooled from mixed sources (PMC9859333).
5. Optional, part4 `real`: a US line, "9 deaths in about 3.88 M jumps in 2024, a record low". Check it first against the USPA 2024 fatality summary in Parachutist; here it was seen only in a search summary.
6. Don't cite SkydivingFatalities.info as a source. If a "learn from accidents" pointer is wanted, link the USPA fatality summaries and the FAI ISC safety report instead (see notes).
7. Outreach rows, not the app: rename the Rauer row's paper to "Barthel et al. 2023 (corresponding author)", and correct the FFP row to 152 clubs / 56 écoles / 7 tunnels (Apr 2024) and 64,701 licensees (2022). Mark 55,950 as unverified.
