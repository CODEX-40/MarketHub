# MarketHub — working together with Git

Hey. If Git feels like a black box, you’re not alone. This repo is meant to grow as a real project, so here’s a **short** guide to how teams usually use Git so nobody’s stuck guessing.

---

## What Git is actually doing

Think of Git as a **saved-history machine** for your project folder. Every time you “commit,” you’re taking a snapshot with a note (“fixed login,” “added chart,” whatever). Everyone on the team has a copy of that history on their computer *and* on GitHub, so you’re not emailing zip files or overwriting each other by accident.

---

## The usual day-to-day flow

1. **Pull first**  
   Before you start (or before you push), grab what others added:  
   `git pull`  
   That way you’re not building on stale work.

2. **Make your changes**  
   Edit files like normal in your editor.

3. **See what changed**  
   `git status`  
   Git lists what’s new or modified.

4. **Stage and commit**  
   - `git add .` (or `git add path/to/file` if you only want certain files)  
   - `git commit -m "Say what you did in plain English"`  
   Small commits with clear messages help everyone later. “stuff” or “fix” isn’t as helpful as “Fix typo on homepage.”

5. **Push**  
   `git push`  
   That uploads your commits so the rest of the team can pull them.

If Git complains about conflicts or being “behind,” that usually means someone else pushed first — run `git pull`, fix any merge issues Git points out, then commit and push again. Don’t panic; it’s normal.

---

## Branches (why they exist)

Working straight on `main` (or `master`) *can* work for tiny teams, but it gets messy fast: one person’s half-finished work can block or break what others need.

A **branch** is a separate line of work — same project, different “timeline.” Typical pattern:

- **`main`** — what you consider stable or “what we’d ship.”
- **Feature branches** — e.g. `add-search`, `fix-footer-bug`. You do your work there, then bring it back into `main` when it’s ready.

Create and switch to a new branch:

```bash
git checkout -b my-branch-name
```

(Or `git switch -c my-branch-name` — same idea.)

Push it the first time:

```bash
git push -u origin my-branch-name
```

After that, `git push` is usually enough.

---

## Merging and pull requests

**Merging** means: “take the commits from this branch and fold them into another branch (usually `main`).”

On GitHub, teams almost always use **Pull Requests (PRs)**:

1. Push your branch.
2. Open GitHub → **Compare & pull request** (or **New pull request**).
3. Describe what you changed and why (like you’re explaining to a teammate over chat).
4. Someone reviews (even a quick skim), then **Merge**.

Why PRs? Everyone sees what’s changing, you can discuss, and you avoid surprise breaks on `main`. For a learning team, that habit pays off fast.

Locally, after a PR is merged on GitHub, update your machine:

```bash
git checkout main
git pull
```

Optional: delete the old branch on GitHub when you’re done; locally you can remove it with `git branch -d my-branch-name`.

---

## Simple habits that keep the team sane

- **Pull before you dive in** for the day or before a big push.
- **Commit often** with messages that make sense to *someone else*.
- **Use branches** for anything non-trivial so `main` stays trustworthy.
- **Talk in PRs** — “not sure about this name” or “open to ideas” is totally fine.
- **Don’t commit secrets** (passwords, API keys). If it ever happens, tell someone and rotate the key.

---

## If you’re stuck

Git’s errors are blunt but usually truthful. Read the message, search the exact wording if needed, or ask in the team chat with a screenshot — everyone’s been there.

**One drum, many beats.** Same project, lots of hands; Git is how we stay in step.
