# Git Pull and Push Assessment

## Step 1: Verify main is in a Clean State

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

## Step 2: List All Available Branches

```bash
D:\clg\placement\gitassessment\GitDemo>git branch

* main
```

## Step 3: Pull the Remote Repository

```bash
D:\clg\placement\gitassessment\GitDemo>git pull origin main

From ssh://altssh.gitlab.com:443/manojkumart/gitdemo

* branch            main -> FETCH_HEAD

Already up to date.
```

## Step 4: Push Pending Changes

```bash
D:\clg\placement\gitassessment\GitDemo>git push origin main

Enumerating objects: 10, done.

Counting objects: 100% (10/10), done.

Delta compression using up to 16 threads

Compressing objects: 100% (7/7), done.

Writing objects: 100% (9/9), 847 bytes | 141.00 KiB/s, done.

Total 9 (delta 4), reused 0 (delta 0), pack-reused 0 (from 0)

To ssh://altssh.gitlab.com:443/manojkumart/gitdemo.git

a91339e..cd08238  main -> main
```

# tep 5: Verify changes on GitLab
https://github.com/Manoj-587/DN5-Java-FSE-React/tree/main/Week6/Gitassesment5_verification.png

# Conclusion

The main branch was verified to be in a clean state before synchronizing with the remote repository. The latest updates were successfully fetched using `git pull`, confirming that the local repository was already up to date. Finally, the pending commits were pushed successfully using `git push`, ensuring that the local and remote repositories remained synchronized.