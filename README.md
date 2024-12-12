# SampleRepo
This repository is where we will all practice going through a typical git workflow. ABC

I strongly recommend using this:
https://www.geeksforgeeks.org/git-cheat-sheet/

But here is a summary of the commands you'll probably use the most.

================ USEFUL COMMANDS TO KNOW ======================

    * Creates a new branch in local repository and switches to it.
        > git checkout -b <new_branch_name>
    
    * Stores your recent changes in stash area.
        > git stash

    * Pulls recent from origin and specified branch and merges them into current branch
        > git pull origin <branch_name>
    
    * Merges your recent change back into the branch
        > git stash pop
    
    * Adds all changed files to a staging area to commit
        > git add .
    
    * Adds commit message to commit
        > git commit -m "<your message>"
    
    * Pushes branch upstream to origin repository
        > git push origin <branch_name>

        
    ******* Pushing to a branch *******
        > git stash
        > git pull origin <branch_name>
        > git stash pop
        > git add .
        > git commit -m "<message for your commit>"
        > git push origin <branch_name>
         - After doing this, go to github and create a PR
    

========== COMMIT MESSAGE PREFIXES ===========
* By preference, it is easiest to prefix your commits with the kind of change it is.
* Kind of think of it as prefixing it with the type of dev-ops ticket you're working on

    - "feat: " (feature change)
    - "bug: " (bugfix)
    - "test: " (test cases)
    - "opt: " (optimization)
    - "refac: " (refactorization)
    - "docs: " (documentation change)
    - "style: " (changing indentation, white space, etc)