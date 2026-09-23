# Advanced Git Guide

This guide covers practical Git commands and GitHub concepts that become important once you are comfortable with the basic workflow:

```text
branch → edit → add → commit → push → Pull Request → review → merge
```

The focus here is on real-world recovery, cleanup, collaboration, and advanced branch management.

---

# 1. `git stash`

Use `git stash` when you have unfinished work but need to switch branches quickly.

Example:

```bash
git stash
git switch main
```

Later, return to your branch:

```bash
git switch feature/login
git stash pop
```

Flow:

```text
unfinished work
      │
      │ git stash
      ▼
temporary storage
      │
      │ switch branch / do other work
      ▼
return to branch
      │
      │ git stash pop
      ▼
unfinished work restored
```

Useful commands:

```bash
git stash
git stash list
git stash pop
git stash apply
git stash drop
```

Difference:

```text
git stash pop
    = restore + remove from stash list

git stash apply
    = restore but keep it in stash list
```

---

# 2. `git commit --amend`

Use this when you just made a commit but:

- forgot a file
- want to change the commit message
- want to adjust the last commit

Example:

```bash
git add forgotten-file.js
git commit --amend
```

Change only the commit message:

```bash
git commit --amend -m "Better commit message"
```

Before:

```text
A──B──C
      ↑
   bad commit
```

After amend:

```text
A──B──C'
      ↑
 corrected commit
```

Important:

```text
amend rewrites the latest commit
```

If the old commit was already pushed, you may need:

```bash
git push --force-with-lease
```

---

# 3. `git revert`

Use `git revert` when a commit is already shared and you want to safely undo it.

Example:

```bash
git revert abc1234
```

Suppose:

```text
A──B──C──D
```

`D` introduced a bug.

Instead of deleting `D`, Git creates a new commit:

```text
A──B──C──D──R
             ↑
       reverses D
```

This is why `revert` is safe for shared branches.

Use it when:

```text
commit already pushed
        ↓
other people may depend on history
        ↓
git revert
```

---

# 4. `git reset`

`git reset` moves the current branch pointer backward.

It is powerful and should be used carefully.

## Soft Reset

```bash
git reset --soft HEAD~1
```

Effect:

```text
commit removed
changes remain staged
```

Diagram:

```text
Before:

A──B──C
      ↑
     HEAD

After:

A──B
   ↑
  HEAD

C's changes remain staged
```

## Mixed Reset

```bash
git reset HEAD~1
```

or:

```bash
git reset --mixed HEAD~1
```

Effect:

```text
commit removed
changes remain in working directory
changes are NOT staged
```

## Hard Reset

```bash
git reset --hard HEAD~1
```

Effect:

```text
commit removed
file changes removed
```

Warning:

```text
--hard can destroy uncommitted work
```

Quick comparison:

```text
--soft
commit removed
changes staged

--mixed
commit removed
changes unstaged

--hard
commit removed
changes deleted
```

---

# 5. `git cherry-pick`

Use `git cherry-pick` when you want one specific commit from another branch.

Suppose:

```text
main
A──B──C

feature-a
             D──E

feature-b
             X
```

You only want commit `E` inside `feature-b`.

```bash
git switch feature-b
git cherry-pick <commit-hash-of-E>
```

Result:

```text
feature-b
A──B──C──X──E'
```

The whole branch is not merged.

Only the selected commit is copied.

Useful when:

- a bug fix exists on another branch
- you need one isolated commit
- you do not want all changes from another branch

---

# 6. `git reflog`

`git reflog` is one of the most useful recovery tools in Git.

Use it when you think you lost:

- a commit
- a branch
- work after reset
- work after rebase

Command:

```bash
git reflog
```

Example output:

```text
7ab1234 HEAD@{0}: reset: moving to HEAD~1
9cd5678 HEAD@{1}: commit: Add login API
41ef999 HEAD@{2}: commit: Add login UI
```

Even if the normal branch history no longer shows a commit, reflog may still know where it was.

Recovery example:

```bash
git checkout 9cd5678
```

or create a recovery branch:

```bash
git switch -c recovery-login 9cd5678
```

Mental model:

```text
normal git log
    = visible branch history

git reflog
    = where HEAD has recently been
```

When something goes badly wrong:

```text
STOP
 ↓
do not keep running random commands
 ↓
git reflog
 ↓
find last good commit
 ↓
recover from there
```

---

# 7. `git fetch` vs `git pull`

These commands are related but not identical.

## `git fetch`

```bash
git fetch origin
```

Downloads remote information but does not merge it into your current branch.

Flow:

```text
GitHub
  │
  │ git fetch
  ▼
remote-tracking branches updated
  │
  └── your current files stay unchanged
```

You can inspect what changed:

```bash
git log HEAD..origin/main --oneline
```

## `git pull`

```bash
git pull origin main
```

Usually means:

```text
git fetch
   +
merge or rebase
```

So:

```text
fetch = inspect first

pull = fetch + integrate
```

For cautious workflows:

```bash
git fetch origin
git log HEAD..origin/main --oneline
git merge origin/main
```

---

# 8. Interactive Rebase

Interactive rebase is used to clean up commit history.

Command:

```bash
git rebase -i HEAD~4
```

Git may show:

```text
pick a111111 Add login UI
pick b222222 Fix typo
pick c333333 Fix spacing
pick d444444 Add auth API
```

You can change it to:

```text
pick a111111 Add login UI
squash b222222 Fix typo
squash c333333 Fix spacing
pick d444444 Add auth API
```

Result:

```text
Before:

A──B──C──D

After:

A'──D'
```

This is useful when your feature branch contains noisy commits such as:

```text
fix
fix again
oops
typo
really fix it
```

and you want to present clean history before merge.

Common commands:

```text
pick    keep commit
reword  keep commit but edit message
edit    pause and modify commit
squash  combine with previous commit
fixup   combine and discard this message
drop    remove commit
```

---

# 9. Squash Merge

GitHub often offers:

```text
Merge pull request
Squash and merge
Rebase and merge
```

With squash merge:

```text
feature branch:

A──B──C──D
```

becomes one commit on `main`:

```text
main:

────────S
```

where `S` contains the combined changes.

Good when:

- feature branch has many small commits
- main history should stay clean
- intermediate commits are not important

---

# 10. `git push --force-with-lease`

After:

- rebase
- amend
- history cleanup

your local history may no longer match the remote history.

Then a normal push may fail.

Instead of:

```bash
git push --force
```

prefer:

```bash
git push --force-with-lease
```

Why?

```text
--force
    ↓
overwrite remote branch

--force-with-lease
    ↓
overwrite only if remote is still
where Git expects it to be
```

This reduces the risk of destroying someone else's newer push.

Rule:

```text
prefer --force-with-lease over --force
```

---

# 11. Draft Pull Request

A Draft PR means:

```text
"Work is not finished yet,
but I want visibility or early feedback."
```

Create with GitHub CLI:

```bash
gh pr create --draft
```

Typical workflow:

```text
feature branch
     │
     ▼
Draft PR
     │
     ├── early review
     ├── discussion
     ├── CI runs
     └── more commits
     │
     ▼
Mark Ready for Review
     │
     ▼
Normal Review
```

This is useful in team environments where early feedback matters.

---

# 12. `.gitignore`

`.gitignore` tells Git which files should not be tracked.

Example:

```gitignore
node_modules/
.env
dist/
*.log
.DS_Store
coverage/
```

Important:

```text
.gitignore does NOT remove a file
that is already tracked
```

If `.env` was already committed:

```bash
git rm --cached .env
```

then add it to `.gitignore`.

Sensitive files should not be committed:

```text
API keys
passwords
private certificates
secret tokens
.env files with credentials
```

If a secret was committed, simply deleting it from the latest commit is often not enough because it may still exist in Git history.

---

# 13. Git Tags

Tags are commonly used to mark releases.

Create:

```bash
git tag v1.0.0
```

Push:

```bash
git push origin v1.0.0
```

Structure:

```text
A──B──C──D
         ↑
      v1.0.0
```

Annotated tag:

```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
```

Push all tags:

```bash
git push origin --tags
```

Typical version flow:

```text
v1.0.0
v1.1.0
v1.1.1
v2.0.0
```

---

# 14. Branch Protection

GitHub repositories often protect `main`.

Typical rule:

```text
Developer
   │
   X
direct push to main blocked
   │
   ▼
Feature Branch
   │
   ▼
Pull Request
   │
   ▼
Required Review
   │
   ▼
CI Checks
   │
   ▼
Merge
```

Common protections:

- no direct push to `main`
- Pull Request required
- one or more approvals required
- CI must pass
- branch must be up to date
- force pushes blocked
- deletion blocked

---

# 15. Required Review

A repository may require approval before merging.

Example:

```text
PR opened
   │
   ▼
reviewer checks code
   │
   ├── Request Changes
   │       │
   │       ▼
   │    developer fixes
   │       │
   │       ▼
   │    push update
   │
   └── Approve
           │
           ▼
         merge
```

---

# 16. Required CI Checks

CI means automated checks run against your code.

Examples:

```text
lint
unit tests
integration tests
build
type checking
security scanning
```

Typical PR flow:

```text
git push
   │
   ▼
GitHub PR
   │
   ▼
CI starts
   │
   ├── lint
   ├── tests
   └── build
   │
   ▼
PASS
   │
   ▼
merge allowed
```

If CI fails:

```text
FAIL
 │
 ▼
fix code
 │
 ▼
commit
 │
 ▼
push
 │
 ▼
CI runs again
```

---

# 17. CODEOWNERS

A `CODEOWNERS` file can automatically assign reviewers based on which files changed.

Example:

```text
/frontend/   @frontend-team
/backend/    @backend-team
/security/   @security-team
```

If a PR changes:

```text
/security/auth.js
```

GitHub can automatically request review from:

```text
@security-team
```

Concept:

```text
changed file
    │
    ▼
CODEOWNERS
    │
    ▼
automatic reviewer
```

---

# 18. Merge Queue

Large teams sometimes use a merge queue.

Without a queue:

```text
PR A passes CI
PR B passes CI

both merge around same time
        ↓
main may break because
A + B were never tested together
```

With merge queue:

```text
PR A
 │
PR B
 │
PR C
 │
 ▼
Merge Queue
 │
 ├── test A against latest main
 ├── merge A
 ├── test B against new main
 ├── merge B
 └── continue
```

This helps protect busy repositories.

---

# 19. Practical Recovery Map

When something goes wrong:

```text
Did I only modify files?
        │
        ├── yes → git restore / stash
        │
        ▼
Did I commit locally?
        │
        ├── yes → amend / reset
        │
        ▼
Did I already push?
        │
        ├── yes → revert is often safer
        │
        ▼
Did I lose a commit?
        │
        └── git reflog
```

A simple rule:

```text
NOT PUSHED
    ↓
rewrite history is usually acceptable

ALREADY PUSHED / SHARED
    ↓
prefer safe history-preserving actions
such as git revert
```

---

# 20. Commands Worth Memorizing

```bash
# Temporary work
git stash
git stash pop

# Fix last commit
git commit --amend

# Undo shared commit safely
git revert <commit>

# Move branch backward
git reset --soft HEAD~1
git reset --hard HEAD~1

# Copy one commit
git cherry-pick <commit>

# Recover lost work
git reflog

# Get remote state without integrating
git fetch origin

# Clean commit history
git rebase -i HEAD~4

# Safer forced update
git push --force-with-lease

# Draft PR
gh pr create --draft

# Tags
git tag v1.0.0
git push origin v1.0.0
```

---

# Advanced Git Mental Model

```text
                    ┌───────────────┐
                    │ Working Files │
                    └───────┬───────┘
                            │ git add
                            ▼
                    ┌───────────────┐
                    │    Staging    │
                    └───────┬───────┘
                            │ git commit
                            ▼
                    ┌───────────────┐
                    │ Local History │
                    └───────┬───────┘
                            │ git push
                            ▼
                    ┌───────────────┐
                    │ Remote Branch │
                    └───────┬───────┘
                            │ PR
                            ▼
                    ┌───────────────┐
                    │ Review + CI   │
                    └───────┬───────┘
                            │ merge
                            ▼
                    ┌───────────────┐
                    │     main      │
                    └───────────────┘
```

Advanced commands mostly help when you need to:

```text
pause work        → stash
fix last commit   → amend
undo shared code  → revert
rewrite local     → reset / rebase
copy one commit   → cherry-pick
recover lost work → reflog
clean history     → rebase -i / squash
update rewritten remote history
                  → force-with-lease
```

The most important advanced commands to learn first are:

```text
git stash
git commit --amend
git revert
git reflog
git cherry-pick
git rebase -i
git push --force-with-lease
```
