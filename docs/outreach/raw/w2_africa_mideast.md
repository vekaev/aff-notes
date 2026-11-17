# w2_africa_mideast: research notes

Scope: PASA (South Africa) club list, Namibia, Botswana, Zimbabwe, Kenya, Tanzania, Egypt, Morocco, Tunisia, Nigeria,
Ghana, Mauritius, Réunion; UAE, Israel, Jordan, Saudi, Oman, Qatar, Bahrain, Kuwait, Lebanon, Iran.
Collected 2026-11-16. Nobody contacted, no forms used.

## Sources
- **PASA drop zone finder** (https://para.co.za/DropZones). The detail pop-ups load from
  `https://para.co.za/DropZones/GetDropZoneDetailsView?dropZoneId=N`, and each one gives the email, phone, website, DZO,
  CI/safety officer and whether the DZ runs AFF. All 15 current listings were read (10 student, 4 non-student, 1 show-jump).
  IDs 1–41 were also scanned: 18 older records that are no longer on the public list still return contacts. These are
  in the CSV marked "NOT on current PASA DZ list", most with low confidence. PASA office contacts: /Contacts.
- Each operator's own website (homepage or contact page), checked for emails, phones and social links.
- Web searches in English, Hebrew, Persian and French, plus local news (Republikein NA, Kapitalis TN, Egyptian
  Streets, Kuwait blogs, USPA/Parachutist articles), visitjordan, myguidenamibia, Aerodium and iFLY pages.

## Completeness
- **South Africa:** complete against PASA. PASA lists 15 operators and the CSV has all 15 with an email, plus the PASA
  office and the 18 older records.
- **Gulf (UAE, Qatar, Bahrain, Saudi):** good. The main DZs and tunnels are in, mostly with emails from their own sites.
- **Israel:** 4 operators found (Sky Kef, Paradive, Go Jump, Shomrat). No federation list was found, so there may be one or
  two more small clubs. The AchZiv drop zone is named in one article but has no contact, so it isn't a row.
- **Egypt, Morocco, Kenya:** the known operators are in. Some have only a phone or social links.
- **Thin or none:**
  - Lebanon: no skydiving operator found, only paragliding.
  - Nigeria: nothing found.
  - Oman: no club found (a local skydiver is quoted saying none exists).
  - Zimbabwe: the only DZ closed in 2019.
  - Botswana and Tunisia: occasional events only.
  - Ghana: an air sports federation but no DZ.

## Could not reach
- dropzonesandtunnels.com: hijacked, now redirects to a gambling site. Don't use it. The skydivelocations API and the
  dropzone.com directory redirect elsewhere too.
- Sites that didn't respond: rascj.com, skydivediani.com, skydivezanzibar.com (Wix "connect your domain" error), several
  older SA sites (EP Skydivers, Knysna, The Beach, Vaal, Rustenburg, Oudtshoorn, Xtreme, Walker Bay), gojumpkenya
  contact page (no email in HTML), botswanaboogie.com.
- Emails seen only in a search snippet or a third-party listing (lower confidence): Go Jump Kenya, Kuwait Skydive & Fly
  (2017 blog).
- No public contact found: PACMA (Morocco), Para Club de Bourbon (Réunion), PANAM (Namibia), Ground Rush Adventures,
  Skychology.

## Best single source
PASA's per-DZ endpoint (`/DropZones/GetDropZoneDetailsView?dropZoneId=N`). It holds 34 of the 79 rows, all with emails
and named DZO/CI contacts. No equivalent directory exists for any other country in scope.

## Summary
- Rows written: 79
- Rows with email: 46
- Completeness: South Africa complete vs PASA (15/15 current, plus 18 older records); the Gulf is good; the other countries
  have few or no operators to find.
- Best source: para.co.za DZ detail endpoint (34 rows).
- Gaps: Lebanon, Nigeria and Oman have no operator; the Zimbabwe DZ closed; dropzonesandtunnels.com is hijacked.
