
define(["app/api", "templates/index"], function(api, indexTempl) {
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
        return $("#main").html(indexTempl({
          people: res.items
        }));
      });
    },
    hide: function() {}
  };
});
