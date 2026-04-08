# AGENTS.md

This repository has detailed Copilot instructions in `.github/copilot-instructions.md`. Read that file before starting any work.

## Key Rules

- **Git workflow is mandatory.** Every task requires an issue, a worktree, and issue-referencing commits. See `.github/copilot-instructions.md` § Git Workflow.
- **Worktrees, not branches.** All issue work happens in `.worktrees/` — never switch branches in the main checkout.
- **No `/tmp` writes.** Use `.tmp/` at the repo root instead.
- **No heredocs.** `cat << 'EOF'` fails in this environment. Use `create_file` or `echo`/`printf`.
- **No merge without approval.** Wait for explicit trigger words (lgtm, merge, ship it, etc.).

## Supervising Agents

When orchestrating subagents:

- **Synthesize, don't relay.** The supervising agent's job is to review subagent output, resolve conflicts, and stack commits into a coherent unit of work that a human can review as a single, functioning whole.
- **Parallelize with worktrees.** When tasks are independent (no ordering dependency), run subagents in parallel — each in its own worktree. The supervising agent merges the results into the issue branch.
- **One worktree per subagent.** Each parallel subagent gets a temporary worktree branched from the issue branch. The supervising agent is responsible for merging subagent worktrees back and removing them when done.
- **Sequential when dependent.** If task B reads files written by task A, run them sequentially — not in parallel.
