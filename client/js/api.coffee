define ["app/sso", "app/server", "app/util"], (sso, server, util) ->
  query: (opt) ->
    # url, json, method
    p = swear()
    p.fail util.handleError
    console.log "Querying API: #{opt.url}", opt
    server.ready ->
      server.api sso.getToken(), opt, (err, nu) ->
        return p.abort err if err?
        return p.abort nu.message if nu.message?
        p.resolve nu
    return p 