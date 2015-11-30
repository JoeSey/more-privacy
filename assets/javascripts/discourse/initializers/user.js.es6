import User from 'discourse/models/user';

export default
{
    name: 'MorePrivacy',
    initialize(container)
    {
      const siteSettings = container.lookup('site-settings:main');
      User.reopen({
        //loggedin = !this.current()
        show_last_seen_at: function() {
          return siteSettings.more_privacy_enabled && 
            (siteSettings.more_privacy_show_last_seen || User.current())
        }.property(),
        show_last_posted_at: function() {
          return siteSettings.more_privacy_enabled && 
            (siteSettings.more_privacy_show_last_posted || User.current())
        }.property(),
        show_created_at: function() {
          return siteSettings.more_privacy_enabled && 
            (siteSettings.more_privacy_show_created_at || User.current())
        }.property()
      });
    }
};

