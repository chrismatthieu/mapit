request = require 'request'
config = require './config'

module.exports = (req, res) ->
  startUrl = "https://sso.mypsn.com/sp/startSSO.ping?PartnerIdpId=PSN2-SAML2-Entity&TargetResource=#{config.sso.callback}"

  req.headers = config.sso.headers
  stream = req.pipe(request(startUrl)).pipe res
  stream.on 'error', (e) -> console.log "sso error #{e}"