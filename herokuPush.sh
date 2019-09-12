#!/bin/bash

##########################################################################
# Goal : deploy simple site from the to heroku app in 1 command line
# Run  : sh herokuPush.sh
# Name : Bunlong Heng
##########################################################################

appName='app-bheng-'$(date +%s)
echo 'appName =' $appName

# exit

#heroku apps
# heroku apps:destroy appName --confirm appName
heroku create $appName
heroku git:remote -a $appName
heroku buildpacks:set heroku/php
cat '{}' >> composer.json
cat '<?php header( 'Location: /index.html' ) ;  ?>' >> index.html
git init
git status
git add -A
git commit -m "Initial commit"
git push heroku master
heroku apps:info
heroku open


# heroku run bash -a $appName
