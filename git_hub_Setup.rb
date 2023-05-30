# ========New repo=============
cd ~/code/YOUR_GITHUB_USERNAME
rails new \
  -d postgresql \
  -j webpack \
  -m https://raw.githubusercontent.com/lewagon/rails-templates/master/minimal.rb \
  NAME_OF_APP

cd NAME_OF_APP
gh repo create --public --source=. #This creates the repo on GH

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

# Reset the remote branch of your local branch
git branch -u upstream/foo
