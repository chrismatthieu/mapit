define ["app/api", "templates/index"], (api, indexTempl) ->
  init: -> @emit 'ready'
  
  show: ->
    query = api.query 
      url: "https://api.mypsn.com/svc1/v2/contacts/Search?q=test"
      mode: "production"
    
    query.when (res) ->
      $("#main").html indexTempl people: res.items

  hide: ->