#!/bin/sh
# Pre-commit guard: no direct commits on main. Every change is made in its own worktree and branch and merged
# (rules/working.md "Every change in its own worktree"); finishing a merge on main is allowed.
# Emergency only: ALLOW_MAIN=1 git commit …
branch=$(git symbolic-ref --short -q HEAD)
case "$branch" in main | master) ;; *) exit 0 ;; esac
[ -f "$(git rev-parse --git-dir)/MERGE_HEAD" ] && exit 0
[ "$ALLOW_MAIN" = 1 ] && exit 0
repo=$(basename "$(git rev-parse --show-toplevel)")
cat >&2 <<MSG
Not on main: make this change in its own worktree, then merge it.
  git worktree add ../$repo-<task> -b <task> origin/main
  (move your edits there, commit, open a PR, merge). Emergency only: ALLOW_MAIN=1 git commit …
MSG
exit 1
