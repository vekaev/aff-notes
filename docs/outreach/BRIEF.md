# Outreach research brief (shared by all research agents)

Goal: the owner, a new AFF skydiving student, built a free study app for AFF / A-license students (4 languages,
emergency procedures, landing pattern, tests). Mission: help people get the A license safely and reduce injuries and
deaths. They want to ask schools, instructors, coaches, gear makers and creators for feedback, fact checks, books,
links and saved materials. Your job is only to COLLECT public contacts. Never contact anyone, never sign up, never
post, never submit a form.

## Rules
- Public business contacts only: what an organisation or creator publishes for contact (website contact page,
  "business inquiries" email, official directory). No guessed emails, no personal emails from leaks or private pages,
  no logins, no paywalls, no CAPTCHAs.
- Prefer one official directory (federation/association list) and then open each member's site for the email.
- If a site shows only a contact form, put the form URL in contact_form and leave email empty.
- Record where you found each row (source_url). Mark confidence: high (email seen on their own site), medium (seen
  in a directory), low (not verified).
- Breadth over depth: get every organisation in scope; spend about 1–2 fetches per row, skip the rest.
- Tools: WebSearch / WebFetch. Reddit, YouTube, Instagram, TikTok, X: the agent-reach skill (via Skill tool) if you
  have it. Never Exa.

- Overlap with other agents is fine (the merge removes duplicates); go deep in your own scope: every club, not only
  the big ones. Local-language sources count (search in the country's language). All countries are in scope.

## Output
Write a CSV (UTF-8, comma, header row, quote fields that contain commas) to the path in your prompt with exactly
these columns:

name,type,country,region,city,website,email,phone,contact_form,instagram,youtube,facebook,other_links,person,role,languages,audience_size,source_url,confidence,notes

type is one of: dropzone, tunnel, coach_school, gear_maker, rigger, association, creator, podcast, blog, community,
forum, media, other. For creators put follower/subscriber count in audience_size. notes: one short line (e.g.
"AFF + tandem", "USPA Group Member", "posting rules: no self-promo except Saturdays").

Also write a short notes file next to it (same name, .md): which sources you used, how complete you think the list
is (e.g. "USPA lists 214, I got 190"), what you could not reach, and any single source that holds most of it.
Finish with a 5-line summary: rows written, rows with email, completeness, best source.
