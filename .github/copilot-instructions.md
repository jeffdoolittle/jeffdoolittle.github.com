# Copilot Instructions — jeffdoolittle.github.com

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

### 2. Ensure Clean Branch State

```bash
git checkout main
git pull origin main
git status   # must be clean before branching
```

### 3. Create an Issue Branch

```bash
git checkout -b issue/123-short-description
```

Branch naming: `issue/<number>-<kebab-slug>` (max ~5 words in slug).

### 4. Do the Work and Commit

All commit messages **must** reference the issue number so it auto-closes on merge to main:

```
fix: correct hero layout (#123)
feat: add SE Radio episode posts (#123)
```

Use `fixes #123` or `closes #123` in the commit body when the commit fully resolves the issue.

### 5. Merge Trigger Words

When the user says any of the following — **lgtm, gtm, merge, ship it, looks good** — treat it as approval to:

1. `git checkout main && git pull origin main`
2. `git merge issue/123-short-description --no-ff -m "merge: <title> (closes #123)"`
3. `git push origin main`
4. `git push origin --delete issue/123-short-description`

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
