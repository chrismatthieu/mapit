var __slice = [].slice;

define(["app/util", "app/server", "app/sso", "app/mixpanel"], function(util, server, sso, mix) {
  server.ready(function(services) {
    return console.log.apply(console, ["Server connected:"].concat(__slice.call(services)));
  });
  return sso.check(function(err, user) {
    if (err != null) {
      return util.handleError(err);
    }
    mix.load(user);
    dermis.route('/');
    dermis.route('/about');
    dermis.route('/settings');
    dermis.route('/index/:search');
  });

  dermis.on('preshow', function() {
    return util.loading(true);
  });
  dermis.on('show', function(mod) {
    return util.loading(false);
  });

});

    
