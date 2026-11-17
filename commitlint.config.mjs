// Commit messages follow Conventional Commits: `type(scope): what changed`, e.g. `fix(units): …`, `docs(plan): …`.
// Types: feat fix docs style refactor perf test build ci chore revert. Checked by .husky/commit-msg.
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Names like USPA or Vercel may start a subject; long bodies (sources, numbers) are fine.
    'subject-case': [0],
    'body-max-line-length': [0],
    'footer-max-line-length': [0],
  },
};
