# Git Merge Conflict Assessment

## Step 1: Verify `main` is Clean

```bash
C:\Users\MANOJ>cd /d D:\clg\placement\gitassessment\GitDemo

D:\clg\placement\gitassessment\GitDemo>git checkout main

Already on 'main'

D:\clg\placement\gitassessment\GitDemo>git status

On branch main

Untracked files:

  (use "git add ..." to include in what will be committed)

        config

nothing added to commit but untracked files present (use "git add" to track)
```

## Step 2: Create Branch `GitWork` and Add `hello.xml`

```bash
D:\clg\placement\gitassessment\GitDemo>git checkout -b GitWork

Switched to a new branch 'GitWork'

D:\clg\placement\gitassessment\GitDemo>echo "Hello from GitWork" > hello.xml
```

## Step 3: Update `hello.xml`

```bash
D:\clg\placement\gitassessment\GitDemo>echo "Hello from GitWork - Updated" > hello.xml
```

## Step 4: Commit the Changes

```bash
D:\clg\placement\gitassessment\GitDemo>git add hello.xml

D:\clg\placement\gitassessment\GitDemo>git commit -m "Added hello.xml in GitWork"

[GitWork 82c0438] Added hello.xml in GitWork

1 file changed, 1 insertion(+)

create mode 100644 hello.xml
```

## Step 5: Switch to `main`

```bash
D:\clg\placement\gitassessment\GitDemo>git checkout main

Switched to branch 'main'
```

## Step 6: Add `hello.xml` with Different Content

```bash
D:\clg\placement\gitassessment\GitDemo>echo "Hello from Master" > hello.xml
```

## Step 7: Commit on `main`

```bash
D:\clg\placement\gitassessment\GitDemo>git add hello.xml

D:\clg\placement\gitassessment\GitDemo>git commit -m "Added hello.xml in master"

[main 7dd7e80] Added hello.xml in master

1 file changed, 1 insertion(+)

create mode 100644 hello.xml
```

## Step 8: View Commit History

```bash
D:\clg\placement\gitassessment\GitDemo>git log --oneline --graph --decorate --all

* 7dd7e80 (HEAD -> main) Added hello.xml in master

| * 82c0438 (GitWork) Added hello.xml in GitWork

|/

* a91339e (origin/main) Added branch.txt in GitNewBranch

* d72207a Added .gitignore file

* 087a0e2 Initial commit
```

## Step 9: Check Differences

```bash
D:\clg\placement\gitassessment\GitDemo>git diff main GitWork

diff --git a/hello.xml b/hello.xml

index f4a2c58..4e42cd0 100644

--- a/hello.xml

+++ b/hello.xml

@@ -1 +1 @@

-"Hello from Master"

+"Hello from GitWork - Updated"
```

## Step 10: Merge the Branch

```bash
D:\clg\placement\gitassessment\GitDemo>git merge GitWork

Auto-merging hello.xml

CONFLICT (add/add): Merge conflict in hello.xml

Automatic merge failed; fix conflicts and then commit the result.
```

## Step 11: Observe Git Conflict Markup

```bash
D:\clg\placement\gitassessment\GitDemo>notepad hello.xml
```

Git displays the following conflict markers:

```text
<<<<<<< HEAD
Hello from Master
=======
Hello from GitWork - Updated
>>>>>>> GitWork
```

## Step 12: Resolve the Conflict

Edit `hello.xml` and replace the conflict markers with the following content:

```text
Hello from Master and GitWork
```

Save the file.

## Step 13: Commit the Resolved Merge

```bash
D:\clg\placement\gitassessment\GitDemo>git add hello.xml

D:\clg\placement\gitassessment\GitDemo>git commit -m "Resolved merge conflict"

[main cd08238] Resolved merge conflict
```

## Step 14: Check Repository Status

```bash
D:\clg\placement\gitassessment\GitDemo>git status

On branch main

Untracked files:

  (use "git add ..." to include in what will be committed)

        config

nothing added to commit but untracked files present (use "git add" to track)
```

## Step 15: Commit `.gitignore`

```bash
D:\clg\placement\gitassessment\GitDemo>git add .gitignore

D:\clg\placement\gitassessment\GitDemo>git commit -m "Added backup files to gitignore"

On branch main

Untracked files:

  (use "git add ..." to include in what will be committed)

        config

nothing added to commit but untracked files present (use "git add" to track)
```

> **Note:** Since `.gitignore` was already committed previously, Git reports that there is nothing new to commit.

## Step 16: List Branches

```bash
D:\clg\placement\gitassessment\GitDemo>git branch

  GitWork
* main
```

## Step 17: Delete the Merged Branch

```bash
D:\clg\placement\gitassessment\GitDemo>git branch -d GitWork

Deleted branch GitWork (was 82c0438).
```

## Step 18: View Final Commit History

```bash
D:\clg\placement\gitassessment\GitDemo>git log --oneline --graph --decorate

* cd08238 (HEAD -> main) Resolved merge conflict

|\

| * 82c0438 Added hello.xml in GitWork

* | 7dd7e80 Added hello.xml in master

|/

* a91339e (origin/main) Added branch.txt in GitNewBranch

* d72207a Added .gitignore file

* 087a0e2 Initial commit
```

---

# Conclusion

A merge conflict was intentionally created by modifying the same file (`hello.xml`) in both the **main** and **GitWork** branches. Git detected the conflict during the merge and inserted conflict markers into the file. After manually resolving the conflict, the changes were committed successfully. The merged branch was then deleted, leaving the repository in a clean state with the conflict resolution preserved in the commit history.
