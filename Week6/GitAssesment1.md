### **git --version**

```bash
D:\clg\placement\gitassessment\GitDemo>git --version

git version 2.54.0.windows.1
```

### **Step 1: Configure Git User Identity (Username and Email)**

```bash
C:\Users\MANOJ>git config --global user.name "MANOJ KUMAR T"

C:\Users\MANOJ>git config --global user.email "mkumar07959@gmail.com"

C:\Users\MANOJ>git config --global --list

user.name=MANOJ KUMAR T
user.email=mkumar07959@gmail.com
```

### **Step 2: Integrate notepad++.exe to Git and make it a default editor**

```bash
C:\Users\MANOJ>git config --global core.editor "\"C:/Program Files (x86)/Notepad++/notepad++.exe\""

C:\Users\MANOJ>git config --global --list

user.name=MANOJ KUMAR T
user.email=mkumar07959@gmail.com
core.editor="C:/Program Files (x86)/Notepad++/notepad++.exe"
```

### **Step 3: Initialize Local Git Repository**

```bash
D:\clg\placement\gitassessment>cd GitDemo

D:\clg\placement\gitassessment\GitDemo>git init

Initialized empty Git repository in D:/clg/placement/gitassessment/GitDemo/.git/

D:\clg\placement\gitassessment\GitDemo>git status

On branch master
No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

### **Step 4: Create and Add File to Git Repository**

```bash
D:\clg\placement\gitassessment\GitDemo>echo Welcome to Git Hands-on > welcome.txt

D:\clg\placement\gitassessment\GitDemo>dir

 Volume in drive D is New Volume

 Volume Serial Number is 28BA-4F48

 Directory of D:\clg\placement\gitassessment\GitDemo

26-07-2026  11:35    <DIR>          .
26-07-2026  11:34    <DIR>          ..
26-07-2026  11:35                26 welcome.txt

               1 File(s)             26 bytes
               2 Dir(s)  311,277,547,520 bytes free

D:\clg\placement\gitassessment\GitDemo>git status

On branch master
No commits yet

Untracked files:

  (use "git add <file>..." to include in what will be committed)

        welcome.txt

nothing added to commit but untracked files present (use "git add" to track)

D:\clg\placement\gitassessment\GitDemo>git add welcome.txt

D:\clg\placement\gitassessment\GitDemo>git status

On branch master

No commits yet

Changes to be committed:

  (use "git rm --cached <file>..." to unstage)

        new file:   welcome.txt
```

### **Step 5: Commit Changes**

```bash
D:\clg\placement\gitassessment\GitDemo>git add welcome.txt

D:\clg\placement\gitassessment\GitDemo>git status

On branch master
No commits yet

Changes to be committed:

  (use "git rm --cached <file>..." to unstage)

        new file:   welcome.txt

D:\clg\placement\gitassessment\GitDemo>git commit -m "Initial commit"

[master (root-commit) 087a0e2] Initial commit

 1 file changed, 1 insertion(+)

 create mode 100644 welcome.txt

D:\clg\placement\gitassessment\GitDemo>git log --oneline

087a0e2 (HEAD -> master) Initial commit
```

### **Step 6: Create GitLab Remote Repository**

```bash
D:\clg\placement\gitassessment\GitDemo>git log --oneline

087a0e2 (HEAD -> master) Initial commit

D:\clg\placement\gitassessment\GitDemo>git remote add origin https://gitlab.com/manojkumart/gitdemo.git

D:\clg\placement\gitassessment\GitDemo>git remote -v

origin  https://gitlab.com/manojkumart/gitdemo.git (fetch)
origin  https://gitlab.com/manojkumart/gitdemo.git (push)
```

### **Step 7: Push Local Repository to GitLab**

```bash
D:\clg\placement\gitassessment\GitDemo>git push origin main

Enumerating objects: 3, done.

Counting objects: 100% (3/3), done.

Writing objects: 100% (3/3), 242 bytes | 18.00 KiB/s, done.

Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)

To ssh://altssh.gitlab.com:443/manojkumart/gitdemo.git

 * [new branch]      main -> main
```

### **Step 8: Verify SSH Authentication**

```bash
D:\clg\placement\gitassessment\GitDemo>type %USERPROFILE%\.ssh\id_ed25519.pub

ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBq9Z0IMcHztpa/c7lUngsFvOVPwgjoyD5D8z3YZX8h8 mkumar07959@gmail.com

 Directory of C:\Users\MANOJ\.ssh

26-07-2026  12:35    <DIR>          .
26-07-2026  12:05    <DIR>          ..
26-07-2026  12:35               114 config
26-07-2026  12:29               419 id_ed25519
26-07-2026  12:29               110 id_ed25519.pub
26-07-2026  12:25               198 known_hosts

              4 File(s)            841 bytes
              2 Dir(s)  540,802,998,272 bytes free

D:\clg\placement\gitassessment\GitDemo>ssh -T git@gitlab.com

Welcome to GitLab, @mkumar07959!
```
