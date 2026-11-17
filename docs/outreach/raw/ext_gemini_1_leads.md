# Gemini run 1: leads, better inboxes and drops (2026-11-17)

AI output checked on each organisation's own page. Nothing was sent to anyone.

## Counts
- Gemini's table: 232 rows (it says 193). 216 rows have shifted columns.
- About 190 rows were already in `contacts.csv` (same email, website or name, or the same place under another name:
  Skydive Australia locations, iFLY cities, AltitudeX, FlyTribe, Bodyflight, Aerodium, Atticafly, APF clubs).
- About 60 rows checked on own sites this run → `ext_gemini_1_verified.csv`, 21 rows: **14 new rows** (10 with an
  email), 1 email fill (WeFly), 4 CSPA rows gaining their board member's name and address, 2 folded into known rows
  (Vigil America, iFLY Austin).
- `contacts.csv`: 4,159 → 4,173 rows; with email 2,322 → 2,332.
- Pending (not checked): 6 rows → `ext_gemini_1_pending.unverified.csv.txt`.

## New people and places worth a look first
1. **Dominic McNeil**, Federation University Australia (d.mcneil@federation.edu.au): 2024 study of jump experience,
   risk perception and anxiety in skydivers. Good reviewer for the "fear and overload" parts.
2. **Piers A. Barry** (piersbarry@gmail.com, printed in the paper): 2022 paper on shoulder dislocations in indoor
   skydiving; tunnel-safety angle.
3. **PASA's Facebook groups** (Formation Skydiving SA, Freefly SA, Wingsuit SA, Wingsuiting SA, HOSAS): listed by the
   South African federation itself; a route to South African jumpers.
4. **FSC Lipperland e.V.** (fsc.lipperland@gmail.com): German club at RAPA Bad Lippspringe, on the DFV club page.
5. **Western Parachute Service** (azdemojumper@yahoo.com): rigging loft, likely Arizona (602 area code).
Also: Fabio Balassi and Day1 Adventures (small skydiving YouTube channels, emails in their own video descriptions);
Lizhen Wang (Beihang, landing biomechanics); White/Shirtcliff lab at Iowa State (birdie@iastate.edu, skydiving
stress hormones); Daniel Jacoby (Yale, HCM and thrill sports: low relevance).

## Better inboxes for known rows (apply in the step 4 clean-up; the merge only fills empty fields)
- Skydive Perris: manifest@skydiveperris.com (experienced jumpers), school1@skydiveperris.com (school), on its contact
  page. Note: the merge matched the Perris dropzone to the Perris tunnel row by domain.
- CSPA: michelle.matte-stotyn@cspa.ca (Executive Director), media@cspa.ca (staff directory).
- CSPA board (governance page): wade.thoreson@cspa.ca (President, Peninsula PC), brian.dicenzo@cspa.ca (VP),
  jason.warren@cspa.ca (Skydive South Sask), ashley.cook@cspa.ca (Skydive Vancouver Island), dave.withrow@cspa.ca
  (Skydive Extreme Calgary), john.wallace@cspa.ca (Geronimo! Skydiving Team).
- DFV: technik@dfv.aero (Referat Technik, Ralf Homuth), lizenzen@dfv.aero, ralph.schusser@dfv.aero (Geschäftsführer).
- JYRO: support@jyro.com, marketing@jyro.com (press), dealers@jyro.com.
- CBPq: the site shows contato@cbpq.org.br only (Gemini's SECRETARIA.EXECUTIVA@ came from a 2023 PDF).
- Skydive Swoop: info@skydiveswoop.com (Gemini wrote .ca).
- Vigil: info@vigilamerica.com is Vigil America's inbox; Downward Trend and Rhomech are Vigil's shipping partners.
- Dedupe: an "iFLY Austin" row from an earlier file is folded into another iFLY row by the shared iflyworld.com
  domain; iFLY San Antonio has city "Austin".

## Lists Gemini names (not harvested)
- APF dropzone locator and careers page: apf.com.au refuses automated fetches (403); its 37 clubs are already in.
- IBA tunnel list (tunnelflight.com/tunnels): already a redo in 6h. Skydive Nation European tunnel directory
  (skydive-nation.com/wind-tunnels): all 16 tunnels Gemini took are already in.
- PIA member directory: terms forbid automated collection (6c); PIA-only emails were not added.
- Burble DZ client list, Skydiving Hubs: barred (Burble terms; bot check), as in 6b.
- FAA Airmen Inquiry: personal records, not harvested (owner's rule, 6h).
- CSPA active rigger list: already used in the ChatGPT run 2 (47 opt-in rigger emails, 6k).
- PASA Facebook-links page also lists "2nd Hand Skydiving Gear (South Africa)": a gear market, not added.

## Dropped
- Emails Gemini took from third-party pages, not on the organisation's own site: the 23 iFLY info.<city>@ addresses
  (pissedconsumer.com), info@iflyworld.com, candace@vigil.aero (2018 Skydivemag post), upt@uptvector.com, attila@jyro.com,
  info@skydivethebeachbyronbay.com, brent@sincityskydiving.com and lauren@skydivecity.com (PIA only).
- Legal, privacy, RMA and back-office inboxes: legal@iflyworld.com, rma@vigil.aero, accounting@ / purchasing@ /
  marketing@miragesys.com, complianceofficer@britishskydiving.org; British Skydiving's Data Protection Officer as a
  contact person.
- Closed or not listed any more: iFLY Hollywood (its page now redirects to the location finder); Skydive Australia
  "Melbourne St Kilda" and "WA Rockingham" (not on Skydive Australia's current list of 8 Australian sites);
  Dropzone.com (dead since 2025).
- Not a public contact: ADW Brize Norton (RAF unit's tunnel).
- Wrong topic: Gordon C. S. Smith (gcss2@cam.ac.uk): his 2003 BMJ paper is a satire on randomised trials, not
  skydiving; Mikey & Wyatt (663K subscribers, a general channel, no skydiving focus).
- Rows sourced only from burblesoftware.com or skydivinghubs.com (Burble Software, Skydiving Hubs, 4 US DZs whose
  "website" was a skydivinghubs URL: all 4 DZs already in with their own sites).

## Pending (redo in a fresh session)
`ext_gemini_1_pending.unverified.csv.txt`, 6 rows: GRISSUL Lausanne (Hauw, Mohamed, Favrod, Antonini Philippe: emails
not in the paper record), Skydiving NSW (bigpond address from the APF careers page), Parachute Academy (mario@: CSPA
hides it), Basik Air Concept (contact@aerosportevents.com from a Tonfly PDF), the global "Skydiving" Facebook group and
the Wisconsin record group (Facebook needs a login).
