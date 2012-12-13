
define(["app/server"], function(server) {
  var sso;
  sso = {
    getToken: function() {
      return $.cookie('OAuthToken');
    },
    getUser: function() {
      var out;
      return out = {
        email: $.cookie('EMailAddress'),
        bun: $.cookie('BechtelUserName'),
        domain: $.cookie('BechtelDomain'),
        employee: $.cookie('IsBechtelEmployee') === '1',
        title: $.cookie('Title'),
        status: $.cookie('EmploymentStatus'),
        name: {
          first: $.cookie('FirstName'),
          last: $.cookie('LastName')
        }
      };
    },
    check: function(cb) {
      var done, ref;
      done = function() {
        if ((typeof history !== "undefined" && history !== null ? history.pushState : void 0) != null) {
          history.pushState(null, null, location.origin + location.hash);
        }
        return cb(null, sso.getUser());
      };
      ref = $.parseQuerystring()['REF'];
      if (sso.getToken() != null) {
        return done();
      } else if (ref != null) {
        return sso.finishAuth(ref, done);
      } else {
        return window.location.href = '/sso';
      }
    },
    finishAuth: function(ref, cb) {
      var opt, p;
      opt = {
        expires: 7
      };
      p = swear();
      if (cb != null) {
        p.fail(cb);
      }
      p.when(function(meta) {
        var k, v;
        for (k in meta) {
          v = meta[k];
          $.cookie(k, v, opt);
        }
        if (cb != null) {
          return cb();
        }
      });
      server.ready(function() {
        return server.ns('sso').finishAuth(ref, p.wrap());
      });
      return p;
    }
  };
  return sso;
});
