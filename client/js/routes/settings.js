define(["templates/settingsdesktop", "templates/settingsmobile", "templates/navbar"], function(desktopTempl, mobileTempl, navTempl) {
  return {
    init: function() {
      return this.emit('ready');
    },
    show: function() {
      console.log('here');
        enquire.register("screen and (max-width: 480px)", { match : function() {
          $("#main").html(mobileTempl({
          }))
        },unmatch : function() {}
        
        }).listen().fire();

        enquire.register("screen and (min-width: 768px)", { match : function() {
          $("#navbar").html(navTempl({ emailaddress: $.cookie('EMailAddress')}))
          $("#main").html(desktopTempl({
          }))

          $('.active').removeClass('active');
        $('#about').addClass('active');

        },unmatch : function() {}

        }).listen().fire();

    },
    hide: function() {}
  };
});