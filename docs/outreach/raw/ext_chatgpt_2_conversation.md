===== USER =====
Role

You are a senior research analyst building a contact directory for a non-commercial skydiving safety project. You are
thorough, creative, and you never invent data.

Context

A new skydiving student who has just finished AFF (Accelerated Freefall) ground school built a free study app for AFF
and A-license students: the whole jump from the aircraft door to landing, emergency procedures, the landing pattern,
hand signals, real footage and a short test after each chapter, in English, Spanish, Ukrainian and Russian. The
mission is to help people get their A license safely and reduce injuries and deaths. The next step is to ask the
skydiving world for help: feedback, fact checks, the books, links and materials experienced people have saved over
the years, and what they think matters most for keeping students alive. Your job is ONLY to find who to ask and
where. Do not contact anyone.

Objective

Build the most complete list you can of skydiving organisations, people and places in this scope, with their
public contact details:

SCOPE: <the whole world | a region | a list of countries | a type of contact, e.g. "creators and communities only">

Include all of these types:

	1.	Dropzones and skydiving schools/clubs. Every one, including small clubs, military/sport clubs, seasonal and
university clubs, not only the big commercial centres.
	2.	National federations and associations, and their safety and training officers if they publish contacts.
	3.	Wind tunnels, especially those with student (AFF-prep) programmes or tunnel coaches.
	4.	Gear makers and shops: containers, canopies, reserves, AADs, altimeters, helmets, dealers, rigging lofts and
rigger schools.
	5.	Coaches and coaching companies: AFF, canopy piloting, freefly/belly, instructor-rating course organisers.
	6.	Experts: authors of books and articles on skydiving safety and training, authors of peer-reviewed papers on
skydiving injuries and fatalities (corresponding-author email as printed in the paper), magazine columnists,
accident investigators.
	7.	Creators: YouTube channels, podcasts, Instagram/TikTok accounts and blogs that teach or document learning to
skydive, in any language. Include the "business inquiries" email if they publish one, and their audience size.
	8.	Communities: subreddits, Discord servers, Facebook groups, forums, Telegram/VK/WhatsApp groups, newsletters.
Include member counts and their rules about posting links or asking for feedback.
	9.	Events: boogies, competitions and their organisers, demo teams, special-interest groups (women, over-40s,
adaptive, collegiate, veterans).
	10.	Anything else useful you discover. Be creative: dropzone software vendors' public customer lists, booking
platforms, conference exhibitor lists, Wikidata, open datasets, maps (KML/Google My Maps), existing directories or
spreadsheets someone already made.

How to search (strategy)

	1.	Start from lists that already exist, then go to each organisation's own site. Look for:
	•	official federation directories (USPA, British Skydiving, APF, CSPA, DFV, FFP, CBPq, PASA, FAI/IPC members…);
	•	Wikipedia lists in every language;
	•	Wikidata;
	•	OpenStreetMap;
	•	GitHub, Kaggle or data.world datasets;
	•	directory and travel sites;
	•	boogie calendars.
	2.	Search in the local language of each country, not only English. For example: "Fallschirmspringen
Ausbildung", "école de parachutisme", "escuela de paracaidismo", "paraquedismo curso AFF", "scuola
paracadutismo", "skoki spadochronowe", "fallskärmshoppning", "парашютный аэроклуб АФФ", "парашутний клуб",
"スカイダイビング".
	3.	For every organisation, open its own website (contact or about page) and take the email published there. If
the site only has a contact form, give the form URL.
	4.	Breadth before depth: cover every organisation in scope first, then fill in the details.
	5.	Use your own strategies too: after the obvious sources, try at least 5 creative search angles of your own and
say which ones worked.

Hard rules

	•	Never invent, guess or "pattern-complete" an email (no "info@" because it looks likely). Every email must
appear on a page you cite. If you can't find one, leave the field empty.
	•	Public business contacts only: what an organisation or creator publishes for being contacted. No private
personal addresses, no data from leaks, logins or paywalls.
	•	Every row needs a source_url showing where you found it.
	•	If an organisation looks closed or inactive, keep it and say so in notes.

Output

	1.	The CSV, in one code block (no commentary inside it): UTF-8, comma-separated, with a header row, and fields
that contain commas wrapped in quotes. Use exactly these columns, in this order:

name,type,country,region,city,website,email,phone,contact_form,instagram,youtube,facebook,other_links,person,role,languages,audience_size,source_url,confidence,notes

Column notes:

	•	type is one of: dropzone, tunnel, coach_school, gear_maker, rigger, association, creator, podcast, blog,
community, forum, media, other.
	•	confidence:
	•	high = email seen on their own site;
	•	medium = seen in a directory;
	•	low = not verified.
	•	audience_size = followers, subscribers or members (number only).
	•	notes: one short line, for example "AFF + tandem", "USPA Group Member", "no self-promo posts except Saturdays".

Example rows (format only):

Example Skydive Center,dropzone,United States,California,Example City,https://example-skydive.com,info@example-skydive.com,+1 555 0100,,https://instagram.com/exampleskydive,,https://facebook.com/exampleskydive,,,,en,,https://example-skydive.com/contact,high,AFF + tandem; USPA Group Member
Example Skydiving Channel,creator,United Kingdom,,,https://youtube.com/@example,business@example.com,,,https://instagram.com/example,https://youtube.com/@example,,,Alex Example,AFF instructor,en,85000,https://youtube.com/@example/about,high,canopy and emergency-procedure tutorials

	2.	After the CSV, a short report:
	•	Coverage: total rows, rows with email, rows per type and per country, and what share of the scope you
think you covered, with reasons (for example "USPA lists 214 dropzones; 190 are here").
	•	Sources: the 10 most useful sources (URL, what they contain, how big).
	•	Ready-made lists: any existing list, dataset or map you found, with URL, format, size and licence.
	•	Creative angles: which of your own search ideas worked and which didn't.
	•	Gaps: what you could not reach and how someone could get it.
	•	Where to post: the 10 best places to ask for feedback (communities, people or organisations), and why.
	3.	If you hit an output limit, stop at a clean row and write "CONTINUE FROM: <last country/type>". Do not
summarise the remaining rows. I will reply "continue".

SCOPE lines to rotate (one run each)

	•	the whole world: only federations, ready-made lists and datasets, and the 10 biggest dropzones per country
	•	United States and Canada: every dropzone and club
	•	Europe west of Germany (incl. UK, Ireland, Nordics) / Germany, Austria, Switzerland, Italy, Spain, Portugal
	•	Central and Eastern Europe incl. Poland, Ukraine, Russia, Belarus, the Balkans, Turkey, the Caucasus, Central Asia
	•	Latin America and the Caribbean / Africa and the Middle East / Asia and Oceania
	•	the whole world: wind tunnels, gear makers, rigging lofts, coaches
	•	the whole world: YouTube, podcasts, Instagram, TikTok, blogs, newsletters (any language)
	•	the whole world: communities (Reddit, Discord, Facebook groups, forums, Telegram, VK) with posting rules
	•	the whole world: safety researchers, book authors, safety officers, instructor examiners

===== ASSISTANT =====
I’ll check the major directories and available datasets first. Your scope field still contains the template options, so I’ll also ask which run you want.


===== ASSISTANT =====
I’ll use the worldwide foundation scope: federations, existing directories and datasets, and up to 10 dropzones per country. I’ll flag where reliable size rankings are unavailable and record only contact details supported by public sources.


===== ASSISTANT =====
The directories disagree substantially on coverage: one lists 278 dropzones in 30 countries, while another covers many more countries. I’m using them as leads and checking operators’ own pages; a directory listing alone won’t establish that a centre is active or among its country’s largest.


===== ASSISTANT =====
I found a public map containing 880 dropzone records, including small clubs and countries missing from the smaller directories. Its displayed counts differ from the underlying records, and some entries are duplicates or old. I’m checking those issues and following the listed websites for contact details.


===== ASSISTANT =====
The contact checks are finding useful safety and training addresses, including Swiss Skydive, the Swedish national instructor, Norway’s technical officer, and Ukraine’s federation. Some directory pages publish only a name and location; those will stay clearly marked as unverified leads unless I find a public contact.


===== ASSISTANT =====
I’m cross-checking the global lists against federation records. That has exposed some important differences: Japan’s air sports body says it currently has no national parachuting governing body, and South Africa’s directory distinguishes student-training dropzones from other operators. I’m preserving those distinctions in the notes.


===== ASSISTANT =====
The source gathering is complete enough to build the first directory. I’m now removing duplicate listings and checking that each email belongs to the named organisation. Entries supported only by an older directory will stay clearly marked as unverified.


===== ASSISTANT =====
The audit caught two country errors in existing directories: Skydive Ireland operates in Northern Ireland, and Skydive Ural’s own site places it in Russia, despite a Kazakhstan listing. I’m correcting those and separating national air-sport referral bodies from skydiving-specific federations.


===== ASSISTANT =====
The assembled directory currently has 534 rows, including 402 dropzone leads and 107 federation or association contacts. Of the 275 published emails, 193 were found on the organisations’ own sites. The remaining entries are useful leads, but many still need their operating status or contact details confirmed.


===== ASSISTANT =====
I’m preparing the CSV and coverage report now. The report will distinguish verified contacts from directory leads, document reusable datasets and their licences, and identify ten organisations best suited to reviewing the app. The dropzone selections are unranked: the sources don’t support a defensible “ten biggest” list for every country.


===== ASSISTANT =====
The CSV has passed the format check: 534 rows, exactly 20 columns, and a source URL for every row. It contains 278 published emails and 101 contact-form links. The full files are ready; I’ll also include the CSV inline in country-order sections so the response ends at a complete row.


===== ASSISTANT =====
Built **533 rows across 116 countries and territories**, with **278 published emails**. No one was contacted. Dropzone selections are unranked; the sources do not establish the ten biggest operators in every country.

The complete collected directory is available here: [skydiving_worldwide_foundation.csv](https://chatgpt.com/library?file_id=libfile_44a489a3ae44819192240abd78d7659f&account_id=8cc71090-0d8b-4f73-9deb-3bd0cfefa0ce).

Inline CSV, part 1: Albania–France.

```csv
name,type,country,region,city,website,email,phone,contact_form,instagram,youtube,facebook,other_links,person,role,languages,audience_size,source_url,confidence,notes
Albanian Air Sports Federation,association,Albania,,,https://nac.org.al/,info@nac.al,+355692521086,https://nac.org.al/kontakti.php,,,,https://www.fai.org/member/alb-nac,,National air sport contact,,,https://nac.org.al/,high,FAI-listed national referral
Skydive Albania,dropzone,Albania,,,https://www.skydivealbania.al/,,+393471125519,https://www.skydivealbania.al/contact?lang=en,https://instagram.com/skydive_albania,,https://www.facebook.com/skydiveAlbania,,,,,,https://dropzonefinder.com/dropzones/albania/skydive-albania,low,Directory listing; current operation unverified
Federation Algérienne Des Sports Aériens,association,Algeria,,,,fsportsaeriens@gmail.com,+213 (2) 20 11 19 90,,,,,,,National air sport contact,,,https://www.fai.org/member/alg-nac,medium,FAI-listed national referral
Skydive Angola,dropzone,Angola,,,,,,,,,,,,,,,https://dropzonefinder.com/dropzones/angola/skydive-angola,low,Directory listing; current operation unverified
Federación Argentina de Paracaidismo,association,Argentina,,,https://www.paracaidismo.org.ar/contacto/contacto.html,infoparacaidismo.fap@gmail.com,,,,,,,,,es,,https://www.paracaidismo.org.ar/contacto/contacto.html,high,National federation; AFF and club references
Aero Club San Francisco,dropzone,Argentina,Córdoba,San Francisco,,aeroclubsanfrancisco@gmail.com,+54 3564 44-0615,,,,,https://skydiving.com/dropzone/aero-club-san-francisco/,,,,,https://dropzonefinder.com/dropzones/argentina/aero-club-san-francisco,medium,Email from directory; current operation unverified
Buenos Aires Skydive,dropzone,Argentina,Buenos Aires,Chascomús,,,,,,,,,,,,,https://skydiving.com/dropzone/buenos-aires-skydive/,low,Directory listing; current operation unverified
Catamarca Skydiving Club,dropzone,Argentina,,,,,,,,,,,,,,,https://skydiving.com/dropzone/catamarca-skydiving-club/,low,Directory listing; current operation unverified
Mendoza Argentina Skydiving,dropzone,Argentina,Mendoza,Guaymallén,,,,,,,,,,,,,https://skydiving.com/dropzone/mendoza-argentina-skydiving/,low,Directory listing; current operation unverified
Paracaidismo Alta Gracia,dropzone,Argentina,Córdoba,Alta Gracia,https://paracaidismoaltagracia.com/el-club/,,+54 51153489627,https://paracaidismoaltagracia.com/contacto/,https://www.instagram.com/paracaidismoaltagraciaoficial,https://www.youtube.com/@paracaidismoaltagracia6376/videos,https://www.facebook.com/ParacaidismoAltaGracia/,https://dropzonefinder.com/dropzones/argentina/paracenter-paracaidismo-alta-gracia,,,,,https://skydiving.com/dropzone/paracaidismo-alta-gracia/,low,Own inquiry form; no email verified; size rank not established
Paracaidismo Chascomus,dropzone,Argentina,Buenos Aires,Chascomús,,,,,,,,,,,,,https://skydiving.com/dropzone/paracaidismo-chascomus/,low,Directory listing; current operation unverified
Paracaidismo Mar Del Plata,dropzone,Argentina,Buenos Aires,Miramar,,paracaidismomardelplata@gmail.com,+54 9 223 539-2123,,,,,https://skydiving.com/dropzone/paracaidismo-mar-del-plata/,,,,,https://dropzonefinder.com/dropzones/argentina/paracaidismo-mar-del-plata,medium,Email from directory; current operation unverified
Paracaidistas Santa Fe,dropzone,Argentina,Santa Fe,Esperanza,https://www.paracaidismosantafe.com.ar,info@paracaidismosantafe.com.ar,+5403434650407,,https://www.instagram.com/paracaidismosantafe/,,https://www.facebook.com/Paracaidismo-Santa-Fe-774030952723419,https://skydiving.com/dropzone/paracaidistas-santa-fe/; https://dropzonefinder.com/dropzones/argentina/club-escuela-de-paracaidistas-santa-fe,,,,,https://www.paracaidismosantafe.com.ar/contacto/,high,Public email on own site; size rank not established
Skydive Lobos,dropzone,Argentina,Buenos Aires,Lobos,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-lobos/,low,Directory listing; current operation unverified
Skydive Mercedes,dropzone,Argentina,Buenos Aires,Mercedes,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-mercedes/,low,Directory listing; current operation unverified
FAP affiliated clubs,other,Argentina,,,https://www.paracaidismo.org.ar/nosotros/Afiliados.html,,,,,,,,,,,,https://www.paracaidismo.org.ar/nosotros/Afiliados.html,low,Official Argentine affiliated-club directory
National Committee Of Aeromodelling And Spacemodelling Sports,association,Armenia,,,,avia.arm@gmail.com,+37499000919,,,,,,,National air sport referral,,,https://www.fai.org/member/arm-nac,medium,FAI-listed body; skydiving remit not established
Australian Parachute Federation,association,Australia,,,https://www.apf.com.au/contact/contact,,,https://www.apf.com.au/contact/contact,https://www.instagram.com/apfskydive/,,https://www.facebook.com/apfskydive/,,Charl Rootman,Safety and Training Manager,en,,https://www.apf.com.au/contact/contact,low,Contact form routes to named staff
Commando Skydivers Club,dropzone,Australia,,,https://www.commandoskydivers.com.au/,,+61 1300 555 956,,,,,,,,,,https://skydiving.com/dropzone/commando-skydivers/,low,Directory listing; current operation unverified
Hillman Farm Skydiving Club,dropzone,Australia,Western Australia,Darkan,https://www.facebook.com/hillmanfarmskydivingclub/,,+61-04-8833-5694,,,,,,,,,,https://skydiving.com/dropzone/hillman-farm-skydiving-club/,low,Directory listing; current operation unverified
SA Skydiving Ops,dropzone,Australia,,,https://saskydiving.com.au/,admin@saskydiving.com.au,0412114475,https://saskydiving.com.au/contact/,http://instagram.com/saskydiving,https://youtube.com/c/saskydiving,https://www.facebook.com/saskydiving/photos_albums,https://skydiving.com/dropzone/sa-skydiving-ops/,,,,,https://saskydiving.com.au/,high,Public email on own site; size rank not established
Skydive Australia – Byron Bay,dropzone,Australia,New South Wales,Tyagarah,https://www.skydive.com.au/locations/byron-bay/,jill.collins@barkingowlcommunications.com.au,1300811039,,https://www.instagram.com/skydiveaustralia,https://www.youtube.com/watch?v=2ZVmWLpeGVk,https://www.facebook.com/skydive.australia/,https://skydiving.com/dropzone/skydive-australia-byron-bay/; https://www.apf.com.au/DealerLocator/locator.aspx?action=search&usercountry=Australia,Jill Collins,Public relations contact,,,https://www.skydive.com.au/contact-us/,high,External PR contact published on own site
Skydive Australia – Sydney Wollongong,dropzone,Australia,New South Wales,Wollongong,https://www.skydive.com.au/locations/sydney-wollongong/,jill.collins@barkingowlcommunications.com.au,1300811039,,https://www.instagram.com/skydiveaustralia,https://www.youtube.com/channel/UCB6WTrWyyL7RWbcYR4kizEA,https://www.facebook.com/skydive.australia/,https://skydiving.com/dropzone/skydive-australia-sydney-wollongong/; https://www.apf.com.au/DealerLocator/locator.aspx?action=search&usercountry=Australia,Jill Collins,Public relations contact,,,https://www.skydive.com.au/contact-us/,high,External PR contact published on own site
Skydive Elderslie – Newcastle Sport Parachute Club,dropzone,Australia,New South Wales,Elderslie,https://nspc.net.au/,,,,,,,https://www.apf.com.au/DealerLocator/locator.aspx?action=search&usercountry=Australia,,,,,https://skydiving.com/dropzone/skydive-elderslie-newcastle-sport-parachute-club/,low,Directory listing; current operation unverified
Skydive Nagambie,dropzone,Australia,Victoria,Bailieston,https://skydivenagambie.com,skydivenagambie@yahoo.com,03 57 94 1466,,,,,https://skydiving.com/dropzone/skydive-nagambie/,,,,,https://dropzonefinder.com/dropzones/australia/skydive-nagambie,medium,Directory listing; website unavailable; current operation unverified
Skydive Oz,dropzone,Australia,New South Wales,Moruya,https://skyone.com.au/moruya/,fun@skydiveoz.com.au,1300185180,,,,,https://skydiving.com/dropzone/skydive-oz/,,,,,https://dropzonefinder.com/dropzones/australia/skydive-oz,medium,Email from directory; current operation unverified
Skydive Ramblers,dropzone,Australia,Queensland,Toogoolawah,https://www.ramblers.com.au,skydive@ramblers.com.au,+61 7 5423 1159,https://www.ramblers.com.au/contact/,https://www.instagram.com/skydiveramblerstoogoolawah/,https://www.youtube.com/user/skydiveramblers,https://www.facebook.com/SkydiveRamblers/,https://skydiving.com/dropzone/skydive-ramblers/; https://dzspotter.com/dz/ramblers-parachute-centre,,,,,https://www.ramblers.com.au,high,Public email on own site; size rank not established
Sydney Skydivers,dropzone,Australia,New South Wales,Wilton,https://skyone.com.au/sydney/,admin@sydneyskydivers.com.au,,,,,,https://skydiving.com/dropzone/sydney-skydivers/,,,,,https://dropzonefinder.com/dropzones/australia/sydney-skydivers,medium,Email from directory; current operation unverified
APF dropzone locator,other,Australia,,,https://www.apf.com.au/Dropzone-Locator/dropzone-locator,,,,,,,https://www.apf.com.au/DealerLocator/locator.aspx?action=search&usercountry=Australia,,,,,https://www.apf.com.au/Dropzone-Locator/dropzone-locator,low,37 operator rows in public search table; training and sports filters
Österreichischer Aero-Club — Fallschirmspringen,association,Austria,,,https://aeroclub.at/de/sportverband/sektionen/fallschirmspringen/struktur-kontakt,fallschirm@aeroclub.at,+43 670 2017849,,,,https://www.facebook.com/osterreichischer.aeroclub,,Gernot Rittenschöber,Section head and ISC delegate,de,,https://aeroclub.at/de/sportverband/sektionen/fallschirmspringen/struktur-kontakt,high,National parachuting section
Österreichischer Aero-Club — technical safety,association,Austria,,,https://aeroclub.at/de/sportverband/sektionen/fallschirmspringen/struktur-kontakt,christian@schoepf.at,+43 664 1328787,,,,https://www.facebook.com/osterreichischer.aeroclub,,Christian Schöpf,Technical and Safety officer,de,,https://aeroclub.at/de/sportverband/sektionen/fallschirmspringen/struktur-kontakt,high,Public role contact
1st Austrian Parachute Club Graz,dropzone,Austria,,,,,,,,,,,,,,,https://skydiving.com/dropzone/1st-austrian-parachute-club-graz/,low,Directory listing; current operation unverified
Bestskydive Tirol in St. Johann,dropzone,Austria,,,,,,,,,,,,,,,https://skydiving.com/dropzone/bestskydive-tirol-in-st-johann/,low,Directory listing; current operation unverified
Fallschirmzentrum Kärnten,dropzone,Austria,,,,,,,,,,,,,,,https://skydiving.com/dropzone/fallschirmzentrum-karnten/,low,Directory listing; current operation unverified
Fly 2095,dropzone,Austria,,,,,,,,,,,,,,,https://skydiving.com/dropzone/fly-2095/,low,Directory listing; current operation unverified
HFSV Wr. Neustadt,dropzone,Austria,,,,,,,,,,,,,,,https://skydiving.com/dropzone/hfsv-wr-neustadt/,low,Directory listing; current operation unverified
JumpClub Krems,dropzone,Austria,,,https://www.fallschirmspringen-krems.at/,info@fallschirmspringen-krems.at,,https://www.fallschirmspringen-krems.at/kontakt/,https://www.instagram.com/jumpclubkrems/,,https://www.facebook.com/JumpClubKrems,https://skydiving.com/dropzone/jumpclub-krems/; https://dropzonefinder.com/dropzones/austria/jump-club-krems,,,,,https://www.fallschirmspringen-krems.at/,high,Public email on own site; size rank not established
Kärntner Fallschirmspringer-Club,dropzone,Austria,,Klagenfurt,https://kfsc.at/,office@fallschirmspringerclub-kaernten.at,+436505055434,,,,,https://skydiving.com/dropzone/karntern-fallschirmspringer-club/; https://dropzonefinder.com/dropzones/austria/kaerntner-fallschirmspringer-club,,,,,https://kfsc.at/,high,Public email on own site; size rank not established
PINK Skyvan,dropzone,Austria,,Vienna,,,,,,,,,,,,,https://skydiving.com/dropzone/pink-skyvan/,low,Directory listing; current operation unverified
Skydive Graz,dropzone,Austria,,,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-graz/,low,Directory listing; current operation unverified
Skydive HFSC-Freistadt,dropzone,Austria,,,https://www.hfsc-freistadt.com,mailpoint@hfsc-freistadt.com,+43 664 7965892,,,,,https://skydiving.com/dropzone/skydive-hfsc-freistadt/,,,,,https://dropzonefinder.com/dropzones/austria/hfsc-freistadt,medium,Directory listing; website unavailable; current operation unverified
Rum Cay,dropzone,Bahamas,,,,,954-822-5373,,,,,,,,,,https://dropzonefinder.com/dropzones/bahamas/rum-cay,low,Directory listing; current operation unverified
Belarusian Federation of Air Sports,association,Belarus,,,https://bfas.by/,secretary@bfas.by,,,http://www.instagram.com/airsportsby,https://www.youtube.com/channel/UC9nDI0_c-qd7yZTnAhC7LxQ?view_as=subscriber,https://www.facebook.com/bfasby,,,,ru,,https://beldosaaf.by/sport/federacii-dosaaf/,medium,FAI membership listed as suspended
Minsk Aeroclub DOSAAF RB,dropzone,Belarus,,,,,,,,,,,,,,,https://skydiving.com/dropzone/minsk-aeroclub-dosaaf-rb/,low,Directory listing; current operation unverified
Royal Belgian Aero Club,association,Belgium,,,http://www.belgianaeroclub.be,jacques.berlo@regipharm.be,,,,,,,,National air sport contact,,,https://www.fai.org/member/bel-nac,medium,FAI-listed national referral
Paraclub Namur,dropzone,Belgium,,,https://paraclubnamur.be/fr,info@paraclubnamur.be,,https://paraclubnamur.be/fr/contact,http://instagram.com/paraclubnamur,https://www.youtube.com/@ParaClubNamurCERPS,http://www.facebook.com/paraclubnamur,https://skydiving.com/dropzone/paraclub-namur/; https://dzspotter.com/dz/para-club-namur,,,,,https://paraclubnamur.be/fr,high,Public email on own site; size rank not established
Skydive Antwerp,dropzone,Belgium,,,https://www.skydive-antwerp.com/reroute.php,skydivehoevenen@gmail.com,,,,,,https://skydiving.com/dropzone/skydive-antwerp/,,,,,https://dropzonefinder.com/dropzones/belgium/skydive-antwerp,medium,Email from directory; current operation unverified
Skydive Flanders,dropzone,Belgium,Flanders,,https://skydiveflanders.be/,info@skydiveflanders.be,056503940,,,,,,,,,,https://skydiveflanders.be/,high,Multi-site club; branch contacts on own site
Skydive Spa,dropzone,Belgium,,,https://skydivecenterspa.com,muellerjhg@skydivecenterspa.com,+32-(0) 87-269 906,,,,,https://skydiving.com/dropzone/skydive-spa/,,,,,https://dropzonefinder.com/dropzones/belgium/skydive-center-spa,medium,Directory listing; website unavailable; current operation unverified
Skydive St. Ghislain,dropzone,Belgium,,,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-st-ghislain/,low,Directory listing; current operation unverified
Skydive Bolivia,dropzone,Bolivia,,Santa Cruz de la Sierra,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-bolivia/,low,Directory listing; current operation unverified
Vazduhoplovni Savez Bosne I Hercegovine,association,Bosnia and Herzegovina,,,https://www.vzsbih.ba/,info@vzsbih.ba,+387 61 268814,,,,,https://www.fai.org/member/bih-nac,,National air sport contact,,,https://www.vzsbih.ba/,high,FAI-listed national referral
Skydive Banja Luka,dropzone,Bosnia and Herzegovina,,,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-banja-luka/,low,Directory listing; current operation unverified
Parachute Association Of Botswana,association,Botswana,,,,wadaira2@icloud.com,+267 318 5726,,,,,,,National parachuting contact,,,https://www.fai.org/member/bot-nac-active,medium,FAI-listed parachuting association
Gaborone Skydiving Club,dropzone,Botswana,,,,,(+267) 76446161,,,,,,,,,,https://dropzonefinder.com/dropzones/botswana/gaborone-skydiving-club,low,Directory listing; current operation unverified
Confederação Brasileira de Paraquedismo,association,Brazil,,,https://www.cbpq.org.br/contato/,contato@cbpq.org.br,+55 15 3268 1730,https://www.cbpq.org.br/contato/,https://www.instagram.com/cbpq.oficial/,,https://www.facebook.com/cbpq.cbpq,,,,pt,,https://www.cbpq.org.br/contato/,high,Federation and affiliated clubs
Centro Gaúcho de Paraquedismo,dropzone,Brazil,Rio Grande do Sul,Novo Hamburgo,https://www.cgpqd.com.br/,,+55 51 3595 3814,,,,,https://dropzonefinder.com/dropzones/brazil/centro-gaucho-de-paraquedismo,,,,,https://skydiving.com/dropzone/centro-gaucho-de-paraquedismo/,low,Directory listing; current operation unverified
DZ47,dropzone,Brazil,Santa Catarina,Bairro Timbé - Tijucas,https://dzquatrosete.com.br/,,,,https://www.instagram.com/dzquatrosete,,https://www.facebook.com/dzquatrosete,https://dzspotter.com/dz/dz47-skydive-school,,,,,https://skydiving.com/dropzone/dz47/,low,Directory listing; current operation unverified
Paraquedismo Boituva,dropzone,Brazil,São Paulo,Boituva,,,,,,,,,,,,,https://skydiving.com/dropzone/paraquedismo-boituva/,low,Directory listing; current operation unverified
Queda Livre Paraquedismo,dropzone,Brazil,São Paulo,Boituva,https://www.quedalivreparaquedismo.com.br/,escola@quedalivre.com.br,,https://www.quedalivreparaquedismo.com.br/contato/,https://www.instagram.com/quedalivre,https://www.youtube.com/QuedaLivreParaquedismo,https://web.facebook.com/paraquedismoemboituva/,https://skydiving.com/dropzone/queda-livre-paraquedismo/; https://dzspotter.com/dz/queda-livre-paraquedismo,,,,,https://www.quedalivreparaquedismo.com.br/,high,Public email on own site; size rank not established
Sky Company,dropzone,Brazil,São Paulo,Boituva,,,,,,,,,,,,,https://skydiving.com/dropzone/sky-company/,low,Directory listing; current operation unverified
Skydive Amazonas,dropzone,Brazil,Amazonas,Manaus,https://www.skydiveamazonas.com.br/,contato@skydiveamazonas.com.br,,,https://www.instagram.com/skydiveamazonas/,,https://www.facebook.com/skydiveamazonas/?locale=pt_BR,https://skydiving.com/dropzone/skydive-amazonas/; https://dzspotter.com/dz/skydive-amazonas,,,,,https://www.skydiveamazonas.com.br/,high,Public email on own site; size rank not established
Skydive Paraíba,dropzone,Brazil,Paraíba,João Pessoa,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-paraiba/,low,Directory listing; current operation unverified
Skydive Resende,dropzone,Brazil,Rio de Janeiro,Resende,,skydive@skydiveresende.com.br,Tel/Fax - 5524-3354-7352 / 5524-3355-815,,,,,https://skydiving.com/dropzone/skydive-resende/,,,,,https://dropzonefinder.com/dropzones/brazil/skydive-resende,medium,Email from directory; current operation unverified
Skydive Rio,dropzone,Brazil,Rio de Janeiro,Resende,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-rio/,low,Directory listing; current operation unverified
Skydive SP,dropzone,Brazil,São Paulo,Boituva,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-sp/,low,Directory listing; current operation unverified
CBPq affiliated clubs,other,Brazil,,,https://www.cbpq.org.br/filiados/clubes/,,,,,,,,,,,,https://www.cbpq.org.br/filiados/clubes/,low,Official club list; separate state federation list available
Bulgarian National Aero Club,association,Bulgaria,,,https://www.bnac.bg/,info@bnac.bg,,https://www.bnac.bg/%d0%ba%d0%be%d0%bd%d1%82%d0%b0%d0%ba%d1%82%d0%b8/,,,,,,,bg,,https://www.fai.org/member/bul-nac,medium,National air sports body; club directory
Dropzone Erden,dropzone,Bulgaria,,,,,,,,,,,,,,,https://skydiving.com/dropzone/dropzone-erden/,low,Directory listing; current operation unverified
Sky Adventures Bulgaria,dropzone,Bulgaria,,,,,,,,,,,,,,,https://skydiving.com/dropzone/sky-adventures-bulgaria/,low,Directory listing; current operation unverified
Sky Shumen,dropzone,Bulgaria,,,,,,,,,,,,,,,https://skydiving.com/dropzone/sky-shumen/,low,Directory listing; current operation unverified
Skydive Sofia,dropzone,Bulgaria,,,https://skydivesofia.com,info@skydivesofia.com,+359 888840842,,https://www.instagram.com/skydivesofia,https://www.youtube.com/channel/UCgDsYn7kwVz_J-iv7TEGhmQ,https://facebook.com/skydivesofia,https://skydiving.com/dropzone/skydive-sofia/; https://dropzonefinder.com/dropzones/bulgaria/skydive-sofia,,,,,https://skydivesofia.com,high,Public email on own site; size rank not established
Cambodian Airsport Federation,association,Cambodia,,,,federationcambodianairsport@gmail.com,+85569991196,,,,,,,National air sport referral,,,https://www.fai.org/member/cambodian-airsport-federation,medium,FAI-listed body; skydiving remit not established
Canadian Sport Parachuting Association,association,Canada,,,https://www.cspa.ca/en/staff-directory,office@cspa.ca,+1 613 419 0908,,,,,,,,en;fr,,https://www.cspa.ca/en/staff-directory,high,National office; public staff directory
Canadian Sport Parachuting Association — Technical and Safety,association,Canada,,,https://www.cspa.ca/en/technical-safety-committee-tsc,jerod.cole@cspa.ca,,,,,,,Jerod Cole,Technical and Safety Committee chair,en;fr,,https://www.cspa.ca/en/technical-safety-committee-tsc,high,Technical and safety review
Eden North Skydive,dropzone,Canada,Alberta,Onoway,,,,,,,,,,,,,https://skydiving.com/dropzone/eden-north-skydive/,low,Directory listing; current operation unverified
Edmonton Skydive,dropzone,Canada,Alberta,Westlock,https://www.edmontonskydive.com/,jump@albertaskydivecentral.com,+1 780 884 5867,,,,,https://skydiving.com/dropzone/edmonton-skydiving/,,,en,,https://www.edmontonskydive.com/contact-us/,high,Seasonal May-September schedule published
Nouvel Air (Parachute Montreal South Shore),dropzone,Canada,Quebec,Farnham,https://parachutemontreal.ca/en/,,+1-450-293-8118,,,,,,,,,,https://skydiving.com/dropzone/nouvel-air-parachute-montreal-south-shore/,low,Directory listing; current operation unverified
Parachute Montreal (North Shore),dropzone,Canada,Quebec,Saint-Esprit,https://parachutemontreal.ca/en/,,+1-450-839-1111,,,,,,,,,,https://skydiving.com/dropzone/parachute-montreal-north-shore/,low,Directory listing; current operation unverified
Parachute Ottawa,dropzone,Canada,,,https://www.parachuteottawa.ca/,info@parachuteottawa.ca,1-877-OTT-JUMP,https://www.parachuteottawa.ca/contact/,https://www.instagram.com/parachuteottawa/,https://www.youtube.com/channel/UCOYv4XbGrPYvepcAKvwI0sw,https://www.facebook.com/parachuteottawa,https://skydiving.com/dropzone/parachute-ottawa/,,,,,https://www.parachuteottawa.ca/,high,Public email on own site; size rank not established
Parachute Voltige,dropzone,Canada,Quebec,Lourdes-de-Joliette,https://parachutevoltige.com/,,,,,,,https://dzspotter.com/dz/parachute-voltige,,,,,https://skydiving.com/dropzone/parachute-voltige/,low,Directory listing; current operation unverified
Skydive Burnaby,dropzone,Canada,Ontario,Wainfleet,https://www.skydiveburnaby.com/,hello@skydiveburnaby.com,(905)899-1528,https://www.skydiveburnaby.com/contact,https://www.instagram.com/skydiveburnaby/,,https://www.facebook.com/skydive.burnaby,https://skydiving.com/dropzone/skydive-burnaby/; https://dropzonefinder.com/dropzones/canada/skydive-burnaby,,,,,https://www.skydiveburnaby.com/,high,Public email on own site; size rank not established
Skydive Gananoque,dropzone,Canada,Ontario,Gananoque,https://www.skydivegan.com,info@skydivegan.com,613-382-5114,https://www.skydivegan.com/contact-information,https://www.instagram.com/skydivegan/,https://www.youtube.com/user/SkydiveGan,https://www.facebook.com/SkydiveGan/,https://skydiving.com/dropzone/skydive-gananoque/; https://dropzonefinder.com/dropzones/canada/skydive-gananoque,,,,,https://www.skydivegan.com,high,Public email on own site; size rank not established
Skydive Ontario,dropzone,Canada,Ontario,Cayuga,,jump@skydiveontario.com,+1.416.759.3483,,,,,https://skydiving.com/dropzone/skydive-ontario/,,,,,https://dropzonefinder.com/dropzones/canada/skydive-ontario,medium,Email from directory; current operation unverified
Skydive Vancouver,dropzone,Canada,British Columbia,Abbotsford,https://www.vancouver-skydiving.bc.ca/,info@skydivevancouver.com,+1604-327-5867,,,https://www.youtube.com/channel/UCngi1a6dt3H2H4oZrK9ORPA,https://www.facebook.com/pages/Skydive-Vancouver/89026672201,https://skydiving.com/dropzone/skydive-vancouver/; https://dropzonefinder.com/dropzones/canada/skydive-vancouver,,,,,https://www.vancouver-skydiving.bc.ca/,high,Public email on own site; size rank not established
CSPA dropzone and member directories,other,Canada,,,https://www.cspa.ca/en/dropzones,,,,,,,,,,,,https://www.cspa.ca/en/dropzones,low,Official paginated DZ directory; clubs require separate member directory
Federación Chilena de Paracaidismo,association,Chile,,,https://paracaidismo.cl/licencias/,contacto@paracaidismo.cl,,https://paracaidismo.cl/contact/,https://www.instagram.com/parafech/,,https://web.facebook.com/parafech?locale=es_LA,,,,es,,https://paracaidismo.cl/licencias/,high,Licensing and student training referral
Aerodromo Diego Portales La Ligua,dropzone,Chile,Región Metropolitana,Valparaíso,https://www.paracaidismo.net,ppbcrra@yahoo.com,56977659349,,,,,https://skydiving.com/dropzone/aerodromo-diego-portales-la-ligua/,,,,,https://dropzonefinder.com/dropzones/chile/aerodromo-diego-portales-la-ligua,medium,Directory listing; website unavailable; current operation unverified
Air Skydive – Paracaidismo Pucón,dropzone,Chile,Araucania,Pucon,,,,,,,,,,,,,https://skydiving.com/dropzone/air-skydive-paracaidismo-pucon/,low,Directory listing; current operation unverified
Club Deparacaidismo Tigres Voladores,dropzone,Chile,Valparaíso,Valparaíso,,,,,,,,,,,,,https://skydiving.com/dropzone/club-deparacaidismo-tigres-voladores/,low,Directory listing; current operation unverified
Skydive Aloha,dropzone,Chile,Valparaíso,Valparaíso,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-aloha/,low,Directory listing; current operation unverified
Skydive Andes Paracaidismo en Chile,dropzone,Chile,Región Metropolitana,Melipilla,https://skydiveandes.com/,contacto@skydiveandes.com,+569 7229 9633,,https://www.instagram.com/skydiveandes,,https://www.facebook.com/skydiveandes,https://skydiving.com/dropzone/skydive-andes-paracaidismo-en-chile/,,,,,https://skydiveandes.com/,high,Public email on own site; size rank not established
Skydive Santa Cruz,dropzone,Chile,O'Higgins,Lolol,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-santa-cruz/,low,Directory listing; current operation unverified
Skydive Viña del Mar,dropzone,Chile,Valparaíso,Valparaíso,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-vina-del-mar/,low,Directory listing; current operation unverified
Aero Sports Federation Of China,association,China,,,http://www.asfc.org.cn,asfc@olympic.cn,+86 10 670 52035,,,,,,,National air sport contact,,,https://www.fai.org/member/chn-nac,medium,FAI-listed national referral
Skydive Beijing,dropzone,China,,,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-beijing/,low,Directory listing; current operation unverified
Xiangda Skydiving Club,dropzone,China,Henan,Zhengzhou,,,,,,,,,,,,,https://skydiving.com/dropzone/xiangda-skydiving-club/,low,Directory listing; current operation unverified
Federación Colombiana de Deportes Aéreos,association,Colombia,,,https://www.fedeaereos.org/,info@fedeaereos.org,,,,,https://www.facebook.com/fedeaereoscolombia,,,,es,,https://www.fedeaereos.org/,high,National air sports body
Aeroclub Bogotá Skydive,dropzone,Colombia,,,,,,,,,,,,,,,https://skydiving.com/dropzone/aeroclub-bogota-skydive/,low,Directory listing; current operation unverified
Paracaidismo Colombia – Flandes,dropzone,Colombia,Tolima,Flandes,,,,,,,,,,,,,https://skydiving.com/dropzone/paracaidismo-colombia-flandes/,low,Directory listing; current operation unverified
Paracaidismo Colombia – Santa Marta,dropzone,Colombia,,,,,,,,,,,,,,,https://skydiving.com/dropzone/paracaidismo-colombia-santa-marta/,low,Directory listing; current operation unverified
Skydive Caribe,dropzone,Colombia,Atlantico,Tubará,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-caribe/,low,Directory listing; current operation unverified
Skydive Colombia – La Casa – Flandes,dropzone,Colombia,Tolima,Flandes,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-colombia-la-casa-flandes/,low,Directory listing; current operation unverified
Xielo Skydive Colombia – Cartagena de Indias,dropzone,Colombia,Bolívar,Cartagena De Indias,,,,,,,,,,,,,https://skydiving.com/dropzone/xielo-skydive-colombia-cartagena-de-indias/,low,Directory listing; current operation unverified
Skydive Costa Rica,dropzone,Costa Rica,Puntarenas,Quepos,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-costa-rica/,low,Directory listing; current operation unverified
Skydive Pura Vida,dropzone,Costa Rica,Puntarenas,Aranjuez,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-pura-vida/,low,Directory listing; current operation unverified
Hrvatski zrakoplovni savez,association,Croatia,,,https://www.caf.hr/kontakt/,hzs@caf.hr,+385 1 4848 754,,,,,,,,hr,,https://www.caf.hr/kontakt/,high,National air sports body; affiliated club list
Aeroclub Slobodan Pad,dropzone,Croatia,,,https://slobodanpad.hr,info@slobodanpad.hr,091 4290 926,,https://www.instagram.com/slobodanpad/,https://www.youtube.com/user/pskslobodanpad/featured‎,https://www.facebook.com/PSKSLOBODANPAD/?fref=ts,https://skydiving.com/dropzone/aeroclub-slobodan-pad/; https://dropzonefinder.com/dropzones/croatia/aeroclub-slobodan-pad-freefall,,,,,https://slobodanpad.hr,high,Public email on own site; size rank not established
Paraškola Impact,dropzone,Croatia,,,,,,,,,,,,,,,https://skydiving.com/dropzone/paraskola-impact/,low,Directory listing; current operation unverified
Skydive Croatia,dropzone,Croatia,,,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-croatia/,low,Directory listing; current operation unverified
Skydiving Croatia,dropzone,Croatia,,,,,,,,,,,,,,,https://skydiving.com/dropzone/skydiving-croatia/,low,Directory listing; current operation unverified
Skydiving Tandem Group – Hvar,dropzone,Croatia,Hvar,Stari Grad,,,,,,,,,,,,,https://skydiving.com/dropzone/skydiving-tandem-group-hvar/,low,Directory listing; current operation unverified
Skydiving Tandem Group – Split,dropzone,Croatia,Split-Dalmatia,Sinj,,,,,,,,,,,,,https://skydiving.com/dropzone/skydiving-tandem-group-split/,low,Directory listing; current operation unverified
Skydiving Tandem Group – Zagreb,dropzone,Croatia,Zagreb,Ježdovec,,,,,,,,,,,,,https://skydiving.com/dropzone/skydiving-tandem-group-zagreb/,low,Directory listing; current operation unverified
Skydiving Zadar,dropzone,Croatia,Zadar,Razanac,,,,,,,,,,,,,https://skydiving.com/dropzone/skydiving-zadar/,low,Directory listing; current operation unverified
Tandem Experti,dropzone,Croatia,,,,,,,,,,,,,,,https://skydiving.com/dropzone/tandem-experti/,low,Directory listing; current operation unverified
Croatian Aeronautical Federation members,other,Croatia,,,https://www.caf.hr/popis-clanica/,,,,,,,,,,,,https://www.caf.hr/popis-clanica/,low,Mixed air-sport club list with public contacts
Aviation Club Of Cuba,association,Cuba,,,,club.aviacion@enet.cu,+53 7 2026592,,,,,,,National air sport contact,,,https://www.fai.org/member/cub-nac,medium,FAI membership suspended; national air sport referral
Skydive Varadero Cuba,dropzone,Cuba,,,https://skydivingvaradero.com/,contacto.skydivevaradero@gmail.com,(53-45) 6662828 / (53-45) 611220,,,,http://www.facebook.com/skydivingvaradero,https://dropzonefinder.com/dropzones/cuba/skydive-varadero-cuba,,,,,https://skydivingvaradero.com/skydive-varadero-contact.html,high,Public email on own site; size rank not established
Kypriaki Aerathlitiki Omospondia,association,Cyprus,,,https://www.caf.org.cy/,info@caf.org.cy,+357 22 339 771 or +357 99 609 272 (mobile),,,,,,,National air sport contact,,,https://www.fai.org/member/cyp-nac,medium,FAI-listed national referral
Cyprus Parachute Association,dropzone,Cyprus,,Xylotymvou,,liza.yianni@gmail.com,,,,,,https://skydiving.com/dropzone/cyprus-parachute-association/,,,,,https://dropzonefinder.com/dropzones/cyprus/cyprus-parachute-association,medium,Email from directory; current operation unverified
Aeroklub České republiky — KLS Para,association,Czech Republic,,,https://www.aeroklub.cz/osk-para/,para@aecr.cz,,https://www.aeroklub.cz/kontakt/,https://www.instagram.com/aeroklub.cz/,https://www.youtube.com/@aeroklubceskerepubliky,https://www.facebook.com/aeroklub.cz,,Jan Bečka,Commission chair,cs,,https://www.aeroklub.cz/osk-para/,high,National parachuting commission
Aeroclub Nové Město nad Metují,dropzone,Czech Republic,Náchod,Nové Město nad Metují-Krčín,,,,,,,,,,,,,https://skydiving.com/dropzone/aeroclub-nove-mesto-nad-metuji/,low,Directory listing; current operation unverified
Dropzone Prostejov,dropzone,Czech Republic,Olomouc,Prostejov,,,,,,,,,,,,,https://skydiving.com/dropzone/dropzone-prostejov/,low,Directory listing; current operation unverified
Hořovice,dropzone,Czech Republic,Beroun,Tlustice,,,,,,,,,,,,,https://skydiving.com/dropzone/horovice/,low,Directory listing; current operation unverified
Letecká Společnost Dobrodruhů – L.S.D.,dropzone,Czech Republic,Vysočina,Jihlava,,,,,,,,,,,,,https://skydiving.com/dropzone/letecka-spolecnost-dobrodruhu-l-s-d/,low,Directory listing; current operation unverified
Paraklub Olymp Prague,dropzone,Czech Republic,Prague,Prague 9,,,,,,,,,,,,,https://skydiving.com/dropzone/paraklub-olymp-prague/,low,Directory listing; current operation unverified
Paraklub Zábřeh,dropzone,Czech Republic,Opava,Dolní Benešov,,,,,,,,,,,,,https://skydiving.com/dropzone/paraklub-zabreh/,low,Directory listing; current operation unverified
PINK Skyvan – Klatovy,dropzone,Czech Republic,Plzeň,Klatovy,,,,,,,,,,,,,https://skydiving.com/dropzone/pink-skyvan-klatovy/,low,Directory listing; current operation unverified
Skycentrum,dropzone,Czech Republic,Brno,Drásov,,,,,,,,,,,,,https://skydiving.com/dropzone/skycentrum/,low,Directory listing; current operation unverified
Skydive Tábor,dropzone,Czech Republic,Tábor,Sezimovo Ústí,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-tabor/,low,Directory listing; current operation unverified
Skywalkers,dropzone,Czech Republic,Ústí nad Labem,Most,,,,,,,,,,,,,https://skydiving.com/dropzone/skywalkers/,low,Directory listing; current operation unverified
Dansk Faldskærms Union,association,Denmark,,,https://www.dfu.dk/kontakt-dfu,dfu@dfu.dk,+45 23 44 20 19,,https://www.instagram.com/dfu1963,https://www.youtube.com/@dfu2605,https://www.facebook.com/dfu1963,,,,da,,https://www.dfu.dk/kontakt-dfu,high,National skydiving union
Aarhus Faldskærms Club,dropzone,Denmark,,,https://www.aafc.dk/,info@aafc.dk,+45 60 62 02 15,https://www.aafc.dk/kontakt/,https://www.instagram.com/aafcdk/,,https://www.facebook.com/aafcdk,https://skydiving.com/dropzone/aarhus-faldskaerms-club/; https://skydiving.com/dropzone/arhus-faldskaerms-klub/,,,,,https://www.aafc.dk/,high,Public email on own site; size rank not established
Aversi Faldskærms Club,dropzone,Denmark,,,https://www.aversi.dk/,info@aversi.dk,,,,,,,,,,,https://skydiving.com/dropzone/aversi-faldskaerms-club/,medium,Directory listing; website unavailable; current operation unverified
DFC Copenhagen,dropzone,Denmark,Faxe,Tureby,,dfc@dfcparaclub.dk,+45 44657242,,,,,https://skydiving.com/dropzone/dfc-copenhagen/,,,,,https://dropzonefinder.com/dropzones/denmark/dfc-copenhagen,medium,Email from directory; current operation unverified
Dropzone Denmark,dropzone,Denmark,,,https://www.dropzonedenmark.dk/,info@dropzonedenmark.dk,+4522401117,,https://www.instagram.com/dropzonedenmark,https://www.youtube.com/watch?v=83zXYbYD5F4,https://www.facebook.com/DropzoneDanmark/reviews,https://skydiving.com/dropzone/dropzone-denmark/,,,,,https://www.dropzonedenmark.dk/,high,Public email on own site; size rank not established
Holstebro-Lindtorp Parachute Club,dropzone,Denmark,Midtjylland,Struer,,,,,,,,,,,,,https://skydiving.com/dropzone/holstebro-lindtorp-parachute-club/,low,Directory listing; current operation unverified
Kolding Faldskærmsklub,dropzone,Denmark,Jutland,Vamdrup,,,,,,,,,,,,,https://skydiving.com/dropzone/kolding-faldskaermsklub/,low,Directory listing; current operation unverified
Nordsjællands Faldskærms Klub,dropzone,Denmark,Hovedstaden,Frederikssund,https://skydive-nfk.dk/,info@nfk.dk,+4540408640,,https://www.instagram.com/nordsjaellands_faldskaermsklub/,,https://www.facebook.com/NFKskydive,https://skydiving.com/dropzone/nordsjaellands-faldskaerms-klub/,,,,,https://dropzonefinder.com/dropzones/denmark/nordsjaellands-faldskaerms-klub,medium,Email from directory; current operation unverified
Odense Faldskærmscenter,dropzone,Denmark,Odense N,Belringe,https://ofc.dk/,kontakt@ofc.dk,+45 26 78 46 46,,https://www.instagram.com/odense_faldskrmscenter/,,https://www.facebook.com/odensefaldskrmscenter/,https://skydiving.com/dropzone/odense-faldskaermscenter/,,,,,https://ofc.dk/,high,Public email on own site; size rank not established
Skydive Viborg,dropzone,Denmark,Jutland,Viborg,https://skydiveviborg.dk/,solo@skydiveviborg.dk,+45 28 19 25 31,,https://www.instagram.com/skydiveviborg/,,https://www.facebook.com/SKViborg/,https://skydiving.com/dropzone/skydive-viborg/,,,,,https://skydiveviborg.dk/,high,Public email on own site; size rank not established
Skydive Dominican Republic,dropzone,Dominican Republic,,,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-dominican-republic/,low,Directory listing; current operation unverified
Club De Aeromodelismo Quito,association,Ecuador,,,https://www.aeromodelismoecuador.com,almeidax@hotmail.com,+593 98 425 2022,,,,,,,National air sport referral,,,https://www.fai.org/member/ecu-nac,medium,FAI-listed body; skydiving remit not established
Skydive Los Garrapateros,dropzone,Ecuador,,,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-los-garrapateros/,low,Directory listing; current operation unverified
The Egyptian Aviation Federation,association,Egypt,,,https://egyptianaviationfederation.com/,info@egyptianaviationfederation.com,+20 (2) 393 58 73,,,,,,,National air sport contact,,,https://www.fai.org/member/egy-nac,medium,FAI-listed national referral
Skydive Ilopango,dropzone,El Salvador,,Ilopango,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-ilopango/,low,Directory listing; current operation unverified
Eesti Lennuspordi Föderatsioon,association,Estonia,,,https://www.lennusport.org/kontakt/,board@lennusport.org,,,,,,,,,et,,https://www.spordiregister.ee/et/organisatsioon/4046/eesti_lennuspordi_foderatsioon/detail?pdf=1,medium,National air sports body; parachuting representative listed
Airsport,dropzone,Estonia,Harju,Tallinn,,,,,,,,,,,,,https://skydiving.com/dropzone/airsport/,low,Directory listing; current operation unverified
Dropzone Estonia,dropzone,Estonia,Rapla,Rapla,,,,,,,,,,,,,https://skydiving.com/dropzone/dropzone-estonia/,low,Directory listing; current operation unverified
Estonian Parachute Center,dropzone,Estonia,Järva,Järva,,,,,,,,,,,,,https://skydiving.com/dropzone/estonian-parachute-center/,low,Directory listing; current operation unverified
Skydive Estonia,dropzone,Estonia,Harju,Tallinn,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-estonia/,low,Directory listing; current operation unverified
Free Fall Fiji,dropzone,Fiji,,Nadi,,,,,,,,,,,,,https://skydiving.com/dropzone/free-fall-fiji/,low,Directory listing; current operation unverified
Skydive Fiji,dropzone,Fiji,Nadi,Martintar,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-fiji/,low,Directory listing; current operation unverified
Laskuvarjotoimikunta,association,Finland,,,https://laskuvarjotoimikunta.ilmailuliitto.fi/,lt@laskuvarjotoimikunta.fi,,,,,https://www.facebook.com/Laskuvarjotoimikunta,,,,fi,,https://laskuvarjotoimikunta.ilmailuliitto.fi/yhteystiedot/,high,Parachuting committee and training materials
Suomen Ilmailuliitto,association,Finland,,,https://ilmailuliitto.fi/ota-yhteytta/,sil@ilmailuliitto.fi,09 3509 340,,https://www.instagram.com/ilmailuliitto/,https://www.youtube.com/@SuomenIlmailuliitto,https://www.facebook.com/suomenilmailuliittory,,,,fi;sv,,https://ilmailuliitto.fi/ota-yhteytta/,high,National air sports federation
DZ Alavus,dropzone,Finland,Southern Ostrobothnia,Alavus,,,,,,,,,,,,,https://skydiving.com/dropzone/dz-alavus/,low,Directory listing; current operation unverified
DZ Kemi,dropzone,Finland,Lapland,Kemi,,,,,,,,,,,,,https://skydiving.com/dropzone/dz-kemi/,low,Directory listing; current operation unverified
Oulu Skydive Center,dropzone,Finland,North Ostrobothnia,Oulunsalo,https://www.ouluskydivecenter.fi/,info@ouluskydivecenter.fi,0405560403,,https://www.instagram.com/ouluskydivecenter/,,https://www.facebook.com/ouluskydivecenter,https://skydiving.com/dropzone/oulu-skydive-center/; https://dropzonefinder.com/dropzones/finland/skydive-oulu,,,,,https://www.ouluskydivecenter.fi/,high,Public email on own site; size rank not established
Skydive Finland,dropzone,Finland,Kouvola,Utti,https://www.skydivefinland.fi/,,+358 040 506 8070,https://www.skydivefinland.fi/contact/,https://www.instagram.com/skydivefinland,https://www.youtube.com/@skydivefinland3424,https://www.facebook.com/Skydive-Finland-855297787867230,,,,,,https://skydiving.com/dropzone/skydive-finland/,low,Own inquiry form; no email verified; size rank not established
Skydive Häme,dropzone,Finland,Päijänne Tavastia,Asikkala,https://skydivehame.fi/,koulutus@skydivehame.fi,,,https://www.instagram.com/skydivehame,https://www.youtube.com/@skydivehame,https://www.facebook.com/skydivehame,https://skydiving.com/dropzone/skydive-hame/; https://dropzonefinder.com/dropzones/finland/skydive-hame,,,,,https://skydivehame.fi/pages/contact,high,Public email on own site; size rank not established
Skydive Jyväskylä,dropzone,Finland,Jyväskylä,Jyväskylä,https://skydivejkl.fi/,kerho@skydivejkl.fi,+358453234130,https://skydivejkl.fi/pages/yhteystiedot,https://www.instagram.com/skydivejkl/,https://www.youtube.com/channel/UCXaCjVTJhVqkzjrOpx2VZ5w,https://www.facebook.com/skydivejkl/,https://skydiving.com/dropzone/skydive-jyvaskyla/; https://dropzonefinder.com/dropzones/finland/skydive-jyvaeskylae,,,,,https://skydivejkl.fi/,high,Public email on own site; size rank not established
Skydive Karjala Ry,dropzone,Finland,South Karelia,Imatra,https://skydivekarjala.fi/,info@skydivekarjala.fi,,,,,,https://skydiving.com/dropzone/skydive-karjala-ry/,,,,,https://dropzonefinder.com/dropzones/finland/skydive-karjala-ry,medium,Directory listing; website unavailable; current operation unverified
Skydive Kuopio,dropzone,Finland,Northern Savonia,Kuopio,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-kuopio/,low,Directory listing; current operation unverified
Skydive Pori,dropzone,Finland,Satakunta,Pori,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-pori/,low,Directory listing; current operation unverified
Skydive Turku,dropzone,Finland,Turku,Turku,,,,,,,,,,,,,https://skydiving.com/dropzone/skydive-turku/,low,Directory listing; current operation unverified
Fédération Française de Parachutisme,association,France,,,https://www.ffp.asso.fr/contact/,ffp@ffp.asso.fr,+33 1 53 46 68 68,https://www.ffp.asso.fr/contact/,https://www.instagram.com/ffparachutisme/,https://www.youtube.com/@FFPParachutisme,https://www.facebook.com/FFParachutisme/,,,,fr,,https://www.ffp.asso.fr/contact/,high,National federation; school directory
Bouloc Skydive,dropzone,France,Haute-Garonne,Bouloc-en-Quercy,https://www.bouloc-skydive.com/,accueil@bouloc-skydive.com,+33563953946,https://www.bouloc-skydive.com/contact,https://www.instagram.com/boulocskydive/,https://www.youtube.com/user/BoulocSkydive/videos,https://www.facebook.com/boulocskydive,https://skydiving.com/dropzone/bouloc-skydive/; https://dzspotter.com/dz/bouloc-skydive,,,,,https://www.bouloc-skydive.com/,high,Public email on own site; size rank not established
Cahors Skydive,dropzone,France,Lot,Cieurac,https://www.cahors-skydive.fr/,cep46@wanadoo.fr,,,,https://www.youtube.com/channel/UCSqTKunhTWz15PHeQrO8MBQ,https://www.facebook.com/Cahors.Skydive/,https://skydiving.com/dropzone/cahors-skydive/; https://dzspotter.com/dz/cahors-skydive,,,,,https://www.cahors-skydive.fr/,high,Public email on own site; size rank not established
CEP Alsace / Strasbourg,dropzone,France,Grand Est,Strasbourg,,,,,,,,,,,,,https://skydiving.com/dropzone/cep-alsace-strasbourg/,low,Directory listing; current operation unverified
CERPS Gap-Tallard,dropzone,France,Hautes-Alpes,Tallard,https://www.cerps-tallard.fr/,accueil@parachutismegap.fr,+33492540239,https://www.cerps-tallard.fr/contact,https://www.instagram.com/cerpstallard,https://www.youtube.com/@ParachutismeGap,https://www.facebook.com/cerps.gap.tallard,https://skydiving.com/dropzone/cerps-gap-tallard/,,,,,https://dropzonefinder.com/dropzones/france/cerps-gap-tallard,medium,Directory email; own inquiry form available
EFPLB – Ecole Francaise de Parachutisme de Lille Bondues,dropzone,France,Nord,Bondues,https://www.parachutisme-lille.fr,contact@parachutisme-lille.fr,+33320982016,https://www.parachutisme-lille.fr/acces-contact/,https://www.instagram.com/parachutisme.lille/,,https://www.facebook.com/EFPLB/,https://skydiving.com/dropzone/efplb-ecole-francaise-de-parachutisme-de-lille-bondues/; https://dropzonefinder.com/dropzones/france/efplb-ecole-francaise-de-parachutisme-de-lille-bondues,,,,,https://www.parachutisme-lille.fr,high,Public email on own site; size rank not established
Parachutisme Vannes,dropzone,France,Morbihan,Monterblanc,,,,,,,,,,,,,https://skydiving.com/dropzone/parachutisme-vannes/,low,Directory listing; current operation unverified
Pau Skydive,dropzone,France,Pyrénées-Atlantiques,Lasclaveries,https://pau-skydive.fr/,skydivepau@gmail.com,05 59 04 85 89,https://pau-skydive.fr/contact/,https://www.instagram.com/pauskydive/,https://www.youtube.com/watch?v=eTFPotTLEYk,https://www.facebook.com/pauskydive,https://skydiving.com/dropzone/pau-skydive/; https://dropzonefinder.com/dropzones/france/pau-skydive-2,,,,,https://pau-skydive.fr/contact/,high,Public email on own site; size rank not established
Skydive Flyzone,dropzone,France,Aude,Lezignan-Corbieres,https://www.skydive-flyzone.com,,+33 682 504 340,,,,,https://dropzonefinder.com/dropzones/france/skydive-flyzone,,,,,https://skydiving.com/dropzone/skydive-flyzone/,low,Directory listing; website unavailable; current operation unverified
Skydive Maubeuge,dropzone,France,Nord,Vieux-Reng,https://www.skydivemaubeuge.fr/,info@skydivemaubeuge.fr,+33327679831,,https://www.instagram.com/skydive_maubeuge,,https://www.facebook.com/cerpm/,https://skydiving.com/dropzone/skydive-maubeuge/; https://dzspotter.com/dz/skydive-maubeuge,,,,,https://www.skydivemaubeuge.fr/,high,Public email on own site; size rank not established
Skydive Pamiers,dropzone,France,Ariège,Les Pujols,https://www.parachutisme-pamiers09.fr/,contact.ceps09@gmail.com,+33561687200,https://www.parachutisme-pamiers09.fr/contact,,,https://www.facebook.com/SkydivePamiers,https://skydiving.com/dropzone/skydive-pamiers09.fr/; https://dzspotter.com/dz/skydive-pamiers,,,,,https://www.parachutisme-pamiers09.fr/,high,Public email on own site; size rank not established
FFP affiliated structures directory,other,France,,,https://www.ffp.asso.fr/ou-pratiquer/liste-de-toutes-les-structures-ffp/,,,,,,,,,,,,https://www.ffp.asso.fr/ou-pratiquer/liste-de-toutes-les-structures-ffp/,low,Schools and clubs; includes university and adaptive-sport structures
```

The complete [skydiving_research_report.md](https://chatgpt.com/library?file_id=libfile_a7bace7f003c8191a6bb87312a26ded5&account_id=8cc71090-0d8b-4f73-9deb-3bd0cfefa0ce) contains country and type counts, coverage limits, ten principal sources, 25 reusable lists/datasets, licences, nine creative search angles, gaps, and ten recommended feedback contacts.

CONTINUE FROM: France/other

===== USER =====
# Deep-research prompt v2: volume first

Why v1 gave ~40–70 rows: these tools stop at an output limit, v1 spent it on a long report, and "the whole world, 10
types" made them sample. v2: one narrow scope per run, the table only, harvest whole directories, then keep asking
"continue". Best tools for volume: ChatGPT **Agent** mode or Manus (they can return a downloadable .csv file, no
text limit), then ChatGPT/Gemini Deep Research, Perplexity. Save each answer as
`docs/outreach/raw/ext_<tool>_<scope>.unverified.csv.txt`; the next chat verifies and merges it.

## 1. The prompt (paste, then change only the SCOPE line)

```
You are a data-collection agent. Build the largest possible contact table for this scope. Quantity and completeness
matter most: every organisation, not a sample.

SCOPE: <one scope from the list below>

What to collect: skydiving (parachuting) dropzones, schools, clubs, university clubs, military/sport parachute clubs,
national and regional federations and their safety/training officers, wind tunnels, coaches and coaching companies,
riggers and lofts, gear makers and shops, events and boogies, creators (YouTube, Instagram, TikTok, podcasts, blogs),
communities (Reddit, Discord, Facebook groups, forums, Telegram, VK, WhatsApp), and experts (authors of skydiving
safety papers and books). Include small and inactive-looking ones (mark them in notes).

How:
1. First find and copy whole lists that already exist for this scope: the federation's member/dropzone directory,
   government sport registries, championship host lists, PIA/FAI member lists, booking-platform listings, open
   datasets (GitHub, OpenStreetMap, Wikidata), directory sites. Take every row from them.
2. Then open each organisation's own website or contact page for email, phone, contact form and social links.
3. Search in the local language(s) of the scope as well as English.
4. Never invent or guess an email: only ones shown on a page you cite; else leave it empty and give the contact form.

Output: ONLY a CSV (one code block, or a downloadable .csv file if you can), header exactly:
name,type,country,region,city,website,email,phone,contact_form,instagram,youtube,facebook,other_links,person,role,languages,audience_size,source_url,confidence,notes
type ∈ dropzone, tunnel, coach_school, gear_maker, rigger, association, creator, podcast, blog, community, forum,
media, other. confidence: high (email on their own site), medium (directory), low (not verified).
Aim for at least 300 rows. No introduction, no analysis, no summary. After the CSV, at most 5 lines: the lists you
used (URL + size) and "CONTINUE FROM: <where you stopped>". Never stop to summarise: when you hit your limit, end at a
complete row with the CONTINUE FROM line, and I will say "continue".
```

## 2. Follow-up message (same chat, as many times as it keeps finding new rows)

```
continue from where you stopped. Same columns, only NEW rows (no repeats), at least 200 more. Go deeper: smaller
clubs, regional federations, university clubs, coaches, riggers, creators and local-language communities for this
scope. End with CONTINUE FROM.
```

When it says it's done, one last nudge:

```
Now look for what you missed: search in other ways (local language terms, regional federations, championship
results, booking sites, Google Maps categories, Facebook pages, news articles about local dropzones). New rows only.
```

## 3. SCOPE lines (one per chat; run several tools on the same scope to compare)
- United States: Alabama to Missouri (every dropzone, club, university club, rigger, coach)
- United States: Montana to Wyoming
- Canada and the Caribbean
- Mexico and Central America
- Brazil (all CBPq clubs, áreas, schools; Portuguese)
- Argentina, Chile, Uruguay, Paraguay, Bolivia
- Colombia, Peru, Ecuador, Venezuela
- United Kingdom and Ireland (incl. university clubs)
- France (all FFP structures; French)
- Germany, Austria, Switzerland (DFV + DAeC lists; German)
- Italy, Spain, Portugal, Greece, Malta, Cyprus
- Netherlands, Belgium, Luxembourg, Denmark
- Sweden, Norway, Finland, Iceland, Estonia, Latvia, Lithuania
- Poland, Czechia, Slovakia, Hungary
- Ukraine, Moldova, Romania, Bulgaria, Balkans, Turkey, Georgia, Armenia
- Russia, Belarus, Kazakhstan, Central Asia (Russian; VK and Telegram too)
- UAE, Saudi Arabia, Qatar, Oman, Israel, Jordan, Egypt, Iran
- Africa (South Africa PASA clubs, Namibia, Kenya, Morocco, all others)
- India, Nepal, Sri Lanka, Pakistan
- China, Hong Kong, Taiwan, Japan, South Korea, Mongolia
- Thailand, Vietnam, Malaysia, Singapore, Indonesia, Philippines
- Australia, New Zealand, Pacific islands
- Worldwide: all wind tunnels
- Worldwide: gear makers, dealers, rigging lofts, rigger schools
- Worldwide: YouTube channels and podcasts about skydiving (any language)
- Worldwide: Instagram, TikTok, blogs, newsletters about skydiving
- Worldwide: Reddit, Discord, Facebook groups, forums, Telegram/VK/WhatsApp communities (with member counts and rules)
- Worldwide: authors of skydiving injury/safety papers and books, safety officers, instructor examiners
- Worldwide: boogies, competitions, organisers, national teams, demo teams


===== ASSISTANT =====
Which **SCOPE** should I run first? I recommend **United States: Alabama to Missouri**.

I’ll harvest whole directories and return a downloadable CSV only, using your exact columns and filename convention.

===== USER =====
Everything 

===== ASSISTANT =====
I’ll expand the directory across all scopes, starting with whole-directory imports and saving new rows in a downloadable CSV.


===== ASSISTANT =====
The uncapped dropzone import has 502 new candidates. I also found complete public tables with 219 parachute-industry members and 294 wind-tunnel listings, including planned facilities. I’m adding those and checking their linked contact pages.


===== ASSISTANT =====
The dropzone import is progressing through the smaller operators omitted by the earlier country cap. The industry directory also provides public contacts for riggers, manufacturers and training businesses. I’m retaining those as directory-sourced contacts unless the organisation’s own site confirms them.


===== ASSISTANT =====
The industry-member import is complete, and the wind-tunnel import is nearly finished. I’m checking the combined batch for repeats against the earlier directory and keeping planned, historical and unverified entries marked in the notes.


===== ASSISTANT =====
The combined batch contains 1,008 new rows, including 237 published email contacts. I’m checking the category labels and saving the CSV; entries still needing contact or activity checks are marked in the notes.


===== ASSISTANT =====
[Download CSV — 1,008 new rows, 237 emails](https://chatgpt.com/library?file_id=libfile_0d7edb1e334081918680f750592b9bdf&account_id=8cc71090-0d8b-4f73-9deb-3bd0cfefa0ce)

[Skydiving.com](https://skydiving.com/): 880 source entries.
[PIA members](https://www.pia.com/about/our-members/): 219 source entries.
[Indoor Skydiving Source](https://indoorskydivingsource.com/tunnels/): 294 source entries.

CONTINUE FROM: Worldwide — remaining federation directories, coaches, creators, communities, researchers and events.

===== USER =====
Continue 

===== ASSISTANT =====
I’ll continue with federation rosters and specialist directories, adding only new rows and checking public contact details.


===== ASSISTANT =====
The French federation roster includes university, military and small local clubs missing from the earlier dropzone lists. I’m also collecting German clubs and individual coaching contacts, with checks for organisations already listed under another name.


===== ASSISTANT =====
I found 174 distinct wingsuit coaches in Squirrel’s public directory and 91 riggers in the Canadian federation’s service list. Some listed rigger expiry dates have passed, so those rows will explicitly say that current status is unverified.


===== ASSISTANT =====
The batch now includes Brazilian clubs and regional federations, plus Australian examiner rosters. I’m finishing the creator and podcast entries and checking for duplicates, including coaches who also have their own channels.


===== ASSISTANT =====
The deduplicated batch has 817 new rows, with 646 email contacts. I’m checking the CSV format and source links, and keeping unavailable contact details, posting rules and audience counts blank.


===== ASSISTANT =====
[Download CSV — 817 new rows, 646 emails](https://chatgpt.com/library?file_id=libfile_bd27ad4199388191abc210bfddd29ad2&account_id=8cc71090-0d8b-4f73-9deb-3bd0cfefa0ce)

[FFP](https://www.ffp.asso.fr/ou-pratiquer/liste-de-toutes-les-structures-ffp/): 165 structures; [DFV](https://www.dfv.aero/Info/Pl%C3%A4tze%2BVereine/alphabetisch): 98 clubs/sites.  
[CBPq](https://old.cbpq.org.br/site/filiados/clubes): 134 clubs; [regional federations](https://www.cbpq.org.br/filiados/federacoes/): 21.  
[Squirrel](https://squirrel.ws/coaches/): 178 listings; [CSPA](https://www.cspa.ca/en/active-rigger-list): 91 riggers.  
[Flight-1](https://flight-1.com/about/team): 57 instructors.  
CONTINUE FROM: Worldwide — remaining federation rosters, local-language communities, creators, researchers and events.