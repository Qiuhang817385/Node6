var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (req,res){

    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true))) //把json字符串转换成js对象
}).listen(3000);
console.log('http://localhost:3000');

