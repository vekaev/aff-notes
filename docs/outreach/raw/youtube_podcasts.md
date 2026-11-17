# YouTube channels and podcasts: notes

## Sources used
- **YouTube search via yt-dlp** (read-only, public metadata): 39 video searches (40 results each) and 40 channel-type
  searches (60 results each), in EN, ES, PT, DE, FR, IT, PL, RU, UK, SV, DA, NL. Gave about 2,200 distinct channels.
  Then I read each candidate's public channel page (subscriber count and description) and kept 132 that are clearly
  about skydiving: instructors and coaches, student/licence vlogs, dropzone channels with training content,
  federations, tunnels and gear makers.
- **Apple Podcasts search API + each show's public RSS feed** for podcasts (12 search terms in 8 languages). Emails
  for podcasts come from the RSS owner field the show publishes for contact (marked `medium`).
- **Feedspot and Million Podcasts** skydiving podcast lists, used to check nothing big was missed.
- **Websites** (homepage and /contact) of about 55 creators, dropzones, gear makers and federations, for a public email.
- Not used: agent-reach is not installed here; I did not open YouTube's "View email address" (it sits behind a
  CAPTCHA/sign-in) and did not use YouTube's internal API.

## How complete
- 148 rows: 132 YouTube channels, 16 podcasts. 45 rows have an email (36 high, 9 medium).
- English-language instructor and podcast scene: close to complete for the active, known names (Skydive Radio, Radio
  Skydive UK, Jump Twenty Six, Krav Show, 20 Minute Call, Fall Risk, BEER!, Lunatic Fringe, Brian Germain, AXIS,
  Flight-1, Skydive Fundamentals, The Skydiving Channel, Skydive Vibes, USPA, British Skydiving, APF).
- Spanish and Portuguese: decent (about 25 rows). German, French, Italian, Polish: a handful each.
- Russian and Ukrainian: thin (9 rows). Skydiving content in RU/UA lives mostly on Telegram, VK and Rutube, not
  YouTube; channels found there have under 2,100 subscribers. A Telegram/VK pass would be needed for that audience.
- No skydiving podcast found in German, Russian or Ukrainian; Spanish podcasts have 1 to few episodes.

## What I could not reach / caveats
- Most YouTube business emails are hidden behind YouTube's CAPTCHA "View email address" button, so 103 rows have
  no email (confidence `low`); for those, contact via the channel, their website or Instagram.
- Some websites refused or timed out (APF 403, Big Air Sportz expired certificate, Flight-1 and USPA contact pages 404).
- Personal-looking emails from podcast feeds (e.g. a host's own gmail) were left out; only show/business addresses kept.
- Some creator channels are entertainment (BASE, wingsuit, incident documentaries) rather than teaching; kept for
  reach, the note says which.
- Subscriber counts are YouTube's rounded figures as of 2026-11-16.

## Best single source
YouTube channel search (via yt-dlp) for channels, and the Apple Podcasts directory + RSS feeds for podcasts.
Channels most useful for fact checks and feedback on an AFF app: Skydive Fundamentals, AXIS Flight School, Brian
Germain, Flight-1, Krav, The Skydiving Channel, Skydive Atmosfera (accident analysis), Downunder Dynamics, Mikhail
Baskov, Fernando Conti (PT), RedLineProject and De Noob A Pro (ES), USPA, British Skydiving.

## Summary
- Rows written: 148 (132 YouTube, 16 podcasts)
- Rows with email: 45 (36 high, 9 medium)
- Completeness: good for English; fair for ES/PT; thin for RU/UA (those live on Telegram/VK)
- Best source: YouTube channel search + Apple Podcasts RSS feeds
- File: docs/outreach/raw/youtube_podcasts.csv
