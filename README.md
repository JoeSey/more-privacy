# More Privacy plugin for Discourse

A simple plugin to suppress some of the information presented on the user profile pages of [Discourse](http://discourse.org).

Early development version, beware. Things might break.

## Installation:
- follow [these steps](https://meta.discourse.org/t/install-a-plugin/19157).
- or, ssh into your Docker container. Do a ```cd /var/www/discourse/plugins; git clone https://github.com/JSey/more-privacy``` and next, ```RAILS_ENV=production rake assets:precompile&& sv restart unicorn``` (on a production install. On development, you know the drill...)

## Configuration:

![configuration screenshot](https://github.com/JSey/more-privacy/blob/master/settings.png?raw=true)

## How it looks:

When looking at a profile page without being logged in:

![profile page viewed from anon account](https://github.com/JSey/more-privacy/blob/master/anonymous.png?raw=true)

When looking at a profile page after logging in:

![full profile page](https://github.com/JSey/more-privacy/blob/master/authenticated.png?raw=true)

## ToDo
- add settings for both anonymous and authenticated users
- ~~add support to suppress info on the user cards~~
- make the .hbs approach more stable than including the full user/users.hbs file
