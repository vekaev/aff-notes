# w2_existing_lists: lists that already exist

Scope: datasets and directories that someone else already compiled (GitHub/Kaggle/data.world, OSM, Wikidata,
Wikipedia in many languages, app data, directory sites, boogie calendars, FAI members). I harvested rows from each
usable one into `w2_existing_lists.csv` (1729 rows after removing duplicates inside the file, 650 with email,
964 with website, 133 countries). Nobody was contacted. All downloads stayed in `/private/tmp/claude-501/w2lists/`.

## Sources: URL, format, size, licence, what I took

| Source | URL | Format | Size | Licence / terms | Rows taken |
|---|---|---|---|---|---|
| OTGApps "Dropzones" app (GitHub) | github.com/OTGApps/Dropzones `assets/dropzones.geojson` (+ `scraper/local_files/api_response.json`) | GeoJSON, 395 KB | 318 DZs (181 US + 137 international USPA affiliates), each with email, phone, website, training (AFF/tandem/SL), aircraft, services | no licence file; it is scraped from the USPA locator; updated 15 Nov 2026 | all 318 (medium) |
| USPA DZ locator API | `POST https://www.uspa.org/api/dzlistfiltered` (JSON body DZName/City/Region/Country/State/Filter) | JSON | capped: returns at most 55 rows per call, country filter ignored | USPA site terms | 55 + state queries, mostly overlap with OTGApps |
| spotboard (GitHub) | github.com/austin-ge/spotboard `prisma/dropzones.json` | JSON, 36 KB | ~170 US DZs keyed by airport code, name + website | no licence | all (low) |
| dropzone.com directory, via Wayback Machine | web.archive.org captures of `www.dropzone.com/dropzones/<country>/<slug>-rNNN/` (2023–2024) | HTML | 389 archived listings of the 1311 the site claimed; 198 with email, 363 with website | archived copies; the live site is gone | 364 after dedupe (low: data may be years old) |
| OpenStreetMap (Overpass) | `nwr["sport"~"parachuting\|skydiving"]` | JSON | 340 features (206 parachuting, 63 indoor_skydiving, 48 skydiving); 161 website, 53 email | ODbL | 298 named; country from Nominatim reverse geocoding (low) |
| indoorskydiving.world (tunnel directory) | `/wp-json/wp/v2/wpsl_stores` (4 pages × 100) | WordPress REST JSON | 348 tunnels: 244 open to public, 28 announced, 22 closed, 12 cancelled, 10 under construction, 10 private, 9 military | site content, no open licence | 334 (closed and cancelled dropped); name, country, city, status, brand; no website/email in the feed |
| BASEline (wingsuit app) | `https://baseline.ws/places.json` | JSON, 90 KB | 521 DZs (name, region, country, lat/lng), no contacts | none stated | 337 after dedupe (low; name only) |
| FAI members (National Airsport Controls) | www-2025.fai.org/members → 107 `/member/*` pages (fai.org itself returns 403 to scripts) | HTML | 107 members; all with official email, website, phone, address; 68 list an ISC (skydiving) delegate | FAI site | 99 (dropped gliding/paragliding/model-only bodies without an ISC delegate); ISC delegate and alternate names in `person` (official role, no personal emails) |
| Wikidata SPARQL | query.wikidata.org: `P31 parachute club (Q62603260)` ∪ `P641 skydiving (Q193210)` | JSON | 124 bindings, mostly competitions; ~20 organisations | CC0 | ~12 orgs with websites; 2 emails (Southsidebase, Drop Zone Silesia) |
| Wikipedia (en, de, fr, es, ru, uk, pl, it, cs, nl, sv, no, fi, pt) | search + category API | — | no "list of drop zones" article in any language; small categories only | CC BY-SA | sv clubs (5) + SFF, pl ZPS + Wawel, it Lazio, ru Aerograd Kolomna, Kharkiv aeroclub |
| App and tool makers, boogie calendars | App Store, Mile High Hub, somo.social | — | — | — | 12 rows (type other/media): DZ-finder and logbook apps, tunnel directory, boogie calendar |

## Checked, nothing harvestable
- **Kaggle / data.world**: no skydiving DZ dataset found (both need a login to search the catalog; web search found nothing).
- **Google My Maps / KML**: no public DZ map found.
- **dropzone.com** (the biggest directory, 1311 DZs and 7524 reviews): the domain now serves an unrelated Dutch site ("Tanzu"). The directory exists only in Wayback, and only about 30% of listings were archived.
- **skydivelocations.com** (1292 DZs, has a JSON API at api.skydivelocations.com): its TLS certificate has expired. I did not bypass the check; Wayback holds almost nothing. If the owner wants it, open it in a browser and accept the risk yourself.
- **USPA API**: hard cap of 55 rows per query and no working country filter. OTGApps' scrape is the fuller copy.
- **tunnelflight.com (IBA)**: the tunnel list loads from api.tunnelflight.com through a JS app. I didn't reverse it because w2_tunnels covers tunnels.
- **Mile High Hub calendar** (worldwide boogie calendar): JS app with no static data. **No central boogie calendar** exists; boogies are listed per DZ. The Austrian Aero Club publishes yearly PDF calendars (aeroclub.at, up to 2025).
- **Logbook apps** (Squifly, Skydiving Logbook, Boogie, Cloudbase, BurbleMe): DZ databases are inside the apps, with no public export.
- **Wikipedia "Template:BPA Drop Zones"** (en): 26 UK centres; uk_ie.csv already covers them better.
- Wikipedia ru "Список спортивных аэродромов России/Украины" exist (airfields, not clubs). Not harvested; worth a look for the Russia/Ukraine lists.

## Completeness and caveats
- These are aggregators, so most rows also appear in the regional lists; the merge will collapse them. My value-add is
  breadth: 133 countries, many small clubs (Russia 117, France 130, Denmark, Slovenia, Lithuania, Africa) from the archived
  dropzone.com listings.
- Confidence: medium = official directory (USPA/OTGApps, FAI, Wikidata); low = OSM, archive, BASEline, tunnel directory.
  Archived dropzone.com emails can be 5–15 years old (hotmail/mail.ru addresses, dead ISPs). Check before use.
  I removed `@dropzone.com` forwarding addresses (dead) and university addresses.
- Name-only rows (BASEline, tunnels, some OSM) have no contact. They are kept so the merge can match them to rows that do.
- Dedupe inside this file is by normalised name + country, so the same DZ under different names (e.g. "Skydive BORO" / "DZ BORO") may still appear twice.

## Helper files
I wrote nothing else to docs/outreach/raw/. `osm.csv`, `osm2csv.py` and `osm-query.overpassql` in that folder are **not mine**
(another chat's); I left them as they are. My scripts and downloads are in `/private/tmp/claude-501/w2lists/`.

## Most surprising finds
1. dropzone.com, for decades the main DZ directory, is dead: the domain now hosts an unrelated Dutch company site. Its listings survive only partly, in Wayback.
2. skydivelocations.com (the other big directory, 1292 DZs) is running on an expired TLS certificate, so it looks abandoned too.
3. The best open DZ dataset is a hobby React Native app on GitHub (OTGApps/Dropzones): 318 USPA DZs with emails, AFF/tandem flags, aircraft. It was updated the day before this run.
4. A wingsuit flight computer (BASEline) quietly publishes a 521-DZ world list as plain JSON.
5. No Wikipedia in any of 14 languages has a list of skydiving centres. Only the Swedish Wikipedia has club articles.

## Summary
- Rows written: 1729
- Rows with email: 650 (website: 964)
- Completeness: roughly 40–50% of the world's ~1300 DZs have a contact here; tunnels: 334 of 348 known (no contacts)
- Best single sources: OTGApps geojson (USPA, 318 rows, emails) and dropzone.com via Wayback (international small clubs)
- Best for associations: FAI member pages (99 national air sport bodies, all with official email, 68 ISC delegates)
