var Vein, app, config, express, http, join, rpc, server, sso;

express = require('express');

http = require('http');

Vein = require('vein');

join = require('path').join;

sso = require('./sso');

config = require('./config');

app = express();

app.use(express["static"](join(__dirname, '../public')));

server = http.createServer(app);

rpc = Vein.createServer(server);

rpc.addFolder(join(__dirname, './services'));

app.get('/sso', sso.handleRequest);

rpc.ns('sso').add('finishAuth', sso.finishAuth);

server.listen(config.port, function() {
  return console.log("Server running on " + config.port);
});