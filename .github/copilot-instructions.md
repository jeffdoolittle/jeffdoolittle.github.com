# Copilot Instructions — jeffdoolittle.github.com

## Agent Rules

### No writes to /tmp

Never write files to `/tmp`. Use the `.tmp/` directory at the repo root instead. It is gitignored.

Example: `.tmp/issue-body.md`, `.tmp/comment.md`, `.tmp/audit-output.txt`

### No heredocs

Never use `cat << 'EOF'` or any heredoc syntax in terminal commands — it fails in this environment. Instead, write file content using the `create_file` tool or `echo`/`printf` line-by-line.

### gh CLI: bypass dotenv prompt

The repo has an `.env` file. The `gh` CLI will hang waiting for a dotenv prompt unless bypassed:

```bash
DOTENV_LOADED=1 gh issue create ... < /dev/null
```

Always use `DOTENV_LOADED=1` and `< /dev/null` with every `gh` command.

### Worktree-aware file paths

When working inside a worktree, all tool calls that take absolute file paths (e.g. `create_file`, `read_file`, `replace_string_in_file`) must use the **worktree path**, not the main repo root.

- Correct: `/Users/jeff/projects/jeffdoolittle.github.com/.worktrees/issue-21-astro-migration/src/layouts/Base.astro`
- Wrong: `/Users/jeff/projects/jeffdoolittle.github.com/src/layouts/Base.astro`

## Stack

- Jekyll 4.2.2, Minima 2.5.1, Ruby 2.6
- Gems installed to `vendor/bundle` (local path)
- CSS in `assets/main.scss` (single file, all custom styles appended at bottom)
- Local dev server: `bash run.sh` → `http://127.0.0.1:4000/`

## Git Workflow

Follow this workflow for **every task** without exception.

### 1. File a GitHub Issue First

Before any code changes, create a GitHub issue using the `gh` CLI:

```bash
gh issue create --title "short description" --body "details" --label "bug|enhancement|content"
```

Note the issue number — all subsequent work is tied to it.

### 2. Create a Worktree for the Issue

All issue work happens in **git worktrees** inside `.worktrees/` (gitignored). This avoids switching branches in the main checkout.

```bash
git fetch origin main
git worktree add .worktrees/issue-123-short-description -b issue/123-short-description origin/main
cd .worktrees/issue-123-short-description
```

Branch naming: `issue/<number>-<kebab-slug>` (max ~5 words in slug).

All subsequent commands (build, test, commit) run **inside the worktree directory**. Do not `cd` above the repo root — stay within `.worktrees/<branch>/`.

### Sub-issues

When an issue has sub-issues (e.g. #22–#33 are sub-issues of #21), the sub-issues **do not get their own branches or worktrees**. Work on all sub-issues happens in the **parent issue's worktree**. Commits reference the parent issue number. Sub-issues close when their acceptance criteria are met.

### 3. Do the Work and Commit

Work entirely inside the worktree. All commit messages **must** reference the issue number so it auto-closes on merge to main:

```
fix: correct hero layout (#123)
feat: add SE Radio episode posts (#123)
```

Use `fixes #123` or `closes #123` in the commit body when the commit fully resolves the issue.

### 4. Merge Trigger Words

When the user says any of the following — **lgtm, gtm, merge, ship it, looks good** — treat it as approval to:

1. `cd` back to the main repo root (not the worktree)
2. `git checkout main && git pull origin main`
3. `git merge issue/123-short-description --no-ff -m "merge: <title> (closes #123)"`
4. `git push origin main`
5. `git push origin --delete issue/123-short-description`
6. `git worktree remove .worktrees/issue-123-short-description`
7. `git branch -d issue/123-short-description`

Do **not** merge until explicitly told to.

## Content Conventions

- New SE Radio episode posts: `_posts/YYYY-MM-DD-se-radio-NNN-<guest-slug>.md`
- Frontmatter fields: `layout: post`, `category: se-radio`, `episode_url`, `guest`
- End every episode post with `{%- include se-radio-plug.md -%}`
- Post images: use an existing landscape photo from `/assets/`

## Do Not

- Modify `Gemfile.lock` without running and verifying `bash run.sh` locally first
- Push directly to `main` (except for the merge step above)
- Create files to document changes (no changelog/release notes markdown unless asked)
