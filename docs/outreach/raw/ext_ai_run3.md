# AI deep-research run 3 (owner pasted 2026-11-17): "Strategic Research Plan for the Global Skydiving Safety Infrastructure"

Condensed by the parent chat; the owner's paste was a long prose report with no CSV. Its "[cite: n]" numbers were
not pasted, so every claim and lead must be verified before use. AI output: leads, not facts.

## Leads (sources to harvest, if public and allowed)
- OpenStreetMap Overpass: `sport=parachuting` combined with `aeroway=aerodrome|airstrip`, `leisure=sports_centre`;
  Geofabrik regional extracts + Osmium for offline filtering. (We already ran an Overpass query: raw/osm.csv.)
- FAA Airmen Certification database: certified parachute riggers ("Parachute Seal Symbol") and Designated Parachute
  Rigger Examiners (DPRE). NOTE: personal records of individuals (names, home addresses, no emails): do NOT harvest
  people from it for email; at most count riggers by state, or find DPREs who publish a business contact.
- AviationDB Airman Query (historical airmen records): same caution.
- USPA Dropzone Finder: it says 241 group-member DZs (our harvest found ~170 US + international in the locator: check).
- "Best Maps Ever" directory: dropzones state by state.
- Burble software: 108 US + 29 EU DZs (its terms forbid scraping: already flagged; don't harvest).
- CSPA Active Rigger List (names, rating expiry, province, email): check if public and whether emails are business.
- International Bodyflight Association (IBA) and Indoor Skydiving Source tunnel directories (tunnel diameter, speed).
- FAI ISC Bureau, Presidents of Honour, Technical & Safety Committee delegates (FAI plenary records).
- Federations to map with safety roles: ISC, USPA (Director of S&T, Regional Directors, S&TAs), British Skydiving
  (Compliance Officer / DPO — legal inboxes, not outreach), APF (STOs, ATC Insurance Solutions), DFV, KNVvL, CBPq, PASA.
- Gear makers' people it names: Performance Designs (Bill Coe, John LeBlanc), UPT (Bill Booth), Vigil (AAD nv/sa,
  Tongeren) with regional service centres Vigil America (FL), Downward Trend (AU), Rhomech Rigging (UK); Airtec CYPRES.
- iFLY franchise location inboxes (e.g. info.austin@iflyworld.com), SkyGroup Investments LLC (Austin).
- Tunnels: Aero Gravity Milan (5.2 m, 370 km/h), Flyspot (Warsaw, Katowice, Gdansk), Airspace Indoor Skydiving (BE).

## People it names (researchers / media)
- Dr. Anton Westman (Karolinska / Umeå): ACROPOSE, neck loads at opening shock.
- Dr. Pascal Edouard (CHU Saint-Étienne): FFP 10-year study, 6.2M jumps.
- **Michiel Damhuis (Radboud UMC, Netherlands): 25-year KNVvL incident data, 2.1M jumps, rising injuries since ~2016
  (new to us).**
- Christiane Barthel (University Hospital Zurich): systematic review, injury rate 0.044 % (Rauer corresponding).
- Skydive Magazine (Stine Solberg, Alethia), Skydive Radio (Dave Schwartz), Dan Brodsky-Chenfeld, Brian Germain.
- Dropzone.com "since 1994, admin Sangiro" (our research: domain redirects to an unrelated site since 2026-11-16 /
  closed end of 2024 — verify), r/SkyDiving, TEEM videos.

## Content claims (fact-check before any use in the app)
1. Netherlands 25-year study (2.1M jumps): injury rate trending up from ~2016; hypothesis: wind-tunnel time builds
   freefall skill without canopy skill → overconfidence → downsizing too early / hook turns → landing injuries.
2. A day in the tunnel ≈ 60 skydives of freefall time.
3. RSL: lanyard from main risers to reserve pin; fatalities skew to jumpers who don't pull the reserve after cutaway.
4. MARD (Skyhook): reserve at line stretch in ~0.4–0.5 s; saves 400–500 ft vs manual; risks in wingsuit / CRW when the
   main is entangled.
5. Vigil: 20-year service life; battery replacement at 10 or 12 years. FAA reserve repack every 180 days.
6. Wing loading: USPA = recommendations (SIM); British Skydiving and FFP = binding canopy-size charts (BS "Form 330i"?
   verify the form number) tied to exit weight and jump numbers.
7. FAA Part 105: cloud clearances; violations can cost the pilot's licence, fines, and USPA group membership.
8. SMS (Safety Management Systems): FAA Part 5 now covers Part 135 and 91.147; USPA encouraging SMS at DZs.
9. AFF from 13,000 ft with two instructors; static line from ~3,500 ft (run 1 fact-check found ~4,000 ft for US).
10. Cognitive load: stress/cortisol restricts working memory; "no pull / low pull" a persistent fatality category;
    NTSB taxonomy cites human error / incorrect procedures as principal causes.
11. Military: T-10 → T-11 round canopy transition cut ground-impact injuries (slower descent, fewer oscillations);
    failed PLF is the leading cause of ankle, knee and spine injuries.
