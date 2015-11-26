var proxy = require('redbird')({port: 80});
proxy.register("congtool.ncllabs.com", "http://127.0.0.1:1234");
//console.log("####### init proxy ######");