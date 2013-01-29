define(["templates/aboutdesktop", "templates/aboutmobile", "templates/navbar"], function(desktopTempl, mobileTempl, navTempl) {
  return {
    init: function() {
      return this.emit('ready');
    },
    show: function() {
        enquire.register("screen and (max-width: 480px)", { match : function() {
          $("#main").html(mobileTempl({
          }))
        },unmatch : function() {}
        
        }).listen().fire();

        enquire.register("screen and (min-width: 768px)", { match : function() {
          var v = $("#usersearch").val();
          $("#navbar").html(navTempl({ emailaddress: $.cookie('EMailAddress'), search: v}))
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