# Review fixes: tracker

One line per review scope. The per-finding table (id, severity, where, decision, source) lives in each scope's fixer
log `docs/review/fixes/<scope>.md`; this file sums them up. Updated by the finishing run (`aff-notes-finish-review`).

Expert reports: `docs/review/expert/<scope>.md`. A second, independent pass on Part IV emergencies (written while the
first one was being fixed) is kept in `docs/review/expert/second-opinion/part4-emergencies.md`: compare it with the fixer
log when Part IV is done.

## Status 2026-11-16 10:25 PST

| scope | report | fixer log | fixed | added | rejected | ask-owner | status |
|---|---|---|---|---|---|---|---|
| part1-plane | yes | yes | 10 | 4 | 3 | 2 (+6 questions) | done 92dd8f4 |
| part2-freefall | yes | yes | 6 | 5 | 2 | 3 (4 questions) | done 8a2c519 |
| part3-canopy | yes | yes | 13 | 7 | 1 | 4 | done 8a2c519 |
| first-screen-dropzone | yes | yes | 6 | 3 | 0 | 2 (3 questions) | done 92dd8f4 |
| part4-emergencies | yes | no | | | | | todo: owner's chat is fixing it (part4.ts uncommitted) |
| part4-injuries-tips | yes | no | | | | | todo: owner's chat is fixing it |
| curriculum | 2026-11-16.md | | | | | | proposals; build one sourced item per run |

## Safety items to confirm once Part IV is committed

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
