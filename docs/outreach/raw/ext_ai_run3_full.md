# AI run 3: what the full paste adds (owner pasted the full report 2026-11-17)

The condensed version is `ext_ai_run3.md`; it was processed in plan line 6h (leads, people, fact-check
`ext_ai_run3_factcheck.md`). The owner then pasted the full prose report (sections 1–11, "Strategic Research Plan for
the Global Skydiving Safety Infrastructure") plus the tail of a second answer from the same tool. AI output: leads,
not facts. Its "[cite: n]" numbers were not pasted.

## The full report vs the condensed one
Same leads, people and claims as `ext_ai_run3.md`; nothing new to fact-check. Extra framing only:
- It describes the plan as a "relational database" for safety bulletins (riggers by certified hardware, DZs by SMS,
  tunnels near DZs as "high-risk clusters"). Not our goal: we collect public contacts to ask for feedback.
- It recommends scraping the FAA Airmen database for riggers' names and locations: personal records, not harvested
  (see 6h).
- It still treats Dropzone.com as live (it redirects to an unrelated site since at least Feb 2025) and names
  "Dave Schwartz" as Skydive Radio host and "Stine Solberg" as Skydive Mag editor (both wrong, see 6b).
- Its claim that Damhuis "correlated" landing injuries with tunnel overconfidence is wrong: the paper only offers it
  as a possible explanation (6h fact-check, claim 1).

## The tail of the second answer (a CSV that was NOT pasted)
The tool says it produced a CSV of 193 rows ("over 210" elsewhere in the same text). Only its summary was pasted,
not the rows. The summary names these sources:
- APF dropzone locator: 37 Australian DZs, emails from the APF careers page (e.g. president@farnorthfreefall.com).
- IBA tunnel list (tunnelflight.com/tunnels/, 163 tunnels; it took the first 25), Skydive Nation tunnel directory
  (16 European tunnels), 24 iFLY contact channels (claims info.<city>@iflyworld.com for each city).
- PIA member pages (PIA's terms forbid automated collection: not harvested, see 6c).
- CSPA and DFV registries (Canadian DZs, German clubs; DFV clubs without email).
- 13 corresponding-author emails from PubMed / PMC papers.
- Podcasts and creators: skydiveradio.com, jumptwentysix.libsyn.com, skydivemag.com, YouTube descriptions.

Our list already holds 50 Australian DZs, 111 iFLY rows, 414 tunnels, Jump Twenty Six, Skydive Radio and Skydive Mag.
The three leads that contradict earlier checks (APF careers emails, iFLY per-city inboxes, an IBA tunnel list) were
re-checked: results in `ext_ai_run3_full_leads.csv` and plan line 6h.
## The conversation itself (read 2026-11-17 in Gemini, Tavus account, chat "Skydiving Safety Directory")
6 turns: v1 prompt → research, v2 prompt → research, "Can u run this plan and collect this data". The last answer
(~50k characters) is mostly Gemini's own reasoning: it drafted **49 rows** inline (federations, gear makers,
PIA-listed suppliers, riggers) and stopped before writing the CSV. The tunnel, APF and iFLY rows and the "193 rows"
in its summary were never written. Of the 49 drafts, 48 are already in contacts.csv; 1 is new (MC Industries LLC,
no email). Several drafts repeat errors already corrected in 6b (Lizzie Butcher as DPO, upt@uptvector.com,
SECRETARIA.EXECUTIVA@CBPQ, PIA-sourced personal addresses).

## Re-check of the three leads (`ext_ai_run3_full_leads.csv`)
- APF careers page: a short list of job ads, not a dropzone email directory (apf.com.au behind a Cloudflare check).
  Found elsewhere: president@nspc.net.au (Newcastle SPC, medium), fun@skydiveoz.com.au (Skydive Oz, low).
- iFLY info.<city>@iflyworld.com: false. None of the ~61 iflyworld.com pages show one. Published: pr@ and
  partnerships@ (contact page), Events@iflywilmington.com (Wilmington only).
- IBA tunnel list (tunnelflight.com/tunnels/): exists and is public, robots.txt allows it, but the list loads from
  /tunnels/all, which this session's permission check blocked. Not extracted.
