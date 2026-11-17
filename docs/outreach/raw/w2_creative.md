# w2_creative: channels nobody listed

CSV: `w2_creative.csv`, 553 rows, 408 with email. Collected 2026-11-16. Nobody was contacted and no account was made.
The only things fetched were public pages and public member directories.

## Top 10 new channels (ranked by fit for an AFF/A-license safety study app)

1. **European Skydiving Symposium (skydivingsymposium.eu).** 852 attendees from 53 countries at Seville 2026, mostly
   instructors, S&TAs and DZOs. It has a public **Call for Speakers** page and named organiser emails (arek@ / kasia@).
   Its sponsor page gave 69 sites (DZs, tunnels, gear makers, Skydive Mag, Burble). A talk or poster on "free
   multilingual student study tool" is the one move that reaches the most instructors at once.
2. **PIA public member directory (pia.com/member/...)**. 219 members; 198 show an email plus named contacts. It covers
   gear makers, riggers, DZs (Skydive Arizona…), training orgs and national bodies. The member sitemap
   (`pia.com/member-sitemap.xml`) is the single best "hidden" list. PIA also runs the PIA Symposium (2025 Daytona,
   next 2027); no public exhibitor roster was found.
3. **Burble client map (burblesoftware.com/dropzones/)**. 163 dropzones that use Burble DZM (108 US, 12 CA, 29 EU, 6 AU…).
   Each has a page with address, phone and site; 99 emails came from the DZ sites. Burble itself (sales@) is a
   partner idea: the BurbleMe jumper app reaches students at check-in.
4. **Skydive Mag (alethia@skydivemag.com)**. A free international online magazine with an open contributor program. It
   already runs beginner pieces ("The First 100 Jumps"). It is an ESS media partner, so one contact covers both.
5. **FlySight dealer page (flysight.ca/dealers/)**. 75 shops, riggers and coaches in 27 countries, each with an email.
   That gives local gear shops in Poland, Russia, Ukraine, Kazakhstan and Latin America, which the federation lists
   don't cover.
6. **Skydiving podcasts for beginners**: Skydive Radio (called best for beginners), Jump Twenty Six (aimed at newer
   jumpers), BEER! (AFF-I host), Radio Skydive UK (takes listener audio messages), The 20 Minute Call (AFF-I and
   Flight-1 guests). These are good for a "student builds safety app" story.
7. **Skyderby + its Discord**. 3,200+ registered jumpers and a public Discord. The founder's email is public. These
   are data-minded jumpers who give tool feedback.
8. **Logbook/app developers**: Skyduck (team@, RU-speaking dev, USPA-reviewed logbook), Paralog/Jumplog (DE),
   SKYPRO (BSR quiz, the closest peer), Skydive Compass/DropzoneFinder (new DZ finder). They are peers for
   cross-linking, not competitors to fight.
9. **USPA's own side channels**: the Skydiver Update newsletter, Parachutist submissions (no staff writers, so it
   prints member pieces), DZO and jump-pilot resources, and the new International DZO Conference (uspadzoconference.com).
10. **International Skydiving Museum & Hall of Fame** (info@, Chuting Times newsletter, ambassador program). It
    reaches senior instructors and Hall of Famers who like to fact-check history and safety.

Lower value (checked, not ranked): booking platforms (Xola, FareHarbor, Rezdy, ResPax, Viator, Peek) serve tandem
tourists, publish no skydiving customer lists, and reach no AFF students. Meetup has only 6 skydiving groups (4 in
India, tandem-tourist adventure groups). Quora has no skydiving Space worth naming. LinkedIn has no public skydiving
group in the web index; only personal profiles show up. Jump pilots have no association: DiverDriver (Chris
Schindler, author of the USPA pilot syllabus) and Jumpers Away are the only hubs. DZ insurers: only Kimmel Aviation
(USPA member/demo insurance) is public; no operator-side insurer list was found.

## Sources used
- burblesoftware.com/dropzones/ (map data embedded in page JS, parsed) plus each DZ's own homepage/contact page
- pia.com/member-sitemap.xml plus 219 member pages (email, phone, contacts, categories)
- skydivingsymposium.eu home page and /sponsors/ (69 linked organisations, homepages scraped for email)
- flysight.ca/dealers/, flysight.ca/support, skyderby.io/support
- podcast.feedspot.com/skydiving_podcasts/ (emails masked there; filled from shows' own sites where possible)
- uspa.org (insurance notice, jump pilot pages, newsletter), parachutist.com, skydivemag.com, skydivingmuseum.org
- meetup.com topic page; WebSearch for Quora, LinkedIn, Discord, charities, insurers, booking platforms

## Completeness and caveats
- Burble: 163 of 163 DZs on the map captured, 155 with site, 99 with email. PIA: 219 of 219 members, 198 with email.
  FlySight dealers: 75 of 75. ESS sponsors: 69 of 69 links, 45 with email.
- Bulk rows overlap heavily with the federation-based DZ and gear lists, so expect many duplicates in the merge.
  The new value is the PIA contacts (named people), the ESS and Burble angles, and the creator/app/podcast rows.
- ESS rows use the **domain as name** and type `other`; they need a name and type pass in the merge.
  FlySight dealers are type `other` (shops/riggers/coaches mixed).
- PIA includes about 60 military/textile/hardware suppliers. They are useful for the gear-maker list but not for
  student feedback; filter on notes "Military"/"Textiles".
- Some FlySight dealer and PIA emails are personal-domain addresses (gmail/shaw). They are published by FlySight/PIA
  as business contacts, so they are marked medium.
- Kimmel contacts date from a 2019 USPA notice and may be stale.
- Could not reach: blueskiesmag.com (DNS gone), funjumpr.com and thefuckinpilot.net (Cloudflare challenge),
  Free-Fall Foundation and Jump for Valor (no site found), Parachutist editor email (obfuscated), Dropzone.com editor
  email (hidden), PIA Symposium 2025 exhibitor list (page 404), EZDZ contact.
- Removed: skydiver.com.au (parked domain).

## Most surprising finds
- PIA publishes a full member directory with emails and named contacts through a plain sitemap. Nobody lists it.
- ESS has an open Call for Speakers and drew 852 people from 53 countries. One talk would reach more instructors
  than hundreds of emails.
- Burble embeds its whole client list (163 DZs, coordinates and phones) in its public map page.
- FlySight's dealer page is a ready-made list of 75 local gear shops and coaches in 27 countries, including Ukraine,
  Russia and Kazakhstan.
- Parachutist has no staff writers and is built from member submissions, so a well-written student safety piece
  could be printed there.

## Summary
- Rows written: 553
- Rows with email: 408
- Completeness: every source list was harvested in full (Burble 163/163, PIA 219/219, FlySight 75/75, ESS 69/69); the creative channels (podcasts, media, apps) are about 80% covered
- Best source: PIA member sitemap (198 emails plus named contacts); best single channel: ESS Call for Speakers
- Weak channels: booking platforms, Meetup, Quora, LinkedIn
