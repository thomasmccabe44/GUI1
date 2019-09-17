#!/bin/bash

##########################################################################
# Goal : deploy simple site from the to heroku app in 1 command line
# Run  : curl 45.55.88.57/run/herokuPush | bash
# Name : Bunlong Heng
##########################################################################

#Restriction
#1 - you must be in the hw directory
#2 - you must login to heroku cli : heroku login

appName='tmccabe-'$repoName
echo 'appName =' $appName

# exit

#heroku apps
# heroku apps:destroy appName --confirm appName
heroku create $appName
heroku git:remote -a $appName
heroku buildpacks:set heroku/php
cat '{}' >> composer.json
git init
git status
git add -A
git commit -m "Initial commit"
git push heroku master
heroku apps:info
heroku open


# heroku run bash -a $appName






