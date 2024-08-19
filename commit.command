cd "$(dirname "$0")"
git stash
git pull -p
git stash pop
git add .
git commit -a -m "automated commit by mac shell scripting"
git push