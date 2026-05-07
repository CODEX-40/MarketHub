# Contributing to MarketHub

A short, opinionated guide so we all push without stepping on each other.

> **Important:** Don’t work inside the original `Market hub demo 1` RAR folder. That folder is not connected to GitHub. **Clone the repo** as shown below and do all your work in the clone.

---

## 1. Install Git (one-time per computer)

- **Windows** — Install **Git for Windows**: <https://git-scm.com/download/win>. After install, open **Git Bash** or **Command Prompt** and continue below.
- **macOS** — `xcode-select --install` (or install via <https://git-scm.com/download/mac>).
- **Linux (Fedora)** — `sudo dnf install git`.
- **Linux (Ubuntu/Debian)** — `sudo apt install git`.

Verify it works:

```bash
git --version
```

---

## 2. Set your identity (one-time per computer)

Use your **GitHub username** and the **noreply** email so your real address isn’t exposed in commits.

```bash
git config --global user.name  "<your-github-username>"
git config --global user.email "<your-github-username>@users.noreply.github.com"
```

(If you’d rather use your real email, replace the second line accordingly.)

---

## 3. Clone the repo (each member, once)

Pick a folder you’ll keep code in. Examples:

- **Windows (Command Prompt or Git Bash):**
  ```
  cd %USERPROFILE%\Desktop
  git clone https://github.com/CODEX-40/MarketHub.git
  cd MarketHub
  ```
- **macOS / Linux:**
  ```
  cd ~
  git clone https://github.com/CODEX-40/MarketHub.git
  cd MarketHub
  ```

You should now be inside a folder called `MarketHub` (or `markethub` — case doesn’t matter on Windows). Confirm it’s a real clone:

```bash
git status
git remote -v
```

`git remote -v` must show:
```
origin  https://github.com/CODEX-40/MarketHub.git (fetch)
origin  https://github.com/CODEX-40/MarketHub.git (push)
```

If it doesn’t — you’re in the wrong folder. Go back and `cd` into the cloned `MarketHub` directory.

---

## 4. Branch naming

- **`main`** — the working baseline. **Never commit directly.** It changes only via merged Pull Requests.
- **Personal / topic branches** — every change starts on a branch named:

  ```
  <your-github-username>/<short-topic>
  ```

  Examples: `b4yaw/checkout-ui`, `kingdyoung/auth`, `Sarkodie1255/admin-pages`, `pepperclaude/work`.

  Lowercase. Hyphens, not spaces. Keep the topic short (2–4 words).

---

## 5. Daily workflow

Run these inside your `MarketHub` clone:

```bash
# 1. Get latest main
git checkout main
git pull

# 2. Create your branch off main (only when starting new work)
git switch -c <your-username>/<short-topic>

# 3. Edit files, then stage + commit
git add -A
git commit -m "Short, present-tense message"

# 4. Push your branch (first time uses -u to set upstream)
git push -u origin <your-username>/<short-topic>
```

After step 4, your branch will appear at:
<https://github.com/CODEX-40/MarketHub/branches>

If it doesn’t appear, **you didn’t push** (or push failed). Re-run step 4 and read the output.

For follow-up commits on the **same** branch:

```bash
git add -A
git commit -m "more changes"
git push                # no -u needed after the first push
```

---

## 6. Open a Pull Request

1. Go to <https://github.com/CODEX-40/MarketHub>.
2. GitHub will show a yellow banner: **“Compare & pull request”** for your branch — click it.
3. Title summarizes the change in one line. Description: what changed, why.
4. Submit. Wait for review. After merge, your branch can be deleted with the GitHub button.

Then start fresh for the next change:

```bash
git checkout main
git pull
git switch -c <your-username>/<next-topic>
```

---

## 7. Keeping your branch up to date

If `main` moves while you work:

```bash
git checkout main
git pull
git checkout <your-username>/<your-branch>
git merge main          # or: git rebase main
```

Resolve any conflicts, commit, push.

---

## 8. Commit messages

- Imperative mood: **"Add cart total"**, not "Added cart total".
- One logical change per commit when reasonable.
- **Do not include AI tool co-author trailers** (no `Co-authored-by: Cursor`, no `Made-with:` lines, no agent references). Keep history clean and human.

---

## 9. Don’t commit these

- `node_modules/`
- `dist/` / build output
- `.env` or any secret
- IDE folders (`.vscode/`, `.idea/`) unless intentionally shared

`.gitignore` already covers most of this.

---

## 10. Common mistakes & fixes

**“I created a branch but it’s not showing on GitHub.”**
You forgot to push, or you pushed without `-u`. Run:
```bash
git push -u origin "$(git branch --show-current)"
```
On Windows Command Prompt that subshell doesn’t work — type the branch name directly:
```
git push -u origin kingdyoung/auth
```

**“`fatal: not a git repository`”**
You’re in the wrong folder (probably the RAR-extracted one). `cd` into the cloned `MarketHub` folder.

**“`Updates were rejected because the remote contains work that you do not have locally`”**
Someone else pushed first. Update and try again:
```bash
git fetch origin
git rebase origin/main          # if you’re on main
git push
```

**“Permission denied / 403 on push”**
You’re signed in as the wrong GitHub account, or you don’t have write access. Sign out and sign back in via the credential prompt, or run:
```bash
gh auth login
```

---

## 11. Local commands you’ll use most

```bash
git status                       # what’s changed
git diff                         # unstaged diff
git diff --staged                # staged diff
git log --oneline --graph -20    # recent history
git branch                       # list local branches
git switch <branch>              # change branch
git restore <file>               # undo unstaged edits in a file
git stash                        # park changes temporarily
git stash pop                    # bring them back
```

If you’re unsure about a destructive command (`reset --hard`, `push --force`), ask first.
