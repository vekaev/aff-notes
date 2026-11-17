# Instagram / TikTok creators and blogs: research notes

File: `instagram_tiktok_blogs.csv` (116 rows, 25 with a public email). Collected 2026-11-16. Nobody was contacted.

## Sources used
- **Feedspot** lists: skydiving Instagram influencers (58 entries, follower counts, masked email domains), skydiving YouTube channels (32), and skydiving blogs (first 20 of 159, mostly dropzone blogs, so they were left to the dropzone list).
- **Influencer-Hero** "Top 60 skydiving influencers in the US" (handles and counts, no emails).
- **HypeAuditor** Instagram skydiving category (24 visible of 286). Most top accounts there just repost clips and were skipped.
- **JYRO blog** (10 accounts, 2020) and **PicThrive** (top 5).
- **TikTok public profile pages**, fetched one by one: follower count, bio and bio link. Counts marked "TT" are live as of today.
- **YouTube** via yt-dlp: channel search in EN, RU, ES and UK, plus subscriber counts and channel descriptions. Counts marked "YT" are live.
- **Each creator's own website** (scanned for a published email): Flight-1 team page, Skydive Fundamentals, AXIS, Jeff Provenzano, Nicole Smith-Ludvik, Miles Daisher, Melanin Basecamp, Skydive Mag, ParaMag, Skydive Radio, The Ranch PROshop, and Women's Skydiving Network.

## What could not be reached
- **Instagram**: no logged-in session. agent-reach/OpenCLI reported "Browser Bridge extension not connected", and the public profile API was blocked. Instagram follower counts therefore come from Feedspot, Influencer-Hero or HypeAuditor (marked medium) and may be months old. Bios and linktrees on Instagram were not read, so many business emails are probably missing.
- **X/Twitter**: not tried (needs login).
- **WebSearch budget ran out** partway through: the 200-search limit is shared with the other agents in this run. The Russian, Ukrainian and Spanish creator searches and a dedicated Medium/Substack sweep did not run. Medium returned 403, and the Medium RSS feed had only one real skydiving writer.
- These sites didn't load: blueskiesmag.com (DNS fails), Alter Ego Project, Emma Jaber, Luke Aikins, AirWax and Annette O'Neil.
- briangermain.com hides its email, so that row has his phone instead.

## How complete
- There is no single directory of skydiving creators. This is a sample, not a census. Feedspot's Instagram list and the Flight-1 team page together supply about half the rows.
- Coverage is strong for English-speaking pros, canopy coaches and women's communities. It is weak for TikTok-native creators: TikTok search pages render client-side, so they could not be harvested. It is also weak for RU/UK/ES creators (only 4 rows) and for personal "learning to skydive" blogs (only 3 rows; such blogs are rare and mostly old).
- 12 BASE and wingsuit names are included with the note "low fit". They have big audiences but are unlikely to care about AFF content.

## Best fits for the app (start here)
- **Skydive Fundamentals**: AFF instructor education channel, christina@...
- **Flight-1** coaches: each has their own email on the team page.
- **AXIS Flight School**
- **Brian Germain**
- **Skydive Vibes**
- **The Skydiving Channel**: instructor, EN/RU.
- **Slipped 'n Fell**: TikTok explainer.
- **Skydive Mag**
- **Women's Skydiving Network** and **Melanie Curtis**
- **Sisters in Skydiving**
- **Austin Bailey**: a new A-license holder, so a student's view.
- **Kamuran Bayrasli**: Master Rigger.

## Single best source
The Feedspot skydiving Instagram list (https://influencers.feedspot.com/skydiving_instagram_influencers/) holds the most creator rows. The Flight-1 team page (https://flight-1.com/about/team) holds the most verified emails.

## Summary
- Rows written: 116 (103 creators, 3 coach schools, 3 media, 3 blogs, 2 communities, 1 podcast, 1 rigger).
- Rows with an email: 25. 22 were seen on the creator's own site or bio. The other 3: the Women's Skydiving Network press contact, Melanie Curtis's address (listed on the WSN contact page) and Amy Chmelecki's address (published in a Skydive Mag article).
- Completeness: a broad sample of English-language pros and educators. TikTok-native, non-English creators and personal blogs are thin.
- Best source: the Feedspot Instagram list for names; the Flight-1 team page and creators' own sites for emails.
- Gaps: Instagram bios and linktrees (needs a logged-in browser), plus RU/UK/ES searches (search budget used up).
