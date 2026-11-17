# Deep-research prompt for other AI tools

Paste everything between the lines into ChatGPT Deep Research, Gemini Deep Research, Perplexity (Research),
Grok DeepSearch, Claude Research, Manus, etc. Tips:
- These tools stop after a few hundred rows. Run it several times, changing only the SCOPE line (examples at the
  bottom), and ask "continue" when it stops.
- Save each answer as `docs/outreach/raw/ext_<tool>_<scope>.csv` (for example `ext_gemini_europe.csv`), then
  `python3 scripts/merge-contacts.py` adds it to the big table and removes duplicates.
- AI tools sometimes invent emails. The prompt asks for proof (source_url); rows with no source get dropped.

---

# Role
You are a senior research analyst building a contact directory for a non-commercial skydiving safety project. You are
thorough, creative, and you never invent data.

# Context
A new skydiving student who has just finished AFF (Accelerated Freefall) ground school built a free study app for AFF
and A-license students: the whole jump from the aircraft door to landing, emergency procedures, the landing pattern,
hand signals, real footage and a short test after each chapter, in English, Spanish, Ukrainian and Russian. The
mission is to help people get their A license safely and reduce injuries and deaths. The next step is to ask the
skydiving world for help: feedback, fact checks, the books, links and materials experienced people have saved over
the years, and what they think matters most for keeping students alive. Your job is ONLY to find who to ask and
where. Do not contact anyone.

# Objective
Build the most complete list you can of skydiving organisations, people and places in this scope, with their
**public** contact details:

SCOPE: <the whole world | a region | a list of countries | a type of contact, e.g. "creators and communities only">

Include all of these types:
1. **Dropzones and skydiving schools/clubs.** Every one, including small clubs, military/sport clubs, seasonal and
   university clubs, not only the big commercial centres.
2. **National federations and associations**, and their safety and training officers if they publish contacts.
3. **Wind tunnels**, especially those with student (AFF-prep) programmes or tunnel coaches.
4. **Gear makers and shops:** containers, canopies, reserves, AADs, altimeters, helmets, dealers, rigging lofts and
   rigger schools.
5. **Coaches and coaching companies:** AFF, canopy piloting, freefly/belly, instructor-rating course organisers.
6. **Experts:** authors of books and articles on skydiving safety and training, authors of peer-reviewed papers on
   skydiving injuries and fatalities (corresponding-author email as printed in the paper), magazine columnists,
   accident investigators.
7. **Creators:** YouTube channels, podcasts, Instagram/TikTok accounts and blogs that teach or document learning to
   skydive, in any language. Include the "business inquiries" email if they publish one, and their audience size.
8. **Communities:** subreddits, Discord servers, Facebook groups, forums, Telegram/VK/WhatsApp groups, newsletters.
   Include member counts and their rules about posting links or asking for feedback.
9. **Events:** boogies, competitions and their organisers, demo teams, special-interest groups (women, over-40s,
   adaptive, collegiate, veterans).
10. **Anything else useful you discover.** Be creative: dropzone software vendors' public customer lists, booking
    platforms, conference exhibitor lists, Wikidata, open datasets, maps (KML/Google My Maps), existing directories or
    spreadsheets someone already made.

# How to search (strategy)
1. **Start from lists that already exist,** then go to each organisation's own site. Look for:
   - official federation directories (USPA, British Skydiving, APF, CSPA, DFV, FFP, CBPq, PASA, FAI/IPC members…);
   - Wikipedia lists in every language;
   - Wikidata;
   - OpenStreetMap;
   - GitHub, Kaggle or data.world datasets;
   - directory and travel sites;
   - boogie calendars.
2. **Search in the local language of each country,** not only English. For example: "Fallschirmspringen
   Ausbildung", "école de parachutisme", "escuela de paracaidismo", "paraquedismo curso AFF", "scuola
   paracadutismo", "skoki spadochronowe", "fallskärmshoppning", "парашютный аэроклуб АФФ", "парашутний клуб",
   "スカイダイビング".
3. **For every organisation, open its own website** (contact or about page) and take the email published there. If
   the site only has a contact form, give the form URL.
4. **Breadth before depth:** cover every organisation in scope first, then fill in the details.
5. **Use your own strategies too:** after the obvious sources, try at least 5 creative search angles of your own and
   say which ones worked.

# Hard rules
- **Never invent, guess or "pattern-complete" an email** (no "info@" because it looks likely). Every email must
  appear on a page you cite. If you can't find one, leave the field empty.
- **Public business contacts only:** what an organisation or creator publishes for being contacted. No private
  personal addresses, no data from leaks, logins or paywalls.
- **Every row needs a source_url** showing where you found it.
- If an organisation looks closed or inactive, keep it and say so in notes.

# Output
1. **The CSV,** in one code block (no commentary inside it): UTF-8, comma-separated, with a header row, and fields
   that contain commas wrapped in quotes. Use exactly these columns, in this order:

```
name,type,country,region,city,website,email,phone,contact_form,instagram,youtube,facebook,other_links,person,role,languages,audience_size,source_url,confidence,notes
```

**Column notes:**
- **type** is one of: dropzone, tunnel, coach_school, gear_maker, rigger, association, creator, podcast, blog,
  community, forum, media, other.
- **confidence:**
  - high = email seen on their own site;
  - medium = seen in a directory;
  - low = not verified.
- **audience_size** = followers, subscribers or members (number only).
- **notes:** one short line, for example "AFF + tandem", "USPA Group Member", "no self-promo posts except Saturdays".

**Example rows (format only):**
```
Example Skydive Center,dropzone,United States,California,Example City,https://example-skydive.com,info@example-skydive.com,+1 555 0100,,https://instagram.com/exampleskydive,,https://facebook.com/exampleskydive,,,,en,,https://example-skydive.com/contact,high,AFF + tandem; USPA Group Member
Example Skydiving Channel,creator,United Kingdom,,,https://youtube.com/@example,business@example.com,,,https://instagram.com/example,https://youtube.com/@example,,,Alex Example,AFF instructor,en,85000,https://youtube.com/@example/about,high,canopy and emergency-procedure tutorials
```

2. **After the CSV, a short report:**
   - **Coverage:** total rows, rows with email, rows per type and per country, and what share of the scope you
     think you covered, with reasons (for example "USPA lists 214 dropzones; 190 are here").
   - **Sources:** the 10 most useful sources (URL, what they contain, how big).
   - **Ready-made lists:** any existing list, dataset or map you found, with URL, format, size and licence.
   - **Creative angles:** which of your own search ideas worked and which didn't.
   - **Gaps:** what you could not reach and how someone could get it.
   - **Where to post:** the 10 best places to ask for feedback (communities, people or organisations), and why.

3. **If you hit an output limit,** stop at a clean row and write "CONTINUE FROM: <last country/type>". Do not
   summarise the remaining rows. I will reply "continue".

---

## SCOPE lines to rotate (one run each)
- `the whole world: only federations, ready-made lists and datasets, and the 10 biggest dropzones per country`
- `United States and Canada: every dropzone and club`
- `Europe west of Germany (incl. UK, Ireland, Nordics)` / `Germany, Austria, Switzerland, Italy, Spain, Portugal`
- `Central and Eastern Europe incl. Poland, Ukraine, Russia, Belarus, the Balkans, Turkey, the Caucasus, Central Asia`
- `Latin America and the Caribbean` / `Africa and the Middle East` / `Asia and Oceania`
- `the whole world: wind tunnels, gear makers, rigging lofts, coaches`
- `the whole world: YouTube, podcasts, Instagram, TikTok, blogs, newsletters (any language)`
- `the whole world: communities (Reddit, Discord, Facebook groups, forums, Telegram, VK) with posting rules`
- `the whole world: safety researchers, book authors, safety officers, instructor examiners`
