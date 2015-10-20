[![Stories in Ready](https://badge.waffle.io/kahu-collabs/final_project.png?label=ready&title=Ready)](https://waffle.io/kahu-collabs/final_project)
# Birdseye

###Code quality

`cd client`
`npm install`
`node_modules/.bin/eslint source/* index.js`


###User stories for Birdseye V2

 - a user can log in with facebook.
 - a user can report a crime/multiple crimes
 - a user can see the crimes they have reported in a list
 - a user can message another user through Birdseye, and receive messages from other users
 - a user receives a facebook notification when they receive a message from another user on BatMap
 - a user can turn off facebook notifications from Birdseye
 - a user can post in forums; forums are moderated by a moderator account
 - a moderator can monitor communication through forums
 - a user can filter the crimes on the map by date and crime type
 - a users can see crime stats based on user-generated data
 - a user can see crime stats based on publicly available police data - stretch
 - a user can hover over a crime pin on the map and see more specific information about that crime, and message the user who posted it.
 - a user is anonymous on Birdseye until they choose to share their identity with another user, privately.
 - a moderator can see users' identities
 - submitting a crime pin sends a report to the crimestoppers website


MODELS 

User - uid, provider, name, suburb_id (do we want to limit the user to the suburb they live in? What if their incident occurred elsewhere?)

Report - type_id, description, time_occurred (datetime?), user_id, location, happened_before?, suburb_id

Suburb - name, some kind of location specification

Messages - User, content, title, suburb_id
