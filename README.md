# HOTH Project

Main repository for HOTH Project

## How to clone the repository

Within the repository on Github, click the green button labeled <> CODE

Copy the HTTPS and open up your terminal

within the terminal, go into your downloads folder.

This can be done via cd command, e.g. cd Downloads on Mac

within this directory type these sequence of commands

`mkdir projects` return

`cd projects` enter

Now we are going to clone the repository into the projects folder

`git clone <paste>`, where <paste> is where you paste the HTTPS that was copied earlier

Press enter.

At this point, the github repository should be copied.

Before advancing any further, look forward on how to create your own git branch to avoid

future merge problems.

## How to create your own Git Branch

To create your own Git Branch for the first time, use the command
`git branch branch_name`, replacing branch_name with whatever name you find fit.

To switch to the branch, use the command
`git checkout branch_name`

## How to push to Git Repository

When pushing to repository, make sure you are within your own branch via `git branch`

Check to make sure everything is ready to commit via `git status`

if there are changes uncommited, first `git add .`

`git commit -m ""`, Note to add a useful short message for info about commit

Then finally `git push origin branch_name`, replacing branch_name with the name of your correspondingbranch name.



