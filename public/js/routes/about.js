define(["templates/aboutdesktop", "templates/aboutmobile", "templates/navbar"], function(desktopTempl, mobileTempl, navTempl) {
  return {
    init: function() {
      return this.emit('ready');
    },
    show: function() {
    	console.log('here');
        enquire.register("screen and (max-width: 480px)", { match : function() {
	    	console.log('here1');
          $("#main").html(mobileTempl({
          }))
        },unmatch : function() {}
        
        }).listen().fire();

        enquire.register("screen and (min-width: 768px)", { match : function() {
	    	console.log('here2');
          $("#navbar").html(navTempl({}))
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