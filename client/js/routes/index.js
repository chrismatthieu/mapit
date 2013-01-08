define(["app/api", "templates/indexdesktop", "templates/indexmobile", "templates/navbar"], function(api, desktopTempl, mobileTempl, navTempl) {
  return {
    init: function() {
      this.emit('ready');
    },
    show: function(args) {
      if(args.search){
        var q=args.search;
      } else {
        var q='test';
      }
      var query = api.query({
        url: "https://api.mypsn.com/svc1/v2/contacts/Search?q=" + q,
        mode: "production"
      });
      query.when(function(res) {

        enquire.register("screen and (max-width: 480px)", { match : function() {
          var v = $("#usersearch").val() || args.search;
          $("#navbar").html("");
          $("#main").html(mobileTempl({
            people: res.items,
            search: v
          }))
        },unmatch : function() {}
        
        }).listen().fire();

        enquire.register("screen and (min-width: 768px)", { match : function() {
          var v = $("#usersearch").val() || args.search;
          $("#navbar").html(navTempl({
            emailaddress: $.cookie('EMailAddress'),
            search: v
          }));
          $("#main").html(desktopTempl({
            people: res.items,
            search: v
          }))
  
          $('.active').removeClass('active');
          $('#home').addClass('active');

        },unmatch : function() {}

        }).listen().fire();

      });
    },
    hide: function() {}
  };
});