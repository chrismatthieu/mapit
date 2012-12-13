
define(["app/sso", "app/server", "app/util"], function(sso, server, util) {
  return {
    query: function(opt) {
      var p;
      p = swear();
      p.fail(util.handleError);
      console.log("Querying API: " + opt.url, opt);
      server.ready(function() {
        return server.api(sso.getToken(), opt, function(err, nu) {
          if (err != null) {
            return p.abort(err);
          }
          if (nu.message != null) {
            return p.abort(nu.message);
          }
          return p.resolve(nu);
        });
      });
      return p;
    }
  };
});
