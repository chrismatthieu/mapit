express = require 'express'
http = require 'http'
Vein = require 'vein'
{join} = require 'path'
sso = require './sso'
config = require './config'

app = express()
app.use express.static  join __dirname, '../public'

server = http.createServer app

# RPC
rpc = Vein.createServer server
rpc.addFolder join __dirname, './services'

# SSO
app.get '/sso', sso.handleRequest
rpc.ns('sso').add 'finishAuth', sso.finishAuth

server.listen config.port, ->
  console.log "Server running on #{config.port}"