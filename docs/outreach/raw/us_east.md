# US east of the Mississippi: dropzones (notes for us_east.csv)

Scope: AL, CT, DE, FL, GA, IL, IN, KY, ME, MD, MA, MI, MS, NH, NJ, NY, NC, OH, PA, RI, SC, TN, VT, VA, WV,
WI, DC. Minnesota and Louisiana are included to be safe. Both lie partly west of the river. Their rows are
Skydive Northstar, Skydive Adventures (MN) and Cloud Chasers (LA, Slidell, east of the river).

## Sources
1. **USPA Group Member locator** (https://www.uspa.org/dzlocator). This is the main source. It lists 311 DZs
   worldwide. I went through all 20 pages in a browser and kept every US DZ in scope: **98 rows**. Each card
   gives the website, phone and email (the email is base64 in the link). The USPA detail page
   (`/DZdetails?accountnumber=N`) is the `source_url` for those rows.
2. **Each DZ's own website**: the homepage plus one contact page, fetched by a script. From these I took the
   email, contact form, Instagram, Facebook, YouTube and a keyword check for AFF / IAD / static line / tandem.
   If the email appears on the DZ's own site, confidence is high. If it appears only in USPA, confidence is
   medium.
3. **Non-USPA DZs: 11 rows.** I found these by guessing likely domains ("skydive<city>.com") and opening each
   one. I could not do the Google search per state (see below). Rows: Skydive Greene County (Xenia OH),
   Skydive Cincinnati (Waynesville OH), Skydive Baltimore (Churchville MD), Skydive OC (Ocean City MD),
   Skydive Cape Cod (Chatham MA), Skydive Grand Haven (MI), Skydive Milwaukee (East Troy WI), Skydive Lancaster
   (Smoketown PA), Skydive Tennessee (Tullahoma TN), Skydive Raleigh (Franklinton NC) and Skydive Virginia!
   (Louisa VA, **low**: not verified, its site has a bad certificate).

## What I could not reach
- **dropzone.com directory**: dropzone.com now 301-redirects to an unrelated domain (tanzu.nl), so it was not
  usable.
- **Google per state**: the shared WebSearch budget for this run was used up before I got to it. The non-USPA
  part is therefore incomplete. Likely gaps: Mississippi (no DZ found), Louisiana beyond Slidell, Delaware
  (skydivedelmarva.com is dead), NH, Kentucky and Indiana extras, small club DZs, and seasonal tandem-only
  operations. A follow-up run with search should go state by state.
- Sites that did not load: Malone Parachute Club (VT), Skydive Central NC, West Virginia Skydivers, Skydive
  Saratoga (404), Skydive Spaceland Clewiston (JS app), SEMO Skydiving. These rows keep the USPA email and are
  marked medium.
- Flying Tigers SPC (SC): its old domain is now for sale. Skydive Emerald Coast (FL) says "coming soon". Skydive
  Baltimore says it is "becoming Send Me Skydiving".
- Instagram, Facebook and YouTube come from links on the DZ sites only. I did not visit the social platforms, so
  there are no follower counts.
- Program notes ("site mentions: ...") come from a keyword scan of 1–2 pages per DZ. A missing "AFF" does
  **not** mean the DZ has no AFF program; it only means it was not on those pages.

## Duplicates and shared contacts, noted in the rows
- GoJump New York = skydivelongisland.com (same address in Shirley NY).
- iSkydive Miami = skydivemiami.com. Skydive Alabama = skydivebirmingham.com.
  Skydive Tennessee = skydivenashville.com.
- Skydive Georgia and Skydive The Farm (both in Cedartown GA) share georgiaskydiving@gmail.com.
- Skydive The Falls has two USPA rows (Niagara Falls and Youngstown NY) with the same email.
- Personal-looking gmail/yahoo addresses (Flying Tigers, Upstate, WV Skydivers, Malone, Blue Skies club) are
  copied as USPA publishes them for the DZ contact. Use them with care.

## Completeness
USPA lists 98 Group Member DZs in scope, and all 98 are in the CSV. Non-USPA DZs are partial: 11 found, probably
10–25 more exist. The best single source is the USPA locator. It holds about 90% of the rows and gives an email
for every one of them.

## Summary
- Rows written: 109 (98 USPA Group Members + 11 non-USPA, of which 1 is low confidence).
- Rows with email: 106. Instagram 76, Facebook 86, YouTube 45, contact form 69.
- Confidence: 91 high, 17 medium, 1 low.
- Completeness: USPA 98/98 in scope. Non-USPA is partial, because there was no web search and dropzone.com is
  dead.
- Best source: uspa.org/dzlocator (with each DZ's own site for checks and socials).
