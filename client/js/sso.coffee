define ["app/server"], (server) ->
  sso =
    getToken: -> $.cookie 'OAuthToken'
    getUser: ->
      out =
        email: $.cookie 'EMailAddress'
        bun: $.cookie 'BechtelUserName'
        domain: $.cookie 'BechtelDomain'
        employee: $.cookie('IsBechtelEmployee') is '1'
        title: $.cookie 'Title'
        status: $.cookie 'EmploymentStatus'
        name:
          first: $.cookie 'FirstName'
          last: $.cookie 'LastName'

    check: (cb) ->
      done = ->
        history.pushState null,null,location.origin+location.hash if history?.pushState?
        cb null, sso.getUser()

      ref = $.parseQuerystring()['REF']
      if sso.getToken()? # SSO done
        done()
      else if ref? # SSO started - finish
        sso.finishAuth ref, done
      else # SSO null - needs auth
        window.location.href = '/sso'

    finishAuth: (ref, cb) ->
      opt = expires: 7
      p = swear()
      p.fail cb if cb?
      p.when (meta) ->
        $.cookie k,v, opt for k,v of meta
        cb() if cb?

      server.ready -> server.ns('sso').finishAuth ref, p.wrap()
      return p

  return sso