# Fact-check: content claims in ChatGPT deep-research run 1

Checked 2026-11-16. Source of the claims: the condensed "content" bullets at the end of `ext_chatgpt_1.md` (A–D),
split into 22 atomic claims. Each was checked against primary sources only: USPA SIM (BSRs 2-1, SIM 4-1, ISP
chapter 1 and Category A), USPA fatality summaries in *Parachutist*, Airtec CYPRES and Vigil manufacturer pages and
manuals, British Skydiving's own site and helpdesk, and the papers themselves (abstracts via PubMed / Europe PMC,
full text on PMC where open). WebSearch / WebFetch only. App coverage was checked by grepping the English strings in
`src/content/part1.ts`–`part4.ts` and `dropzone.ts`. Nothing in the app was edited.

**Counts: 7 true · 12 partly · 1 false · 2 unverified (22 claims).**

Mars M2 was not checked: the report names no M2-specific claim.

## Table

| # | Claim | Verdict | Source | App coverage | Useful to add? |
|---|-------|---------|--------|--------------|----------------|
| 1 | Stress in the first jumps shrinks working memory | partly | Taverniers et al. 2011, Cogn Affect Behav Neurosci, PMID 21607782 | partly: part2 "Overloaded or lost? Default to: altitude, arch, pull at 5,500 ft"; part4 "students still freeze" | yes (one-line "why") |
| 2 | "No pull / low pull" ranked 2nd among fatality causes in a Swedish study | unverified | Westman & Björnstig 2005, Accid Anal Prev 37:1040, PMID 16039597 (abstract) | not covered | no |
| 3 | Military cadets show reduced cognitive flexibility before the first jump | false | Jamro et al. 2025, Brain Sci 15(1):85, PMC11763684 (Results, Discussion) | not covered | no |
| 4 | Cadets show better sustained attention after the jump | partly | Jamro et al. 2025, same | not covered | no |
| 5 | So rehearse emergency procedures repeatedly before boarding | partly | USPA SIM 4-1 B "Prevention and Preparation"; not shown by the cited studies | covered: part4 "Every jump morning: dive flow out loud, handle touches with your eyes closed" | already covered |
| 6 | Fatality causes shifted from malfunctions / no-pulls to canopy flight and landing | true | USPA 2020 Fatality Summary (2001–2020 averages); Westman & Björnstig 2005 abstract | covered: part4 "46% of US deaths in 2001–2020 came from landing problems" | already covered |
| 7 | Hook-turn (low-turn) deaths rose from the mid-1990s | partly | Westman & Björnstig 2005 abstract ("during the 1990s") | covered indirectly (part4 low-turn stats, part3 "What a low turn is") | no |
| 8 | Hook-turn deaths are mostly experienced jumpers | partly | USPA 2020 Fatality Summary; USPA 2023 Fatality Summary | covered: part4 "about half of them low turns, more often deliberate than accidental" | already covered |
| 9 | Student injuries are mostly lower limb and spine | true | Westman & Björnstig 2007, Br J Sports Med, PMC2465315; Barthel 2023 review PMC9859333 | covered: part4 bars "Legs 51 / Arms 19 / Spine 18" | already covered |
| 10 | Causes: flare timing, pattern, PLF | true | Damhuis et al. 2024, PMC10900578; USPA 2024 Non-Fatal Incident Summary Part 1 | covered: part4 "Wrong flare 31%", "22% of landing incidents without a turn: flaring too early, too late or not at all" | already covered |
| 11 | Landing is where most injuries happen | true | Westman & Björnstig 2007, PMC2465315 | covered: part4 bar "Canopy and landing 87.9" | already covered |
| 12 | AADs fire "typically 750–1,000 ft depending on student or expert setting" | partly | cypres.aero/?p=3130 (Student CYPRES 2); Vigil II manual v2.0.6 (paraorg.dfv.aero/uploads/manual_aad_vigil_2.0.6_001.pdf) | partly: part1 "On a student unit, around 750–1,000 ft <q-check/>" | yes (resolve the q-check) |
| 13 | Vigil: 20-year service life, with battery replacement | true | vigil.aero home page ("20-year service life, with no scheduled maintenance"; battery 8–12 years) | not covered | no |
| 14 | CYPRES needs periodic factory maintenance | partly | cypres.aero/services/maintenance and cypres.aero/?p=7225 | not covered | no |
| 15 | An AAD is a last resort, not a plan | true | USPA ISP Category A (uspa.org/skydiveschool/A): "Both are only back-up devices" | covered: part2 "The AAD is not a plan"; part4 "The AAD fires only very low… far too late to wait for" | already covered |
| 16 | An AAD fire can still give two canopies out, or too little altitude | true | *Parachutist* Safety Check, Jan 2026 (articleid 9398); USPA SIM 4-1 ("consider the operating range of the AAD"; "Two Canopies Out") | partly: part4 two-canopies section (biplane / side by side / downplane) and part1 AAD card; the link AAD fire → two out is not made | yes |
| 17 | AFF has 8 levels | partly | britishskydiving.org/accelerated-free-fall ("8 level course"); USPA SIM ch. 1 ISP (categories A–H) | partly: dropzone.ts lists USPA categories A–E | no |
| 18 | Ground school is 6–8 hours | unverified | USPA BSR 2-1.G.3 (content only, no length); British Skydiving AFF page (no hours) | not covered | no |
| 19 | First AFF jump from 13,000 ft with two instructors | partly | USPA ISP Cat A (inside + outside instructor, pull 5,500 ft, no exit altitude); britishskydiving.org/accelerated-free-fall ("10,000 to 15,000 feet", "two highly specialised instructors") | covered: dropzone.ts "Students exit at 13,000 ft"; part1 "Two instructors on the first categories" | already covered |
| 20 | Static line from about 3,500 ft | partly | USPA ISP Cat A ("IAD and static line: 4,000 feet", "2 jumps from 4,000'"); britishskydiving.org/static-line ("around 4,000 feet") | not covered | no |
| 21 | British Skydiving medical declaration forms 115A/B | partly | helpdesk.britishskydiving.org "minimum requirements … age, health, consent" | not covered | no |
| 22 | Age rules set by federations (USPA 18, British Skydiving 16) | partly | USPA SIM 2-1 D (uspa.org/SIM/2); helpdesk.britishskydiving.org (same page as 21) | not covered | no |

## Notes per claim

1. **Working memory.** No paper measured "working memory" in first-jump students. The nearest is Taverniers 2011:
   61 cadets, first parachute jump. Visuo-spatial path learning was significantly impaired after the jump stress, and
   the gap grew as the task got more complex. Correction: "first-jump stress impairs learning of complex new tasks"
   rather than "shrinks working memory".
2. **Swedish ranking.** Westman & Björnstig 2005 (37 Swedish deaths, 1964–2003) says student deaths were "often caused
   by instability in freefall leading to unstable parachute activation with subsequent line entanglement, or parachute
   activation failure". The abstract gives no ranking and no "second place". The full text was not reachable, so
   this stays unverified. Correction: say what the abstract says, without the rank.
3. **Cognitive flexibility before the jump.** Jamro 2025 cadets were not on a first jump: they had made 5 jumps two
   years earlier. The jump studied was their first on a steerable canopy. Before the jump there was no significant
   group difference (CTT-2, p = 0.106). Correction: no such pre-jump effect was found, and it was not a first jump.
4. **Sustained attention after.** Trail-test times in the jump group improved after the jump (CTT-1 p = 0.010,
   CTT-2 p = 0.018), and the abstract calls this better "sustained and alternating attention". There was no
   significant difference from controls after the jump, and no group-by-time test. Correction: a within-group
   improvement in a small study, not a first jump. Weak evidence.
5. **Rehearsal.** Practising emergency procedures is standard (USPA SIM 4-1 B, Prevention and Preparation). But
   neither cadet study tested rehearsal, so it doesn't follow from them. The app already says it.
6. **Shift to landing deaths.** USPA 2020 summary, 2001–2020 averages: landing problems 45.8%, intentional low turns
   13.7%, unintentional low turns 8.8%, no pull 5.2%. Westman 2005 notes "a drastic worldwide increase in fatal landing
   incidents with fast wing parachutes during the 1990s". True.
7. **Mid-1990s.** The primary source says "during the 1990s". "Mid-1990s" is not pinned down. Correction: "since
   the 1990s".
8. **Experienced jumpers.** True for intentional low turns. USPA summaries: the 2011 intentional high-performance
   landing deaths were "all … relatively experienced", and the 2023 ones each "had previous experience with
   high-performance landings". Unintentional low turns (8.8% over 20 years) also kill less experienced jumpers.
   Correction: "intentional hook turns mostly kill experienced jumpers; accidental low turns hit novices too".
9. **Body regions.** Westman & Björnstig 2007: legs 51%, spine 18% (as the app already shows). True.
10. **Landing errors.** Damhuis 2024: wrong flare 31%, bad landing position 19% of 234 landing injuries. USPA 2024
    non-fatal: flare errors were 22% of landing incidents without a turn. "Pattern" is supported only indirectly
    (terrain / obstacle 30%). True as a summary.
11. **Landing = most injuries.** Westman 2007: 87.9% of injuries happened under canopy or at landing. True.
12. **AAD altitudes.** Model-specific:
    - CYPRES 2 Expert: about 750 ft at more than 78 mph (35 m/s).
    - CYPRES 2 Student: about 750 ft in freefall, and also about 1,000 ft when the descent is slower than freefall
      but faster than 29 mph (13 m/s), such as under a partial canopy (cypres.aero/?p=3130). Speeds are from the
      retailer and manual tables.
    - Vigil II: Pro 840 ft at 35 m/s or more, Student 1,040 ft at 20 m/s or more (Vigil II manual v2.0.6).
      Vigil 2+ and Cuatro list different figures.

    Correction: on a Student CYPRES the 1,000 ft figure is a second trigger for slow descents, not a "student setting
    vs expert setting" choice, and Vigil's numbers differ.
13. **Vigil life.** vigil.aero: "20-year service life, with no scheduled maintenance". Battery replacement is between
    8 and 12 years, at a Vigil service centre. True.
14. **CYPRES maintenance.** Out of date. Airtec now lists three cases:
    - Built 2015 or earlier: maintenance at 4 and 8 years is mandatory, 12.5-year life.
    - Built in 2016: maintenance at 4 and 8 years is voluntary, 12.5-year life.
    - Built 01/2017 or later: maintenance at 5 and 10 years is voluntary, 15.5-year life.

    Correction: "CYPRES 2 maintenance is voluntary for units built from 2016; service life 12.5 or 15.5 years by
    build date".
15. **Last resort.** USPA ISP Cat A: AAD and RSL "are only back-up devices". True and already in the app.
16. **Two out after an AAD fire.** *Parachutist* Safety Check (Jan 2026) describes an AAD fire at about 650 ft
    that left two canopies in a downplane the jumper could not cut away. SIM 4-1 tells jumpers to consider the AAD's
    operating range when setting their own malfunction altitudes. For a student, the Student CYPRES can fire under a
    fast partial malfunction at about 1,000 ft, which puts the reserve out next to the main. True.
17. **8 levels.** British Skydiving AFF is "an 8 level course". USPA's ISP has 8 categories (A–H), and AFF
    instructors supervise until category E. Many US schools use their own level names. Correction: "8 levels in
    British Skydiving; USPA uses categories A–H".
18. **6–8 h ground school.** No federation sets this. USPA BSR 2-1.G.3 lists topics "sufficient to jump safely" with
    no length. British Skydiving gives "about 6 hours" for static line only. School marketing figures were not used
    as a primary source.
19. **13,000 ft, two instructors.** USPA sets no exit altitude (Cat A: pull at 5,500 ft, inside and outside
    instructor). British Skydiving: first AFF descent "from around 10,000 to 15,000 feet" with two instructors.
    Correction: "13,000 ft is common, not a rule".
20. **Static line altitude.** USPA ISP Cat A: IAD and static line deploy at 4,000 ft ("2 jumps from 4,000'").
    British Skydiving: "around 4,000 feet". Correction: about 4,000 ft. The BSRs give no static-line exit
    altitude; 3,000 ft is the minimum container opening altitude for all students.
21. **Forms 115A/B.** These are the tandem forms: 115A is the self-declaration and 115B the doctor's certificate.
    AFF and static-line students use 115C (self-declaration) or 115D (doctor) (British Skydiving helpdesk).
    Correction: for an AFF student it is 115C/D.
22. **Ages.**
    - USPA BSR 2-1.D.1 [E, interim] no longer says a flat 18. It says the age to sign a liability waiver in that
      jurisdiction, or younger where the law lets a parent or guardian sign on the jumper's behalf.
    - Abroad, the host country's rules apply, and under-16s get no USPA licence.
    - British Skydiving: minimum 16, with written parental consent at 16–17.

    Correction: "USPA: waiver-signing age (interim rule), British Skydiving: 16 with consent".

## Content tasks to propose

True or partly-true facts that would help an AFF student and that the app does not yet cover (or covers only with a
`<q-check/>`):

1. **part1 AAD card:** replace "around 750–1,000 ft <q-check/>" with the model figures. Student CYPRES: about 750 ft
   in freefall and about 1,000 ft under a canopy still descending faster than 29 mph. Vigil II Student: about 1,040 ft.
   Then add "ask which unit your school uses". Sources: cypres.aero/?p=3130; Vigil II manual v2.0.6.
2. **part4 two-canopies section:** add one line linking the AAD to two canopies out. A late pull, or riding a fast
   partial malfunction below about 1,000 ft, can make the student AAD fire, giving two canopies, possibly a downplane.
   So pull on time and act on malfunctions by the decision altitude. Sources: cypres.aero/?p=3130; *Parachutist*
   Safety Check Jan 2026 (articleid 9398); USPA SIM 4-1.
3. **part2 "Overloaded or lost?" line (or the part4 mistakes list):** add a one-line "why". First-jump stress
   measurably impairs learning of complex new tasks (Taverniers et al. 2011, PMID 21607782), so keep the plan to a
   few moves rehearsed until automatic. Do not cite the cadet "cognitive flexibility" claim: it is false (Jamro 2025).
