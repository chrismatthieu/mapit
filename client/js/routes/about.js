define(["templates/about", "templates/navbar"], function(desktopTempl, navTempl) {
  return {
    init: function() {
      return this.emit('ready');
    },
    show: function() {
      $("#navbar").html("");
      $("#main").html(desktopTempl());
    },
    hide: function() {}
  };
});