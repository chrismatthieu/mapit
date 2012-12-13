define ["app/server", "app/sso", "app/mixpanel"], (server, sso, mix) ->
  server.ready (services) ->
    console.log "Server connected:", services...

  sso.check (err, user) ->
    return util.handleError err if err?
    mix.load user

    dermis.route '/'

    