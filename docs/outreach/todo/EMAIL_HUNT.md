# Email hunt (owner 2026-11-17: "we need to send as much as possible")

Rows in `contacts.csv` (or name-only leads) that have no email yet, split into batches `email_hunt_NN.csv`
(same 20 columns as `docs/outreach/BRIEF.md`). One session per batch: each session has its own budget of ~200 web
searches, so one search per row fits.

## For each row
1. One WebSearch (in the country's language where useful: "Impressum", "contact", "kontakt", "contacto",
   "контакты"), then at most one fetch of the official site's contact / Impressum / about page. Facebook "About"
   or Instagram bio emails count. Federation club lists count (medium).
2. Fill `email` (and website, phone, contact_form, instagram, facebook if empty). **As many emails as possible:** a
   personal address (gmail, gmx, t-online, mail.ru…) counts when it is published in public for contact; note where.
   Never guess, never legal/privacy/returns inboxes, no logins, no CAPTCHAs, never contact or submit anything.
3. Keep `name`, `website` and `country` exactly as in the input when the org is the same (the merge matches on
   them and fills empty fields). Renamed / moved operator → keep the input name and say the new name in notes.
4. `confidence`: high = email on own site; medium = directory / federation / Facebook; low = no email found;
   `drop` = closed or no trace (with the reason). Notes start `email hunt 2026-11-17:`.
5. Creators / communities: business email from the channel About page or own site; else the contact form / DM
   route in `contact_form` or notes. Audience size if visible.

## Output and finish
- Write `docs/outreach/raw/email_hunt_NN.csv` (same columns, csv-quoted, one row per input row). Don't run the
  merge and don't commit: the parent session merges all batches and commits.
- If the search budget runs out, mark the rest `confidence` empty with a note `NOT SEARCHED` and stop.
- Final message: rows with a new email / site only / dropped / not searched, and 3 notable findings.
