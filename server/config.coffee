config = {}

config.testing =
  port: 8080

config.development =
  port: 8080
  sso:
    appkey:
      production: "ebe1210c8a99da9dd8793e1b3cc6ed14"
      staging: "e4784aab69993a4ec5ea0720bfe16e81"
    headers:
      "ping.uname": 'PSN2AgentlessDemoUser'
      "ping.pwd": 'jlAclUVoA6oAfrlUbOEMo-Troe*'
      "ping.instanceId": "PSN2AgentlessDemo"
    callback: "http://localhost:8080/"

config.production =
  port: 8080
  sso:
    appkey:
      production: "ebe1210c8a99da9dd8793e1b3cc6ed14"
      staging: "e4784aab69993a4ec5ea0720bfe16e81"
    headers:
      "ping.uname": 'BechtelLiveUser'
      "ping.pwd": 'T8Uk192834Ou2161UI7msf'
      "ping.instanceId": "BechtelLive"
    callback: "http://bechtel.jit.su/"

module.exports = config[process.env.NODE_ENV or "development"]