define(["templates/loading"], function(loadTempl) {
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
    },
    loading: function(ya, msg) {
      var currloading;
      if (ya == null) {
        ya = true;
      }
      if (msg == null) {
        msg = "Loading...";
      }
      currloading = $("body .loading");
      if (ya === true) {
        if (currloading.length > 0) {
          return;
        }
        $("body").append(loadTempl({
          message: msg
        }));
      } else if (ya === false) {
        currloading.removeClass("popin").addClass("popout");
        setTimeout((function() {
          return currloading.remove();
        }), 200);
      }
    }    
  };
  return util;
});