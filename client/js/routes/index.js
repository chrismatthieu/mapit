define(["app/api", "templates/index", "templates/mobile"], function(api, indexTempl, mobileTempl) {
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

        console.log('here');

        // var mql = window.matchMedia("(min-width: 480px)");
        // mql.addListener(handleMediaChange);
        // handleMediaChange(mql);

        // var handleMediaChange = function (mediaQueryList) {
        //     if (mediaQueryList.matches) {
        //       // The browser window is at least 480px wide
        //       console.log('here3');
        //     }
        //     else {
        //       // The browser window is less than 480px wide
        //       console.log('here4');
        //     }
        //   }

        enquire.register("screen and (max-width: 480px)", { match : function() {
          // put Chris' code here to convert your menu to a dropdown
          console.log('here1');
          $("#main").html(mobileTempl({
            people: res.items
          }))
        },unmatch : function() {}
        
        }).listen().fire();

        enquire.register("screen and (min-width: 768px)", { match : function() {
          // put Chris' code here to convert your menu to a dropdown
          console.log('here2');
          $("#main").html(indexTempl({
            people: res.items
          }))
        },unmatch : function() {}

        }).listen().fire();

        // mql('all and (max-width: 480px)', function(){
        //   console.log('here1');
        //   return $("#main").html(mobileTempl({
        //     people: res.items
        //   }));
        // });

        // var size = mql('all and (min-width: 768px)');
        // console.log(size.matches);
        // if (size.matches){
        //   console.log(size.matches);
        //   console.log('here2');
        //   $("#main").html(indexTempl({
        //     people: res.items
        //   }));
        // };

        // return $("#main").html(indexTempl({
        //   people: res.items
        // }));
      });
    },
    hide: function() {}
  };
});