# Fact-check: content claims in AI research run 3

Date: 2026-11-17. Claims from the "Content claims" section of `ext_ai_run3.md` (11 items), split into 26 atomic
claims. Checked against primary sources only: the papers (PMC / journal pages), USPA SIM and BSRs, *Parachutist*,
14 CFR via LII (Cornell), the FAA Part 5 final rule, manufacturer pages (vigil.aero, uptvector.com), British
Skydiving's own pages and FFP's own directives. WebSearch / WebFetch only. App coverage: English strings in
`src/content/part1.ts`–`part4.ts` and `dropzone.ts`. Nothing in the app was edited. Topics already handled in
`ext_chatgpt_1_factcheck.md` and `ext_ai_run2_factcheck.md` (AAD fire heights, Taverniers 2011, Fer 2021, AFF 13,000 ft,
static line 4,000 ft) are referenced, not proposed again.

**Counts: 14 true · 10 partly · 1 false · 1 unverified (26 claims).**

## Table

| # | Claim | Verdict | Source | App coverage | Useful to add? |
|---|-------|---------|--------|--------------|----------------|
| 1a | Dutch 25-year study, KNVvL data, 2.1 M jumps | true | Damhuis et al. 2024, World J Emerg Surg 19:7, PMC10900578 (Abstract, Methods) | partly: part4 `real` chart source "Damhuis et al. 2024, Netherlands 2015–2020, 234 landing injuries" (uses the 5-year subset) | no (already cited) |
| 1b | Injury rate trending up since about 2016 | true (with caveat) | PMC10900578, Results (Fig. 1) | not covered | no |
| 1c | Tunnel time → freefall skill without canopy skill → overconfidence → early downsizing / hook turns → landing injuries | partly | PMC10900578, Discussion ("alternative explanation") | not covered | no (speculation) |
| 2 | A day in the tunnel ≈ 60 skydives of freefall | partly | USPA BSR 2-1 I.2 / ISP Cat A (pull 5,500 ft); operator rule of thumb only (e.g. Aerodium FAQ, Skydive Perris blog) | partly: part4 `tips` "about 10 minutes of wind tunnel before the course lowers the chance of repeating levels" | no |
| 3a | RSL: lanyard from a main riser to the reserve ripcord / pin | true | USPA SIM 4-3 F (uspa.org/SIM/4-3) | covered: part1 `gear` "RSL hooked up"; part4 `ep` "An RSL, if your rig has one, can open the reserve as the main leaves… pull silver anyway. <q-check/>" | yes (resolve the q-check) |
| 3b | Fatalities skew to jumpers who cut away and don't pull the reserve | partly | *Parachutist* "Ask a Rigger: Pull Your Reserve" (parachutist.com/Article/Ask-a-Rigger-Pull-Your-Reserve); *Parachutist* 2017 Fatality Summary | covered: part4 `ep` "pull silver yourself, straight away" | no |
| 4a | MARD (Skyhook): reserve at line stretch in about 0.4–0.5 s | true | uptvector.com/skyhook-overview (bag 0.2 s, line stretch 0.4 s, reserve out 0.5 s); USPA "MARDs—How They Work" (1 May 2018) | partly: part4 `questions` "Is there an RSL or a MARD (Skyhook) on the student rigs?" | small (see tasks) |
| 4b | MARD saves 400–500 ft vs a manual pull | partly | uptvector.com/skyhook-overview; USPA "MARDs—How They Work" | not covered | no |
| 4c | MARD risks with an entangled main / wingsuit / CRW | partly | USPA "MARDs—How They Work"; USPA SIM 4-3 F | not covered | no |
| 5a | Vigil: 20-year service life | true | vigil.aero home page | not covered | no (as in run 1) |
| 5b | Vigil battery replacement at 10 or 12 years | partly | vigil.aero ("Battery replacement between 8 and 12 years") | not covered | no |
| 5c | FAA reserve repack every 180 days (14 CFR 105.43) | true | 14 CFR 105.43(b)(1), law.cornell.edu/cfr/text/14/105.43 | covered: part1 `gear` "every 180 days (FAA rule)" | already covered |
| 6a | USPA wing loading / downsizing = recommendations | true | USPA "Downsizing Best Practices" (uspa.org/downsize); USPA SIM 4-3 / 6 | not covered (part4 `tips` "take a canopy course after AFF") | yes (after AFF) |
| 6b | British Skydiving: binding canopy-size chart by exit weight and jumps ("Form 330i"?) | true | Form 330(i) "Canopy Sizing Chart – Standard" (issue 1, Mar 2021), plus 330(ii) CT2 and 330(iii) CT3–4; Operations Manual Section 6: "only use main canopies of a type and size that is within the guidelines on Form 330 (i–iii)"; 10% tolerance (britishskydiving.org/?p=12534, forms list britishskydiving.org/?p=5925) | not covered | yes (one line) |
| 6c | FFP: binding canopy-size table by weight and jumps | true | FFP Directive Technique n° 48 "Réglementation relative à l'utilisation des voilures", applicable 9 Feb 2024 (ffp.asso.fr/wp-content/uploads/2024/02/Directive-Technique-48-modifiee-08-02-2024.pdf), table p. 2 | not covered | yes (same line) |
| 7a | FAA Part 105 cloud clearances (105.17) | true | 14 CFR 105.17, law.cornell.edu/cfr/text/14/105.17 | not covered | no (pilot / DZ call) |
| 7b | Violations can cost the pilot's certificate, fines, USPA Group Membership | partly | USPA Group Membership Benefits page (pledge to comply with BSRs and FARs); FAA enforcement is general, nothing Part 105-specific found | not covered | no |
| 8a | FAA Part 5 SMS now covers Part 135 and 91.147 operators | true | Final rule, Fed. Reg. 26 Apr 2024 (2024-08669), effective 28 May 2024, compliance by 28 May 2027; 14 CFR 91.147(b)(3) | not covered | no |
| 8b | USPA encouraging SMS at DZs | true | USPA "USPA Adopts Voluntary Safety Management System (SMS) for Group Members", 25 Mar 2024 | not covered | no |
| 9a | AFF from 13,000 ft with two instructors | partly | USPA BSR 2-1 G.4.2.1 (two AFF rating holders until the student reliably deploys; one allowed after set tunnel training); britishskydiving.org/accelerated-free-fall (10,000–15,000 ft) | covered: dropzone.ts "Students exit at 13,000 ft"; part1 "Two instructors on the first categories" | small (tunnel exception) |
| 9b | Static line from about 3,500 ft | partly | USPA ISP Cat A ("IAD and static line: 4,000 feet"); USPA BSR 2-1 I.2 (students: container open by 3,000 ft AGL); britishskydiving.org/static-line ("around 4,000 feet") | not covered | no (as in run 1) |
| 10a | Stress / cortisol restricts working memory | partly | Shields, Sazma & Yonelinas 2016, Neurosci Biobehav Rev 68:651, PMID 27371161, PMC5003767 | partly: part2 "Overloaded or lost? Default to: altitude, arch, pull at 5,500 ft" | already proposed (run 1, Taverniers) |
| 10b | "No pull / low pull" is a persistent fatality category | true | USPA 2020 Fatality Summary (no pull 5.2% of US deaths 2001–2020), *Parachutist* | covered: part4 `real` "No pull or low pull… Altimeter first, always" | already covered |
| 10c | NTSB taxonomy cites human error / incorrect procedures as principal causes (of skydiving deaths) | false | NTSB SIR-08/01 "Safety of Parachute Jump Operations" (2008), ntsb.gov/safety/safety-studies/Pages/SIR0801.aspx | not covered | no |
| 11a | Military T-10 → T-11 cut ground-impact injuries (slower descent, fewer oscillations) | true | Knapik et al. 2011, Aviat Space Environ Med 82:935–40, doi:10.3357/ASEM.3082.2011; army.mil/article/120614 (24 Feb 2014); JSOM 19(4) Winter 2019 p. 112 | not covered | no (round canopies) |
| 11b | A failed PLF is the leading cause of ankle, knee and spine injuries | unverified | none found that ranks "failed PLF" as a cause; sources rank the landing phase | covered: part3 `plf` "Even an imperfect PLF makes injuries less serious" | no |

## Notes per claim

1. **Damhuis 2024** ("The ground is the limit", World J Emerg Surg 19:7, PMC10900578).
   - **1a.** 1995–2020: 2,096,866 jumps, 2,715 incidents, 1,503 injuries, 26 deaths. That is 72 injuries per 100,000 jumps.
   - **1b.** The text says incidence fell until 2016 and has risen since. There are no yearly numbers in the text, only a figure. The authors partly blame more reporting and the COVID drop in jump numbers.
   - **1c.** The tunnel point appears only in the Discussion, as an "alternative explanation" backed by a 2016 honours thesis. Tunnel skills "could lead to an overestimation of canopy flying skills". Downsizing and wing loading are not mentioned. Hook turns appear only as background from older studies.
   - Correction: "a hypothesis the authors raise, not a finding; nothing on downsizing".
2. **Tunnel ≈ 60 jumps.** There is no primary source. One tunnel minute ≈ one jump's freefall is an operator rule of thumb (about 60 s from 12,500–13,500 ft). An AFF student jump from 13,000 ft to a 5,500 ft pull gives about 45 s. "A day" is not a defined unit. The tunnel also teaches nothing about exits, deployment, canopy or landing.
   - Correction: "about one jump's freefall per tunnel minute; 60 minutes ≈ 60–80 student freefalls, freefall only".
3. **RSL.**
   - **3a.** SIM 4-3 F: the lanyard runs from a main riser to the reserve ripcord cable. RSL use is "mandatory for students". Jumpers "must manually pull the reserve ripcord immediately after a cutaway".
   - **3b.** *Parachutist* ("Pull Your Reserve") says near-universal RSL use "left the cutaway/no-pull fatality mostly behind us". So the skew was historical; today such deaths are mostly jumpers without a connected RSL. An RSL does not help a pilot chute in tow.
   - Correction: "was a major category before RSLs; now rare, mostly without an RSL".
4. **MARD / Skyhook.**
   - **4a.** UPT lists bag extraction at 0.2 s, line stretch at 0.4 s and reserve out at 0.5 s. True.
   - **4b.** UPT's "400–500 ft" is how far you fall trying to get stable after a spinning cutaway before pulling by hand. It is not a general saving. USPA (2018) estimates a MARD saves about 50–100 ft over a plain RSL.
   - **4c.** USPA: canopy-formation (CRW) jumpers usually disconnect their RSL/MARD, and some flocking jumpers do too. A MARD can hinder deployment if the reserve is pulled while the main is still attached. Wingsuit-specific risk was not found in these sources.
5. **Vigil and repack.**
   - **5a, 5b.** vigil.aero: "20-year service life, with no scheduled maintenance", and battery replacement "between 8 and 12 years". So the 10 or 12 years in the claim is too narrow.
   - **5c.** 14 CFR 105.43(b)(1): the reserve is packed within 180 days if canopy, lines and harness are all synthetic. The limit is 60 days with any silk or natural fibre.
6. **Canopy size rules.**
   - **6a. USPA.** "Downsizing Best Practices" is a checklist: one size at a time, change planform or size but not both, and "competency/currency are more important than jump numbers". It sets no numeric limits.
   - **6b. British Skydiving.** The form number is right: Form 330(i) "Canopy Sizing Chart – Standard" (issue 1, March 2021), with 330(ii) for CT2 and 330(iii) for CT3–CT4. It is binding through Operations Manual Section 6. You may go up to 10% smaller than the chart, and the Chief Instructor can grant exceptions. Inputs: licence, exit weight in kg and jump numbers.
   - **6c. FFP.** The rule is not a "manuel" or a "tableau de surface de voile". It is Directive Technique n° 48, "Réglementation relative à l'utilisation des voilures" (applicable 9 Feb 2024):
     - It sets a minimum main canopy size by **naked** weight (60–110 kg, plus 10 kg for kit) and jump band (0–99 jumps up to 1,400–1,600).
     - It applies "dès le premier saut". Example: 60 kg with 0–99 jumps gives a 175 ft² minimum.
     - One "aménagement" of up to −11% is allowed per step. Every change of canopy is signed off in the logbook.
7. **FAA Part 105.**
   - **7a.** 105.17: no parachute operation into or through a cloud. Below 10,000 ft MSL the limits are 3 sm visibility and 500 ft below / 1,000 ft above / 2,000 ft horizontal. At or above 10,000 ft MSL they are 5 sm and 1,000 / 1,000 / 1 sm. The rule binds both the jumper and the pilot in command.
   - **7b.** Group Members pledge to follow the BSRs and FARs (USPA Group Membership page). Pilot certificate action and civil penalties are the FAA's general enforcement tools. No source tied them to 105.17 cases, so the claim is plausible but generic.
8. **SMS.**
   - **8a.** The final rule (26 Apr 2024) extends Part 5 to Part 135 operators and to §91.147 air-tour LOA holders, with compliance due 28 May 2027. But jump flights are flown under the §119.1(e)(6) parachute-operations exception, not under §91.147. So Part 5 does not normally apply to a DZ's jump plane. Don't imply that DZs fall under it.
   - **8b.** USPA adopted a voluntary SMS template for Group Members on 25 Mar 2024.
9. **AFF and static-line altitudes.**
   - **9a.** BSR 2-1 G.4.2.1: two AFF rating holders "until demonstrating the ability to reliably deploy". After set wind-tunnel training, a student may jump with one. No exit altitude is set (see run 1, #19).
   - **9b.** See run 1, #20. USPA ISP gives 4,000 ft for static line / IAD; British Skydiving says "around 4,000 feet". The BSR minimum container opening for students is 3,000 ft AGL (2-1 I.2).
10. **Stress and fatality categories.**
    - **10a.** The Shields 2016 meta-analysis: acute stress impairs working memory and cognitive flexibility. The cortisol link is less direct than "cortisol restricts" suggests. Run 1 already proposed the student-facing version (Taverniers 2011).
    - **10b.** No pull / low pull appears in USPA summaries every year (5.2% of 2001–2020 deaths).
    - **10c.** The NTSB does not investigate skydiver deaths. Its only study, SIR-08/01 (32 jump-plane accidents, 1980–2008, 172 killed), blamed aircraft maintenance, FAA oversight and pilot performance, not jumper error.
11. **Military round canopies.**
    - **11a.** Knapik 2011 (Airborne School): 2.9 vs 1.6 injuries per 1,000 jumps (T-10 vs T-11). In operational units: 9.1 vs 5.2 per 1,000, 43% lower. T-11 descent is 19 ft/s vs 22 ft/s, and its oscillations are "highly dampened" (JSOM 2019). Those are the descent and oscillation figures quoted; the claim is true.
    - **11b.** The sources reached say most injuries happen at landing and that PLF training helped historically, but none ranks "failed PLF" as the leading cause. Military injuries are often to the ankle and head. Keep the student message as it is in part3: a PLF, even an imperfect one, reduces injury.

## Content tasks to propose

1. **part4 `ep`, the RSL line (all 4 languages):** replace "if your rig has one … <q-check/>" with "Student rigs must have one (USPA SIM 4-3 F). It's a backup: pull silver anyway, straight away." Source: uspa.org/SIM/4-3, section F.
2. **part4 `tips`, next to "take a canopy course after AFF":** add one line on downsizing:
   - USPA advice: one size at a time, change size or type but not both.
   - The UK and France set binding minimum canopy sizes by weight and jump numbers (British Skydiving Form 330(i); FFP DT 48).
   - Sources: uspa.org/downsize; britishskydiving.org/?p=12534; FFP DT 48 (9 Feb 2024).
3. **Optional, part1 `gear` or the part4 `ep` RSL line:** "Many student rigs add a MARD (e.g. Skyhook): after a cutaway the reserve is out in about half a second, but you still pull silver." Source: uptvector.com/skyhook-overview; USPA "MARDs—How They Work" (2018).
4. **Optional, part1 "Two instructors on the first categories":** add "USPA lets a student who has done the set wind-tunnel training jump with one AFF instructor; ask your school." Source: USPA BSR 2-1 G.4.2.1.

Not proposed:
- The Dutch tunnel hypothesis (speculative).
- Tunnel ≈ 60 jumps (no source).
- Vigil life, FAA cloud clearances, Part 5 SMS (not student-relevant, or not applicable to DZs).
- The NTSB claim (false).
- T-11 (round canopies).
- Stress and working memory (already proposed in run 1).
