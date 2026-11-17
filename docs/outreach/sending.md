# Sending the outreach without hurting your Gmail

Research date: 2026-11-16. This builds on `raw/how-to-ask.md` (laws, reply rates, first deliverability notes) and
corrects it where newer facts differ (see "Corrections" at the end). Every number has a source in section 15. "Vendor
claim" marks numbers from companies that sell the thing they write about.

## 1. Short answer

1. **Yes, use a separate address.** Never send this from your personal Gmail. A spam-flagged or locked personal account
   would cost you far more than this project is worth.
2. **Buy one domain for the project** (for example `affnotes.org`, about $10–12 a year) and get **one Google Workspace
   Business Starter mailbox** on it (`yevhenii@…`, $7 a month, only for the 2–3 months you send).
3. **Why Workspace:** it works with every Gmail mail-merge tool, it lets you send 500 a day even as a new account and
   2,000 a day later, and Google's Postmaster Tools watches the domain. Zoho, Fastmail, iCloud and Proton either forbid
   bulk or duplicate mail outright, or don't work with merge tools.
4. **Go slowly:** set up SPF, DKIM and DMARC, warm up for 2 weeks, check every address first, then send at most
   ~100 a day (follow-ups count). That gets ~1,700 emails out in about 8–9 weeks.
5. **Cost:** about **$80–100 in total** (domain + 3 months of Workspace + 2 months of a mail-merge tool + checking the addresses).

What the list looks like (from `contacts.csv`, 2026-11-16): 2,024 rows with an email, all unique. 565 start
with `info@`, and 382 are `@gmail.com` (about 19%). 191 are in Germany or Austria, which you leave out of email
(`how-to-ask.md`, law section), and 98 are in Canada or Australia, which need the role-related check. That leaves
**about 1,700–1,830** to send.

## 2. Personal Gmail vs a second free Gmail vs a custom domain

| | Personal Gmail | Second free Gmail | Own domain + Workspace |
|---|---|---|---|
| Daily limit | 500 emails, 500 recipients per email | 500 (a brand-new account may get less; vendor claim) | **500 during trial / until $100 paid**, then 2,000 (1,500 by mail merge); 2,000 external unique recipients |
| When you go over | Blocked from sending for 1–24 h | same | Blocked for up to 24 h; "might be suspended" |
| What a lock costs you | Your whole life's inbox, logins, recovery | Little | Only the project mailbox |
| How it looks to a DZ | Personal, honest | Looks throwaway ("affnotes2026@gmail.com") | Looks like a real project |
| Postmaster Tools | No (you can't verify gmail.com) | No | Yes |
| Policy risk | Gmail forbids "unsolicited commercial mail" | **Gmail forbids "creating or using multiple accounts" to get around a rule**, so a spare account just for this is itself a policy risk | Workspace AUP forbids "unsolicited mass email"; ~100 personal, relevant emails a day to published business addresses is the normal use of a work mailbox |

Points to know:
- **Limits are a rolling 24 hours**, not a calendar day. Workspace trial accounts stay at 500 a day; limits rise
  after the domain has paid $100 in total (up to 75 days later). At $7 a month you will stay at 500 a day the whole
  project, which is still five times what you need.
- **YAMM says new Workspace accounts start at 400 recipients a day** (vendor statement).
- **Bounces count too:** many invalid addresses give "Messages you sent couldn't be delivered" and a 24-hour block
  even on personal Gmail.
- **Spam reports are the real risk, not the daily cap.** Google wants under 0.1% and never 0.3% or more.
  At 1,700 emails, 0.3% is **5 "report spam" clicks**. A bad week of complaints hurts that domain, not your personal one.

## 3. Custom domain options (prices checked 2026-11-16)

**Domain (one year):**

| Registrar | .com | .app | Notes |
|---|---|---|---|
| Cloudflare Registrar | $10.46 (renews $10.46) | $8.20 (renews $14.20) | At-cost; figures from a third-party price tracker; needs Cloudflare DNS (free, good) |
| Porkbun | $11.81 | not read | Free WHOIS privacy, email forwards |
| Namecheap | changed 2026-11-01; older listing $11.28 + renew $18.48 | not read | Check at checkout |

`.app` sites must use HTTPS, which doesn't matter for email. `.org` or `.com` look more "non-profit project" to
older DZ owners. **Pick Cloudflare or Porkbun.**

**Mailbox:**

| Provider | Price | Sending limit | Allowed for this? | Works with merge tools? |
|---|---|---|---|---|
| **Google Workspace Business Starter** | $7/user/mo flexible; page shows a $3.50 intro rate | 500/day trial, 2,000/day paid | AUP bans "unsolicited mass email"; one-to-one, relevant asks are normal use | **Yes** (YAMM, GMass, Mailmeteor) |
| Zoho Mail Free | $0 (up to 5 users, 1 domain) | External **50–500 per hour, "dynamic"**, 100 recipients/email | "Bulk/burst sending not permitted" | No IMAP on Free, so no outside tools |
| Zoho Mail Lite | $1–1.25/user/mo (annual) | same dynamic limit; one blogger reports Lite blocks needing a manual unlock | same | Limited |
| Fastmail | price not re-checked | 4,000–16,000/day; **trial 120/day** | **"Not a bulk email sending service"; duplicate email = account permanently closed** | Not with Gmail tools |
| iCloud+ custom domain | from iCloud+ plan | 1,000/day | **"Sending unsolicited bulk email … is prohibited"** | No |
| Proton | Free has no custom domain; paid not re-checked | Free 150/day; paid "based on reputation" | Not built for it | No |

**Recommendation: Google Workspace Business Starter, one user, flexible (monthly) plan.** Cancel when the
outreach is over. Before cancelling, export the replies or set forwarding (see section 12). Starter does **not**
include Gmail's built-in mail merge (that starts at Business Standard), so you use an add-on (section 8).

## 4. Authentication: SPF, DKIM, DMARC

- **SPF**: a DNS line that says "Google may send mail for this domain".
- **DKIM**: a signature on every email that proves it wasn't changed and really came from your domain.
- **DMARC**: a DNS line that tells receivers what to do if SPF/DKIM fail, and where to send reports.

**Setup for Workspace (at Cloudflare/Porkbun DNS), in order:**
1. Sign up for Workspace with the new domain, verify it (Google gives a TXT record), and add Google's **MX records**
   (the sign-up wizard shows them).
2. **SPF**: TXT on `@`: `v=spf1 include:_spf.google.com ~all`. Only one SPF record per domain.
3. **DKIM**: wait 24–72 h after Gmail is on. Then go to Admin console > Menu > Apps > Google Workspace > Gmail >
   **Authenticate email** > Generate new record > **2048**-bit, selector `google`. Add a TXT on `google._domainkey`
   with the value shown. Wait for DNS (up to 48 h), then click **Start authentication**. Check: send to any Gmail
   address, open **Show original**, and look for `DKIM=pass`.
4. **DMARC**: TXT on `_dmarc`: `v=DMARC1; p=none; rua=mailto:dmarc@yourdomain` (make `dmarc@` an alias, or use a
   free report reader). After 2–3 clean weeks you may move to `p=quarantine`. It isn't needed for this project.
5. Check all three with a free tester (mail-tester.com or Google's Check MX). Aim for 9–10/10.

**The big-provider rules (Gmail Feb 2024, Yahoo Feb 2024, Microsoft May 2025):**
- **Bulk sender = close to 5,000+ a day** to Gmail / Yahoo / Outlook.com consumer addresses. Bulk senders need SPF
  **and** DKIM, DMARC (`p=none` is enough), alignment, **one-click unsubscribe** (List-Unsubscribe +
  List-Unsubscribe-Post headers), a visible unsubscribe link, unsubscribes honoured within 2 days (Yahoo), and a spam
  rate under 0.3%.
- **All senders** (that's you): SPF **or** DKIM, valid DNS, TLS, spam rate **under 0.3%**. Workspace covers TLS
  and DNS for you.
- Since **November 2025** Gmail rejects non-compliant mail, gradually, and "new domains face an accelerated
  timetable". Microsoft sends non-compliant high-volume mail to Junk since 5 May 2025; rejection (550 5.7.515)
  comes later, date not set yet.
- **At ~100 a day you are not a bulk sender**, so one-click unsubscribe isn't required. Set up all three anyway: Google
  recommends it for everyone, and new domains get stricter treatment. Bulk status, once reached, is permanent.
  You won't come close.

**Main domain or a lookalike?** Sales teams buy lookalikes (`getaffnotes.com`) so a burned sending domain doesn't hurt
the main one. You send ~1,700 emails once, and the app sends no email of its own. **Recommendation: one domain, sent
from `yevhenii@` on that domain.** A lookalike looks less trustworthy to skydivers who check. If the app later
sends newsletters or sign-in mail, put that on a subdomain (`news.yourdomain`) so it has its own reputation.

## 5. Warm-up

There is no official Google schedule. All the numbers below are vendor advice.

- **How long:** vendors say let a new domain rest 1–4 weeks, then ramp up over 3–6 weeks. Common ceiling for a new
  mailbox: **25–40 cold emails a day** (LeadHaste: 25–30; Ciela: up to 40; Mailivery: 10–15 at the start).
- Your target of ~100 a day is above those ceilings. That works because your emails are one-to-one, relevant,
  non-commercial and go to published business addresses, which gives better replies and fewer complaints than sales
  mail. **Only go past 50 a day if replies are coming in and complaints are 0.**

| Week | Outreach per day (weekdays) | Also do |
|---|---|---|
| 0 (days 1–7) | 0 | DNS set up and checked; write 5–10 real emails a day to friends, your DZ and your own Gmail, and get replies; sign up for 2–3 newsletters you read |
| 1 | 10 → 20 | Warmest first: your own DZ, people who know you, your language group |
| 2 | 20 → 40 | First follow-ups start (they count in the total) |
| 3 | 40 → 70 | Only if bounces < 2% and 0–1 complaints |
| 4+ | 70 → 100 max | Hold here; never jump 2× from one day to the next |

**Automatic warm-up tools (Instantly, Lemwarm, Mailivery, Warmy):** they send mail between a pool of inboxes that
auto-open, mark "not spam" and reply, to fake engagement.
- **Against:** Gmail's program policies forbid automation that "misleads or deceives users", and the Workspace AUP
  forbids attempts "to evade filtering capabilities". GMass says Google told it warm-up breaks Google's terms and
  made it shut its warm-up down or lose Gmail API access (2022–23). Saleshandy, Growbots and Smartlead also cut off
  API-based Gmail warm-up then. Some vendors switched to IMAP to get around it.
- **For:** the vendors (Instantly, Mailivery, Warmy) say it raises inbox placement. These are vendor claims with no
  independent data.
- **Recommendation: don't use them.** At ~100 a day, real conversations and slow growth are enough, and they carry no
  account risk.

## 6. Bounce and complaint limits, what to watch

| Number | Keep under | Source |
|---|---|---|
| Spam-report rate (Gmail, Yahoo) | **0.1%** target, **0.3%** hard limit | Google, Yahoo |
| Hard bounces | **2%** (many say 1% for cold mail) | vendor consensus; Google publishes no bounce number |
| Unsubscribe / "no" replies | No limit, just honour them the same day | |

**Google Postmaster Tools setup:** postmaster.google.com > Add domain > Verify (add the TXT it gives) > wait about
10 minutes. Look at the **Compliance status** and **Spam rate** dashboards. Data only shows when daily Gmail volume is
high enough ("might be missing if … too low"). At 100 a day with ~20% to gmail.com, expect gaps, so don't rely on it alone.

**Daily watch (5 minutes):**
- Bounces in the inbox (Mail Delivery Subsystem): count them, remove those addresses.
- "Delivery incomplete" or "limit" warnings from Google: stop for 48 h.
- Angry replies or "is this spam?": stop, re-read the email, cut the volume.
- Reply rate: if it drops near zero for 3 days while it was fine before, test with mail-tester.com and send to your
  personal Gmail and an Outlook address to see if you land in spam.
- Postmaster Tools spam rate (when shown): anything at or above 0.1% means halve the volume.

## 7. List hygiene: check the addresses first

**Must do:** check all ~1,800 before sending. Bad addresses are the fastest way to a blocked mailbox.

| Tool | Free | Price for ~2,000 | Source type |
|---|---|---|---|
| **Reoon** | 20/day free + 100 on sign-up | **$11.90 for 10,000** (smallest pack, never expires) | vendor page |
| MillionVerifier | 100 free | ~$37 for 10,000 (no public price page) | third-party |
| Bouncer | 100 or 1,000 free (sources disagree) | ~$8 per 1,000 → ~$16 | third-party |
| NeverBounce | small free test | ~$0.008/email → ~$16 | third-party |
| ZeroBounce | 100/month | **$39 for 2,000** (minimum) | vendor page |
| Hunter | ~100 checks/month | $49/mo (≈4,000 checks) | vendor page |
| Kickbox | – | page blocked my fetcher | – |
| Mailmeteor Starter+ | included in plan | – | vendor page |
| Reacher / check-if-email-exists (open source, MIT) | self-host with Docker | $0, but needs **outbound port 25 open**, which most home internet blocks; can mark your IP | GitHub |

**Pick Reoon ($11.90)** or MillionVerifier. Skip self-hosting: home networks block port 25, and probing mail servers
from your own IP is risky.

What to do with the results:
- **Valid** → send. **Invalid** → delete. **Unknown** → send last, in small batches, or skip.
- **Catch-all** (the server accepts every address, so it can't be checked): most small DZ domains are like this. Fine
  for `info@` on the DZ's own site (they published it); send these after the valid ones.
- **Role addresses (`info@`, `contact@`)**: 565 of your rows. For this project they are **the right address**: the
  business published them for enquiries, which is also your legal basis (`how-to-ask.md`). The vendor warning about
  role addresses is about bought sales lists. The risk: several people read them and one may click "spam". Keep the
  email short and clearly personal.
- **Duplicates**: none in `email`. Also check the same DZ under two addresses (same website), and send only one.
- Keep `source_url` per row (it's your proof of where you got the address).

## 8. Mail-merge and sending tools

| Tool | Price 2026 | Daily cap | Follow-ups | Reply detection | Merge fields | Gmail / Workspace |
|---|---|---|---|---|---|---|
| **Mailmeteor** | Free $0; Starter $5.99; **Premium $17.99**/user/mo | 50 / 250 / **1,000** (+ Gmail's own limit) | Premium: 5 steps | Starter and up | Any Sheet column | Both |
| YAMM | Free; Pro Gmail $6/mo; **Pro Workspace $12/mo, billed yearly ($144)** | 20 / 400 / 1,500 | Yes (even free, per pricing page) | Yes | Any Sheet column | Both |
| GMass | Standard $29.95/mo (no follow-ups); **Premium $39.95/mo** or $29/mo yearly | "unlimited" (Gmail's limit applies) | Premium | Yes (bounces/replies detected) | Any Sheet column | Gmail and Workspace |
| Gmail built-in mail merge | included in **Business Standard** and up, not Starter | 1,500/day | No | No | Sheet columns; not in subject | Workspace only |
| Lemlist | $69/mo ($55 yearly) | up to 50,000/mo | Yes | Yes | Yes | Connects to any mailbox; includes lemwarm |
| Instantly | Growth $47/mo ($37.60 yearly), 5,000 emails/mo | – | Yes | Unibox | Yes | Any mailbox; includes warm-up |
| Smartlead | Base $39/mo (page also shows $59), 6,000/mo | – | Yes | Yes | Yes | Any mailbox |
| Woodpecker | changed Oct 2026 to per-email tiers; 5,000 tier ~€39/mo (third-party) | – | Yes | Yes | Yes | Any mailbox |
| listmonk / Mautic (self-host) | $0 + server | your SMTP | Not 1:1 | No | Yes | **Newsletter tools**: send to subscribers, not personal one-to-one cold mail. Skip |

**Recommendation: Mailmeteor Premium, month to month ($17.99), for about 2 months.** It sends from your Workspace
account (one real email per person), reads your Google Sheet, does 1–2 follow-ups and stops them when someone
replies, and includes address checking. Second choice: **GMass Premium** ($39.95/mo, more settings, well known).
YAMM is good and cheaper per month, but billed yearly. Lemlist, Instantly and Smartlead are sales machines with
warm-up pools (section 5), so skip them.

How to set it up: one Google Sheet per language (or a filter on the `lang` column). Make one campaign per language
with its own subject and body, and use columns `{{name}}`, `{{dz}}`, `{{personal_line}}`. Check in the tool's
settings that **open and click tracking are off**. I didn't verify where each tool hides that switch.

## 9. Unsubscribe line and do-not-contact list

**In every email, at the bottom (plain text, no link needed):**

> You're getting this one email because {{DZ}} lists this address for enquiries. If you'd rather not hear from me,
> just reply "no" and I won't write again.
> Yevhenii Petrenko · [PO box / virtual mailbox address]

- **One-click List-Unsubscribe header: not required below ~5,000/day** (Gmail, Yahoo and Microsoft rules are for bulk
  senders). Gmail's FAQ isn't fully clear for small senders. A reply-to-opt-out is what CAN-SPAM, CASL and UK PECR
  need: a working way out, honoured fast (CASL 10 business days, CAN-SPAM 10 business days; see `how-to-ask.md`).
  **Do it the same day.**
- **Do-not-contact list:** a tab `dnc` in the sheet (email, domain, date, reason). Before every send day, remove
  anyone on it, **including the whole domain** if one person at a DZ said no. Never delete this list.
- Any reply ("not interested", out-of-office with "left the company") stops the follow-ups for that row. The tool
  does this automatically on replies; do bounces and "no" by hand.

## 10. Sending in the recipient's language

- **Subject and body fully in their language**, with one English line at the end ("English below / happy to talk in
  English"), and the English version below a line. Don't mix the two languages sentence by sentence: filters and
  readers both treat odd mixes as a spam sign (common deliverability advice, no official source).
- Use the `languages` column in `contacts.csv` (pt 201, fr 174, de 165, es 54, ru 46…; 471 rows have no language,
  so those get English). One campaign per language, so the subject, body and opt-out line all match.
- **Have a native speaker or your DZ friends read each language once.** Machine-translated text reads as fake to
  people, and skydivers already punish "AI slop" (`how-to-ask.md`). Your app's own 4 languages (EN, ES, UK, RU)
  you can check yourself. For PT, FR, DE and IT ask someone.
- Mind the time zones: schedule for 9–11 am their time, Tue–Thu.

## 11. Content that affects spam filtering

- **Plain text** (or very light HTML): no images, no logo, no signature banner.
- **No attachments.**
- **No link in the first email**, or at most one, to a site on your own domain. A link to a brand-new domain looks like
  phishing (vendor advice). Offer it instead: "Reply and I'll send the link."
- **No URL shorteners** (bit.ly etc.); they are blacklist magnets.
- **Open tracking off, click tracking off**: the tracking pixel and rewritten links add a third-party domain and an
  image to a plain email.
- 50–125 words, a 3–5 word subject, no ALL CAPS, no "free!!!", no "$", no emoji (`how-to-ask.md`).
- Each email slightly different (the personal line), which is better for replies and filters alike.
- Send through the tool's slow pacing (one every 1–3 min), not 100 in one minute.

## 12. Keep your personal inbox safe

1. **Never send outreach from your personal Gmail**, not even "just the first 20".
2. Don't add the Workspace mailbox to your personal Gmail as "Send mail as". Keep them separate.
3. **Separate browser profile** (or a separate Dia/Chrome profile) for the Workspace account, so logins and tools
   don't mix.
4. Don't connect mail-merge tools to your personal Google account; revoke any old ones (myaccount.google.com >
   Security > third-party access).
5. **Recovery for the Workspace admin**: your own phone and personal email as recovery; turn on 2-step verification
   with a passkey or app. Write the admin login in your password manager.
6. Replies: read them in the Workspace inbox. If you want them in one place, forward to your personal address with a
   filter. Forwarding *in* is safe; sending *out* from personal is not.
7. Don't reply to outreach threads from your personal address. Keep the conversation on the project address so the
   do-not-contact list stays whole.
8. When done: keep the domain (~$10/yr) so the address keeps working. Before cancelling Workspace, export the mail
   (Google Takeout) and set up free email forwarding at the registrar (Cloudflare Email Routing or Porkbun forwards),
   so late replies still reach you.

## 13. Step-by-step plan, timeline and cost

| When | Step | Cost |
|---|---|---|
| Day 0 | Pick and buy the domain (Cloudflare or Porkbun) | ~$10–12 |
| Day 0 | Sign up for Workspace Business Starter (flexible plan), create `yevhenii@` | $7/mo (or $3.50 intro) |
| Day 0–1 | MX, SPF, DMARC records; verify domain | – |
| Day 1–3 | DKIM (after Gmail is live), Start authentication; test `DKIM=pass`, mail-tester 9+/10 | – |
| Day 1 | Postmaster Tools: add and verify the domain | – |
| Day 1–3 | Export contacts to a Sheet: drop DE/AT, add `lang`, `personal_line`, `dnc` tab | – |
| Day 2–4 | Verify all addresses with Reoon; delete invalid ones | $11.90 |
| Day 2–7 | Write templates per language; native-speaker check; real person-to-person mail from the new address | – |
| Week 2 | Mailmeteor Premium; 10 → 20 a day, warmest first | $17.99/mo |
| Week 3 | 20 → 40 a day; first follow-ups | – |
| Week 4 | 40 → 70 a day if healthy | – |
| Weeks 5–9 | 70–100 a day (new + follow-ups) until done | – |
| Week 10 | Last follow-ups, export, cancel tool; keep or cancel Workspace | – |

**How long:** ~1,750 new emails + one follow-up for those who don't reply (~1,600) ≈ 3,350 sends. Ramp weeks 2–4 ≈
600 sends. Then 100 a day on weekdays (500 a week) ≈ 5.5 more weeks. **Done in about 9–10 weeks from buying the
domain.** If you stay at the safer 40 a day, it takes ~4 months.

**Total cost (one-time + monthly):**
- One-time: domain ~$11 + address check $11.90 = **~$23**
- Monthly while sending: Workspace $7 + Mailmeteor $17.99 ≈ **$25/mo × 2–3 months = $50–75**
- After: domain renewal ~$10–14/yr
- **Total ≈ $75–100.** (With GMass instead of Mailmeteor, add ~$45.)

**Daily checklist (send days):**
1. Read yesterday's replies; answer each personally; "no" → `dnc` tab.
2. Count bounces; remove those rows. Bounce rate over 2% → stop and check the list.
3. Any spam complaint, angry reply or Google warning → halve the volume (stop for 2 days if 2 or more).
4. Check today's batch: the right language, the personal line filled in, no DNC rows.
5. Schedule the send for the recipient's morning, spread over hours.
6. Once a week: mail-tester score, Postmaster Tools, and one test email to an Outlook.com address (spam folder?).

## 14. Open questions for you

1. **Domain name:** what name? The app's future public name (e.g. `affnotes.org`) is best, if you're sure of the
   name. Recommend `.org` or `.com`, not `.app`.
2. **Which language and country first?** Recommend your own DZ's country and language, then EN (US/UK), then PT and FR.
3. **Budget OK at ~$100** for 2–3 months? (Or the free path: YAMM free is 20/day, which is ~3 months for 1,700.)
4. **Postal address** for the footer: PO box or virtual mailbox? (Don't use home; `how-to-ask.md`.)
5. **Link to the app:** `CLAUDE.md` says never publish the app. The first email has no link anyway. What do you
   send people who reply and ask for it? (Clips need swapping for YouTube embeds first, per `how-to-ask.md`.)
6. **Canada / Australia (98 rows):** email only those where the ask clearly relates to their role (they all teach
   skydiving, so probably yes), or skip them?
7. Keep the Workspace mailbox after the project ($7/mo), or forward-only (free)?

## Corrections to `how-to-ask.md`

- YAMM free is now **20/day** (not ~50). GMass follow-ups need **Premium** ($39.95/mo or $29/mo yearly); the
  $29.95 Standard plan has none. Lemlist is $69/mo ($55 yearly).
- New facts: Gmail **rejects** non-compliant mail since Nov 2025 (stricter for new domains); bulk-sender status is
  **permanent**; Microsoft Outlook.com has the same 5,000/day rules since May 2025.
- Workspace trial / new accounts are capped at **500/day** until $100 has been paid, not 2,000.
- `how-to-ask.md` suggested sending the first waves from your normal Gmail. **This file says don't**: use the
  project domain from day one. The 20–40 a day "small waves" advice still holds for the start.

## 15. Sources

Google and other mailbox providers
- Gmail sending limits (personal): https://support.google.com/mail/answer/22839
- Workspace sending limits (paid/trial, $100 rule): https://knowledge.workspace.google.com/admin/gmail/gmail-sending-limits-in-google-workspace
- Email sender guidelines: https://support.google.com/a/answer/81126
- Sender guidelines FAQ (bulk status permanent, Nov 2025 enforcement): https://support.google.com/a/answer/14229414
- Gmail program policies (spam, automation, multiple accounts): https://support.google.com/mail/answer/16734397
- Workspace acceptable use policy: https://workspace.google.com/terms/use_policy/
- DKIM setup: https://knowledge.workspace.google.com/admin/security/set-up-dkim
- Gmail mail merge (editions, unsubscribe, limits): https://support.google.com/mail/answer/12921167
- Postmaster Tools setup: https://support.google.com/mail/answer/9981691 · dashboards: https://support.google.com/mail/answer/14668346
- Workspace pricing: https://workspace.google.com/pricing
- Yahoo sender requirements: https://senders.yahooinc.com/best-practices/
- Microsoft Outlook.com high-volume senders: https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/strengthening-email-ecosystem-outlook%E2%80%99s-new-requirements-for-high%E2%80%90volume-senders/4399730
- Zoho Mail pricing: https://www.zoho.com/mail/zohomail-pricing.html · limits: https://www.zoho.com/mail/help/adminconsole/rates-and-limits.html · Lite unlock report: https://en.xiaoz.org/post/17645
- Fastmail limits: https://www.fastmail.help/hc/en-us/articles/1500000277382-Account-limits
- iCloud Mail limits: https://support.apple.com/102198 · custom domain alias change: https://macrumors.com/2026/10/06/apple-quietly-icloud-plus-email-feature
- Proton sending limits: https://proton.me/support/email-sending-limits · pricing: https://proton.me/mail/pricing

Domains
- Cloudflare Registrar prices (third-party tracker): https://cfdomainpricing.com/
- Porkbun: https://porkbun.com/products/domains
- Namecheap .com price change: https://www.namecheap.com/support/knowledgebase/article.aspx/10840/2201/com-price-change-november-1-2026/ · older price: https://dupple.com/learn/cheapest-domain-registrars

Warm-up (vendor claims unless noted)
- GMass on Google and warm-up: https://www.gmass.co/blog/warmup-shutting-down/
- Growbots: https://www.growbots.com/blog/google-bans-cold-email-warmup/ · Saleshandy: https://www.saleshandy.com/blog/we-are-shutting-down-our-email-warm-up-services-for-google-accounts/ · Smartlead: https://helpcenter.smartlead.ai/en/articles/94-google-warmup-google-api-changes-announcement-what-this-means.md
- Schedules: https://leadhaste.com/blog/email-warmup-best-practices · https://ciela.ai/blogs/how-to-warm-up-email-domain-cold-outreach · https://mailivery.io/blog/email-warmup-schedule · https://instantly.ai/blog/email-warmup-guide/

Bounces
- No official Google/Yahoo bounce cutoff: https://www.suped.com/email-deliverability/answers/is-there-a-specific-bounce-rate-threshold-required-by-google-or-yahoo
- 2% benchmark (vendor): https://bouncezero.io/email-bounce-prevention-guide-2026 · role-address warning (vendor): https://emaillistvalidation.com/blog/google-workspace-cold-email-bounces-account-suspension/

Address checking
- Reoon: https://www.reoon.com/email-verifier/pricing/ · ZeroBounce: https://www.zerobounce.net/email-validation-pricing · Hunter: https://hunter.io/pricing
- MillionVerifier / NeverBounce / Bouncer (third-party): https://prospeo.io/s/cheapest-email-verifier · https://syncgtm.com/blog/millionverifier-review-2026
- Reacher (open source): https://github.com/reacherhq/check-if-email-exists

Sending tools
- Mailmeteor: https://mailmeteor.com/pricing · YAMM: https://yamm.com/pricing · GMass: https://www.gmass.co/pricing
- Lemlist: https://www.lemlist.com/pricing · Instantly: https://instantly.ai/pricing · Smartlead: https://www.smartlead.ai/pricing
- Woodpecker (third-party, Oct 2026 change): https://emelia.io/software/woodpecker/pricing

Not checked this time: Reddit opinions (r/coldemail, r/gsuite) were skipped. Not verified: Fastmail and Proton paid
prices, the Kickbox price (site blocked), whether each merge tool adds a List-Unsubscribe header, and where each tool
turns off tracking.

## Links in the recipient's language (added 2026-11-17)
The app reads the language and units from the link: `…/?lang=<code>` (any of the 32 codes, `pt-BR` → `pt`,
unknown → browser language) and optionally `&units=both` or `&units=m`. The address bar keeps the current choice, so
a link copied from the page opens the same way. In the mail merge, add a `link` column built from the contact's
language, e.g. `https://<site>/?lang=fr` for France, `?lang=ru&units=both` for Russia/Kazakhstan, and use `#about`
to land on the mission. A reply's link (or the `lang` column) shows which language the recipient got.
