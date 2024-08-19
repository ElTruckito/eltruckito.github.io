cd "$(dirname "$0")"
git stash
git pull -p
git stash pop