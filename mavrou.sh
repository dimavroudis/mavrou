echo What is the commit message?
read message
cd C:/Users/Dimitris/workspace/mavrou
ng build --prod --baseHref "https://mavrou.gr/"
cd C:/Users/Dimitris/workspace/mavrou.com
shopt -s extglob
rm -R !(.git|CNAME)
cp C:/Users/Dimitris/workspace/mavrou/dist/mavrou/* ./ -r
git add .
git commit -m $message
git push