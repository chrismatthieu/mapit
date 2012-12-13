request = require 'request'
config = require '../config'

module.exports = (cb, auth, opt={}) ->
  return cb "Missing auth token" unless typeof auth is "string"

  ropt =
    url: opt.url
    json: opt.body
    method: opt.method
    headers:
      "Authorization": auth
      "X-Mypsn-AppKey": config.sso.appkey[opt.mode or "production"]
      "Accept": "application/json"

  request ropt, (err, res, body) ->
    return cb err if err?
    return cb "No response" unless body?
    if typeof body is 'object'
      return cb null, body
    else
      return cb body if body.indexOf("<faultstring>") isnt -1 # apigee errors
      try
        out = JSON.parse body
      catch e
        return cb "Error parsing body: #{body}"
        
      # handle json errors
      return cb "#{out.message} (#{res.statusCode})" if res.statusCode isnt 200 and out?.message?
      cb null, out