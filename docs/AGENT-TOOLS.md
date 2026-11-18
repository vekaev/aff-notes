# How AI agents built this project

AFF notes was written with Claude Code agents directed by the owner. The method is reusable; this page says which
tools did what, so others can reproduce it (and so agents working here know what exists).

The owner's shared rules and skills live in a separate repo, [github.com/vekaev/agent-tools](https://github.com/vekaev/agent-tools)
(private). The full method, start to finish, is written up there as a playbook (`skills/study/references/playbook.md`);
the parts used here:

| Need | Skill / agent | What it did here |
|---|---|---|
| Learn a skill, build the study app | `/study` | intake, plan, research per stage, chapters in the order things happen, final check, AI tutor prompt |
| Fact-check the content | `/factcheck` + `.claude/agents/` | an expert reviewer per part → fixer → page guard (screens) → curriculum reviewer; logs in `docs/review/` |
| Find who to ask | `/outreach` | 30+ research agents by region and channel → `docs/outreach/contacts.csv`; prompts for other AI tools; checks of their results |
| Keep working while the owner is away | `/autopilot` | scheduled runs that work `docs/PLAN.md` ("Resume here") |
| Turn a session into lasting rules | `/learn`, `/lessons` | lessons saved as rules and skill steps, checked in fresh chats |
| Deep research reports | deep-research | `docs/research/` (e.g. mistakes and tips for AFF students) |
| Translations | translator agents (one per language) | glossary from the federation's terms → translation → back-check of safety lines (`docs/i18n/`) |

Rules every agent follows here: [AGENTS.md](../AGENTS.md). The project on one page: [ARCHITECTURE.md](ARCHITECTURE.md).
The plan with every request and its status: [PLAN.md](PLAN.md).
