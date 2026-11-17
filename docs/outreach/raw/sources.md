# Where to get a worldwide list of skydiving dropzones

Checked 2026-11-16. Goal: find the sources that list skydiving organisations (mainly dropzones) worldwide,
so the outreach list can be completed and kept up to date. Nothing was contacted, signed up for or submitted.

## How many dropzones exist? (best estimate)

**About 1,300-1,500 active outdoor dropzones worldwide; roughly 2,000 if every small club and seasonal
airfield is counted.**

| Source | What it counts | Number |
|---|---|---|
| dropzone.com country selector (archived 2024-11-29) | listed DZs, 100 countries, sum of country counts | **1,934** (incl. closed/duplicate listings) |
| dropzone.com headline (same site, search snippets 2025-26) | "Dropzones Listed" | **1,311** |
| skydivelocations.com (search snippets) | "Dropzones" in its directory | **1,292** |
| dropzone.com, United States | listed | 334 ("more than 350" in its own text) |
| skydivelocations.com, United States | listed | 306 |
| poidata.io, United States (Google-Maps-style POI data, June 2026) | businesses in the "Skydiving center" category | 614 (includes tandem resellers, tunnels and booking offices) |
| USPA DZ Locator | US Group Members + International Affiliates | count not shown on the page (list loads by script); historically ~200-230 US Group Members |
| British Skydiving | affiliated Parachute Training Organisations, UK | 23-28 (its own pages differ) |
| OpenStreetMap (my query, see below) | features tagged as parachuting/skydiving | 268 tag-based, more by name |

Why the range: the two independent directories (dropzone.com 1,311 and skydivelocations.com 1,292) agree
closely, and both are fed by DZ owners. The 1,934 sum from dropzone.com's country page includes stale
listings. Google-category counts (US 614 vs ~330 real DZs) roughly double the real number because tandem
booking agents, tunnels and offices share the category. Top countries by listings (dropzone.com 2024):
US 334, Germany 92, France 83, Brazil 70, Australia 64, Italy 52, Russia 46, Argentina 44, Canada 43,
UK 33, Poland 27, South Africa 27, Spain 25, Czech Republic 24, Sweden 23.

## The sources, one by one

### 1. National federations (the official lists) - best for completeness per country
- **What**: each country's parachuting body keeps the list of the centres it licenses: USPA (US),
  British Skydiving (UK), DFV/DAeC (Germany), FFP (France), APF (Australia), CSPA (Canada), FAI-member NACs
  elsewhere. These are the "official directory" the brief prefers.
- **Size**: 100+ countries are FAI members (FAI says "over 100 member organisations"); about 60-70 of
  them have active sport parachuting and send a delegate to the FAI Skydiving Commission (ISC, formerly IPC).
  The 2025 ISC plenary in Rome had about 75 delegates, alternates and guests.
- **Where the list of federations is**: FAI ISC pages (fai.org/commission/isc - blocked automated fetch
  for me, HTTP 403) and the minutes of each ISC plenary (PDF on fai.org, e.g.
  `fai.org/sites/default/files/isc/2025/plenary_2025/minutes_-_75th_isc_plenary_rome_italy.pdf`), which
  record attendance per country. curlie.org/en/Recreation/Aviation/Skydiving/Associations is an old
  hand-made list of associations.
- **Cost**: free. **Legal**: public pages; fine to read and record business contacts by hand.
- **How to use**: build one row per federation (type association), then open each federation's
  "find a drop zone" page and copy its member list. This is the most reliable way to a complete list.
- **USPA DZ Locator** (uspa.org/dzlocator, uspa.org/dzs): lists US Group Members and International
  Affiliates (non-US DZs paying $330-495/yr, must keep a USPA instructor). The list is rendered by a
  script (DNN plugin), so a plain fetch shows no rows; no export button. Each detail page
  (`uspa.org/dzdetails?accountnumber=...`) shows address, phone, website, often email. Group Members
  renew every 31 March and lapsed ones are removed, so it is current. Terms: uspa.org/terms (copyright
  notice; use the data for reference, do not republish the directory as a whole).

### 2. dropzone.com DZ database - biggest single worldwide directory, but see the warning
- **Size**: 1,311 listed (headline); country page sums to 1,934 across 100 countries (2024 snapshot).
- **Fields**: name, address, map pin, website, phone, often email, aircraft, services (AFF, tandem),
  reviews. Listings are claimed and maintained by DZ owners.
- **Cost**: free to read. No export or API.
- **WARNING (2026-11-16)**: `dropzone.com` and `www.dropzone.com` now answer with HTTP 301 to an
  unrelated Dutch site (`tanzu.nl`); DNS points to a forwarding service. The domain looks lapsed, sold or
  misconfigured. Do not follow its links or enter anything there. The last good copy is on the Internet
  Archive (e.g. web.archive.org snapshot 2024-11-29 of /dropzones/ with per-country pages
  `/dropzones/<country>/`). Archived data is up to 2 years old: verify each DZ on its own site.
- **Legal**: content is copyrighted by the site; reading entries and recording each DZ's own public
  contact is fine, bulk-copying the database is not.

### 3. skydivelocations.com - second worldwide directory
- **Size**: 1,292 dropzones (header on every list page, paginated `?page=N`, country filter).
- **Fields**: phone, aircraft, facilities, website; contact via the site.
- **Cost**: free. No export seen. Its TLS certificate did not verify for my fetch tool on 2026-11-16, so I
  could not open it directly; numbers come from search snippets.
- **Legal**: same as above; use it as a checklist, take contacts from each DZ's own site.

### 4. Other worldwide maps / apps (small, use only as cross-checks)
- avpay.aero/directory/skydiving (map directory, blocked automated fetch: 403), PeakX app
  (peakxapp.lovable.app, new, coverage unknown), Skydive Compass iPad app, Parachute Industry
  Association links page (thepops.org/links-to-organizations, for gear makers and associations).
- **Cost**: free. Not worth scraping; good for spotting DZs missing elsewhere.

### 5. Wikipedia / Wikidata - not useful as a dropzone list
- No "List of drop zones" article exists. `Category:Parachuting organizations` has 25 pages (USPA, BPA,
  APF, CSPA, FFP, PASA, PAI, ISC, PIA, ...). `Template:BPA Drop Zones` lists UK DZs. Wikidata has a class
  "parachute club" (Q62603260) with only 3 items.
- **Use**: a handful of federation rows, nothing more. Licence CC BY-SA (facts are free to use).

### 6. Google Maps, category "Skydiving center"
- **Size**: the category is wide: poidata.io counts 614 "Skydiving centers" in the US (June 2026) against
  about 330 real US dropzones, because tunnels, tandem booking agents and offices share it. Expect about
  1.5-2x the real DZ count in any country. I could not count per country myself (no API key; Google
  search budget for this run was used up).
- **Places API (New) cost**, official price list, per 1,000 calls, first band:
  Text Search Essentials (IDs only) free/unlimited; Text Search Pro $32 (5,000 free/month);
  Text Search Enterprise $35 (1,000 free/month); Place Details Essentials $5 (10,000 free);
  Pro $17 (5,000 free); Enterprise $20 (1,000 free). `websiteUri` and phone numbers are Enterprise
  fields. There is no email field. A worldwide sweep (say ~400 Text Search Enterprise calls of up to 20
  results, by country/region) costs about 400 x $0.035 = ~$14, mostly inside the 1,000 free calls per
  month, so in practice about $0.
- **Legal**: Google's Places policies say "Don't export, extract, or scrape Google Maps Content for use
  outside the Services." Only `place_id` may be stored indefinitely; coordinates at most 30 days; other
  content (name, phone, website) only as the Service Specific Terms allow, i.e. not in a permanent
  spreadsheet. So: legal use is to look a DZ up, then take the contact from the DZ's own website and
  record that site as source. Building a stored CSV from Places results is against the terms.
- **Third-party scrapers** (Outscraper: Google Maps scraper $3 per 1,000 places after 500 free;
  "Emails & Contacts" from websites $3 per 1,000 domains after 500 free; poidata.io sells per-category
  lists by quote): cheap, but they scrape Google against its terms. Not recommended.

### 7. OpenStreetMap - free, open licence, ready now
- **Size**: taginfo (2026-11-16): `sport=parachuting` 206 objects, `sport=skydiving` 48 (plus
  `sport=indoor_skydiving` 63 tunnels, excluded). My Overpass run: see the result section below.
  OSM is thin for this niche: roughly 15-25% of real DZs, best in Germany, Netherlands, Poland, Russia,
  Ukraine, Czechia; most have a website tag, few have email.
- **Cost**: free. **Licence**: ODbL: free to use and store, must credit "© OpenStreetMap contributors";
  if a derived database is published it must stay ODbL. Private outreach use is fine.
- **Overpass query** (run at https://overpass-turbo.eu or POST to https://overpass-api.de/api/interpreter):

```
[out:json][timeout:900];
(
  // 1. tagged as parachuting / skydiving (any spelling, multi-value sport=*)
  nwr["sport"~"skydiv|parachut",i];
  nwr["aeroway"="aerodrome"]["parachuting"];
  nwr["club"="parachuting"];
  // 2. named like a dropzone in many languages, limited to POI keys so the server copes
  nwr["leisure"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
  nwr["club"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
  nwr["aeroway"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
  nwr["amenity"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
  nwr["tourism"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
  nwr["shop"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
  nwr["office"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
);
out center tags;
```

  A name search over every object worldwide (without the `["leisure"]` etc. key filter) timed out on
  overpass-api.de ("server too busy"); the key-limited version above is what to run. Filter out
  `sport=indoor_skydiving`, memorials, streets and military units afterwards (the converter does this).

### 8. Paid lead databases (Apollo, Hunter and similar)
- **Apollo.io**: B2B contact database. Free plan 10 export credits/month; paid plans about $49-59
  (Basic), $79-99 (Professional), $119-149 (Organization) per user per month, 250-4,000 export credits
  a month depending on plan and source; extra credits ~$0.20 each. Coverage of small skydiving clubs is
  poor (they are not "companies" with LinkedIn staff); you would get the big commercial DZs (Skydive
  Dubai, Perris, Spaceland chains) and mostly personal work emails of owners/managers, which the brief
  does not allow.
- **Hunter.io** (official pricing page): Free 50 credits/month; Starter $49/mo (2,000 credits), Growth
  $149 (10,000), Scale $299 (25,000); 1 credit per email found by Domain Search, none if nothing found.
  Useful only to find the published generic email (info@, office@) for a DZ domain you already have,
  and Hunter labels which addresses were seen on the public web. 1,300 DZ domains fit in the Starter
  plan for one month.
- **Legal / brief**: these tools also guess addresses ("pattern" emails) and hold personal emails; the
  brief forbids guessed and personal emails. If used at all, keep only generic addresses that Hunter
  shows with a public source URL on the DZ's own site, and still check that page.
- **Verdict**: not needed; the DZ websites themselves give the same generic emails for free.

## Recommended way to build and keep the list

1. Start from the federation list (FAI ISC delegates, ~60-70 countries) -> one association row each.
2. For each country, take the federation's own DZ list (USPA locator for the US and affiliates, British
   Skydiving locator, DFV, FFP, APF, CSPA, ...). Highest trust.
3. Fill gaps with skydivelocations.com and the archived dropzone.com country pages as checklists.
4. Add `raw/osm.csv` rows that are not yet in the list (good for Eastern Europe and small clubs).
5. For every row, open the DZ's own website once for the contact email/form (confidence high).
6. Refresh: re-run the Overpass query and re-check the USPA locator after 31 March each year (when lapsed
   Group Members drop off); re-check federation lists yearly.

## OSM result (raw/osm.csv)
Run on overpass-api.de on 2026-11-16 (data as of 2026-11-17 06:11 UTC). Files:
`raw/osm.csv` (the rows), `raw/osm-query.overpassql` (the query), `raw/osm2csv.py` (the converter).

- Raw hits: 276 from the tag query + a larger name-based set (name search matches towns like Paracas
  and Parachute, Colorado, cafes, WWII "parachutage" memorials, veterans' clubs and paragliding sites).
- Cleaning: dropped tunnels, paragliding, memorials, museums, military units, streets, and name-only hits
  that are cafes, schools, shops (except sports/outdoor/travel) or parks; name-only hits must match a strict
  pattern (skydiv, fallschirm, parachutis, paracaidis, paracadutis, paraquedis, spadochron, parašut,
  парашют, fallskärm, fallskjerm, laskuvarjo ...). Objects within 3 km with the same name, same website,
  or no name were merged into one row (their extra OSM links go in other_links).
- Country: looked up from each point's coordinates with Overpass `is_in` (country boundary, English name).
  One Crimean DZ is marked "Crimea (Ukraine; Russian-occupied)".
- **Result: 405 rows, 57 countries; 220 with website, 63 with email, 123 with phone; 19 unnamed.**
  Top: United States 67, France 49, Germany 47, Australia 23, Russia 19, Brazil 17, Canada 13, Italy 13,
  New Zealand 11, Czechia 9, Spain 9.
- All rows: type dropzone, confidence low, source_url = the OSM object. A few rows may still be a shop or
  a club office rather than the landing area; a few real DZs may appear twice under different names. The
  email/website/phone are what OSM mappers entered, often years old: check each on the DZ's own site.
- To refresh: run `osm-query.overpassql` (about 10 minutes), `python3 -I osm2csv.py result.json`, then the
  country lookup (one `is_in(lat,lon)` + `area["admin_level"="2"]` statement per row, CSV output).

## Summary
- **How many exist**: about 1,300-1,500 active outdoor dropzones worldwide (dropzone.com 1,311 and
  skydivelocations.com 1,292 agree; ~2,000 if every small club is counted). US ~330, Germany ~90,
  France ~80, Brazil ~70, Australia ~60.
- **Best single source for completeness**: the national federations' own DZ lists (USPA locator, British
  Skydiving, DFV, FFP, APF, CSPA ...), reached via the FAI Skydiving Commission member list. Free, official,
  current (USPA prunes lapsed members every 31 March). No export: copy by hand, one country at a time.
- **Best worldwide checklist**: dropzone.com (largest, but the domain now redirects to an unrelated site
  `tanzu.nl` - use the Internet Archive copy, don't visit) and skydivelocations.com (1,292).
- **Free open data, already pulled**: OpenStreetMap -> `raw/osm.csv`, 405 dropzones in 57 countries,
  63 with email, 220 with website; ODbL licence, credit "© OpenStreetMap contributors".
- **Not recommended**: storing Google Maps / Places results (against Google's terms; the API is nearly free
  for this size but only place_id may be kept), scraper resellers (Outscraper $3/1,000, poidata), and
  Apollo/Hunter ($49+/month; personal and guessed emails the brief forbids; small DZs poorly covered).
  Wikipedia/Wikidata: only ~25 federation pages, no DZ list.
- Not verified by me: per-country Google Maps counts (no API key, search budget used up), USPA's current
  Group Member count (list is rendered by script), skydivelocations.com's country breakdown (TLS error).
