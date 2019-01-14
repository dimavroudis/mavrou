#!/usr/bin/env bash
echo What is the commit message?
read message
cd C:/Users/Dimitris/workspace/mavrou
ng build --prod --baseHref "https://mavrou.gr/"
cd C:/Users/Dimitris/workspace/mavrou.com
shopt -s extglob
rm -R !(.git|CNAME)
cp C:/Users/Dimitris/workspace/mavrou/docs/* ./ -r
cp index.html 404.html
echo Do you want to commit and push? [y/n]
read answer
if [[ $answer == 'y' ]]
then
git add .
git commit -m "$message"
git push
fi
read -p 'Hit ENTER to exit'
