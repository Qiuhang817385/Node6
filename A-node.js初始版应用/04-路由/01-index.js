var server = require("./01-server");
var router = require("./01-router");
 
server.start(router.route);