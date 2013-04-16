define(["app/api", "templates/index", "templates/navbar"], function(api, desktopTempl, navTempl) {
  return {
    init: function() {
      this.emit('ready');
    },
    show: function(args) {
          $("#navbar").html("");
          $("#main").html(desktopTempl())
    },
    hide: function() {}
  };
});