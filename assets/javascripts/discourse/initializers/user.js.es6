export default
{
    name: 'MorePrivacy',
    initialize()
    {
        Discourse.User.reopen({
          //loggedin = !this.current()
          show_last_seen_at: function() {
            return Discourse.SiteSettings.more_privacy_enabled && 
              (Discourse.SiteSettings.more_privacy_show_last_seen || Discourse.User.current())
          }.property(),
          show_last_posted_at: function() {
            return Discourse.SiteSettings.more_privacy_enabled && 
              (Discourse.SiteSettings.more_privacy_show_last_posted || Discourse.User.current())
          }.property(),
          show_created_at: function() {
            return Discourse.SiteSettings.more_privacy_enabled && 
              (Discourse.SiteSettings.more_privacy_show_created_at || Discourse.User.current())
          }.property()
         });
  }
};

