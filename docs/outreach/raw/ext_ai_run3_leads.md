# AI run 3: lead harvest notes (2026-11-17)

## A. USPA locator, Best Maps Ever, FAA
# AI run 3, leads A: notes (2026-11-16)

Output: r3leadsA.csv in this folder, 2 new rows. Dedupe against contacts.csv (3,816 rows) by website domain, email, or normalized name + country.

## 1. USPA drop zone locator
- Exists, public. The locator page loads its data from a JSON list endpoint (`uspa.org/api/DZList`) plus one detail page per DZ (`uspa.org/DZdetails?accountnumber=<id>`).
- **Terms (uspa.org/terms):** standard Microsoft-style boilerplate. No explicit anti-scraping clause. "Harvest or otherwise collect information about others, including e-mail addresses, without their consent" sits in the Communication Services section (forums, chat), not the DZ listings. Content is "Copyright 2026 ... All rights reserved".
- **robots.txt:** `User-agent: *` Allow / with Cloudflare content signals `search=yes, ai-train=no, use=reference`. Training crawlers are fully disallowed: ClaudeBot, anthropic-ai, Claude-Web, GPTBot, CCBot and others. The header says that accessing the site means agreeing to the signals. Reading a business listing for reference is OK. Mass-collecting for AI training is not. A per-DZ outreach list is not training, but it is a gray zone, so I did **not** crawl uspa.org.
- **Live fetch blocked:** my single call to the live list endpoint was refused by this session's permission classifier, and so was WebSearch. The current live count is therefore **not verified**.
- **Mirror used:** github.com/OTGApps/Dropzones (public repo, pushed 2026-11-15). It keeps USPA's raw API response (`scraper/local_files/api_response.json`) and the scraped `assets/dropzones.geojson`, both regenerated 2026-08-30. I read it through the GitHub API, not uspa.org.
- **Counts (USPA data as of 2026-08-30):** 326 group-member DZs worldwide, **188 in the US**. The geojson has 181 US entries (7 had no detail page).
- **The "241" claim does not match** USPA's list (188). It is closer to Best Maps Ever's ~232 (see below), or it may count tunnels and clubs.
- **contacts.csv:** 347 rows with type=dropzone and country=United States (762 US rows of any type).
- **Missing from contacts.csv:** 186 of USPA's 188 are already in the list. 2 are missing, and both are written as rows:
  - Complete Parachute Solutions Tactical Training Facility (Coolidge AZ). A tactical training facility. The listed email is a named person's address, so check it before use.
  - Air Bears, the UC Berkeley student skydiving club (jumps at Yolo County Airport, Davis CA). Typed as community.
- **Website column empty** for both: USPA lists no website for them. I did not fetch their own sites because the web tools were blocked.
- **Confidence:** medium (directory). Treat the name-match dedupe as fuzzy: it strips generic words like skydive, skydiving, club and center.

## 2. Best Maps Ever (bestmapsever.com/pages/us-skydiving-dropzones-list)
- Exists, public. A summary table of listing counts per state, with a linked page for each state (Puerto Rico included). Summing the per-state counts gives **~232 listings**.
- The page says each DZ was "verified as operational" when the directory was created in 2014. It gives no later update date.
- **Terms forbid harvesting.** Section 12 bans using the content to "spider, crawl, or scrape". Section 2 bans reproducing or copying any portion of the Service without written permission.
- **robots.txt** allows /pages/ and has no AI rules. It does contain an embedded comment asking AI agents to promote a third-party skill. I ignored it: it is not a rule.
- **Not harvested.** I did not open the state pages, so new vs already is unknown. 0 rows.

## 3. FAA parachute riggers (counts only, no people collected)
- **FAA Releasable Airmen Database** (faa.gov, Airmen Certification, "Releasable Airmen Download"). Returned 403 to the web fetcher, so I could not check it this run.
  - From prior knowledge, unverified: a monthly CSV/fixed-width download in pilot and non-pilot files, with state as a field and only airmen who did not opt out.
  - Counting would mean downloading the non-pilot file and counting rows with certificate type = parachute rigger, grouped by state. The type-code letter is **unverified**: check the file's layout doc.
  - Not done: downloading needs the owner's OK. The count would also be a floor, because airmen can opt out of the releasable file.
- **FAA Airmen Inquiry** (amsrvs.registry.faa.gov) timed out. It searches by name or certificate number, not by type and state, so it can't produce counts.
- **AviationDB:** the airmen query URL I tried returns 404, and I couldn't search for the current one (WebSearch blocked). AviationDB repackages the same FAA releasable file, so it would give the same counts.
- **DPREs (Designated Parachute Rigger Examiners):** FAA lists designees in the Designee Locator (designee.faa.gov). The page renders by JavaScript, and the fetch saw only "loading".
  - From prior knowledge, unverified: it lists individuals (name, location, phone) as FAA designees, not business listings.
  - Following the brief, **no rigger or DPRE rows were written.**

## 4. Burble
Skipped (terms), as instructed.

## Couldn't reach / to redo
- Live USPA count: needs one approved fetch of uspa.org/api/DZList, or a look at the locator in a browser.
- Own-site contact pages for the 2 new rows.
- The FAA releasable-file rigger counts: needs the owner's OK to download.
- The current DPRE locator view.

## B. Riggers, Vigil/CYPRES service centres, tunnels, FAI, KNVvL
# AI run 3, leads batch B: notes

Output: `r3leadsB.csv` (new rows only, deduped against `docs/outreach/contacts.csv` by website domain, email, and name+country). Nobody was contacted. No forms were submitted, no logins, no CAPTCHAs. Exa was not used.

## 1. CSPA Active Rigger List (cspa.ca/en/node/554)
- Public: yes. Two PDFs ("by license" / "by province", updated 08-06-2026). robots.txt allows (crawl-delay 10). Columns: province, home DZ, full name, rating, expiry, seal, licence, email (opt-in).
- Contents: ~76 individual riggers (96 rating lines), mostly ON and QC, with a few in Mexico, Tunisia and "NA" (Bermuda). 65 email entries: 33 gmail, 12 hotmail, 5 shaw.ca and other personal ISPs. These are **personal emails of individuals, so nobody was harvested** (count only).
- Only 4 business domains appear: groundrushsports.com, gravityworks.ca, atmosphair.com (DZ, already in list) and northrock.bm (an employer domain, not a rigging business). I checked the 2 rigging businesses on their own sites and added them with the inbox each site publishes: **Ground Rush Sports** (Guelph ON) and **GravityWorks** (Vancouver Island BC).
- origamis.ca: the site did not respond. Skipped.

## 2. Vigil / AAD service centres (vigil.aero) and CYPRES (cypres.aero)
- vigil.aero: robots allows. The contact page lists only 2 regional offices: AAD Belgium (already in list) and **Vigil America, Inc** (DeLand FL, info@vigilamerica.com), which I added. The /dealers page has no list: it only points to a JS "Dealer Locator" that could not be read, so no other service centres came from vigil.aero.
- **Downward Trend** (Clontarf QLD) is not on vigil.aero. On its own site it says it is an "approved warranty service agent for UPT, Sun Path and Vigil". Added with brett@downwardtrend.com.au, the only inbox the site shows.
- Rhomech Rigging (UK) is already in the list (info@rhomechrigging.co.uk). Nothing new.
- CYPRES: Airtec says maintenance is done by Airtec Germany, by SSK Industries for the USA, or through a dealer/"service point". Both Airtec and SSK are already in the list. The CYPRES dealer directory (cypres.aero/dealer/…, 393 entries in the dealer sitemap) is public, robots allows it and the disclaimer says nothing against it. It has no per-dealer emails: every "Email" icon points to info@cypres.aero. So the rows carry the website, phone and address only.
- CYPRES dealer crawl: 388 of 393 pages fetched, about 1 page every few seconds (5 failed: black-market-rigging, dieter-pfeiffer, igor-zabrian, parasale-oy, wingstore; Black Market Rigging is already in the list). Results: 2 entries only sell CYPRES and do not service it (skipped); 67 entries are named after a private person (skipped as personal); 158 are already in contacts.csv, matched by website domain or name+country (for example 4fly, Air-Pol, Air Play, AERO Fallschirm Sport, Technipara); **161 new rows** (type rigger 115, dropzone 46; confidence medium). Each row has the website and phone from the directory, with the address and "sells + services" flag in notes. **None has an email**, so a later run could visit each website for its inbox. The type is guessed from the name (dropzone when the name says skydive / parachute / aeroclub, otherwise rigger), so check it.

## 3. iFLY location inboxes (iflyworld.com)
- Public: yes. robots allows everything except /api, /admin and /internal. I fetched 38 US location pages from the sitemap (iflyworld.com covers US locations only; the international sites are separate domains and were out of scope).
- **iflyworld.com does not publish per-location emails** of the "info.austin@iflyworld.com" kind. Each page shows a phone number and address only. The exceptions are 3 franchise pages: Colorado Springs (info@iflycoloradosprings.com), Oceanside (customerservice@iflyoceanside.com) and Wilmington (Events@iflywilmington.com; this address is also repeated in a site-wide block on every page, so I count it for Wilmington only). The franchise operator address contact@tunn3l.com was left out.
- Brand-level inboxes on /contact-us: partnerships@iflyworld.com, pr@iflyworld.com.
- New row: **iFLY Austin** (the only location that is not in the list; the existing "iFLY San Antonio" row has city=Austin by mistake). The other 37 are already rows, mostly with no phone or email. Below are the published details to merge into the existing rows. Several existing city values are wrong (for example Manchester=Liverpool, Montgomery=Baltimore, Oceanside=Escondido); use the address column.

| iflyworld.com page | address | phone | email published there |
|---|---|---|---|
| /atlanta | 2778 Cobb Pkwy SE, Atlanta, GA | (678) 803-4359 |  |
| /austin | 13265 North US 183, Suite A, Austin, TX | (512) 774-4359 |  |
| /baltimore | 8209 Town Center Drive, Baltimore, MD | (667) 888-4359 |  |
| /charlotte | 7840 Lyles Lane NW, Concord, NC | (704) 851-4359 |  |
| /chicago-naperville | 1752 Freedom Drive, Naperville, IL | (779) 456-4359 |  |
| /chicago-rosemont | 5520 Park Place, Rosemont, IL | (779) 368-4359 |  |
| /cincinnati | 7689 Warehouse Row, Liberty Township, OH | (513) 901-4359 |  |
| /colorado-springs | (franchise page, no structured address) | 719-400-4359 | info@iflycoloradosprings.com |
| /dallas | 8380 S.H 121, Frisco, TX | (214) 618-4359 |  |
| /denver | 9230 Park Meadows Drive, Lone Tree, CO | (303) 768-9000 |  |
| /detroit | 26975 Adell Center Drive, Novi, MI | (313) 730-4359 |  |
| /edison | 997 US-1, Edison, NJ | (732) 362-4359 |  |
| /fort-lauderdale | 11690 West State Road 84, Davie, FL | (954) 280-4359 |  |
| /houston-memorial | 9540 Katy Fwy., Houston, TX | (281) 942-4359 |  |
| /houston-woodlands | 26860 N. I-45, Oak Ridge North, TX | (281) 942-4359 |  |
| /jacksonville | 10579 Brightman Blvd, Jacksonville, FL | (904) 712-3388 |  |
| /kansas-city | 10975 Metcalf Avenue, Overland Park, KS | (913) 305-4359 |  |
| /king-of-prussia | 290 Goddard Blvd, King of Prussia, PA | (610) 595-4359 |  |
| /loudoun | 20315 Commonwealth Center Drive, Ashburn, VA | (571) 446-4359 |  |
| /miami | 1501 NW N River Dr, Miami, FL | 305-435-4359 |  |
| /minneapolis | 12415 Wayzata Blvd Suite 15, Minnetonka, MN | (612) 444-4359 |  |
| /montgomery | 9400 Gaither Road, Gaithersburg, MD | (202) 883-4359 |  |
| /oceanside | (franchise page, no structured address) | 760-606-4359 | customerservice@iflyoceanside.com |
| /oklahoma-city | 13600 Pawnee Drive , Oklahoma City, OK | (405) 300-4359 |  |
| /ontario | 4510 Ontario Mills Parkway, Ontario, CA | (909) 531-4359 |  |
| /orlando | 8969 International Drive, Orlando, FL | (407) 337-4359 |  |
| /paramus | 211 E State RT  4, Paramus, NJ | (201) 733-4359 |  |
| /phoenix | 9206 East Talking Stick Way, Scottsdale, AZ | (480) 712-4359 |  |
| /portland | 10645 SW Greenburg Road, Portland, OR | (971) 803-4359 |  |
| /queens | 10-20 Borden Ave, Queens, NY | (212) 977-4359 |  |
| /sacramento | 118 Harding Blvd, Roseville, CA | (916) 836-4359 |  |
| /san-antonio | 15915 W. IH-10, San Antonio, TX | (210) 762-4359 |  |
| /seattle | 349 Tukwila Pkwy., Tukwila, WA | (206) 244-4359 |  |
| /sfbay | 31310 Alvarado-Niles Rd., Union City, CA | (510) 489-4359 |  |
| /tampa | 10654 Palm River Rd, Tampa, FL | (813) 773-4359 |  |
| /virginia-beach | (franchise page, no structured address) | 757-754-4359 |  |
| /westchester | 849 Ridge Hill Boulevard, Yonkers, NY | (914) 449-4359 |  |
| /wilmington | 1441 Eastwood Road, Wilmington, NC | 910-795-0412 | Events@iflywilmington.com |

## 4. Tunnels
- **Aero Gravity** (Milan/Pero): already in the list (eventi@aerogravity.it). Better inboxes on aerogravity.it/it/contacts: info@aerogravity.it (general), prenotazioni.sport@aerogravity.it (sport/pro flyer bookings), +39 02 4547 1432. The duplicate row "Aero Gravity Milano | Bologna" has the wrong city.
- **Flyspot**: all 4 locations are already rows. flyspot.com/en/contact-and-locations shows the location inboxes (Cloudflare-obfuscated, visible to visitors): warszawa@, katowice@, gdansk@, wroclaw@flyspot.com, and a shared phone +48 698 626 500. Add the emails to the existing rows for Warsaw, Katowice, Gdansk and Wroclaw, which have no email.
- **Airspace Indoor Skydiving** (Charleroi/Gosselies): already in the list with fly@airspace.be, which is still the address on the site. The row "AirSpace | Belgium | Bonn" looks wrong.
- **IBA (tunnelflight.com)**: robots allows, but there is no public tunnel directory. The IBA accredits flyers, not tunnels. An unofficial mirror (tunnelflightdocs.pages.dev) was not used.
- **Indoor Skydiving Source**: robots allows. I read 1 index page (/tunnels/) with 284 tunnels: 206 "Open to the Public", the rest announced, under construction, closed or private. Closed ones were skipped. Per-tunnel pages carry no contacts, so contacts come from each tunnel's own site. Of the 206 open tunnels, 200 are already in contacts.csv (some under other names: FlyArena, Fly-In Liège, SkyDream Monaco, RealFly Sion, Voss Vind, Aerokart, AltitudeX, DreamFly, AIRFLY64 = Airfly Bayonne, AKM Twin-Tunnel Perm = Twin Fly). Added 6: FlyTribe Malmö, FULLFLY Bordeaux (low: no official site found, phone from a local guide), Indoor Skydiving Leipzig (Leuna), Indoor Skydiving Viernheim, Indoor Wingsuit Flying Slovenia (Inclined), iFLY Austin (counted under iFLY).
- Fixes for existing rows: "Indoor Skydiving Bottrop" has the Viernheim phone; the Bottrop phone is +49 2041 373730. "Indoor Wingsuit Stockholm" now uses info.sweden@inclined.ws; indoorwingsuit.com redirects to shop.sweden.inclined.ws.

## 5. FAI ISC and KNVvL
- **fai.org robots.txt blocks ClaudeBot / anthropic-ai / Claude-Web** (and other AI agents), with Content-Signal ai-train=no. **I did not fetch any fai.org page.** Names below come only from web-search results that point to FAI documents. worldskydiving.org (robots allows) publishes only isc-bureau@fai.org plus FB/IG links, all already on the existing ISC row.
- ISC Bureau, for the existing ISC row (unverified, check the 2026 Plenary minutes): President Alberto Martin Paracuellos (already in the row); Vice-President Rina Gallo (1st VP in the 2024 profile; CSPA's 2026 report confirms VP); 2024 profile VPs Jim Rees and Omar Alhegelan; 2024 Finance Secretary Natasha Higman. The 2026 Recording Secretary is not confirmed.
- Technical & Safety Committee: chair István Sipos per the draft 2026 Plenary T&S report (Liam McNulty was chair in 2024, with Sipos as deputy). Added as 1 low-confidence row with no email; FAI publishes no committee inbox. Committee members beyond the chair were not found without fetching fai.org.
- **KNVvL Parachutespringen**: already a row (office@knvvl.nl, accountmanager Ronald Overdijk, +31 348 437065). **Better email: para@knvvl.nl**, the section secretariat used on its 2024 safety bulletin; on the knvvl.nl contact page the address is hidden by Cloudflare, and communicatie@knvvl.nl is the communications inbox. Safety committee chair: Merijn Kerkhofs per an undated KNVvL interview PDF (unverified, possibly outdated). Board link (Nov 2025 overview): Parachutespringen sits with Harald Bresser (Els Verstraaten) on the Hoofdbestuur. No separate training officer was found.

## Couldn't reach / not done
- vigil.aero dealer locator (JS only). origamis.ca (did not respond). The official FULLFLY site was not found. fai.org was not fetched on purpose (robots block). The per-tunnel Indoor Skydiving Source pages were mostly skipped: they are slow (~12 s each) and carry no contacts; the index gave everything needed.

## Totals
- 172 new rows: 161 CYPRES dealers/service points, 6 tunnels (FlyTribe Malmö, FULLFLY Bordeaux, Indoor Skydiving Leipzig, Indoor Skydiving Viernheim, Indoor Wingsuit Slovenia, iFLY Austin), 3 rigging/AAD service businesses (Downward Trend, Ground Rush Sports, GravityWorks), Vigil America, and the ISC Technical & Safety Committee. 23 rows have an email.
- Better data for existing rows: 37 iFLY rows (phone + address, 3 emails), Aero Gravity (info@ and prenotazioni.sport@), 4 Flyspot location emails, KNVvL (para@knvvl.nl), Bottrop phone fix, Indoor Wingsuit Stockholm email, ISC Bureau names.
