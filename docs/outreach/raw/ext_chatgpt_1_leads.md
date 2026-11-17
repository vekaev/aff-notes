# Lists named by the ChatGPT report: what was found (2026-11-16)

Result: 0 new rows. leads_out.csv holds only the header.

## 1. skydivinghubs.com/dropzones
- Exists? The domain answers, but every request (the page, robots.txt, sitemap.xml) got HTTP 429 and a "Vercel Security Checkpoint" page ("We're verifying your browser", which needs JavaScript). WebFetch also got 429.
- Public / allowed: unknown. Robots.txt and the terms could not be read because they sit behind the same check. This is bot detection. Per the rules I did not try to get past it.
- Entries: not seen. ChatGPT's figure of ~241 is unconfirmed. New vs existing: unknown.
- To reach it: open it in a normal browser by hand. If it lists sources, those are probably the USPA locator, which contacts.csv already covers (347 US dropzone rows; 129 come from uspa.org, plus dropzone.com, OSM and others).

## 2. Burble dropzone map (burblesoftware.com/dropzones/)
- Exists and is public: yes. The "Burble DZs" pages, with a map and a list per region, sit on the marketing site burblesoftware.com, not on burblesoft.com. burblesoft.com is the login app, and its robots.txt disallows /dz, /me and /load_dropzone.
- Count, from the page structure: USA 108, Europe 29, Canada 12, Australia 6, Asia 3, Africa 2, South America 2, Mexico 1, for a total of 163. ChatGPT's 108 US + 29 EU is correct.
- Allowed: NO. The Burble Terms of Use (burblesoftware.com/terms-of-use/) say: "You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) ... without Burble Software Inc.'s express written consent." So I did not harvest it. The region pages I downloaded before reading the terms were used only for the counts above and then deleted.
- Note: contacts.csv already has 45 dropzone rows with source_url www.burblesoftware.com, from an earlier run. Given these terms, the owner may want to review them, or re-source them from each dropzone's own site or the USPA locator.
- Lawful route: the dropzones themselves are public businesses. Their own sites and the USPA locator (already used) cover the same places.

## 3. "Dropzones-USPA Dropzone Finder" (iOS, apps.apple.com/app/id960515397)
- A paid iOS app ($2.99) by Mohawk Apps, LLC (copyright Off The Grid Apps, LLC, otgapps.io). Version 4.1.0. 5.0 stars from 4 ratings.
- Data: the listing says it lists "current USPA member dropzones" and that the list was "updated to match the USPA website". So it is a repackaging of the public USPA dropzone locator (uspa.org/DZLocator). It says it is not endorsed by or affiliated with USPA.
- Not harvested (it is an app). It adds nothing beyond the USPA locator, which is already a source in contacts.csv.

## Not reached
- skydivinghubs.com: blocked by bot detection (see above).
- Emails from dropzones' own sites: not attempted. No new dropzones were collected.
