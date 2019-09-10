let http = require('http');
let url = require('url');
let util = require('util');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain;charset = utf-8'})
    res.end(util.inspect(url.parse(req.url,true)))
    
    // url.parse(req.url,true)
    // 将任意对象转换 为字符串的方法
    res.end(util.inspect())
})