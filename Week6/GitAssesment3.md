# Git Branching Assessment

## Step 1: Navigate to the Repository

```bash
C:\Users\MANOJ>cd /d D:\clg\placement\gitassessment\GitDemo
```

## Step 2: Create a New Branch and Verify

```bash
D:\clg\placement\gitassessment\GitDemo>git branch GitNewBranch

D:\clg\placement\gitassessment\GitDemo>git branch

  GitNewBranch
* main
```

## Step 3: List All Local and Remote Branches

```bash
D:\clg\placement\gitassessment\GitDemo>git branch

  GitNewBranch
* main

D:\clg\placement\gitassessment\GitDemo>git branch -r

  origin/main

D:\clg\placement\gitassessment\GitDemo>git branch -a

  GitNewBranch
* main
  remotes/origin/main
```

## Step 4: Switch to the New Branch

```bash
D:\clg\placement\gitassessment\GitDemo>git checkout GitNewBranch

Switched to branch 'GitNewBranch'

D:\clg\placement\gitassessment\GitDemo>git branch

* GitNewBranch
  main
```

## Step 5: Create a New File

```bash
D:\clg\placement\gitassessment\GitDemo>echo This file is created in GitNewBranch > branch.txt
```

## Step 6: Check Status

```bash
D:\clg\placement\gitassessment\GitDemo>git status

On branch GitNewBranch

Untracked files:

  (use "git add ..." to include in what will be committed)

        branch.txt
        config

nothing added to commit but untracked files present (use "git add" to track)
```

## Step 7: Stage the File

```bash
D:\clg\placement\gitassessment\GitDemo>git add branch.txt
```

## Step 8: Commit the Changes

```bash
D:\clg\placement\gitassessment\GitDemo>git commit -m "Added branch.txt in GitNewBranch"

[GitNewBranch a91339e] Added branch.txt in GitNewBranch

 1 file changed, 1 insertion(+)

 create mode 100644 branch.txt
```

## Step 9: Verify Status

```bash
D:\clg\placement\gitassessment\GitDemo>git status

On branch GitNewBranch

Untracked files:

  (use "git add ..." to include in what will be committed)

        config

nothing added to commit but untracked files present (use "git add" to track)
```

## Step 10: Switch Back to Main

```bash
D:\clg\placement\gitassessment\GitDemo>git checkout main

Switched to branch 'main'
```

## Step 11: View Differences

```bash
D:\clg\placement\gitassessment\GitDemo>git diff main GitNewBranch

diff --git a/branch.txt b/branch.txt

new file mode 100644

index 0000000..319a3b0

--- /dev/null

+++ b/branch.txt

@@ -0,0 +1 @@

+This file is created in GitNewBranch
```

## Step 12: Merge the Branch

```bash
D:\clg\placement\gitassessment\GitDemo>git merge GitNewBranch

Updating d72207a..a91339e

Fast-forward

 branch.txt | 1 +

 1 file changed, 1 insertion(+)

 create mode 100644 branch.txt
```

## Step 13: View Commit History

```bash
D:\clg\placement\gitassessment\GitDemo>git log --oneline --graph --decorate

* a91339e (HEAD -> main, GitNewBranch) Added branch.txt in GitNewBranch
* d72207a Added .gitignore file
* 087a0e2 (origin/main) Initial commit
```

## Step 14: Delete the Merged Branch

```bash
D:\clg\placement\gitassessment\GitDemo>git branch -d GitNewBranch

Deleted branch GitNewBranch (was a91339e).
```

## Step 15: Check Repository Status

```bash
D:\clg\placement\gitassessment\GitDemo>git status

On branch main

Untracked files:

  (use "git add ..." to include in what will be committed)

        config

nothing added to commit but untracked files present (use "git add" to track)
```

## Step 16: Push to GitLab

```bash
D:\clg\placement\gitassessment\GitDemo>git push origin main

Enumerating objects: 7, done.

Counting objects: 100% (7/7), done.

Delta compression using up to 16 threads

Compressing objects: 100% (4/4), done.

Writing objects: 100% (6/6), 573 bytes | 143.00 KiB/s, done.

Total 6 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)

To ssh://altssh.gitlab.com:443/manojkumart/gitdemo.git

087a0e2..a91339e  main -> main
```

> **Note:** Replace `manojkumart` with your actual GitLab username if it is different.

## Conclusion

A new branch named **GitNewBranch** was successfully created, and a new file (`branch.txt`) was added and committed in that branch. After reviewing the differences, the branch was merged into the **main** branch using a fast-forward merge. The merged branch was then deleted, and the updated repository was pushed to GitLab successfully.
