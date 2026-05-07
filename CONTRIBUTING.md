# Contributing to MarketHub

A short, opinionated guide so we all push without stepping on each other.

## Branching rules

- **`main`** — the working baseline. **Never commit directly.** It changes only via merged Pull Requests.
- **Personal / topic branches** — every change starts on a branch named:

  ```
  <your-github-username>/<short-topic>
  ```

  Examples:
  - `b4yaw/checkout-ui`
  - `kingdyoung/auth`
  - `Sarkodie1255/admin-pages`

  Lowercase. Hyphens, not spaces. Keep the topic short (2–4 words).

## First-time setup (each member, once)

```bash
git clone https://github.com/CODEX-40/MarketHub.git
cd MarketHub
git config user.name  "<your-github-username>"
git config user.email "<your-github-username>@users.noreply.github.com"
```

Use the **noreply** email so your real one isn't published in commits.

## Daily workflow

```bash
# 1. Get latest main
git checkout main
git pull

# 2. Create your branch off main
git switch -c <your-username>/<short-topic>

# 3. Work, commit small focused changes
git add -A
git commit -m "Short, present-tense message"

# 4. Push (first time uses -u to set upstream)
git push -u origin <your-username>/<short-topic>

# 5. Open a Pull Request on GitHub
#    Base: main   Compare: <your-username>/<short-topic>
```

After the PR is reviewed and merged, delete the branch (GitHub button) and start a new one for the next change.

## Keeping your branch up to date

If `main` moves while you work:

```bash
git checkout main && git pull
git checkout <your-username>/<short-topic>
git merge main      # or: git rebase main
```

Resolve any conflicts, commit, push.

## Commit messages

- Imperative mood: **"Add cart total"**, not "Added cart total".
- One logical change per commit when reasonable.
- **Do not include AI tool co-author trailers** (no `Co-authored-by: Cursor`, no `Made-with:` lines, no agent references). Keep history clean and human.

## Pull Requests

- Title summarizes the change in one line.
- Description: what changed, why, anything reviewers should test.
- Keep PRs small. Multiple small PRs > one giant one.
- At least one approval before merge.

## Don't push these

- `node_modules/`
- `dist/` / build output
- `.env` or any secret
- IDE folders (`.vscode/`, `.idea/`) unless intentionally shared

`.gitignore` already covers most of this.

## Local commands you’ll use most

```bash
git status                      # what's changed
git diff                        # unstaged diff
git diff --staged               # staged diff
git log --oneline --graph -20   # recent history
git branch                      # list local branches
git switch <branch>             # change branch
git restore <file>              # undo unstaged edits in a file
git stash                       # park changes temporarily
git stash pop                   # bring them back
```

If you’re unsure about a destructive command (`reset --hard`, `push --force`), ask first.
