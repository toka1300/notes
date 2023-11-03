git init
gh repo create my-newrepo --public --source=. --remote=upstream --push #This creates the repo on GH

# ========New Rails minimal template repo=============
rails new \
  -d postgresql \
  -j webpack \
  -m https://raw.githubusercontent.com/lewagon/rails-templates/master/minimal.rb \
  NAME_OF_APP


# --------From forked repo--------
mkdir ~/code/OWNER_GITHUB_USERNAME
cd ~/code/OWNER_GITHUB_USERNAME
git clone git@github.com:OWNER_GITHUB_USERNAME/PROJECT_NAME.git #Clone using SSH
cd PROJECT_NAME

#Initialize tracking
git init
# First add and commit
git add .
git commit -m "Great message"
# Push to GitHub

# --------Renaming branch---------
git branch -m new-name # Rename local branch
git push origin :old-name new-name # Delete the old-name remote branch and push the new-name local branch
git push origin -u new-name # Reset the upstream branch for the new-name local branch

# ------------------Git rules of thumb------------------
# Sync to parent branch more frequently
# Do smaller commits more frequently
# Instead of git reset, always consider branch off from the old commit and check integrity
# If git reset is a must(why?), make local copy before changing the commit history using push --force

# Stick to these commands 99% of the time:
# 1) Commit
# 2) Push
# 3) Branch out
# 4) Delete branches
# 5) Merge branches