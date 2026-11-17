# w2_non_english: notes

Scope: communities and creators outside English: RU/UK, ES, PT-BR, DE, FR, IT, PL, CS/SK, Nordic, JA, ZH, AR.
Read only. Nothing was joined, posted or sent.

## Sources used
- YouTube through agent-reach (yt-dlp search in each language, then channel metadata for subscriber counts and
  the emails creators put in their own channel descriptions). About 30 searches in 13 languages, 90 channels checked.
- Telegram: public `t.me/<name>` preview pages (title, members, bio). Handles came from dropzone websites and DuckDuckGo.
- Federation and media contact pages, read with curl or WebFetch (looking for `mailto`).
- WebSearch and DuckDuckGo for forums and Facebook pages. DuckDuckGo throttled after about 25 queries.

## How complete
- Federations: 12 of the 14 in scope have an email (RU, UA, ES, BR, DE, FR, IT-ANPDI, PL, SE, NO, DK, FI). Czechia has
  a contact form only (Aeroklub ČR). Portugal (FPPQ): no working site. Japan and China: no federation site found.
- Creators: the main AFF and licence creators per language. Long tail of student vlogs with under 100 subscribers left out.
- Communities: weak, because most of them are closed. In these countries the student talk happens in Facebook groups,
  WhatsApp and Telegram chats that each dropzone runs. Their member counts need a login, so I list only ones with
  public pages. Forums are mostly dead except SkyCentre (RU).

## Could not reach
- VK: blocked for WebFetch ("unable to fetch from vk.com"). Only one VK group listed (Vatulino), taken from a site link.
- Reddit: the OpenCLI browser bridge was not connected and Reddit search is broken upstream, so no subreddit counts.
- tgstat / telemetr Telegram search: built with JavaScript or returned 403, so Telegram was found by checking handles.
- major-sky.ru and fpsu.net.ua: 403 for WebFetch (the fpsu email came from curl).
- Instagram follower counts: need a login.

## Top 10 places (where one contact reaches the most AFF students)
1. **SkyCentre forum** (skycentre.net): the RU/UK forum, about 276k posts, with a beginners FAQ and a safety section. Contact form.
2. **FLY UP Paraquedismo / Edu Skydive** (BR, 98.6k on YouTube, contato@flyup.com.br): AFF teacher with a big audience.
3. **Skydive Atmosfera / Iwan** (PL, 8.6k): safety teaching (accident analysis, emergency scenarios). Also writes for dlapilota.pl.
4. **Vatulino chat @vatulino_chat** (RU, 1,495 members, 313 online): the busiest public skydivers' chat I found.
5. **DFV + Freifall Xpress** (DE, info@dfv.aero, team@freifallxpress.de): federation plus its magazine.
6. **FFP + ParaMag** (FR, ffp@ffp.asso.fr, paramag@paramag.fr): federation plus magazine. PAC rules are in DT 49.
7. **Skydive Vibes / Catherine Bernier** (FR-CA/EN, 34.5k): safety tips and licence guides.
8. **CBPq** (BR, contato@cbpq.org.br): every Brazilian school has to be affiliated with it.
9. **Laskuvarjotoimikunta** (FI, lt@laskuvarjotoimikunta.fi): already publishes an English guide for student parachutists, a natural partner.
10. **Skydive Dubai school** (AR/EN, school@skydivedubai.ae): the main AFF school for Gulf students.

Bonus for reach: Omar Farooq (8.3M, contact@atnafas.me), Ibn Hattuta (3.9M, info@ibnhattuta.com),
DAVE (1.5M, business@davidhenrichs.com) and Elephant GoGo (586k, elephantgogo3@gmail.com). Each made an AFF or
licence video and lists a business email.

## Most surprising finds
- Many of the biggest Arab travel creators (Omar Farooq, Ahmed Alshammari, Beki) did their AFF in **Portugal**. Portugal
  quietly trains Gulf students, yet its own federation (FPPQ) has no working website.
- Finland's federation already has a "Dear student parachutist" page in English: the same mission as this app.
- A Taiwanese creator (586k) got her A licence in **Hainan, China** in 10 days. Fast-track AFF in China is a thing.
- YouTube auto-translates titles, so "Japanese" results were often English channels (Skydive Vibes, Adam Radcliffe).
  Real Japanese AFF content is very thin. That is a gap the app's languages could fill.
- Ukraine: civilian airspace has been closed since 2022. The federation is still reachable, but Ukrainian students now train abroad.

## Summary
- Rows written: 99
- Rows with email: 37
- Completeness: federations about 85% of scope; creators good for the top AFF/licence channels; closed chats and groups mostly not reachable.
- Best single source: YouTube channel descriptions (agent-reach / yt-dlp) for creators; federation contact pages for associations.
- Coverage: Web ✓ · YouTube ✓ (~90 channels) · Telegram ✓ (public previews) · VK ✗ blocked · Reddit ✗ (bridge not connected) · Instagram ✗ needs login
