var proxy = require('redbird')({port: 80});
proxy.register("congtool.ncllabs.com", "http://127.0.0.1:8001");
//console.log("####### init proxy ######");