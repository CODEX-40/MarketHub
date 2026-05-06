# MarketHub (demo)

Social-commerce style front end: marketplace, product detail, cart & checkout, video ad feed, messaging UI, seller dashboard, and admin screens. Data is **mock-only** (no API).

## Scripts

- `npm run dev` — Vite dev server
- `npm run build` — TypeScript check + production build
- `npm run lint` — ESLint
- `npm run preview` — Preview production build

## Stack

React 19, TypeScript, Vite 8, React Router 7, Tailwind CSS 4, Framer Motion, Lucide icons.

## Notes

- Fonts load from Google Fonts via `index.html` (avoids CSS `@import` ordering issues with Tailwind).
- Lucide no longer ships some brand icons; the footer uses generic icons instead.
- **Sign out** clears the demo user; **Sign in** restores the default mock account.
- **Settings** (`/settings`) is wired for theme toggle and placeholder rows.

---

## Git — what you need to know

### Core ideas

- **Repository (repo)** — Project folder with a hidden `.git` directory; holds full history.
- **Working tree** — Your real files on disk; what you edit.
- **Staging area (index)** — Middle step: you **add** changes here before **commit**.
- **Commit** — Snapshot of the repo at a point in time; has an ID (hash), message, author, timestamp.
- **Branch** — Movable pointer to a commit; default is often `main` or `master`.
- **Remote** — A named link to another copy of the repo (e.g. `origin` on GitHub).
- **HEAD** — Pointer to “where you are” (usually the latest commit on your current branch).

### First-time setup (identity)

- `git config --global user.name "Your Name"`
- `git config --global user.email "you@example.com"`
- `git config --global init.defaultBranch main` — use `main` for new repos (optional but common).
- `git config --list --show-origin` — see what is set and where.

### Starting & copying

- `git init` — Turn current folder into a new repo (creates `.git`).
- `git clone <url> [folder]` — Copy a remote repo locally (gets history + default remote `origin`).
- **HTTPS clone** — Simple; prompts for credentials or token on push.
- **SSH clone** (`git@github.com:...`) — Uses SSH keys; no password typing per push once set up (`ssh-keygen`, add public key to host).

### Daily workflow

- `git status` — What's changed / staged / untracked.
- `git diff` — Unstaged changes; `git diff --staged` — staged vs last commit.
- `git add <file>` — Stage files; `git add -p` — stage interactively hunks.
- `git add .` — Stage everything under current dir (respects `.gitignore`).
- `git commit -m "message"` — Record staged snapshot; message should describe **why**, not only **what**.
- `git log --oneline --graph --all -20` — Compact history graph.

### Branches

- `git branch` — List locals; `-a` include remotes.
- `git switch <branch>` — Move `HEAD` to branch (modern); create with `git switch -c feature/foo`.
- `git merge <branch>` — Join another branch **into** the one you’re on; may open an editor if merge commit needed.
- **Fast-forward** — No extra merge commit when history is linear.
- Fast workflow: branch per feature/fix → merge (or PR) when done.

### Remotes / sync

- `git remote -v` — Show remotes and URLs.
- `git fetch origin` — Download remote refs & commits **without** changing your branches.
- `git pull` — Usually `fetch` + merge/rebase into current branch (shortcut; know your defaults).
- `git push [-u origin <branch>]` — Send commits upstream; `-u` sets **upstream** tracking for later plain `git push`.
- **Upstream / tracking** — Local branch remembers its remote counterpart (`@{u}`).

### Undo & repair (be careful)

- `git restore <file>` — Discard unstaged edits in working tree (Git 2.23+).
- `git restore --staged <file>` — Unstage; keep file changes on disk.
- `git checkout -- <file>` — Older equivalent of restoring working tree file.
- `git reset --soft HEAD~1` — Remove last commit, **keep changes staged**.
- `git reset --mixed HEAD~1` (default) — Remove last commit, **keep changes unstaged**.
- `git reset --hard <commit>` — **Destructive**: working tree matches that commit; you **lose uncommitted work** on tracked files.
- `git revert <commit>` — Adds a **new** commit that undoes that commit — safe on shared/public history.
- **Rule:** If you already **pushed** commits others might use, prefer **`revert`**, not **reset --hard + force-push**.

### Stash

- `git stash push -m "msg"` — Save uncommitted edits; clean working tree.
- `git stash list` — List stashes; `git stash pop` — Apply latest and remove stash.
- `git stash apply` — Apply but keep stash entry.

### `.gitignore` & hygiene

- List patterns (glob) for files Git should **never** track: `node_modules/`, `.env`, build output, OS junk.
- **`git rm -r --cached <path>`** — Stop tracking without deleting local file (fixes “already committed” ignores).
- **Sensitive data**: never commit API keys/passwords—use env vars & host secrets.

### Tags

- `git tag v1.0.0` — Lightweight tag on current commit; `git push origin v1.0.0` publishes it.
- `git tag -a v1.0.0 -m "release"` — Annotated tag (preferred for releases).

### Merge conflicts

- Happens when two branches change the **same lines** Git can’t merge automatically.
- Open conflicted files; look for `<<<<<<<`, `=======`, `>>>>>>>`. Edit to final code, delete markers.
- `git add` resolved files → `git commit` (finish merge).

### Rebasing (optional, sharp edges)

- `git rebase <branch>` — Replay your commits on top of another branch — **linear** history.
- **`git pull --rebase`** — Fetch + replay your commits on remote tip (popular on teams).
- **Never rebase commits already pushed & shared** unless the team agrees (rewrites history).

### Collaboration (GitHub/GitLab-style)

- **Fork** — Your copy under your account.
- **Pull request / merge request** — Propose merging a branch into another (review + CI).
- **Protected branch** — Host may block direct pushes to `main`; PR required.
- **Issues / releases** — Live on host; unrelated to Git core but tied to repos.

### Large / binary files

- Git is for **text** deltas; giant binaries inflate history.
- Prefer **Git LFS** (`git-lfs`) or host assets elsewhere if files are huge.
- Prefer **meaningful commits** — small, focused, compilable passes when possible.

### Quick sanity checklist before you push

- `git status` clean or only intended files staged.
- `git diff --staged` matches what you think you’re committing.
- On a team repo: pulled recent `main`; tests/lint OK if applicable.
