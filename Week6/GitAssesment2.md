Git Ignore Assessment
Step 1 : Navigate to the Git Repository
C:\Users\MANOJ>cd /d D:\clg\placement\gitassessment\GitDemo
Step 2 : Create a Log Folder
D:\clg\placement\gitassessment\GitDemo>mkdir log
Step 3 : Create a Log File Inside the Folder
D:\clg\placement\gitassessment\GitDemo>echo This is a log file > log\application.log
Step 4 : Create a Log File in the Root Directory
D:\clg\placement\gitassessment\GitDemo>echo Root log file > error.log
Step 5 : Create a .gitignore File
D:\clg\placement\gitassessment\GitDemo>notepad .gitignore

Add the following content to the .gitignore file:

*.log
log/

Save and close Notepad.

Step 6 : Verify Ignored Files
D:\clg\placement\gitassessment\GitDemo>git status

On branch main

Untracked files:

  (use "git add ..." to include in what will be committed)

        .gitignore
        config

nothing added to commit but untracked files present (use "git add" to track)

Note: error.log and the log folder do not appear because they are ignored by Git.

Step 7 : Stage the .gitignore File
D:\clg\placement\gitassessment\GitDemo>git add .gitignore
Step 8 : Commit the Changes
D:\clg\placement\gitassessment\GitDemo>git commit -m "Added .gitignore file"

[main xxxxxxx] Added .gitignore file
 1 file changed, 2 insertions(+)
 create mode 100644 .gitignore
Step 9 : Push the Changes
D:\clg\placement\gitassessment\GitDemo>git push

Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), done.
Total 3 (delta 0), reused 0 (delta 0)
To ssh://altssh.gitlab.com:443/manojkumart/gitdemo.git
   087a0e2..xxxxxxx  main -> main

Replace manojkumart with your actual GitLab username if it is different.

Step 10 : Verify Repository Status
D:\clg\placement\gitassessment\GitDemo>git status

On branch main

Untracked files:

  (use "git add ..." to include in what will be committed)

        config

nothing added to commit but untracked files present (use "git add" to track)
Folder Structure
GitDemo
│── .git
│── .gitignore
│── welcome.txt
│── error.log          (Ignored)
└── log                (Ignored)
    └── application.log
Conclusion

The .gitignore file successfully ignores all files with the .log extension and the log directory. As a result, error.log and log/application.log are not tracked by Git and are excluded from commits. Only the .gitignore file is committed to the repository.