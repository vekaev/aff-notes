# AFF notes — plan

**Mission.** A guide that helps people jump safely: everything a student needs from the plane door to the landing,
true to the sources, grouped the way a jump happens, short, readable and shown with real footage. If one student
remembers the right thing at the right second because of it, it was worth it. Every change is checked against that:
is it true, is it clear, does it help someone on their next jump?

Study app for AFF (Accelerated Freefall) students, started after the owner's ground course at Skydive California
(Tracy, CA). Public since 2026-11-17: github.com/vekaev/aff-notes (MIT code, CC BY-SA content, clips belong to their
creators) and https://aff-notes.vercel.app; 32 languages. Project on one page: docs/ARCHITECTURE.md.
Every request from the owner goes here first. `[x]` = in the app (content tests pass); `[ ]` = not done.
Seen on screen 2026-11-16: hero, climb-out, hand signals, deploy + canopy check, landing pattern, EP, malfunctions
(desktop, light, EN); canopy check, obstacles, a chapter test (phone, dark, RU).

## Resume here (written 2026-11-16 ~23:00 PST, owner out of tokens; scheduled runs continue from this)
Work in this order; tick each line here and in the inbox below; one item per run is fine.
1. [x] **Translations** done 2026-11-17, all 10 merged into main (6a2f87e). Was: (branch `i18n`, worktree `../aff-notes-i18n`, pushed to origin/i18n; brief
   `docs/i18n/TRANSLATE.md`). At the time of writing: 10 translator agents had started; glossaries done for ar, it,
   pl; no `<lang>.json` written yet. Resume: for each of fr, de, it, pt, pl, sv, nb, da, fi, ar check
   `src/content/i18n/<lang>.json` with `npx vitest run tests/i18n.test.ts`; missing or failing → run one agent with
   the brief for that language (glossary first if `docs/i18n/glossary-<lang>.md` is missing). Commit each language
   on `i18n` as it passes.
2. [x] **Merge i18n** done 2026-11-17 (seen: FR phone light, AR phone dark right-to-left after fixes, DE desktop
   light, menu with 14 languages; browser-language detection covered by tests; not seen: the other 7 on screen): merge main into `i18n`, run `node scripts/i18n-extract.mjs` (the mission paragraph "Imagine…"
   was added on main after the branch: translate its new strings into all 10), `npm run check`, `npx vite build`,
   look at every language on screen (phone 375 + desktop, light + dark, Arabic right-to-left, the language menu,
   the "translated" note), then merge into main, push, remove the worktree.
3. [!] **Outreach research redo lines** (below, "Outreach research cut short"): one agent per line with
   `docs/outreach/BRIEF.md`, output `docs/outreach/raw/redo_<name>.csv`, then `python3 scripts/merge-contacts.py`.
   Sub-chat C (existing lists) [x] done 2026-11-17 after the limit stop: if `docs/outreach/raw/w2_existing_lists.csv` is missing, run it again
   (scope in `docs/outreach/WAVE2.md`, section C).
4. [ ] **Analyse everything the agents found** (owner 2026-11-16): read every `docs/outreach/raw/*.md` (sources,
   gaps, best contacts, posting rules, how-to-ask) and `contacts.csv`, and write `docs/outreach/ANALYSIS.md`:
   the best sources per country, ready-made lists, who to ask first (fact-check experts, safety officers, instructors,
   creators), where to post and their rules, what's still missing and how to get it, duplicates and dead sites to
   clean, and how all of it helps build the most complete list and knowledge base. Then clean `contacts.csv`
   (dead/parked sites, personal addresses flagged, closed dropzones) and add a `priority` column.
   While cleaning: ~45 rows sourced from burblesoftware.com and ~174 from pia.com: both sites' terms forbid automated
   collection, so re-source those rows from each org's own site or mark them (found 2026-11-17, 6b/6c).
   **Content tasks from the AI-run fact-checks** (2026-11-17; sources in `docs/outreach/raw/ext_chatgpt_1_factcheck.md`
   and `ext_ai_run2_factcheck.md`; facts rule applies: re-check the source before editing):
   - [x] (0e9f702) part1 AAD card: replace "around 750–1,000 ft <q-check/>" with model figures (CYPRES 2 Student ~750 ft in
     freefall, ~1,000 ft under a canopy faster than 29 mph; Vigil II Student 1,040 ft) + "ask which unit your school
     uses" (cypres.aero/?p=3130; Vigil II manual v2.0.6).
   - [x] (0e9f702) part4 two canopies: one line: a late pull or riding a fast partial malfunction below ~1,000 ft can fire the
     student AAD → two canopies out, possibly a downplane; pull on time, act by decision altitude (CYPRES; Parachutist
     Safety Check Jan 2026; SIM 4-1).
   - [x] (this run, 02:00 run 2026-11-17; not seen on screen: preview declined) part2 "Overloaded or lost?": one-line why: first-jump stress impairs learning complex new tasks, so keep the
     plan to a few rehearsed moves (Taverniers et al. 2011, PMID 21607782). Don't use the cadet "cognitive flexibility"
     claim (false).
   - [x] (0e9f702) part4 `real` sources: add "Fer 2021: France 2010–19" (doi:10.1016/j.jsams.2020.11.002); the "~6×" figure
     comes from it.
   - [x] (0e9f702) part4 `real` stats: "how rare" figure: 49 injuries and 0.57 deaths per 100,000 jumps (France 2010–19,
     6.2 M jumps, no tandem deaths) (Fer 2021 abstract). Don't use Barthel 2023's ">62 M jumps / 0.044 % / 0.0011 %"
     (the paper contradicts itself).
   - [ ] part4 `real`, optional: name the studies behind "73–88 %" (Westman 87.9 % canopy + landing; France 83.3 %).
   - [ ] optional: USPA 2024 "9 deaths in ~3.88 M jumps": check Parachutist's 2024 fatality summary first. Accident
     lessons: link USPA yearly summaries / FAI safety report, not SkydivingFatalities.info (unsigned, outdated).
   - [x] (08:00 run 2026-11-17, source re-read: parachutist.com ArticleID 9378: 10 deaths, landing 6, equipment 1; all 32 languages) part4 `real`, one line on why causes changed (Gemini run 1 fact-check, `ext_gemini_1_factcheck.md` #2): "AADs
     and reserve static lines have nearly eliminated deaths from no pulls and equipment; most US deaths now happen
     under an open canopy, at landing" (USPA 2023 Fatality Summary, parachutist.com articleid 9378: 10 deaths, 6
     landing, 1 equipment).
   - [ ] optional, tunnel: Newcomb et al. 2022 (PMC8929224), anterior shoulder dislocations from indoor skydiving:
     read the full text first; if useful, a tunnel-safety tip marked check.
5. [ ] **The ask**: from `docs/outreach/raw/how-to-ask.md` and the analysis, write `docs/outreach/email.md` (email,
   follow-up, Reddit post, creator DM) with the owner's mission. Nothing is sent: the owner approves each wave.
6. [ ] **Outreach pipeline** (owner 2026-11-17): send emails in each contact's language and track everything:
   who got which email (link to the sent mail / thread), opened or not if possible, replied or not, what they said
   (summary + link), follow-ups due, stats by country / type / language / wave, all in one place. First research
   ready tools (open source or cheap: e.g. a Gmail mail-merge with reply tracking, an open-source CRM / outreach tool,
   a Google Sheet + Gmail labels, a small local app), compare cost and effort, then build or set up the best one.
   Reusable for any future research (the /outreach skill gets a "track" step). Nothing is sent without the owner.
6b. [x] **Process the ChatGPT deep-research run 1** (owner 2026-11-17, in a sub-chat): `docs/outreach/raw/ext_chatgpt_1.csv`
   (41 rows) + `.md` (its report). Verify each row's email on the cited page (drop invented or legal/RMA inboxes),
   fix shifted columns (Cookie row), merge, and fact-check its content claims against sources; useful, sourced facts
   → app content tasks here; new people (Westman, Edouard, Vidovic, Brodsky-Chenfeld) → priority contacts.
   Done 2026-11-17: 41 rows checked on their own sites → 40 kept (31 with email), 1 dropped (Dropzone.com now
   redirects to tanzu.nl). ChatGPT's email was wrong or unconfirmed for APF, CBPq, UPT, NAA, Monterey, ChutingStar
   (PIA has it), LB; Burble privacy@ and iFLY legal@/ccpa@ kept out. `ext_chatgpt_1_verified.csv`: 6 new vs 34
   already in contacts. Lists: skydivinghubs behind a bot check, Burble terms forbid scraping, the iOS app copies
   USPA → 0 new (`ext_chatgpt_1_leads.md`). Fact-check `ext_chatgpt_1_factcheck.md`: 22 claims, 7 true, 12 partly,
   1 false, 2 unverified (115A/B are tandem forms, AFF uses 115C/D; static line ~4,000 ft; USPA categories A–H,
   British Skydiving 8 levels). Priority people: Westman (anton.westman@umu.se, 2024 paper), Edouard (staff page),
   Brodsky-Chenfeld (via marypat@), Germain; Vidovic: no current address.
   - [!] redo: skydivinghubs.com/dropzones by hand in a browser (Vercel check; terms unread), then decide.
   - [!] redo: Westman & Björnstig 2005 full text: is "no pull / low pull" really ranked 2nd? (abstract only)
6c. [x] **Process the second AI deep-research run** (owner 2026-11-17, uploaded file, tool not named):
   `docs/outreach/raw/ext_ai_run2.md` (report) + `ext_ai_run2.unverified.csv.txt` (73 rows). Same steps as 6b, same
   sub-chat: verify, write `ext_ai_run2_verified.csv`, merge; harvest its lists (OTGApps USPA GeoJSON, USPA S&TA
   locator, PIA directory, DAeC LSG-B register, tunnel directories, FAI delegates, SkydivingFatalities.info as content);
   fact-check its numbers (Rauer 2023 review: 62M jumps, injury 0.044 %, fatality 0.0011 %; FFP 2010–2019: 35 deaths,
   3,015 injuries, ~6.2M jumps) and note what the app should cite.
   Done 2026-11-17: 73 rows checked → 62 kept, 9 list/source rows dropped (Dropzone.com, SkydivingFatalities.info,
   OTGApps, tunnel directories, S&TA locator, registries), 2 folded into the run 1 researcher rows. Mexico fixed to
   info@fedparmex.org; stale paper emails (Hart 2003, Vidovic/Westman 2007) marked low; personal webmail published as
   a club contact flagged in notes. `ext_ai_run2_verified.csv`: 11 new vs 51 already. Lists (`ext_ai_run2_leads.*`):
   13 rows, 7 new (DAeC register: 4 Land air-sport associations + Berlin; Indoor Skydiving World: Viernheim,
   Leipzig); USPA GeoJSON 318 DZs and FAI delegates all already in; PIA not harvested (terms). Fact-check
   `ext_ai_run2_factcheck.md`: 9 claims, 6 true, 2 partly, 0 false, 1 unverified (the review is Barthel 2023, Rauer
   last author; its 62 M vs 10 M jumps contradict) → content tasks under step 4. contacts.csv 3,795 → 3,816 rows.
   - [!] redo: uspacourses.com unreadable (fetch blocked) → Angie Aragon's published email unverified.
   - [!] redo: USPA S&TA locator names need its search form per DZ (not submitted); owner decides if worth doing.
   - [ ] DAeC register adds emails / contact names for OFC Nobitz, FSV Zerbst, FSC Oberhausen
     (`ext_ai_run2_leads.md`): apply in the step 4 clean-up.
6h. [x] **Process AI run 3** (owner 2026-11-17, pasted, prose, no CSV): `docs/outreach/raw/ext_ai_run3.md`. Same
   sub-chat as 6b/6c: verify its leads (harvest what's public and allowed; NOT people from the FAA airmen registry),
   add new contacts (e.g. Michiel Damhuis, Radboud; Vigil service centres; tunnel directories), fact-check its 11
   content claims (tunnel overconfidence, MARD timing, wing-loading rules, Vigil service life, Part 105…), add useful
   sourced facts as content tasks.
   Done 2026-11-17: `ext_ai_run3_leads.csv` 176 rows (26 with email), 170 new (168 after the merge) → contacts.csv 3,816 → 3,984.
   USPA lists 188 US group members, not 241 (public GitHub mirror of USPA's list, 2026-08-30); 186 already in, 2 added.
   CYPRES service-centre directory: 161 new service points (115 riggers, 46 DZs; type guessed from the name; website +
   phone, no emails: CYPRES publishes none). CSPA rigger list: personal emails → counted only (~76), 2 rigging
   businesses added. Vigil America, Downward Trend, iFLY Austin, 5 tunnels (FlyTribe Malmö, Indoor Wingsuit Slovenia,
   FULLFLY Bordeaux…), ISC Technical & Safety Committee (low). People: Damhuis already in (michiel.damhuis@radboudumc.nl,
   WJES 2024, PMC10900578); Barthel added (Schulthess Klinik office inbox); Elsayed 2024 (Am Surg, no email).
   Dropzone.com: redirect already in place by Feb 2025 (last forum page 2024-12-03). Not harvested: Burble, Best Maps
   Ever (terms forbid scraping), FAA/AviationDB (personal records), fai.org (robots.txt blocks ClaudeBot).
   Fact-check `ext_ai_run3_factcheck.md`: 26 claims, 14 true, 10 partly, 1 false (NTSB doesn't investigate skydiver
   deaths), 1 unverified (failed PLF "leading cause"). Dutch tunnel-overconfidence = speculation in the Discussion,
   not a finding; Vigil battery 8–12 yrs; BS Form 330(i) + Ops Manual s.6 and FFP DT 48 are binding canopy-size rules.
   - [x] (02:00 run 2026-11-17, source re-checked: USPA BSR 2-1 M.2.b + SIM 4-3 F; q-check removed; all 32 languages; not seen on screen) content, part4 `ep` RSL line: "Student rigs must have one (USPA SIM 4-3 F); it's a backup: pull silver
     anyway, straight away" instead of "if your rig has one <q-check/>".
   - [x] (06:00 run 2026-11-17, source re-read: USPA Downsizing Checklist PDF, uspa.org/downsize) content, part4 `tips` next to the canopy course: downsizing: one size at a time, change size or type not
     both (uspa.org/downsize). Not added (owner may want it in the school-rules profiles): UK and France set binding minimum sizes by weight and jumps (BS Form 330(i); FFP DT 48).
   - [ ] content, optional: MARD line (Skyhook: reserve out ~0.5 s after cutaway, still pull silver; UPT, USPA 2018).
   - [ ] content, optional: part1 "Two instructors": USPA allows one AFF instructor after set tunnel training
     (BSR 2-1 G.4.2.1), ask your school.
   - [ ] step 4 clean-up: apply the better inboxes in `ext_ai_run3_leads.md` (Flyspot per-city, Aero Gravity,
     KNVvL para@knvvl.nl, PD support@, iFLY merge table with wrong cities, Bottrop phone +49 2041 373730, ISC Bureau names).
   - [!] redo: live USPA DZ count (fetch to uspa.org was refused by the permission check; mirror used), the 2 new DZs'
     own pages, Vigil dealer locator (JavaScript only), 5 CYPRES pages that failed, British Skydiving s.6 PDF (404).
   Full report pasted by the owner 2026-11-17 + its Gemini chat read in Dia (Tavus account, "Skydiving Safety
   Directory"): `ext_ai_run3_full.md`. Gemini never wrote its "193-row" CSV: 49 rows drafted in its reasoning, 48
   already in, 1 new (MC Industries). Re-checked leads (`ext_ai_run3_full_leads.csv`): APF careers page is job ads,
   iFLY info.<city>@ inboxes don't exist (pr@, partnerships@ and Wilmington events@ do), 2 AU DZ emails added.
   - [!] redo: IBA tunnel list tunnelflight.com/tunnels/all (public, robots allow; fetch blocked by the permission
     check): open it in Dia or allow the fetch, then dedupe against the 414 tunnel rows.
6d. [x] Owner 2026-11-17: AI runs return too little → prompt v2 for volume (one narrow scope per run, table only,
   harvest whole directories, "continue" follow-ups, 29 scopes): `docs/outreach/deep-research-prompt-v2.md`.
   Owner runs it in other tools; each answer saved as `raw/ext_<tool>_<scope>.unverified.csv.txt`, verified + merged.
6e. [~] Owner 2026-11-17: (a) status of every task; (b) for every country in contacts.csv: is its language in the app
   (default English)? add the missing ones (e.g. Thai) the same way as the 10 (glossary, translate, back-check, tests);
   (c) make sure every language is translated as expected: look at each on screen (phone + desktop, light + dark).
   (b) [x] (merged 2026-11-17, seen TH phone light, HE phone dark RTL; others by tests) 18 more languages from the contact countries (nl cs sk hu ro bg hr sr sl el tr lt he zh ja ko th id) on
       branch `i18n2` (worktree ../aff-notes-i18n2, wiring f1f3b8e): one translator each, started 2026-11-17.
       Still missing (few contacts): fa, et, lv, vi, ms, ka, hy, kk, uz, mn, km. (c) [ ] screen check of all languages.
6f. [x] Sender address (owner 2026-11-17): worried the personal Gmail gets flagged as spam or locked; a new address?
   Research deliverability for this kind of outreach (separate address/domain, warm-up, daily limits, SPF/DKIM/DMARC,
   tools) → `docs/outreach/sending.md` with a recommendation. (sub-chat "community")
   Done 2026-11-16: never the personal Gmail; own domain (~$11/yr) + 1 Google Workspace mailbox ($7/mo), SPF/DKIM/DMARC,
   2-week manual warm-up to ≤100/day, Reoon address check, Mailmeteor ($18/mo); ~9–10 weeks, ~$75–100 total.
   Corrects how-to-ask.md (YAMM free 20/day; new Workspace 500/day until $100 paid). Owner picks the domain name.
6g. [x] **Extra project: a worldwide community** (owner 2026-11-17): where skydivers and students would discuss and
   help each other (Reddit, Facebook group, Discord, forum, Telegram/WhatsApp, a site with comments…), how such
   communities start, grow and are moderated, safety/liability for advice, cost and time to run. Research →
   `docs/community/PLAN.md` with options compared and a recommended first step. Nothing is created or posted
   without the owner. (sub-chat "community")
   Done 2026-11-16: don't build yet; help in r/SkyDiving + SkyCentre + own DZ chat, ask in the outreach email "would you
   answer one student question a week?"; build a hosted Discourse (free plan) only when 10+ rated jumpers say yes.
   dropzone.com closed 31 Dec 2024 (not 2026); its successor skydiveforum.com died Nov 2025. Blocker: the app is
   private, so a community can't link to it yet. 9 owner questions in the file (§11).
   [ ] redo: unverified — Facebook group names/sizes (needs login), VK groups, Zoom/Meet free limits, r/SkyDiving size now.
6i. [~] (phase 1 units done 2026-11-17: ft / ft+m / m chip, seen RU phone light ft+m, EN dark m; design in docs/i18n/DEEP-LOCALIZATION.md; [ ] phase 2 school rules by federation after research docs/i18n/units-and-rules.md; [x] metric default regions updated from docs/i18n/units-and-rules.md) **Deep localization** (owner 2026-11-17): not only text — units (feet vs metres by country), rules, links and
   facts that differ by country/federation; a clean, scalable design. Research common practice, propose, build phase 1
   (units), plan phase 2 (country/federation variants). Safety: metre altitudes must not be silent conversions of
   feet; schools in metric countries teach their own round numbers.
6j. [ ] **School-rules profiles** (phase 2 of deep localization, research done: docs/i18n/units-and-rules.md):
   metric schools teach their own round numbers (DFV: wave-off 1,500 m, pull ≥1,200 m L1; FFP: open ≥1,500 m;
   Finland: pull 1,600→1,400 m, decide 600 m), so a ft/m switch alone would teach wrong altitudes. Build a visible
   "rules: USPA / DFV / FFP / British Skydiving / RU-UA metric" profile from the region, in that order; unofficial
   numbers marked check. Gaps: FPSR/FPSU syllabi, DFV AHB Teil I, APF, Form 330 values, CBPq, KNVvL.
6k. [~] **Owner sends the latest deep-research results from Gemini, Claude and ChatGPT** (owner 2026-11-17, "I will come
   back to it later"). When they arrive: save each as `docs/outreach/raw/ext_<tool>_<scope>.unverified.csv.txt` + `.md`
   (a pasted chat or uploaded file), then process like 6b/6c/6h: verify every row at its source, drop legal/privacy
   inboxes, fact-check the claims, merge with `scripts/merge-contacts.py` and report new vs already-known rows
   (repeats are expected and fine).
   2026-11-17: fetched by the agent itself in Dia (owner: "open Gemini/ChatGPT under my Tavus account").
   - [x] Gemini "Skydiving Safety Directory": its 193-row CSV was never written (49 drafts, 48 known) → 6h.
   - [x] Gemini run 1, turn 6 (owner asked "Can u run this plan and collect this data"; fetched again 2026-11-17 in a
     sub-chat): the CSV now exists: 232 rows (it says 193; 216 with shifted columns), saved unchanged
     (`raw/ext_gemini_1.md`, `ext_gemini_1.unverified.csv.txt`). ~190 already known; ~60 checked on own sites →
     21 rows in `ext_gemini_1_verified.csv`: 14 new (10 with email: McNeil, Barry, Wang, Jacoby, Iowa State,
     FSC Lipperland, Western Parachute Service, 2 YouTube creators, + 5 PASA-listed Facebook groups), 1 email fill
     (WeFly), 4 CSPA rows + board addresses; dropped pissedconsumer iFLY info.<city>@, legal/RMA inboxes, PIA-only
     emails, iFLY Hollywood (closed), the Smith & Pell satire paper. contacts.csv 4,159 → 4,173 rows, emails
     2,322 → 2,332. Fact-check `ext_gemini_1_factcheck.md`: 20 claims, 10 true, 7 partly, 2 false (Peyron 2018 is a
     suicide case report; Smith & Pell 2003 is satire), 1 unverified. Better inboxes for known rows (Perris manifest@,
     CSPA, DFV technik@, JYRO) in `ext_gemini_1_leads.md` → step 4 clean-up.
   - [!] redo: 6 rows not checked (`raw/ext_gemini_1_pending.unverified.csv.txt`: GRISSUL Lausanne emails, Skydiving
     NSW bigpond address, Parachute Academy mario@, Basik aerosportevents@, 2 Facebook groups). One search each in a
     fresh session, then merge.
   - [x] ChatGPT "Build Skydiving Contacts" (Tavus 2.0 workspace, agent mode): 3 CSVs, 533 + 1,008 + 817 rows
     (`raw/ext_chatgpt_2{a,b,c}_*.unverified.csv.txt`, report `ext_chatgpt_2_report.md`, chat `ext_chatgpt_2_conversation.md`).
     1,679 already known, 679 new. 86 with a contact verified on own sites → 65 kept (21 dropped: closed, unrelated,
     a test record, a gambling domain); + 47 CSPA opt-in rigger emails; + 12 emails for known rows; + 2 published
     personal addresses (FFP DTN, FSC Remscheid) → `ext_chatgpt_2_verified.csv`. 469 name-only rows researched
     (owner: "as many emails as possible") → 198 with a contact (146 emails), 102 dropped → `ext_chatgpt_2_names_researched.csv`.
     contacts.csv 3,985 → 4,122 rows, emails 2,035 → 2,141.
   - [!] redo: 169 name-only rows not searched (session web-search limit, 200 shared): `raw/ext_chatgpt_2_names_pending.unverified.csv.txt`
     (US 22, Russia 15, Brazil 13, Italy 11, Germany 10…). One search each in a fresh session, then merge.
   - [ ] dedupe at step 4: Tandem Skydive Germany ×5 sites (one company), Nuggets ×2, iFLY Orlando ×2, Mendoza ×2,
     SkydivePorto group, iSkydive America group (Capital City, Charlevoix, DC, NY Tandem).
   - [x] Claude run (Tavus org, chat "Unfilled scope placeholder", fetched 2026-11-17): 539 rows (USPA DZs + FAI),
     mostly known; 35 new + 3 email fills (`raw/ext_claude_1_verified.csv`); 122 FAI ISC delegates (names only) →
     `todo/email_hunt_14.csv`. Content lead: FAI Technical & Safety Committee yearly safety reports 2001–2023.
   - [x] Site email hunt (no search, sites read directly): 557 no-email rows with a website → 182 emails found,
     221 none, 154 dead/hijacked sites (`todo/dead_sites_2026-11-17.csv`, for the step 4 clean-up).
     contacts.csv now 4,129 rows, 2,284 with email.
   - [x] M2 AAD dealer list (m2aad.com/contacts-2, robots allow): 77 rows, 30 new, 8 email fills (`raw/m2aad_dealers.csv`);
     check Skydive Breclav and DZ Ignalina (matched on the dealer's domain).
   - [ ] Email hunt batches 01–14 (`todo/email_hunt_*.csv`, ~1,550 rows needing a search): one fresh desktop session
     each (sessions can't start over Remote Control).
7. [?] Waiting on the owner (link + clips settled 2026-11-17: public, clips kept): sender = a project domain + one
   Workspace mailbox, never the personal Gmail (docs/outreach/sending.md: domain name? ~$100 budget? postal address for
   the footer?); first wave = own school and instructor; photo: the GitHub one stays (owner 2026-11-17);
   community: answered 2026-11-17 (owner not admin, the community decides everything; propose Discord, Reddit and a
   forum), see docs/community/PLAN.md §11.
Linked sub-chats (may be idle): outreach-europe, outreach-world, outreach-lists, outreach-people. Their files are in
`docs/outreach/raw/`; nothing in them needs a commit except what's listed above.

## Owner requests: the inbox (every ask lands here first, nothing is dropped)
Rule: each thing the owner asks for, in any message, gets a line here **before** work starts, with the date and the
owner's words in short. Status: `[ ]` planned · `[~]` started · `[!]` blocked / redo (why) · `[-]` cancelled by the
owner · `[x]` done and seen on screen (commit) · `[?]` waiting on the owner (the question is under "Waiting on you").
A re-ask is marked `re-asked <date>: why it wasn't done` on the same line. The 2-hourly run and the autopilot work the open
lines top down; a line is closed only when it's done and seen, or the owner drops it.

2026-11-17 (chat, phone screenshot):
- [x] About line: "From Ukraine. I love learning new skills, getting better and helping people." (#13); Facebook and Instagram in "Find me" (#14).
- [x] Language switch got stuck on the phone until a reload (Polish): languages now load from fixed-name JSON files, so switching works at once with no reload, also after a deploy (#19, replaces the reload-once workaround #18); the tab title follows the language (#17). Seen on the live site: EN → Polish on the same page. One-time catch: phones still running yesterday's copy need one last reload.
- [x] Gemini "Skydiving Safety Directory" processed (#12): 14 new contacts, 2 false claims caught.
- [x] Community: owner won't be admin, "they can do everything"; propose Discord, Reddit and a forum (Discourse); answers in docs/community/PLAN.md §11.
- [x] Nothing gets lost: every pushed branch gets a PR at once; "pushed" isn't done, "merged into main" is. School-rules branch got draft PR #6; `~/agent-tools/scripts/unmerged` lists uncommitted files, unpushed branches, branches without a PR and open PRs (agent-tools 264fb7d).
- [x] Commit messages: switch to Conventional Commits (`feat:`, `fix:`, `docs:`…) with commitlint in the commit hook; rule in AGENTS.md + CONTRIBUTING (owner: "sounds good").
- [x] /learn on this stretch (sub-chats, feedback icon, commit style).
- [x] Feedback icon: show it only after a minute (was 10 s); a question-mark icon instead of the message bubble.
- [x] Feedback card opened by itself over the page (after ~2 min on iPhone): owner chose "icon only": after 10 s only
  the round icon shows; the card opens only on tap.

2026-11-16 (chat, plan discipline):
- [x] "Also to all other apps" (by ear: the app ending with feedback + more languages, saved to /study, should apply
      to every app) → rule in ~/agent-tools/rules/ui.md.
- [x] Every ask: a plan file first (the ask, analysis, extra checks from other directions), clarify only when truly
      unclear; research keeps statuses (planned / started / blocked / cancelled / done) and redo lines when out of
      tokens, agents or limits, finished later, never dropped; a re-ask is marked on the same line with why it wasn't
      done. → ~/agent-tools rules + a plan-format reference + /learn reads the plan (re-asks, stuck, dropped).
      Done: agent-tools (format in skills/bootstrap/assets/docs/PLAN.md), probes pass.

2026-11-16 (chat, languages + tracking):
- [x] More languages so people anywhere can read it (merged 2026-11-17): French, Italian, Nordic (Swedish, Norwegian, Danish, Finnish),
      Arabic (right-to-left) and more (German, Portuguese, Polish…). Research the best way to translate safety
      content (terms each country's federation uses, a check by a second agent and later native skydivers).
  Built on branch i18n (worktree ../aff-notes-i18n, 6892afa): per-language files keyed by the English text, 1,309
  strings / 78k characters, tests (all keys, same tags, same numbers), note "translated, not yet checked by a native
  instructor" on extra languages. Translators (one agent each, glossary from the federation first, then back-check):
  - [x] all 10 (fr de it pt pl sv nb da fi ar) translated, tests pass, merged 2026-11-17; each glossary lists 5 terms
        for a native instructor (docs/i18n/glossary-<lang>.md) (committed on i18n; not seen on screen yet: check RTL ranges like "2,000 ← 1,000 ft"; 5 terms for a native instructor in glossary-ar.md)
    (2026-11-16 23:00: glossaries for ar/it/pl only, no translations yet; resume per "Resume here" step 1)
  - [~] re-asked 2026-11-16 23:23 (6e c), still not done: 7 here + 16 of the i18n2 languages unseen. After: look at every language on screen (FR, AR, DE seen; IT, PT, PL, SV, NB, DA, FI not yet) (phone + desktop, light + dark), Arabic layout right-to-left, merge.
  - [ ] Later: native skydivers check each language (ask through the outreach list), more languages (nl, cs, tr, ja,
        zh, ko, he) if wanted.
- [ ] Languages of the remaining contact countries (owner 2026-11-16 23:23 "add all of their languages"): fa, et, lv, vi,
      ms, ka, hy, kk, uz, mn, km are not in the app; add them the same way (glossary, translate, back-check, tests) or
      ask the owner to skip the ones with few contacts (from audit 2026-11-17).
- [x] Auto-detect the visitor's browser language and open that version; the language menu at the top still switches.
      (already existed for 4 languages; now checks every preferred browser language, all 14, on branch i18n)
- [x] Rule: every ask goes into the plan first (tasks, what else may be needed), then work; every delegated agent or
      sub-chat gets a line with its status (done / blocked / ran out of limit → redo), so nothing found is lost.
      (~/agent-tools/rules/working.md + /outreach skill)
- [!] Outreach research cut short by the shared search limit (redo with a fresh budget, one agent per line):
  - [ ] us_west: MT, NE, ND, WY, northern CA, second pass OR/WA, open the 31 low-confidence rows.
  - [ ] us_east: non-USPA dropzones state by state (MS, LA, DE, NH, KY, IN, small clubs).
  - [ ] au_nz: GoSkydive NZ, Skydive Kaikoura.
  - [ ] eu_west: Spain, Flanders, non-federation dropzones (DE under DAeC, FR non-FFP).
  - [ ] eu_north_east: Czechia, Slovakia, Ukraine, Turkey, Greece, Bulgaria, Iceland, Cyprus, Georgia.
  - [ ] w2_ukraine_central_east, w2_asia_pacific, w2_latam, w2_tunnels: finish what their notes list as missing.
  - [ ] world_rest: Japan, China, India, Gulf federations, FAI member list (403), Africa beyond SA, Ecuador/Chile/Peru.
  - [ ] industry: insurers, rigger schools, book authors.
  - [ ] communities: Facebook groups, Discord, national forums (needs a fresh budget; Facebook needs Dia login).
  - [ ] instagram_tiktok_blogs: Instagram bios/linktrees (needs Dia), RU/UK/ES creators, Medium/Substack.
  - [ ] w2_experts, w2_clubs_events, w2_coaches_lofts: finish what their notes list as missing.
  - [ ] how-to-ask: dropzone.com forum threads (site gone: use the Internet Archive).
  - [~] Sub-chats: A Europe deep done (799 rows), B world done (619), D people done (400, partial: search limit);
        C done (2,449 rows incl. existing lists, 2026-11-17).

2026-11-17 (chat, playbook):
- [x] (2026-11-17: header, Waiting on you, Owner decides later, sender line, About line fixed; tooling worktree removed) Make the plan true again (found by audit 2, docs/review/owner-asks-audit-2.md W1–W6): "Waiting on you" drops the
      private dropzone link, "owner removes aff-notes.vercel.app" and "needs the private link"; "Owner decides later"
      and the header drop "private repo only / not published / personal use"; Resume 7's "sender (Gmail…)" follows
      sending.md (own domain); the About-section line loses its stale [?] notes; languages ticked [x] without being seen
      say so; tick the playbook line (27cd54f, bb581fe); remove the merged worktree .claude/worktrees/tooling-8c5524 (from audit 2026-11-17).
- [~] Check that everything the owner asked was done (audit of all owner messages since 2026-11-16 against this plan).
      re-asked 2026-11-17 00:57 (first 2026-11-16 10:17 / 10:25). Audit 2: docs/review/owner-asks-audit-2.md.
- [x] (agent-tools skills/study/references/playbook.md; docs/AGENT-TOOLS.md here) A reusable playbook of how this project was made (license, collecting content, clips/photos/GIFs, researching
      organisations, deployment, attention/marketing, outreach to companies and people, telling the mission, agent
      tools), saved in ~/agent-tools for future projects; in this repo, docs/AGENT-TOOLS.md says which agent tools and
      skills built it.
- [ ] Marketing / launch plan (gap found while writing the playbook): where and when to announce, creators,
      newsletters, search (per-language pages), measure.

2026-11-17 (chat, project guide):
- [x] (docs/ARCHITECTURE.md, linked from README and AGENTS.md) Walk the owner through the whole project (stack, build, linters, structure, i18n, tests, CI, publishing,
      agents), saved as docs/ARCHITECTURE.md so people (and agents, to save tokens) learn it from one page; then /learn.

2026-11-17 (chat, units default 2):
- [~] (04:00 run: the sub-chat "School-rules profiles" is running again since ~04:01 PST, 46 files uncommitted in its
      worktree; let it post its own question; content edits on main paused until it commits) Owner asked "What's the question" (00:50) about the school-rules sub-chat: find the question it waits on (open its
      chat or the worktree `.claude/worktrees/rules-profiles-206c10`, 49 uncommitted files), put it under "Waiting on you"
      with a recommended answer; 6j and the round metric numbers are blocked on it (from audit 2026-11-17).
- [x] (owner: "Yes" 2026-11-17: US/CA/UK/IE/AU/NZ/ZA/NL ft, metric federations m, everyone else ft + m; tests + seen RU m, IT in a US browser ft) Which countries use feet vs metres in skydiving (owner thinks Canada and England may be metric); should the
      default be "ft + m" for everyone except the US? Metres look unrounded (≈760, ≈610): check what Russian, Italian,
      French materials actually teach and use those numbers.

2026-11-17 (chat, research in repo + PRs):
- [x] (checked: all in docs/research + docs/outreach/raw; rule in AGENTS.md) Deep research (ours and other AI tools') is saved in the repo too: check nothing lives only outside it, and say
      where it goes in AGENTS.md.
- [x] re-asked 2026-11-17 00:35 (first "PR merge" 00:22). Merge the open PRs (owner: "merge open prs"): #1 and #3 merged; #2 conflicted after #1, same change made on main.

2026-11-17 (chat, repo description + agent rules):
- [x] GitHub description is outdated ("personal, EN/ES/UK/RU"): update description, website and topics.
- [x] Rules for LLMs/agents in the project: AGENTS.md (CLAUDE.md imports it; Copilot + Gemini pointers; CONTRIBUTING section) (AGENTS.md for any tool: Claude, Codex, Cursor, Copilot…), so contributors'
      agents follow the same facts, safety, language and check rules.

2026-11-17 (chat, license + PRs):
- [x] Owner: "every change in its own workspace, see the parallel chats, PR and merge, never drop lines" → yes + learn:
      every change in its own worktree + draft PR (shared rule, all apps); here: `.gitattributes` keeps both sides of
      `docs/PLAN.md` on a merge, the pre-commit hook refuses commits on main (`scripts/no-commit-on-main.sh`),
      AGENTS.md rule 5; same guards in the bootstrap template; the chat audit flags uncommitted worktrees 3+ h old.
- [x] License (owner: "License yes"): MIT for code (`LICENSE`), CC BY-SA 4.0 for notes, translations and drawings
      (`LICENSE-CONTENT`, says what it covers), clips in public/media belong to their creators and are under neither;
      README + CONTRIBUTING say so, package.json `license: MIT`.
- [x] Merge the Dependabot PRs vekaev/aff-notes#1–#3 (owner: "PR merge"), after CI passes on each: #1 and #3 merged,
      #2 conflicted after #1 and was applied by hand (3a4680d); CI on main green.
- [x] README: mission (owner's words from "Why I made this"), all 32 languages, translation help first (owner: "update
      readme, there are many more languages than these 4, add the mission") — 4293d9f.
- [x] Owner "Yes" (2026-11-17) to both tooling proposals:
  - [x] Smaller offline install: 4.9 → 1.8 MB. The 28 extra languages are no longer pre-downloaded; the reader's
        language is cached when it loads, also on the very first visit (`src/pwa-langs.ts`). Seen in a Playwright test
        (`e2e/offline.spec.ts`): first visit in German, go offline, reload, still German; budget lowered to 3 MB.
        Trade-off: a language never opened shows English offline.
  - [x] Per-language pages, light way (live 2026-11-17 via vekaev/aff-notes#4: aff-notes.vercel.app/fr/ is French
        without scripts, /?lang=de → /de/, CI green; owner 2026-11-17: "why not a worktree and a PR instead of waiting" → branch
        `langpages`, PR, no wait): every language at its own address (`/fr/`, English at `/`), pre-rendered at build
        (`scripts/prerender.mjs`): text, `<html lang dir>`, translated title/description/og, canonical, hreflang × 33,
        `sitemap.xml`, `robots.txt`; old `?lang=fr` links redirect to `/fr/` (vercel.json); language menu moves the
        address; offline keeps the reader's language page. Tested on a real Vercel preview first: `/?lang=fr` can't serve
        another file (static files win), so real folders it is. Seen: FR/JA desktop light/dark, UK/AR phone, DE without
        JavaScript; 32 Playwright checks. Overlap with the school-rules branch: a few lines in `src/i18n.tsx`.

2026-11-17 (chat, translations + tooling):
- [x] (seen FR + AR phone; mail subject "AFF notes: translation (fr)") "Something wrong or a better word in the translation? Tell me": on every translated language (the top note) and
      in the feedback card; mail subject carries the language.
- [~] By ear "start a separate branch to fix everything you just said": build the school-rules profiles (6j), checked in
      every language, on its own branch (sub-chat).
- [x] Project tooling for contributors (sub-chat, branch claude/tooling-8c5524): set up and checked (pre-commit hook on a
      test commit, CI steps run in a clean clone, first GitHub CI run on main green in 18 s). Dependabot opened 3 PRs
      at once (#1 #2 actions v7, #3 @babel/parser 8), all CI green; merging them was blocked for the agent: owner merges.
      - Lint: **Oxlint** instead of ESLint: typescript-eslint does not run on the TypeScript 7 native compiler (peer
        `typescript <6.1`, the TS 7 package has no JS API); Oxlint has react, react-hooks, jsx-a11y, typescript,
        unicorn, import and vitest rules built in, and type-aware rules on TS 7 (oxlint-tsgolint). `.oxlintrc.json`;
        errors block, warnings show (19 today, each relaxed rule has its reason in the file).
      - Format: **Prettier** (`.prettierrc.json`, 120 columns, single quotes); `.editorconfig`. oxfmt is still 0.x.
      - Pre-commit (**Husky + lint-staged**): format + lint the staged files, `tsc -b`, en.json check, all tests (~2 s).
      - Translations: `npm run i18n:check` fails if en.json is stale (`i18n-extract.mjs --check`), a language file is
        missing, a key is missing or stray, or tags/numbers differ; `npm run i18n:todo [lang] [--prune]` lists what
        each language needs after English changes.
      - CI: `.github/workflows/ci.yml` (Node 24: npm ci, types, lint, translations, formatting, tests, build) on
        every push to main and every PR. Dependabot monthly, grouped (npm + actions).
      - Docs: CONTRIBUTING.md (how to fix a translation, change English, add a language, facts need sources, clips are
        third-party), CODE_OF_CONDUCT.md (Contributor Covenant 2.1, short), issue forms (translation, fact, bug), PR
        template, README updated. License added later (line above, 2026-11-17).
      - **TanStack Query: no.** It caches and refetches server data; the app has none (content is bundled TypeScript,
        translations are lazy-loaded static JSON loaded once, progress is localStorage). It would add ~13 kB and a
        provider for nothing. Revisit only if the app gets a server (accounts, synced progress, live wind data).
      - Commit-message convention: not enforced (one-person repo, messages are descriptive); revisit if many PRs.
      - Owner's wider ask (TanStack + Vite ecosystems; re-asked 2026-11-17 00:08 after the 00:03 ask): comparison in `docs/TOOLING.md`. Added after it: size budget in
        CI (`npm run size`), Playwright screen tests on the build (7 languages × phone/desktop × light/dark, screenshots
        uploaded by CI, `npm run e2e`). Bigger moves (per-language URLs + prerender / TanStack Router + Start, smaller
        offline install, Weblate) are under "Owner decides later".
- [ ] One-time format + lint pass after the components/content branch (school-rules profiles) merges: remove the
      four TEMPORARY lines in `.prettierignore`, `npm run format`, commit alone ("format only"); fix the a11y warnings
      (clickable `<li>` rows in widgets.tsx and the tap-to-reveal card in Blocks.tsx become `<button>`s) and turn those
      jsx-a11y rules back to errors in `.oxlintrc.json`. Look at the changed screens in 4 languages.
      - Owner 2026-11-17: whole TanStack and Vite ecosystems, production-ready, adopt what's clearly worth it. Verdict:
        - Already on the current Vite stack: Vite 8 (Rolldown bundler inside), Vitest, vite-plugin-pwa, and now Oxlint.
        - **Vite+** (`vp`, MIT, 1.x since 2026-09): one CLI over the same tools (Vite, Vitest, Oxlint, Oxfmt). Not now:
          1.7 came out today and moves fast; contributors know `npm run` + Prettier. Moving later is small (scripts →
          `vp`, Prettier → Oxfmt). Recommended: revisit in the one-time format pass or when Oxfmt is 1.0.
        - Biome: also good (lint + format in one), but its type checks are its own inference, while Oxlint's type-aware
          rules run on TypeScript 7 itself, and Oxlint is the linter Vite+ ships. Not chosen.
        - TanStack **Query / Form / Table / Virtual: no** (no server data, no forms: feedback is a mail link, no big
          tables or long lists). **Router: no** (one scrolling page, chapters are #anchors, settings in ?lang=&units=).
        - TanStack **Start**: only for one real gain, pre-rendered HTML per language so search engines and link previews
          see each language. A full move is big; a lighter way is a build step that pre-renders the page per language.
          Under "Owner decides later".

2026-11-17 (chat, project link):
- [x] (seen RU phone light) "Why I made this": link to the project on GitHub (https://github.com/vekaev/aff-notes), now public, so people can
      see the code and contribute.

2026-11-17 (chat, settings menu):
- [x] re-asked 2026-11-17 00:45 (defaults questioned: Canada, UK, ft + m), redone in 3925505. (seen: ?lang=uk opens in metres, switching to EN gives feet) Metres by default where schools use metres (Russia, Ukraine: "no one uses feet"), chosen from the region or,
      without one, the language (docs/i18n/units-and-rules.md list); feet elsewhere.
- [x] (seen UK light + EN dark on the phone) Units and theme go into a "⋯" menu at the right of the header; the language stays visible on top.

2026-11-17 (chat, going public):
- [x] (agent-tools c2f73a8) Owner "Yes" (00:32) to the /learn lesson: repeat the owner's words as said, never stronger
      ("asked" is not "cleared"), as a rule for all chats (from audit 2026-11-17).
- [x] (40c3def) LinkedIn https://www.linkedin.com/in/vekaev next to GitHub at the end (+ saved in ~/me).
- [x] Make the GitHub repo public (owner's OK 2026-11-17). Checked: no secrets in history (.env holds only the site URL);
      the contacts list (3,816 rows, 2,024 emails) is published as is by the owner's choice.
- [x] Clips stay as they are (owner 2026-11-17: "Don't clear clips", by ear: keep them, and don't call them cleared; he asked the creators).
      Was: Clips are fine: the owner asked the content creators. Update CLAUDE.md (no more "never publish") and close the
      "public version / clips" questions; aff-notes.vercel.app stays.

2026-11-17 (chat, language links):
- [x] (2026-11-17, seen: ?lang=th&units=both opens Thai + ft·m; switching to ES rewrites the address to ?lang=es) Language in the link: `?lang=fr` (and `?units=m`) opens the site in that language/units, so each outreach email
      can carry a link in the recipient's language; the menu still switches; the address bar keeps the current
      language so a shared link opens the same way.

2026-11-17 (chat, feedback bubble 2):
- [x] Bubble: a "Not now" that hides the bubble and its icon completely (it's annoying and takes space on the phone).
- [x] Bubble: a link "Why I made this" to the mission section at the bottom (#about).
- [x] (dd445e2, 40c3def) About section: links to GitHub (the project, to contribute) and LinkedIn, so people can reach the owner there.
      Done: GitHub profile + project link, LinkedIn (40c3def, dd445e2); repo public 2026-11-17.
- [x] (owner 2026-11-17: repo public, site stays, clips OK) Seen on the owner's phone: aff-notes.vercel.app is still public and auto-deploys on push (clips of other people's
      videos). Owner said he'd remove it; ask again.

2026-11-16 (chat, feedback):
- [x] Mission, one more thought (2026-11-16): imagine saving at least one life by sharing this knowledge; the greatest
      thing is that we can now build the most complete worldwide place to learn to skydive, with fewer injuries and
      deaths, and more people enjoying life and the feeling of flight. (New English text → translate into the 10 new
      languages when the i18n branch merges.) Done in EN/ES/UK/RU, seen RU light + EN dark on the phone.
- [x] End of the site: "share feedback" (something to add, share or fix, found a mistake → write to the owner's email).
- [x] End of the site: the owner's mission and a short "about me" with a small photo (tried the course himself, it's
      hard; wants to help new learners avoid injuries, connect the community worldwide; from Ukraine, loves learning
      new skills and helping people). Not in the header; only at the end.
- [x] A small feedback bubble bottom right that opens after 10 s, with a close (X): "questions, improvements,
      something unclear? Tell me, I want to make it better to help others." Done: section "Why I made this" (#about)
      after the final check, email vekaev4@gmail.com ("vkf4" by ear, checked against Gmail), bubble opens once, then
      only the icon; seen EN desktop light, RU/UK phone dark, ES phone light.
- [x] Photo at the end is the GitHub avatar: keep it (owner 2026-11-17: "why do you need my picture if you already have from GitHub").

2026-11-16 (chat, outreach):
- [x] (answered 2026-11-17) Put the 9 owner questions from docs/community/PLAN.md §11 (domain name first; sending.md waits on it) under
      "Waiting on you", one question each with the recommended answer (from audit 2026-11-17).
- [~] Research every skydiving school / dropzone worldwide (US, Australia, UK, Canada, Europe, rest of the world),
      plus coaches, gear makers, associations: one CSV (docs/outreach/contacts.csv), public business contacts only.
- [~] Also creators and communities: YouTube, Instagram/TikTok, blogs, podcasts, Reddit, Discord, Facebook groups,
      forums (where to post, their rules). Goal: as many contacts as possible (owner: "thousands").
- [~] Research how to ask strangers for expert help so they answer (cold outreach, wording, subject lines), and the
      rules for bulk email (CAN-SPAM US, GDPR/PECR UK-EU, CASL Canada, Spam Act Australia).
- [ ] Rewrite the email: the owner's mission (help people get the A license, fewer injuries and deaths, contribute
      to the sport) and the asks (feedback, cross-check facts, books, links, saved materials, what matters most,
      forums, new ideas, a community chat or calls, a version personalised for their school). Plus a Reddit post.
- [~] Owner (2nd msg): go wider and deeper: every country (Nordics, Italy, Russia, Ukraine, Africa, Latin America,
      Asia…), look for ready-made lists (CSV, directories, datasets, Wikidata), creative directions (Reddit, clubs,
      tunnels, events, researchers, non-English communities). Second wave of agents, raw files in docs/outreach/raw.
- [x] One big copy-paste prompt for other deep-research tools (ChatGPT, Gemini, Perplexity, Grok…) that returns the
      same CSV, so the owner can run it elsewhere and compare (docs/outreach/deep-research-prompt.md).
- [x] (resolved 2026-11-17: public site + repo, clips kept) Before sending to anyone: private link ready, clips question (the app holds cuts of other people's videos),
      sending tool and pace. Nothing is sent without the owner's OK.

2026-11-16 (chat):
- [x] Remove "decide by 2,500" under part IV of the jump picture (bb861dd).
- [x] Content general, not tied to Tracy; Skydive California only in Part V (6eea713).
- [x] Find the dropzone's email, draft the review/help email in the owner's words, don't send (docs/email-draft.md).
- [-] (owner 2026-11-17: everything public instead) Private link only the dropzone can open (Cloudflare Access proposed); owner removes the public Vercel site first.
- [x] Future ideas into "Owner decides later": open source, ML model for packing mistakes.
- [x] Sections felt cramped: more space, margins, sizes (6eea713).
- [x] Incident cards: the clip opens the full YouTube video (6eea713).
- [x] Numbers tape: 2,500 = can you reach the holding point; emergency numbers separate (6eea713).
- [x] Real pictures next to every drawing, the rig first: rig back/front clips and the 8 rig-part photos placed;
      exit (Part I count), altimeter (Part II flow, poster now shows the dial), canopy-check POV (Part III deploy) and
      pattern POV (Part III pattern) placed 2026-11-16 14:00 run, seen EN/ES/UK/RU, light/dark, desktop/375 px.
- [?] Photo of the dropzone map from the ground course → next to the pattern drawing and in Part V (owner sends it).
- [x] Phone scrolling jumped: rail no longer catches touches (6eea713). Owner to confirm on the iPhone.
- [x] Header: title left, language and theme right (6eea713).
- [x] Independent expert fact-check of every line (6 reviewers, docs/review/expert/), fixes by fixer agents
      (docs/review/fixes/): Parts II, III done (8a2c519); I, dropzone, IV injuries in progress; IV emergencies next.
- [x] 24-hour finishing run every 2 h, then it stops itself (task aff-notes-finish-review).
- [x] Page guard and curriculum reviewer agents (.claude/agents/); mission at the top of this plan.
- [x] Altimeter unreadable: redrawn, reading under the dial (f4a136c).
- [x] Jump picture labels not vertically centred (bb861dd).
- [x] Video that can't be embedded: opens on YouTube, plus a button under every video (bb861dd).
- [x] Altimeter needle direction explained in the legend (counterclockwise when falling) (bb861dd).
- [x] Holding point: S-turns across the wind (east–west with a north wind), not circles (68e8d72).
- [x] Header highlight wrong after clicking a part (scroll stopped 8 px short of the line); fixed, all 5 parts checked.
- [x] Make sure every ask is tracked and done: this inbox + rule in CLAUDE.md + the 2-hourly run reads it.
- [~] Curriculum proposals: new chapters (landing off the DZ and after landing; other canopies; wind for students),
      decision-style test questions, "act now" rules where they're used. One per run, sourced.
      16:00 run (29068bb): Part II "When freefall goes wrong" (proposal #2: early container opening, pilot-chute hesitation,
      can't find the handle, the AAD is not a plan, 4 decision questions; USPA SIM 4-1 E + Cat A).
      20:00 run: #3 landing priorities and #5 low-turn recovery were already in Part III (low-turn chapter); built #4
      "Traffic: other canopies around you" in the pattern chapter (after opening steer away with rear risers, look before
      you turn, turn right / head-on both right, lower canopy has right of way but fly the same pattern; USPA SIM 4-1 + Cat G
      academics) and 2 decision questions in the Part III test (head-on canopy; low turn at 150 ft).
      22:00 run: #6 "Landing off the dropzone, and after you land" in the obstacles chapter (field by 2,000 ft, poles not
      wires, fences in straight lines, turbulence behind trees, into the wind but no low turn, PLF; livestock, gates, crops,
      report damage; USPA SIM 4-1 G re-read at uspa.org/SIM/4-1) + 2 decision questions; "tell the DZ" and "wind drags you
      on the ground" are not in the SIM → <q-check/> + 2 instructor questions. Next: #7 after you pull silver.
- [x] EP / FIX labels on the malfunction groups: EP links to the emergency procedure with a hover hint
      ("how to do the emergency procedure →"); FIX explains "two tries only, keep checking altitude, not fixed by 2,500 → EP".
      Make "two tries + watch altitude" stand out in the malfunctions chapter.
- [x] Numbers block: say what the numbers are (feet above the ground), "ft" next to each altitude, no word breaks.
- [x] Know your rig: a real photo for each of the 8 parts (reserve, main, pilot chute handle, AAD, red handle, silver
      handle, three rings, straps), shown next to the drawing when the part is picked.
- [x] Re-check every owner message of this whole chat (before and after the summary) against this inbox; add what's
      missing; result in docs/review/owner-asks-audit.md.
- [x] Rule: every owner message is first split into tasks / subtasks / questions, written here, and the reply points to
      these lines (CLAUDE.md + ~/agent-tools/rules/working.md). re-asked 2026-11-16 22:32 and 22:41: the rule existed;
      made stronger then (plan-first, statuses, redo lines; agent-tools d44fe9a, 0924b7d).
- [x] Final check at the end of the app: a "test yourself on everything" button (mixed decision-style questions from all
      chapters), a list of open self-answers to show an instructor, and "practise with your AI": one button copies a
      ready prompt (all key facts + quiz instructions) to paste into ChatGPT / Claude / any assistant (2026-11-16).
- [x] A reusable team for learning any new skill or certificate (diving, pilot, driving, drift…): research (Reddit,
      YouTube, pros, official manuals), a study app like this one, expert fact-check, curriculum review, page guard,
      notes capture, final exam + AI-tutor prompt, then reinforcement after the course. Skill `/study` in agent-tools,
      mission: knowledge that can save a life (2026-11-16). Done: ~/agent-tools/skills/study (+ /factcheck, /autopilot sprint).
- [~] Page guard findings (docs/review/page-guard/2026-11-16-full.md). Done 14:00 run: "ft" on the big altitude cards
      (altitude, EP, dropzone), count chips labelled "Count, not altitude", hero ring line "x/20 tests passed", UK
      "відокремлення"; "ft" on the dive-flow and pattern timelines and the altimeter legend (page guard
      docs/review/page-guard/2026-11-16-1415.md). Still open: bare altitudes in prose; big numbers per language format
      ("2,500 ft" over "2 500 футов"); RU "выброска" vs "отделение"; "ft" on every altitude everywhere (cards, prose,
      altimeter rows, legend, pattern labels, hero axis); label the canopy-check count chips as the count, not altitudes;
      one number format per language (UK/RU "5 500" vs "5,500"); translate the English injury-chart sources in ES/UK/RU;
      UK "викидання" → "відокремлення"; label the hero "0/20" ring; phone: sticky exit-count drawing covers the steps.
      16:00 run done (29068bb, seen headless EN/ES/UK/RU, light/dark, 375/1280; page guard 2026-11-16-1615.md): "ft" in prose (dropzone cards, altitude, pattern, malfunctions, mistakes, quiz answers), big numbers
      and timelines per language (UK/RU "2 500 фт", "3 с"), map labels and altimeter legend with units, RU "выброска" →
      "отделение", injury-chart sources translated, hero ring shows done/total inside (count no longer twice), exit-count
      picture smaller on phones, pattern clip poster shows the drawn pattern.
      18:00 run (page guard 2026-11-16-1615.md open problems 1–10): "ft" on the last bare altitudes (flow, altitude
      chapters, all 4 languages); ffwrong and mal quizzes no longer put the right answer in A again and again (now BCAC,
      ABCC); first-screen card label without "bad main:" repeat; height tape gives its first column more room; percent in
      each language's format (1,9 %); category letter stays with its number ("E 4 500 футів"); long instructor
      questions split one per line. #1 altimeter caption, #4 "Prop" quotes and #6 list heading were already fixed in 29068bb.
      Page guard 2026-11-16-1800.md: all of the above seen headless EN/ES/UK/RU, light/dark, 375/1280. Also fixed: UK/RU
      quiz end text after a wrong answer read as "chapter passed" (now "passed when all answers are right"; checks pass,
      not yet seen on screen). 20:00 run: the other long instructor questions split one per line (aircraft emergency, which
      aircraft, wave-off/D/E/D-1, radio); seen headless by page guard 2026-11-16-2000.md, which also asked for: wrong quiz
      options as long as the right one (done), same words ("Hit early", ES "esos frenos") (done). Still open: split the
      remaining long instructor questions (two canopies out, on the map, flare one/two-stage, ES EP, hard pull); ranges like "6,000 or 5,500 ft" carry the unit once (fine to read? owner).
- [?] Big reorder (Part IV "act now" first, statistics and real cases in their own part, EP button in the header): ask.

Added by the owner-asks audit (docs/review/owner-asks-audit.md):
- [x] Email draft: also ask for the ground-course presentation (slides, pictures, videos) the owner wanted from the dropzone (from 2026-11-16)
- [~] Hand signals: owner remembers about 15 instructor signals from the course, the app has 13; find the missing ones (USPA Cat A list, ground course) or ask (from 2026-11-16).
      16:00 run: research done (docs/research/hand-signals-gap.md): the USPA chart (SIM App. A) has 11, the app covers 9;
      missing **legs in** and **OK** (+ wave-off as a student signal). Needs filmed hands for the two new cards; the
      instructor question (how they show legs in / OK, closed fist = practice touch or pull now?) added to "questions".
- [x] Part IV emergencies expert fixes (both reports, the safety items in docs/review/fixes.md) applied, checked and committed; the expert fact-check line above is ticked but this scope is still todo (from 2026-11-16)
- [x] Collect the ask-owner questions from every fixer log (docs/review/fixes/*.md) into "Waiting on you", one question each with a recommended answer; fixes.md says they are there, they are not (from 2026-11-16)
- [x] Put the two open questions under "Waiting on you": lowercase headlines everywhere (§0b) and the big reorder (line above) (from 2026-11-16)
- [x] Run the page guard (.claude/agents/aff-page-guard.md) on all chapters: never run yet, docs/review/page-guard/ doesn't exist (from 2026-11-16)
- [x] Tidy stale ticks: §0c "Two more checkers" and "24-hour finishing run" are [ ] while this inbox has them [x] (from 2026-11-16)

### Standing preferences (apply to all future work)
- Real footage or photos over drawings; a picture or clip next to every piece of text; moving clips over still images.
- Lists with bold key words, not paragraphs; plain bold, no highlighter.
- Don't save space: generous margins, gaps and text sizes; calm and readable, not stark white.
- Content stays general ("your dropzone"); one dropzone's facts only in Part V.
- When the owner states a fact, check it against the sources and tell him plainly where he was wrong.
- For a redesign, propose a few options first and let the owner pick; animations smooth and not distracting.

## Waiting on you
- **Instructor briefing:** the app's last Part IV chapter "questions for your instructors" (18, by jump phase) holds every
  school-specific doubt from the fact-check (count 3 or 5 after the pull, where to look in the flare, aircraft-emergency
  altitudes, which instructor is outside, hard pull: reserve only or cut away first, RSL/MARD, reserve handle type,
  wave-off count, the shake on exit, AAD model). Bring the answers; each fixes a `check` badge.
- Hand signals: add **legs in** and **OK** (USPA chart, SIM App. A) as two new cards? They need filmed hands; the
  instructors' version (and whether a closed fist means practice touch or pull now) is in the questions chapter.
  Recommended: yes, add both once a clip is found.
- Ground-school test photo: Q27 key says 300 ft or 1,000 ft? (Q28 already asks about 300.)
- Lowercase headlines everywhere (Stoic) or sentence case like the first screen? Recommended: sentence case.
- Big reorder: Part IV "act now" chapters first, statistics and real cases in their own part "learn from others", an
  always-visible EP button in the header? Recommended: yes.
- Email to Skydive California (info@skydivecalifornia.com, checked on their contact page): review request + offer to
  help for free + "what would you add for your school?". Draft: `docs/email-draft.md` (not sent). Link: the public site.
- ~~Private link only the dropzone can open~~ (dropped 2026-11-17: everything public).

- Photo of the dropzone map the instructors drew in ground school (holding point, pattern, landing area): send it and
  it goes next to the pattern drawing in Part III and into Part V.

- ~~aff-notes.vercel.app: owner removes it~~ (2026-11-17: the site stays public).

## Owner decides later
- **Translation platform** (Weblate, free for open source) once outside translators show up: they edit in a web page,
  Weblate opens PRs to `src/content/i18n/*.json`, CI checks them.
- (Decided 2026-11-17: the repo and the site are public; clips kept with credits, creators asked.)
- Native app version (iPhone) built on the same content files.
- Reuse for other dropzones: content is now general ("your dropzone"); dropzone facts live only in Part V. Needs rights
  from the clip creators (or own footage) before anyone else gets it.
- Open source the app (code + content, without the YouTube clips).
- ML model that spots packing mistakes in a video of someone packing (idea, 2026-11-16).

---

## 0. Round 2 (owner, 2026-11-16, evening)
- [x] Keep working through this plan: autopilot task `autopilot-aff-notes`, 9:30 and 21:30 daily.
- [x] "Test yourself" as cards: one question per card, next/previous, score.
- [x] Parts and chapters visibly separated: full-width tinted band per part, cover with roman numeral, icon and
      contents; accent tick per chapter; header takes the part's tint (design review applied).
- [x] Icons where there was only text: plane rules, gear (+ 4-check timeline), altitude rules, obstacles.
- [x] Less wall of text: every chapter rewritten as short bullet lists with bold key words (helpers, all 5 files).
- [x] Gear chapter drawing of the rig (design review #12). 2026-11-16 autopilot: "Know your rig" — back and front
      drawing, tap one of 8 parts (reserve, main, pilot chute, AAD, red, silver, three rings, straps) and it lights up.
- [x] Climb-out drawing: hands grab the door handle and stay on it as the body moves.
- [x] Videos open inside the page (player at the right second), not a new tab; same for the "watch" links.
- [x] Exit count: steps clickable to see each pose (check in, check out, …).
- [x] "Hide the names" button renamed to "Test yourself: hide the names" with a hint.
- [x] Design review by a separate agent; new palette (paper vs card contrast), posters for clips, quiz styles.
- [x] Text review agents: all 5 content files reviewed in EN/ES/RU (~700 fixes; terms unified).
- [x] More research: where people get injured → `docs/research/injury-data.md`; 4 bar charts in the injury chapter (phase,
      body region, leg, landing causes); fixed 73–90% → 73–88%, ankle 30–60% (unsourced) removed, the 20% is tandems.

- [x] New first screen (owner picked A + C + D): the jump as a clickable picture, continue where you stopped with
      test progress, and the key numbers as cards.

- [x] Scroll progress as a jump: a skydiver falls down a rail on the right (sits in the plane, flies the box,
      hangs under the main, red reserve in emergencies), lands among trees and houses, cheers with confetti;
      the rail replaces the scroll bar (click or drag).
- [ ] At the very end the jumper also dances (today: arms up + confetti only).

## 0b. Round 3 (owner, 2026-11-16, night)
- [x] Gradient between part bands (and smoother in dark: lighter dark bands, oklab fade).
- [x] Jump picture redrawn full width + one-time flight animation with replay; box pose (seen from above) in
      freefall, upright under canopy; works on phones.
- [x] Number cards → altimeter tape in jump order + two timers.
- [x] Climb-out clip bigger (single clips full width, title slide cut); step 6: head and chest out of the door.
- [x] Scroll rail: plane drawn with the jumper in the door; smoother scrolling (transform, no re-render per frame).
- [x] Clip cards fully clickable → in-page player.
- [x] Key words: plain bold (the highlighter band was hard to read).
- [x] Header: frosted glass tinted by the part underneath, plain paper over the first screen; settings chips in header colour.
- [x] Language menu that scales to more languages + theme button (system/light/dark) with an instant tooltip.
- [x] Ukrainian everywhere: interface and all 5 content files (~950 strings), type-checked like the others.
- [x] First screen text rewritten, sentence case: "Your first jump, step by step."
- [ ] Other headlines are still lowercase (Stoic style). Owner disliked lowercase on the first screen — same everywhere? (ask)
- [x] Real "what went wrong" videos: new chapter with 13 clips (low turns, flare, wind, obstacles, collision, AFF freefall,
      cutaway), each with what happened + the lesson + the original in the in-page player (docs/research/incident-videos.md).
- [x] Card grids redesigned: top-left aligned, icon + title on one row, equal heights; gear checks as a numbered row with arrows.
- [x] Section-by-section review by 3 helpers (docs/review/), content fixes applied (parts I–V); screen findings partly done.
- [x] PWA and sharing: favicon (SVG + PNG), app icons incl. maskable, link-preview image (og.png 1200×630), description,
      keywords, Open Graph + Twitter tags, theme-color light/dark, manifest, service worker (app shell precached,
      clips cached on play + "Save everything for offline" button), skip link, aria-current, labelled player,
      security headers in vercel.json. Icons/preview regenerate with `node scripts/icons.mjs`.
- [ ] Verify the service worker in real Chrome/Safari (the app's built-in browser refuses to register it).
- [ ] When hosted: set VITE_SITE_URL in .env to the absolute URL so link previews show the image.
- [x] Private GitHub repo vekaev/aff-notes (private), autopilot pushes there.

## 0c. Round 4 (owner, 2026-11-16, late)
- [x] Jump picture: no "decide by 2,500" line under part IV.
- [x] Incident cards: wide, the video is a play button that opens the full YouTube video at the right second.
- [x] More air everywhere: one spacing scale (--s1…--s10), bigger gaps between blocks and chapters, more padding in
      cards, 15–16 px text in cards, list cards one per row on phones.
- [x] Content general, not tied to Tracy: "your school / your instructors / ask your dropzone"; Skydive California facts
      (north wind, holding point by the playground, turn limits 180/90/45) only in Part V, now "Your dropzone, example".
- [x] Phone scrolling jumped: the progress rail on the right edge caught the thumb and jumped the page. On touch screens
      the rail now only shows progress; the header re-renders alone when the part changes. No layout shifts measured.
- [x] Header: title left, part in the middle (numeral only on phones), language + theme pinned right.
- [x] Numbers stay with their units on one line ("5 s", "2 500 футов", "SIM 4-1"); quiz button "Next question";
      holding point: S-turns / figure-eights within the 180° limit (asked the instructors: circles allowed?).
- [x] Independent expert fact-check: `.claude/agents/aff-expert-reviewer.md` (an AFF instructor seeing the app for the
      first time, checks every claim against USPA SIM/BSR, manuals, Parachutist). 6 reviewers, reports in
      `docs/review/expert/`; then one list of fixes: clear ones applied, the rest asked.
- [x] Two more checkers: `.claude/agents/aff-page-guard.md` (page still works and reads well: every chapter, 4 languages,
      light/dark, phone/desktop) and `.claude/agents/aff-curriculum-reviewer.md` (what's missing, new sections, more and
      better tests, visuals). Reports in `docs/review/page-guard/` and `docs/review/curriculum/`.
- [x] 24-hour finishing run: task `aff-notes-finish-review`, every 2 hours from 2026-11-16 12:00 to 2026-11-17 10:00,
      then it switches itself off. Each run processes the open review findings and reports.
- [ ] Owner to re-check scrolling on the iPhone (the fix is seen in the emulator only).
- [x] Numbers tape fixed: 2,500 = can you reach the holding point (canopy plan), then 2,000 over it, 1,000 leave it;
      the emergency 2,500 (decide and act on a bad main) and 1,000 (no cutaway below) moved to their own red row.
- [x] Real footage next to every drawing (rig with its parts first, exit, altimeter, pattern POV, canopy check POV).
- [x] Email draft rewritten in the owner's words (review + free help + what to add); not sent.

## Facts to verify (doubts raised by the text reviewers; check against sources, then fix or mark <q-check/>)
- [x] Arms 90/90 = thumb and pinky: confirmed by the video's narration (lines along thumb and pinky form 90°).
- [x] Slider stuck: the app already says "pump the toggles (some schools teach rear risers)" + <q-check/> + an
  instructor question; USPA SIM 4-1 has no slider procedure (checked 2026-11-17 04:00 run, uspa.org/sim/4-1).
- [x] (06:00 run 2026-11-17: part4 now "about 4,777 reserve rides in 2025 … (USPA survey estimate, 1 per 726 jumps)", all 32 languages; uspa.org/find/faqs/safety re-read; it has no 2023 figure, so "2023: 4,913" below is unconfirmed) "~4,000 cutaways a year": the per-jumps ratio is gone; part4 now says "more than 4,000 cutaways a year (USPA,
  2019)". Newer USPA figure (uspa.org/find/faqs/safety, member survey): 2025 ≈ 4,777 reserve rides, ~1 per 726 jumps
  (2023: 4,913). Content task: update the part4 line to the 2025 figure and say "reserve rides" (a survey estimate);
  waits until the school-rules chat (all content files open, running 04:01) commits.
- [x] "5–6 s at full brakes" is no longer in the app; the stall time is a question for the instructors (part4 questions).
- [x] Water + buildings match SIM 4-1 G (checked 2026-11-17 04:00): "Flare to half brakes at 10 feet above the
  surface"; building: "flare 10 feet above the first point of contact" = height, as the app says. Not in the app
  yet (optional): open the face shield, activate flotation; "poor depth perception over water".
- [x] Tips now say "category A/B/C" like the rest of the app.
- [x] Source links for the injury charts (Sweden 2007, USPA, Netherlands 2024).

## 1. Content the owner dictated (must all be on the page)

### Part I — plane and exit
- [x] Seatbelt on from take-off until told; helmet on; instructors lead you to the door.
- [x] Aircraft emergency: what to do by altitude (details forgotten → marked "check"; USPA options added).
- [x] Gear: you don't pack; main by a packer, reserve only by a certified rigger, sealed; AAD; 4 gear checks. (msg 10)
- [x] Climb-out, 6 steps: face the prop · right hand · right foot closer · left hand · left foot closer · head out, chin up, chest out.
- [x] Exit count: "Check in" → OK, "Check out" → OK, then rock out–in–out ("Prop, up, down, arch") and go.

### Part II — freefall
- [x] Body position after exit: hips down/forward, arms "square", thumb-to-ear check, legs (owner said "together and up" → check).
- [x] Altitude checks: every 3 s (USPA; the owner's "every 3") / ~5 s; before and after every maneuver; when in doubt; on the instructor's signal (the forgotten 4th).
- [x] Circle of awareness: altitude → left instructor → right instructor → chin up → altitude (English name + explanation searched).
- [x] 3 practice touches: left hand over the head, right hand back to the pilot chute; then COA again.
- [x] 6,000 lock on; **pull at 5,500** (corrected from 5,000).
- [x] Hand signals, real filmed hands, ~12+: pull (one finger), arch (thumb down), legs out, good, relax, arms 90/90, toe taps, COA, practice touch, chin up, check altitude (wrist), shaking on exit.

### Part III — under canopy
- [x] Pull: right hand to the pilot chute "ball" at the bottom right; count 5 ("one thousand … five thousand") before judging.
- [x] Canopy check: there / square / stable / steerable; unstow toggles, turns, practice flare.
- [x] Holding point (by the playground): over it at 2,000, hold/circle 2,000 → 1,000; **at 2,500 decide** if you can reach it and left- or right-hand pattern.
- [x] Pattern: 900 downwind → 600 base (90°) → 300 final into the wind → full flare at ~10 ft (3 m); wind usually from the north.
- [x] Turn limits: above 1,000 ≤ 180°; 1,000–300 ≤ 90°; below 300 ≤ 45° (owner's final version).
- [x] Low turn explained (turned too sharply right at the end) with a picture + video.
- [x] Four hazards + what to do: trees (half brakes, feet together, protect face, wait), water (half brakes, breath, out of the harness, swim away, leave gear), buildings (flare/PLF, along a wall not into it), power lines (parallel, touch nothing, nobody touches you, wait). Never save the gear.
- [x] Final: full flight, hands up, canopy level, legs together; flare smoothly as a count (5-4-3-2-1), not 5 full seconds; arms: elbows back, hands close; look at the horizon, not the ground.
- [x] PLF: 5 points of contact, roll along the side (owner said "stomach, back" → corrected), video.
- [x] Ground-school test page Q26–32 (from the owner's photo) with answers.

### Part IV — emergencies
- [x] Two parachutes: main and reserve; the reserve flies like the main.
- [x] EP: look red, (grab), look silver, (grab), peel red, pull silver, arch, check reserve; one-hand vs two-hand versions; video.
- [x] Owner's unclear bit "clear the lines right to left toward the shoulder" → listed as a question.
- [x] Decision altitude 2,500; hard deck 1,000; 5-second rule; "two tries" for fixable problems.
- [x] Malfunction families: nothing out (hard pull, PC in tow, bag lock), out but not flyable (streamer, line-over / "caught on top", spinning), fixable (line twists: risers apart + kick, don't release toggles; slider; end cells). First-person clips.
- [x] Two canopies: biplane (don't cut away), side by side (don't cut away), downplane (cut away main); videos.

## 2. Research the owner asked for
- [x] COA / exit count / hand signals in English (USPA, dropzones).
- [x] Reddit + USPA: why people get injured or die → chapter "how people actually get hurt".
- [x] Deep research per stage (YouTube, Reddit, USPA, coaches): mistakes, tips, videos → `docs/research/Ошибки и советы для студентов AFF.md`, chapter "mistakes and tips".
- [x] Public tutorial videos with timestamps for every stage → clips + "watch" links.
- [x] The dropzone at 25001 Kasson Rd, Tracy = Skydive California → `docs/research/skydive-california.md`, Part V.
- [x] Reading list (USPA online ground school, dive flows, SIM 4-1, Brian Germain, Parachutist) → Part V "read and watch next".
- [ ] Check every owner statement against the sources and list the corrections in one place (partly done inline as "check").

## 3. Visuals
- [x] Real footage instead of drawings (silent looping clips, 43 cut).
- [x] Hand signals as real hands; malfunctions first person; flare, landing, PLF, EP, two canopies, deployment, COA, body position.
- [x] Keep the climb-out drawing (owner found it clear); exit count, altimeter, landing pattern map, low-turn diagram.
- [ ] Obstacles: no footage yet (find training clips for tree / water / power-line landings).
- [ ] Aircraft emergency, climb-out on our aircraft type: no footage.

## 4. App and design
- [x] Real app: Vite + React + TypeScript; content in typed files with en/es/ru side by side (missing translation = build error).
- [x] Languages: English (default), Spanish, Russian, in that order; remembered; no layout jumps (system font, fixed video boxes).
- [x] Stoic design: paper, ink, white cards, bold lowercase headlines with a period, black pills, lots of air; chapters kept.
- [x] Reading progress bar at the top.
- [x] Test after each chapter; passed tests remembered; score in the header.
- [x] Fix: Russian text overflowing in the canopy check list.
- [ ] Check every chapter in all 4 languages, light and dark, phone width (partly done: spot checks only).
- [x] Commit (local git).
- [x] Publish: decided — private GitHub repo only; the app is not published (clips are other people's videos).

## 5. Other
- [x] Email to the dropzone asking for the slides: draft only (`docs/email-draft.md`).
- [x] Moved the work out of the temporary folder into `~/Documents/dev/aff-notes`.
