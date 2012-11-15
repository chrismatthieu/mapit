define ["app/server", "app/sso", "app/mixpanel"], (server, sso, mix) ->
  server.ready (services) ->
    console.log "Server connected:", services...

  sso.check (user) ->
    mix.load user

    dermis.route '/'