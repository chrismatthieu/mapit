
define(function() {
  var util;
  util = {
    handleError: function(err) {
      if (typeof err === 'string') {
        err = new Error(err);
      } else if (err instanceof Error) {
        err = err;
      } else {
        err = new Error(JSON.stringify(err));
      }
      if (err.message.indexOf('token not found, expired or invalid') !== -1) {
        $.removeCookie('OAuthToken');
        return window.location.href = '/sso';
      } else {
        throw err;
      }
    }
  };
  return util;
});
