define ->
  util =
    handleError: (err) ->
      if typeof err is 'string'
        err = new Error err
      else if err instanceof Error
        err = err
      else
        err = new Error JSON.stringify err
      if err.message.indexOf('token not found, expired or invalid') isnt -1
        $.removeCookie 'OAuthToken'
        window.location.href = '/sso'
      else
        throw err
  return util