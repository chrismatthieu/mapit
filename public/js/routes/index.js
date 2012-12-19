define(["app/api", "templates/indexdesktop", "templates/indexmobile", "templates/navbar"], function(api, desktopTempl, mobileTempl, navTempl) {
  return {
    init: function() {
      return this.emit('ready');
    },
    show: function() {
      var query;
      query = api.query({
        url: "https://api.mypsn.com/svc1/v2/contacts/Search?q=test",
        mode: "production"
      });
      return query.when(function(res) {

        enquire.register("screen and (max-width: 480px)", { match : function() {
          $("#main").html(mobileTempl({
            people: res.items
          }))
        },unmatch : function() {}
        
        }).listen().fire();

        enquire.register("screen and (min-width: 768px)", { match : function() {
          $("#navbar").html(navTempl({}))
          $("#main").html(desktopTempl({
            people: res.items
          }))
        },unmatch : function() {}

        }).listen().fire();

      });
    },
    hide: function() {}
  };
});