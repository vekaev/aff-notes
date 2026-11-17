# Skydiving Safety Contact Directory for an AFF/A-License Study App (Worldwide, First Pass)

The best people to ask first are the national federations' safety and training departments. USPA (safety@uspa.org), British Skydiving (safety@britishskydiving.org), CSPA, APF, FFP, DFV, and the Ukrainian and Russian federations all publish working contact emails. After them come a small group of named experts who publish safety material: canopy educator Brian Germain, bilingual instructor-examiner Angie Aragon, and the corresponding authors of recent skydiving-injury papers. This pass produced 73 sourced rows, 39 of them with an email seen on a cited page. That is a small, high-confidence core, not full worldwide coverage.

## TL;DR
- **Start with the safety desks of the federations.** USPA Safety & Training (Director Ron Bell), British Skydiving (Head of Safety, Training & Competitions Jeff Montgomery), CSPA, APF (Safety & Training Manager Charl Rootman), FFP (National Technical Director Jean-Michel Poulet), DFV (technical department, Ralf Homuth), FPSU in Ukraine and FPS Russia all publish emails, and all of them own the official student syllabi your app has to match.
- **Use expert reviewers for fact-checking.** Brian Germain (canopy course and "Safety First" podcast segment), Angie Aragon of My USPA Courses (USPA Coach & Tandem Instructor Examiner, works in English and Spanish), and two paper authors whose emails are printed in their papers. Thomas Rauer is corresponding author of the 2023 Zurich systematic review (IJERPH 2023;20(2):1254), which evaluated "more than 62 million jumps" and found an "average injury rate of 0.044% and an average fatality rate of 0.0011%", with injuries "most commonly reported during the landing sequence". Michael Taylor is corresponding author of the 2026 Lakeland trauma case series.
- **Use the ready-made lists to scale up.** The OTGApps USPA-dropzones GeoJSON on GitHub, the USPA S&TA locator, the PIA member directory by category, the DAeC register of German parachute training organisations, the Indoor Skydiving World tunnel directory and the FAI delegate list will grow this list far faster than searching one dropzone at a time.

## The CSV

```csv
name,type,country,region,city,website,email,phone,contact_form,instagram,youtube,facebook,other_links,person,role,languages,audience_size,source_url,confidence,notes
United States Parachute Association (USPA) - Safety & Training,association,United States,Virginia,Fredericksburg,https://www.uspa.org,safety@uspa.org,+1 540 604 9740 ext 314,,,,,https://www.uspa.org/locator/sta,Ron Bell,Director of Safety & Training,en,40000,https://www.uspa.org/staff/about-us,high,"General: uspa@uspa.org; S&T dept owns SIM, IRM, incident reports and Safety & Training Advisors"
British Skydiving,association,United Kingdom,Leicestershire,Glen Parva,https://britishskydiving.org,safety@britishskydiving.org,+44 116 278 5271,,,,,https://britishskydiving.org/staff/,Jeff Montgomery,"Head of Safety, Training & Competitions",en,,https://britishskydiving.org/contact-us/,high,"Admin: info@britishskydiving.org; STOs Hans Donner and Ryan Mancey listed on staff page"
Australian Parachute Federation (APF),association,Australia,Queensland,Underwood,https://www.apf.com.au,apf@apf.com.au,+61 7 3457 0100,https://www.apf.com.au/contact/apf,,,,https://www.apf.com.au/contact/contact,Charl Rootman,Safety & Training Manager,en,,https://ablis.business.gov.au/service/ag/australian-parachute-federation-jump-pilot-authorisation/33245,medium,"Email seen in gov directory and PIA listing; regional STOs Luke Oliver, Mike Tibbitts, Alex Pereira via form"
Canadian Sport Parachuting Association (CSPA),association,Canada,Ontario,Rockland,https://www.cspa.ca/en,office@cspa.ca,+1 613 419 0908,,,,,https://www.cspa.ca/en/technical-safety-committee-tsc,Jerod Cole,Chair Technical & Safety Committee,"en,fr",,https://www.cspa.ca/en/safety/equipment-technical-bulletins,high,"Bilingual; committee emails masked on site; publishes CanPara"
Deutscher Fallschirmsport Verband (DFV),association,Germany,Saarland,Überherrn,https://www.dfv.aero,info@dfv.aero,+49 6836 92306,,,,,,Jutta Querbach,Geschäftsstelle (office),de,,https://www.dfv.aero/DFV/Kontakt,high,"Licences: lizenzen@dfv.aero; DOSB member; FAI associate member"
DFV Referat Technik,association,Germany,,,https://www.dfv.aero,technik@dfv.aero,+49 351 41 17 400,,,,,,Ralf Homuth,Head of technical department,de,,https://www.dfv.aero/DFV/Kontakt,high,Technical/equipment safety contact of the German federation
Deutscher Aero Club - Luftsportgeräte-Büro (LSG-B),association,Germany,Lower Saxony,Braunschweig,https://lsgb.daec.de,lsgb@daec.de,+49 531 23540 60,,,,,,,,de,,https://lsgb.daec.de/sprungfallschirme/,high,"Publishes list of registered parachute training organisations; DAeC general: info@daec.aero"
Fédération Française de Parachutisme (FFP),association,France,Île-de-France,Paris,https://www.ffp.asso.fr,ffp@ffp.asso.fr,+33 1 53 46 68 68,,,,,,Jean-Michel Poulet,Directeur Technique National,fr,55950,https://www.ffp.asso.fr/en/contact/,high,"Publishes DT49 teaching methods; its 2010-2019 data fed Fer et al. JSMS 2021 (35 deaths, 3015 injuries over almost 6.2M jumps); 55,950 licensees in 2024 per FFP 2025 dossier"
Федерація парашутного спорту України (FPSU),association,Ukraine,,Kyiv,http://fpsu.net.ua,rada_fpsu@ukr.net,+380 99 604 88 48,,,,,https://ukrnac.org/,Yaroslav Markevych,Acting President,uk,,http://fpsu.net.ua/contacts/,high,Also listed by Ukraine's Ministry of Youth and Sports
Федерация парашютного спорта России (FPS Russia),association,Russia,,Moscow,http://www.fpsrussia.ru,rfps2@yandex.ru,+7 495 532 02 54,,,,https://www.facebook.com/skydivesport/,https://infosport.ru/organizations/140,Andrey Barabash,President,ru,,http://www.fpsrussia.ru/regulations,high,"Unites sport organisations in 70 Russian regions (Russian Wikipedia; infosport.ru says 'около 70')"
Федерация парашютного спорта города Москвы,association,Russia,,Moscow,https://fps-moscow.ru,mail@fps-moscow.ru,+7 916 901 44 36,,,,,,,,ru,,https://fps-moscow.ru/%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B/,high,Moscow regional parachute federation
Mexico FAI associate member (fedparmex),association,Mexico,Ciudad de México,Benito Juárez,http://www.fedparmex.org,info@fedmarmex.org,+52 55 5430 4570,,,,,,,,es,,https://old.fai.org/fai-members,medium,FAI listing; email domain (fedmarmex) differs from website (fedparmex) - verify before use
Kypriaki Aerathlitiki Omospondia (Cyprus Airsports Federation),association,Cyprus,,Nicosia,,info@caf.org.cy,+357 22 339 771,,,,,,,,"el,en",,https://old.fai.org/fai-members,medium,FAI active member; Cyprus ISC delegate Stavros Kypragoras
Parachute Industry Association (PIA),association,United States,Arizona,Gold Canyon,https://www.pia.com,,+1 480 982 6125,https://www.pia.com/contact/,,,,https://www.pia.com/resources/service-bulletins/,,,en,,https://www.pia.com/member-category/riggers-and-rigging-services/,low,Member directory by category; publishes service bulletins; no email seen
International Skydiving Instructors Association (ISIA),association,Germany,Bavaria,Reichersbeuern,http://www.skydivinginstructors.org,,+49 177 7755747,,,,,,,,"de,en",,https://www.pia.com/member/international-skydiving-instructors-association-isia/,medium,c/o Aircrew; no email in PIA listing
FAI International Skydiving Commission (ISC),association,Switzerland,,Lausanne,https://www.fai.org/commission/isc,,,,,,,https://old.fai.org/ipc-about-us/181-ipc/34733-ipc-delegates,,,en,,https://en.wikipedia.org/wiki/International_Skydiving_Commission,low,Delegate list names a national rep per country (no emails); renamed from IPC in Dec 2019
International Skydiving Museum & Hall of Fame,other,United States,Florida,Port Orange,https://skydivingmuseum.org,nkemble@skydivingmuseum.org,+1 407 900 9997,,,,,,,,en,,https://www.pia.com/member/international-skydiving-museum-and-hall-of-fame/,medium,Archive/history; good for historical safety material
Skydive Hibaldstow,dropzone,United Kingdom,,Hibaldstow,https://www.skydiving.co.uk,info@skydiving.co.uk,+44 1652 648837,,,,,,,,en,,https://www.skydiving.co.uk/safeguarding/,high,UK student-training DZ
UK Parachuting,rigger,United Kingdom,,,https://ukparachuting.co.uk,jump@ukparachuting.co.uk,,,,,,,,,en,,https://ukparachuting.co.uk/rigging/,high,"Rigging; UK dealer for PD, Cypres, Vigil, Alti-2, Jedi"
Breisgauverein für Fallschirmsport,dropzone,Germany,Baden-Württemberg,Freiburg,http://www.fallschirmsport-freiburg.de,Mail@fallschirmsport-freiburg.de,+49 761 703410,,,,,,Stefan Pacher,Training contact (Ausbildung),de,,https://www.dfv.aero/kW7327/Breisgauverein%20f%C3%BCr%20Fallschirmsport,medium,Club; jump site Lahr; DFV directory entry
Fallschirmsportclub (FSC) Remscheid e.V.,dropzone,Germany,North Rhine-Westphalia,Remscheid,http://www.fsc-remscheid.de,kontakt@fsc-remscheid.de,+49 178 5179 200,,,,,,,,de,,https://dm2025.dfv.aero/Kontakt,medium,Club; organiser of German Nationals 2025
Skyfactory UG,dropzone,Germany,North Rhine-Westphalia,Stadtlohn,,info@skyfactory-stadtlohn.de,+49 152 3138 3165,,,,,,Benedikt Sprissler,Contact,de,,https://dm2025.dfv.aero/Kontakt,medium,Host DZ of German Nationals 2025 (Stadtlohn-Vreden EDLS)
Fallschirmsportzentrum (FSZ) Saar,dropzone,Germany,Saarland,Wallerfangen,https://fsz-saar.de,info@fsz-saar.de,+49 6837 909 975,,,,,,,,de,,https://dm2023.dfv.aero/Kontakt,medium,Saarlouis-Düren airfield; hosted German Nationals 2023
Skydive Bavaria,coach_school,Germany,,Riedhausen,,kidi1504@t-online.de,+49 172 8620888,,,,,,Dieter Kinast,Contact,de,,https://lsgb.daec.de/sprungfallschirme/,medium,DAeC-registered parachute training organisation
Ostthüringer Fallschirmsportclub e.V.,dropzone,Germany,Thuringia,Nobitz,,info@ofc-altenburg.de,+49 176 43495061,,,,,,Thomas Geisler,Contact,de,,https://lsgb.daec.de/sprungfallschirme/,medium,DAeC-registered training organisation (Altenburg airport)
Thüringer Fallschirmsport Verein (TFV) e.V.,dropzone,Germany,Thuringia,Gera,,jana-e@freenet.de,+49 151 26622055,,,,,,Jana Egermann,Contact,de,,https://lsgb.daec.de/sprungfallschirme/,medium,DAeC-registered; address looks personal but is published as org contact
Fallschirmsportspringerclub Thüringia e.V.,dropzone,Germany,Thuringia,Jena-Schöngleina,,uwe.raschke@gmx.de,+49 172 8659172,,,,,,Uwe Raschke,Contact,de,,https://lsgb.daec.de/sprungfallschirme/,medium,DAeC-registered training organisation
Training organisation at Ummanz (name not captured),dropzone,Germany,Mecklenburg-Vorpommern,Ummanz,,fallschirmsportzentrum@gmx.de,+49 30 55490797,,,,,,Ralf Nitzsche,Contact,de,,https://lsgb.daec.de/sprungfallschirme/,medium,DAeC-registered; org name not visible in captured listing
Training organisation at Zerbst/Anhalt (name not captured),dropzone,Germany,Saxony-Anhalt,Zerbst,,fsvzerbst@aol.com,+49 178 4200060,,,,,,Gerald Bürgel,Contact,de,,https://lsgb.daec.de/sprungfallschirme/,medium,DAeC-registered; org name not visible in captured listing
Training organisation at Bitburg airfield (name not captured),dropzone,Germany,Rhineland-Palatinate,Bitburg,,info@flyfirebird.com,+49 6837 91707,,,,,,Bernd Pohl,Contact,de,,https://lsgb.daec.de/sprungfallschirme/,medium,DAeC-registered; org name not visible in captured listing
Training organisation at Weilbach (name not captured),dropzone,Germany,Bavaria,Weilbach,,info@air-sport.de,+49 9373 200661,,,,,,Thomas Schaub,Contact,de,,https://lsgb.daec.de/sprungfallschirme/,medium,DAeC-registered; org name not visible in captured listing
Skydive Alberta,dropzone,Canada,Alberta,Red Deer,,,+1 587 226 5867,,,,,,Richard Nelson,Contact person,en,,https://www.cspa.ca/en/skydive-alberta,medium,CSPA member DZ; self-described largest in western Canada; email masked on CSPA page
Skydive Arizona,dropzone,United States,Arizona,Eloy,,,,,,,,https://www.skydivemag.com/new/author/bryan-burke/,Bryan Burke,Safety & Training Advisor,en,,https://www.skydivemag.com/new/author/bryan-burke/,low,Burke: jumping since 1978 and S&TA; writes on canopy collisions and pattern safety; no email found
Big Air Sportz / Brian Germain,coach_school,United States,Maryland,Silver Spring,https://www.bigairsportz.com,bgermain@bigairsportz.com,+1 301 646 0761,https://www.bigairsportz.com/contact.php,,,https://www.facebook.com/Big-Air-SportzBrian-Germain-Inc-454877787905183/,https://www.briangermain.com,Brian Germain,"Canopy coach; author of The Parachute and its Pilot",en,,https://www.bigairsportz.com/contact.php,high,"Canopy safety courses and instructor course; alt: Brian.TranscendingFear@gmail.com"
My USPA Courses,coach_school,United States,,,https://uspacourses.com,Angie@USPACourses.com,+1 951 240 1155,https://uspacourses.com/contact/,,,,,Angie Aragon,"Course Director; USPA Coach & Tandem Instructor Examiner","en,es",,https://uspacourses.com/contact/,high,"Instructor-rating courses; bilingual staff incl. S&TA Joaquin 'Pipo' Franco"
Airtec GmbH & Co. KG (CYPRES),gear_maker,Germany,North Rhine-Westphalia,Bad Wünnenberg,https://www.cypres.aero,info@cypres.aero,+49 2953 9899 0,https://www.cypres.aero/contact/,,,,,,,"de,en",,https://www.cypres.aero/contact/,high,AAD maker incl. Student CYPRES
AAD nv/sa (Vigil),gear_maker,Belgium,Limburg,Tongeren,https://www.vigil.aero,info@vigil.aero,+32 12 210 250,,,,,,,,"en,fr,nl",,https://www.vigil.aero/contact-us,high,Vigil AAD; technical: service@vigil.aero
Vigil America,gear_maker,United States,Florida,DeLand,https://www.vigil.aero,info@vigilamerica.com,+1 386 736 8464,,,,,,,,en,,https://www.vigil.aero/contact-us,high,Vigil distributor for the Americas
Performance Designs,gear_maker,United States,Florida,DeLand,https://www.performancedesigns.com,sales@performancedesigns.com,+1 386 738 2224,,,,,,,,en,,https://www.pia.com/member/performance-designs-inc/,medium,Main and reserve canopy maker; PIA member
Parachute Laboratories Inc.,gear_maker,United States,,,,,,,,,,,,,en,,https://www.pia.com/member-category/riggers-and-rigging-services/,low,PIA member (riggers category); contact via PIA member page
Aircrew & Airfox Skydiving Academy,rigger,Germany,,,,,,,,,,,,,de,,https://www.pia.com/member-category/riggers-and-rigging-services/,low,PIA member (riggers category)
Mindfly rigging & gear GmbH,rigger,Germany,,,,,,,,,,,,,de,,https://www.pia.com/member-category/riggers-and-rigging-services/,low,PIA member (riggers category)
Para-Sport S.A.,rigger,Spain,,,,,,,,,,,,,es,,https://www.pia.com/member-category/riggers-and-rigging-services/,low,PIA member (riggers category)
Barrie Parachute Services,rigger,Canada,,,,,,,,,,,,,en,,https://www.pia.com/member-category/riggers-and-rigging-services/,low,PIA member (riggers category)
ParaTeknics,rigger,Canada,,,,,,,,,,,,,en,,https://www.pia.com/member-category/riggers-and-rigging-services/,low,PIA member (riggers category)
ChutingStar Enterprises Inc.,rigger,United States,,,,,,,,,,,,,en,,https://www.pia.com/member-category/riggers-and-rigging-services/,low,PIA member; gear dealer
Elite Rigging Academy,rigger,United States,,,,,,,,,,,,,en,,https://www.pia.com/member-category/riggers-and-rigging-services/,low,Rigger school; PIA member
GLH Systems,rigger,Australia,,,,,,,,,,,,,en,,https://www.pia.com/member-category/riggers-and-rigging-services/,low,PIA member (riggers category)
Jump And Fly,rigger,Italy,,,,,,,,,,,,,it,,https://www.pia.com/member-category/riggers-and-rigging-services/,low,PIA member (riggers category)
Thomas Rauer (University Hospital Zurich),other,Switzerland,,Zurich,,thomas.rauer@usz.ch,,,,,,https://pmc.ncbi.nlm.nih.gov/articles/PMC9859333/,Thomas Rauer,"Corresponding author, Recreational Skydiving - Really That Dangerous? A Systematic Review (IJERPH 2023)","en,de",,https://pmc.ncbi.nlm.nih.gov/articles/PMC9859333/,high,"Review of 62M+ jumps: avg injury rate 0.044%, fatality rate 0.0011%; injuries most common in landing sequence"
Michael Taylor (Lakeland Regional Health),other,United States,Florida,Lakeland,,Michael.Taylor@myLRH.org,,,,,,https://pubmed.ncbi.nlm.nih.gov/42255012/,Michael Taylor,"Corresponding author, Retrospective analysis for skydiving injuries (Trauma Case Rep 2026)",en,,https://pmc.ncbi.nlm.nih.gov/articles/PMC13234243/,high,High-volume single-site trauma case series
Anton Westman (Umeå University),other,Sweden,,Umeå,,anton@worldwidewestman.com,,,,,,https://pmc.ncbi.nlm.nih.gov/articles/PMC2465315/,Anton Westman,"Corresponding author, Injuries in Swedish skydiving (BJSM 2007)","sv,en",,https://pmc.ncbi.nlm.nih.gov/articles/PMC2465315/,medium,Printed 2007 personal-domain address may be stale; also wrote Fatalities in Swedish skydiving (2005)
Pascal Edouard (CHU Saint-Étienne),other,France,,Saint-Étienne,,,,,,,,https://www.jsams.org/article/S1440-2440(20)30811-2/abstract,Pascal Edouard,"Corresponding author, FFP 2010-2019 deaths and injuries study (JSMS 2021)","fr,en",,https://pubmed.ncbi.nlm.nih.gov/33257175/,low,"Email masked on publisher page; 35 deaths and 3015 injuries over almost 6.2M jumps by 519,620 skydivers (0.57 deaths, 49 injuries per 100,000 jumps)"
Martina Vidovic (Bloomsburg University),other,United States,Pennsylvania,Bloomsburg,,mvidovic@bloomu.edu,,,,,,,Martina Vidovic,"Author, Are Hook Turns a Major Obstacle to Safe Skydiving? (2007)",en,,https://journals.sagepub.com/doi/abs/10.2466/pms.105.3.795-802,medium,2007 address; may be outdated
Christian L. Hart (East Central University),other,United States,Oklahoma,Ada,,hartcl@mailclerk.ecok.edu,,,,,,,Christian L. Hart,"Corresponding author, Rise in Landing-Related Skydiving Fatalities (2003)",en,,https://doi.org/10.2466/pms.2003.97.2.390,low,2003 address likely stale; co-author James D. Griffith (Shippensburg)
Skydive Radio,podcast,United States,,,,,,,,,,https://podcasts.apple.com/us/podcast/skydive-radio/id78571725,Dave and Steve 'Stump',Hosts,en,,https://podcasts.apple.com/us/podcast/skydive-radio/id78571725,low,Long-running; regular 'Safety First with Brian Germain' segment; Dropzone.com partner
Skydivemag,media,,,,https://www.skydivemag.com,,,,,,,,,,en,,https://www.skydivemag.com/new/danger-zone/,low,Publishes safety features (e.g. 'Danger Zone')
Dropzone.com,forum,,,,,,,,,,,,,,en,,https://toppodcast.com/podcast_feeds/skydive-radio/,low,Long-running forum with incident report discussions; Skydive Radio partner
r/skydiving,community,,,,,,,,,,,,,,en,,,low,Member count and posting rules NOT verified in this pass
SkydivingFatalities.info,other,,,,https://skydivingfatalities.info,,,,,,,,,,en,,https://skydivingfatalities.info/search.asp?..=,low,Searchable fatality database with lessons and links to Dropzone.com reports
British University Skydiving,community,United Kingdom,,,https://www.britishuniversityskydiving.co.uk,,,,,,,,,,en,,https://www.britishuniversityskydiving.co.uk/safeguarding-and-welfare,medium,Collegiate SIG; only a welfare address published (not for feedback requests)
Texas A&M Skydiving Club,community,United States,Texas,College Station,https://getinvolved.tamu.edu/org/skydiving,,,,,,,,,,en,,https://getinvolved.tamu.edu/org/skydiving,low,Collegiate club; weekly meetings; follows USPA collegiate goals
Skydiving Club at Georgia Tech,community,United States,Georgia,Atlanta,,,,,,,,,Jack Broadhead,Club reviver (alumnus),en,25,https://news.gatech.edu/news/2024/08/16/skydiving-club-georgia-tech-reaches-new-heights,low,"Collegiate club dating to 1969, revived 2020; 'around 25 members' per Georgia Tech News (Aug 2024); 6 members set state collegiate exit-altitude records at 14,300 ft (Apr 2024)"
Arizona SkyCats (University of Arizona),community,United States,Arizona,Tucson,,,,,,,,,Brek Montoya,Founder and president,en,,https://wildcat.arizona.edu/114319/uncategorized/experience-skydiving-with-skycats-at-the-ua/?list,low,Collegiate club; jumps at Skydive Arizona; licence path offered
Wolverine Skydiving (University of Michigan),community,United States,Michigan,Ann Arbor,https://public.websites.umich.edu/~mskydive/index.html,,,,,,,,,,en,,https://public.websites.umich.edu/~mskydive/index.html,low,Site last updated 2012 - possibly inactive
OTGApps/USPADropzones,other,United States,,,https://github.com/OTGApps/USPADropzones,,,,,,,,,,en,,https://github.com/OTGApps/USPADropzones,low,GeoJSON of all USPA member DZs (US) plus scraper
OTGApps/Dropzones (USPA Dropzone Finder app),other,United States,,,https://github.com/OTGApps/Dropzones,,,,,,,,,,en,,https://github.com/OTGApps/Dropzones,low,Open-source React Native app listing USPA member DZs
Log-Book (open-source DZ management),other,,,,https://github.com/MarthinusBosman/log-book,,,,,,,,,,en,,https://github.com/MarthinusBosman/log-book,low,AGPL-3.0 dropzone management and logbook; hosted at log-book.app
Indoor Skydiving World - Wind Tunnels World Directory,other,,,,https://www.indoorskydiving.world/wind-tunnels-world-directory/,,,,,,,,,,en,,https://www.indoorskydiving.world/wind-tunnels-world-directory/,low,Filterable worldwide tunnel list (country/city/size/status)
Indoor Skydiving Source - Closed & Private Tunnels,other,,,,https://indoorskydivingsource.com/tunnels/closed-private/,,,,,,,,,,en,31,https://indoorskydivingsource.com/tunnels/closed-private/,low,31 closed/private (incl. military) tunnels; site also lists active tunnels
USPA Safety & Training Advisor locator,other,United States,,,https://www.uspa.org/locator/sta,,,,,,,,,,en,,https://www.uspa.org/locator/sta,low,Finds the appointed S&TA at each USPA DZ
Ukraine Ministry of Youth and Sports - non-Olympic federations list,other,Ukraine,,Kyiv,https://mms.gov.ua/sport/nacionalni-federaciyi-z-neolimpijskih-vidiv-sportu,,,,,,,,,,uk,,https://mms.gov.ua/sport/nacionalni-federaciyi-z-neolimpijskih-vidiv-sportu,low,Official registry with FPSU contacts
Infosport.ru - Russian sports organisations directory,other,Russia,,Moscow,https://infosport.ru/organizations/140,,,,,,,,,,ru,,https://infosport.ru/organizations/140,low,Directory entry for FPS Russia with president and contacts
```

CONTINUE FROM: Wind tunnels (per-tunnel contacts), then dropzones by country (USPA GeoJSON → US), creators (YouTube/Instagram/TikTok), and communities (Reddit/Discord/Facebook/Telegram/VK)

## Coverage
- **Totals:** 73 rows. 39 have an email that appears on the cited page.
- **Rows per type:** association 16, dropzone 14, rigger 10, other (datasets/registries/experts/museum) 16, community 6, gear_maker 5, coach_school 3, podcast 1, media 1, forum 1.
- **Rows per country:** United States 22, Germany 19, United Kingdom 4, Canada 4, Russia 3, Australia 2, France 2, Ukraine 2, Switzerland 2, Belgium 1, Spain 1, Italy 1, Mexico 1, Cyprus 1, Sweden 1, no country/international 7.
- **Share of scope:** a very small fraction, probably under 2% of the world's dropzones. Olympedia's FAI entry says "As of January 2026, the FAI has over 100 members from 91 nations", and the FAI 2017 Annual Report listed 90 Active and 14 Associate Members. This file holds about 11 national parachuting bodies, so roughly 11–12% of FAI member nations. The federations are the bodies that matter most for a syllabus review. Creators and communities are almost entirely missing, because Reddit, YouTube and social platforms couldn't be reached for verified counts in this pass.

## Sources (10 most useful)
1. **USPA staff page** (uspa.org/staff/about-us): department emails and named Safety & Training staff.
2. **British Skydiving contact and staff pages** (britishskydiving.org): dedicated safety email, plus Head of Safety and the STOs.
3. **APF contact page** (apf.com.au/contact/contact): S&T Manager and three regional Safety & Training Officers with phone numbers.
4. **CSPA site** (cspa.ca): office email, Technical & Safety Committee roster, member-dropzone pages.
5. **DFV contact page and club directory** (dfv.aero): federation, technical department and club pages.
6. **DAeC LSG-B "Sprungfallschirme" page** (lsgb.daec.de): German registered parachute training organisations, with contact person, phone and email.
7. **PIA member directory** (pia.com/member-category/...): searchable by category (riggers, manufacturers, organisations), and many entries show email and phone.
8. **FAI ISC delegates list and FAI members page** (old.fai.org): one named delegate per country, plus member-organisation emails. The site blocks automated fetching, so I used search snippets.
9. **PubMed/PMC** (PMC9859333, PMC13234243, PMC2465315, PubMed 33257175): corresponding-author emails printed in the papers.
10. **Indoor Skydiving World and Indoor Skydiving Source**: worldwide tunnel directories.

## Ready-made lists
- **OTGApps/USPADropzones** (GitHub): GeoJSON of all USPA member dropzones in the US, with a scraper. Licence not stated in the captured page, so check the repo. Its roadmap lists international USPA DZs as not yet done.
- **OTGApps/Dropzones** (GitHub): open-source app for the same USPA data.
- **USPA S&TA locator** (uspa.org/locator/sta): web lookup of each dropzone's appointed Safety & Training Advisor. This is the single best route to local safety officers in the US.
- **PIA member directory** (pia.com): HTML lists by category. The riggers category alone has 30+ firms.
- **DAeC LSG-B registered training organisations** (HTML, Germany).
- **Indoor Skydiving World tunnel directory** (HTML table, filterable by country and status). **Indoor Skydiving Source** lists 31 closed or private tunnels, including military ones.
- **FAI ISC delegate list** (HTML/PDF, one rep per member country, no emails).
- **Government registries:** Ukraine's Ministry of Youth and Sports federation list, Russia's infosport.ru directory, and Australia's ABLIS listing for APF.
- **SkydivingFatalities.info:** searchable fatality database with "lessons" fields. Useful as content for the app, not as a contact.
- I found no Wikidata, Kaggle or OSM-specific skydiving dataset in this pass.

## Creative angles
- **Worked:** Contact pages of national-championship organisers (dm2023/dm2025.dfv.aero) gave host-dropzone emails.
- **Worked:** The DAeC equipment office's register of training organisations surfaced small German clubs that general searches miss.
- **Worked:** Government and lobby registries (Ukrainian ministry, infosport.ru, Australian ABLIS, German Bundestag lobby register) confirmed federation emails independently.
- **Worked:** PIA member pages often show an email where the company's own site uses only a form.
- **Worked:** Podcast directories identified Brian Germain's recurring safety segment, which led to his published course emails.
- **Did not work:** Searching for Reddit community size and rules returned only unrelated Wikipedia pages. The FAI members and delegates pages refuse automated fetching.
- **Partly worked:** Publisher pages for older papers either mask author emails (Elsevier) or block automated access (Sage).

## Gaps
- **Creators:** No YouTube, Instagram, TikTok or podcast audience sizes or business emails were verified. Open each channel's About page in a browser to see business-inquiry emails, which YouTube often hides behind a captcha.
- **Communities:** Member counts and rules for r/skydiving, Discord servers, Facebook groups, Telegram and VK chats are unverified. Read each sidebar or rules page by hand.
- **Federations:** Brazil (CBPq), South Africa (PASA), Spain, Italy, Poland, the Nordics and others are still missing. Start from the FAI ISC delegate list and each federation's contact page.
- **Paper emails:** Missing for the Fer/Guiavarch/Edouard 2021 paper, Westman's 2005 fatalities paper and the Elsayed et al. 2024 *American Surgeon* paper. Someone with Elsevier or Sage access, or the PDFs, can check them.
- **Dropzones:** Use the USPA GeoJSON (US), CSPA member pages (Canada), the British Skydiving find-a-dropzone page (UK), the FFP's affiliated structures (France) and the DFV directory (Germany). For France, the FFP's 2025 sports dossier lists 152 clubs, 57 schools and 10 affiliated indoor wind tunnels. The often-quoted figure of 270 affiliated groups is older.
- **Dropzones:** Use the USPA GeoJSON (US), CSPA member pages (Canada), the British Skydiving find-a-dropzone page (UK), the FFP's affiliated structures (France) and the DFV directory (Germany). For France, the FFP's 2025 sports dossier lists 152 clubs, 57 schools and 10 affiliated indoor wind tunnels. The often-quoted figure of 270 affiliated groups is older.

## Where to post (10 best places to ask for feedback)
1. **USPA Safety & Training** (safety@uspa.org). It owns the SIM and ISP that A-licence content must match, and an endorsement or correction from them carries the most weight.
2. **British Skydiving safety desk** (safety@britishskydiving.org). Its STOs are instructor examiners who run the instructor courses.
3. **CSPA Technical & Safety Committee** (via office@cspa.ca). Bilingual, publishes technical bulletins, and a natural reviewer for the English and French framing.
4. **FPSU** (rada_fpsu@ukr.net). The most direct reviewer for the Ukrainian-language version.
5. **FPS Russia / Moscow Federation** (rfps2@yandex.ru, mail@fps-moscow.ru). Reviewers for the Russian terminology.
6. **Angie Aragon, My USPA Courses** (Angie@USPACourses.com). Bilingual EN/ES instructor examiner who could check the Spanish version and the emergency-procedure content.
7. **Brian Germain** (bgermain@bigairsportz.com). Canopy-flight and landing-pattern content is where most student injuries happen, and he has helped federations build canopy courses before.
8. **USPA S&TA locator.** Write to two or three S&TAs at large student dropzones for real-world checks of the student syllabus. Bryan Burke at Skydive Arizona is a well-known example.
9. **Injury researchers** Thomas Rauer (Zurich) and Michael Taylor (Lakeland). They can check that the app's "what injures students" chapter matches the evidence.
10. **Skydive Radio and Dropzone.com forum.** Large listening and reading audiences of experienced jumpers who can share links and books. Read the posting rules first; they weren't verified here.

## Caveats
- Every email above appears on the cited page. "Medium" means it came from a third-party directory (PIA, a government registry, the DFV or DAeC listings) rather than the organisation's own site.
- Several German training-organisation contacts use personal-looking webmail addresses (gmx, freenet, aol, t-online). The DAeC publishes them as the organisation's contact, but write to them only about organisational matters.
- Paper emails from 2003–2007 (Hart, Vidovic, Westman) are likely stale.
- The Mexico listing's email domain doesn't match its website domain, so verify it before using it.
- FAI delegate data comes from the old FAI site and may be out of date.