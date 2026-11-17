# r2 leads: ready-made lists from the AI research report (run 2026-11-16)

Output: r2leads_out.csv, 13 new rows (12 with email, 1 without: Indoor Skydiving Leipzig, announced, no site yet).
Dedupe against docs/outreach/contacts.csv (3,795 rows) by website domain, email, name+country, then a manual
fuzzy name check (club name variants). Nobody was contacted; no forms, logins or CAPTCHAs.

## 1. GitHub OTGApps/USPADropzones
- Exists, but archived; data moved to github.com/OTGApps/Dropzones (assets/dropzones.geojson, v2026.08.29, 318 DZs).
- Licence: none in either repo (no LICENSE file). Data is factual, scraped from the public USPA DZ locator; used
  here for a private list only.
- 318 entries -> 317 already in contacts.csv (286 by domain, 30 by email, 1 by name). The 1 leftover
  (AIRCREW and Airfox, aircrew.de) is AIRCREW Fallschirmsport already listed under aircrew.eu, so dropped. New: 0.

## 2. USPA S&TA locator (uspa.org/locator/sta)
- Exists and is public (robots.txt: Allow /, content-signal ai-train=no, use=reference).
- No list on the page: results only come from an interactive search (DnnSharp ActionGrid, POST/JS). Not harvested,
  since that means submitting a search form; and S&TA names are individual volunteers. New: 0.
- If wanted: the owner can run the search by hand per state.

## 3. PIA member directory (pia.com/about/our-members)
- Exists, public, 219 member pages, with contacts, phone, email, website per member.
- NOT allowed: pia.com/terms forbids "systematic or automated data collection activities (including ... scraping,
  data mining, data extraction and data harvesting)" and any marketing use without written consent. Not harvested
  (only the list page and one member page were opened to see the layout). New: 0.
- Note: contacts.csv already holds ~174 lines mentioning pia.com from an earlier run; the owner may want to review those
  against these terms.

## 4. DAeC LSG-B register (lsgb.daec.de/sprungfallschirme/)
- Exists, public, no login; robots.txt allows the page. Section "Kontakt Registrierte Ausbildungseinrichtungen"
  (10 training organisations) + "Genehmigte Ausbildungseinrichtungen der ... Vereine" (4 state associations with
  5 affiliated clubs). Examiner board (Prüfungsrat, private persons with phones) deliberately skipped.
- 19 entries -> 10 new (5 clubs/ATOs, 4 state air-sport associations, 1 Fallschirmsportzentrum Berlin);
  9 already in contacts (Dessau, Firebird, OFC Altenburg, Zerbst, Oberhausen, Marl, Bielefeld, DLR, Rüwalders,
  FSC Neustadt/W).
- Enrichment for existing rows (not written as new rows): OFC Nobitz info@ofc-altenburg.de, person Thomas Geisler;
  FSV Zerbst fsvzerbst@aol.com, Gerald Bürgel, 0178-4200060; FSC Oberhausen franzscheuermann@t-online.de,
  Franz Scheuermann, 09338-99850.
- Emails are as published by DAeC (several are personal-looking addresses of the club contact person); confidence medium.

## 5. Indoor Skydiving World (indoorskydiving.world/wind-tunnels/)
- Exists, public table of 348 tunnels with status. Terms of service: personal, non-commercial viewing licence
  (no explicit scraping clause). The sitemap URL returned a bot-check page ("One moment, please"), not bypassed;
  the main table page and 4 tunnel pages loaded normally.
- Status: 244 open, 28 announced, 22 closed, 12 cancelled, 10 private, 10 under construction, 9 military, 6 on hold,
  4 temporarily closed. Closed/cancelled skipped.
- 299 tunnels already in contacts.csv by their ISW URL, 7 by name. New: 4 (iFLY Atlanta, iFLY Austin, Indoor
  Skydiving Viernheim, Indoor Skydiving Leipzig [announced]); contact details taken from the ISW tunnel page.

## 6. FAI ISC delegates
- www.fai.org returns 403 / Cloudflare challenge: not bypassed. The mirror www-2025.fai.org/page/isc-delegates is
  public (robots: crawl-delay 10) and lists 69 countries with delegate and alternate names (no emails).
- Every one of the 69 NACs is already in contacts.csv (64 rows already carry the ISC delegate names). New: 0.
- Enrichment for 5 existing NAC rows lacking delegate names: Austria Gernot Rittenschober / Arnold Hohenegger;
  Denmark Natascha Enoch-Larsen / Nikolaj Nedovic Larsen; Germany Natasha Higman / Gerhard Wagner; Netherlands
  Ronald Overdijk / Mike Pennock; Slovenia Saso Tepina / Joze Veldiw (spelling as on the FAI page).

## Totals
| list | entries | already in contacts | new |
|---|---|---|---|
| OTGApps USPA dropzones | 318 | 318 | 0 |
| USPA S&TA locator | n/a (search only) | - | 0 |
| PIA directory | 219 | not harvested (terms) | 0 |
| DAeC LSG-B | 19 | 9 | 10 |
| Indoor Skydiving World | 348 (326 not closed) | 306 | 4 (+12 cancelled skipped) |
| FAI ISC delegates | 69 countries | 69 | 0 |
