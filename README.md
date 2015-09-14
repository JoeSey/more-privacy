# More Privacy plugin for Discourse

A simple plugin to suppress some of the information presented on the user profile pages of [Discourse](http://discourse.org).

Early development version, beware. Things might break.

## Installation:
- follow [these steps](https://meta.discourse.org/t/install-a-plugin/19157).
- or, ssh into your Docker container. ```cd /var/www/discourse/plugins; git clone https://github.com/JSey/more-privacy``` and then do a ```RAILS_ENV=production rake assets:precompile&& sv restart unicorn```

## Configuration:

![configuration screenshot](http://raw.github.com/JSey/more-privacy/configuration.png)

## How it looks:

When looking at a profile page without being logged in:

![profile page viewed from anon account](http://raw.github.com/JSey/more-privacy/anonymous.png)

When looking at a profile page after logging in:

![full profile page](http://raw.github.com/JSey/more-privacy/authenticated.png)

## ToDo
- add settings for both anonymous and authenticated users
- add support to suppress info on the user cards
- make the .hbs approach more stable than including the full user/users.hbs file
