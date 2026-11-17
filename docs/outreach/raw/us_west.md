# US West dropzones: notes (collected 2026-11-16)

Scope: dropzones in the states west of the Mississippi (WA, OR, CA, NV, ID, MT, WY, UT, AZ, NM, CO, ND, SD, NE, KS,
OK, TX, MN, IA, MO, AR, LA) plus Alaska and Hawaii. MN and LA are counted whole.

## Sources
- **USPA Group Member locator** (uspa.org/dzlocator). The page loads its data from a public JSON endpoint
  (`/API/DnnSharp/ActionGrid/Api/GetData?TabId=520&moduleid=7164&PageIndex=N`). It holds 311 dropzones worldwide,
  170 in the US, and **75 in scope**. All 75 are in the CSV, with the email and phone USPA publishes. Their
  `source_url` is the USPA detail page.
- **Each dropzone's own website** (home page plus contact page) for email, contact form, Instagram, Facebook, YouTube
  and the program words it uses (AFF, IAD, static line, ISP, tandem). 72 of 75 USPA sites loaded.
- **Web search per state** for dropzones that are not USPA members. 23 of them have a working site and are in the CSV
  as high confidence. Another 31 were named in directories or news but I found no working site. They are in the CSV
  as `low`, with no contacts.

## What did not work
- **dropzone.com directory**: it now redirects to an unrelated domain (tanzu.nl). Not usable.
- **skydivelocations.com**: the site has a broken TLS certificate chain, so it could not be fetched.
- **dropzonesandtunnels.com**: the domain was hijacked by spam.
- **curlie.org**: blocks automated fetches.
- The web search budget ran out partway through the per-state searches. Searches were done for TX, CA, WY, KS,
  MO/AR/LA, MN/IA/ND/SD, OK/CO, WA/OR/ID, AZ/NM/NV, AK/HI and UT/ID. Searches were not done for MT/NE/ND/WY again,
  northern California, or a second pass on OR/WA. The non-USPA list is the part most likely to be incomplete.

## Completeness
- USPA members: 75 of 75 (100 %).
- Non-USPA dropzones: 23 verified plus 31 named only. I guess this covers about 70–80 % of the non-USPA dropzones
  in the West. Texas, California and Minnesota probably still have a few small operators missing.

## Caveats
- `notes` "site mentions: ..." lists only the program words found on the home, contact and a few student pages. If
  AFF is missing, it does not mean the dropzone has no AFF.
- Several "dropzone" domains were parked or taken over by gambling spam (Skydive Temple, Skydive West Texas, Vegas
  Extreme Skydiving). Skydive Taft's site carries injected casino links, but its contact details are real.
- Website down or odd at time of check: Skydive California (Tracy, 503), High Sky Adventure (no response),
  Rattlesnake Mountain (blank page), Meadow Peak (password page). For these rows the contacts come from USPA only.
- Some aliases were merged rather than listed twice: Skydive Hollister (redirects to Silicon Valley Skydiving),
  Skydive Canyonlands (= Skydive Moab), Skydive Coastal California (= iSkydive Los Angeles), Kapowsin Air Sports
  (= Skydive Kapowsin), and skydivealbuquerque.com (redirects to Viva Skydive).
- Not used: emails that belong to web designers, photographers, staff treasurers or template placeholders.
- No dropzone was found in Wyoming. USPA lists none there.

## Summary
- Rows written: 129 (75 USPA, 23 verified non-USPA, 31 named-only low confidence)
- Rows with email: 91
- Completeness: USPA 75/75; non-USPA about 70–80 %; search budget ran out before the last states
- Best source: the USPA locator JSON endpoint (all 75 members with email and phone in one pull)
- Next: a fresh search pass for MT, NE, ND, WY and northern CA, then open the 31 low-confidence rows
