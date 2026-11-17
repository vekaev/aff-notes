# Review fixes: tracker

One line per review scope. The per-finding table (id, severity, where, decision, source) lives in each scope's fixer
log `docs/review/fixes/<scope>.md`; this file sums them up. Updated by the finishing run (`aff-notes-finish-review`).

Expert reports: `docs/review/expert/<scope>.md`. A second, independent pass on Part IV emergencies (written while the
first one was being fixed) is kept in `docs/review/expert/second-opinion/part4-emergencies.md`: compare it with the fixer
log when Part IV is done.

## Status 2026-11-16 18:00 PST

18:00 run: page guard 1615 open problems 1–10 closed (3 were already fixed), quiz end text in UK/RU fixed; page guard 1800 passed.

| scope | report | fixer log | fixed | added | rejected | ask-owner | status |
|---|---|---|---|---|---|---|---|
| part1-plane | yes | yes | 10 | 4 | 3 | 2 (+6 questions) | done 92dd8f4 |
| part2-freefall | yes | yes | 6 | 5 | 2 | 3 (4 questions) | done 8a2c519 |
| part3-canopy | yes | yes | 13 | 7 | 1 | 4 | done 8a2c519 |
| first-screen-dropzone | yes | yes | 6 | 3 | 0 | 2 (3 questions) | done 92dd8f4 |
| part4-emergencies | yes | yes | 18 | 1 | 0 | 3 | done 8f436c7; 4 left for later (#17, M1, M2 not added, C3 elsewhere) |
| part4-injuries-tips | yes | yes | 16 | 1 | 1 | 3 (+1 listed) | done d99a86a |
| curriculum | 2026-11-16.md | | | | | | proposals; final check (543718d), rig photos (8084813), "When freefall goes wrong" (16:00 run) built; next: landing priorities, traffic, low-turn recovery |
| real footage | real-footage.md | | 6 clips + 8 photos placed | | | | done (rig 8084813; exit, altimeter, canopy check, pattern: 14:00 run) |

## Safety items from Part IV (applied in 8f436c7 / d99a86a; kept as the checklist)

From the two Part IV reports (both passes agree on these):
- Biplane: don't flare, toggles stowed, steer the front canopy with its rear risers (USPA SIM 4-1).
- Side by side: steer the canopy most directly overhead with rear risers, not "the bigger one"; say what the RSL means.
- Spinning canopy: 5-second rule, not "two tries"; "cut away if the spin gets faster" invites waiting.
- Overloaded tip: "pull at 5,500, or right now if you're lower".
- "Legs up" on landing is for tandems; a solo student lands feet and knees together, ready to PLF (USPA Cat A).
- Flare: start at about twice your height, finish 1–3 ft above ground; the "full flare at ~10 ft, hold" line reads as too high.
- AAD: it won't save you after a cutaway because it waits until about 1,000 ft, not because of speed.
- Cutaway method B is not USPA's recommendation (credit is wrong); USPA adds a look over the right shoulder.

## Open questions for the owner

See "Questions for the owner" in each fixer log; collected in docs/PLAN.md "Waiting on you".
