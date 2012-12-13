request = require 'request'
config = require './config'

module.exports = 
  handleRequest: (req, res) ->
    callback = "http://#{req.header('host')}/"
    startUrl = "https://sso.mypsn.com/sp/startSSO.ping?PartnerIdpId=PSN2-SAML2-Entity&TargetResource=#{callback}"

    console.log config.sso.headers, callback
    req.headers = config.sso.headers
    stream = req.pipe(request(startUrl)).pipe res
    stream.on 'error', (e) -> console.log "sso error #{e}"

  finishAuth: (cb, ref) ->
    return cb "Invalid REF token" unless typeof ref is 'string'

    url = "https://sso.mypsn.com/ext/ref/pickup?REF=#{ref}"
    opt = headers: config.sso.headers

    request url, opt, (err, res, body) ->
      return cb err if err?
      try
        out = JSON.parse body
      catch e
        #console.log e, body, url, opt
        return cb "Invalid REF token"
      cb null, out