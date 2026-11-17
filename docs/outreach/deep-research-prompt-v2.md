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
