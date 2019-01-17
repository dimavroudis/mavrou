#!/usr/bin/env bash
#Go to project folder
cd C:/Users/Dimitris/workspace/mavrou
#Build
ng build --prod --baseHref "https://mavrou.gr/"
#Go to deployment folder
cd C:/Users/Dimitris/workspace/mavrou.com
#Activate extended pattern matching features
shopt -s extglob
#Remove previous build files and directories except CNAME ang .git
rm -R !(.git|CNAME)
#Copy new build to deployment folder
cp C:/Users/Dimitris/workspace/mavrou/docs/* ./ -r
#Copy index.html and rename to 404.html
cp index.html 404.html
#Check if you want to commit changes
read -p 'Do you want to commit changes? [y/n]' doCommit
if [[ ${doCommit} == 'y' ]]
then
	#Ask commit message
	read -p 'What is the commit message?' commitMessage
	#Stage and commit changes
	git add .
	git commit -m "$commitMessage"
fi
#Check if you want to push changes
read -p 'Do you want to push? [y/n]' doPush
if [[ ${doPush} == 'y' ]]
then
	#Push changes
	git push
fi
#Everything done. Hit Enter to finish
read -p 'Hit ENTER to exit'
