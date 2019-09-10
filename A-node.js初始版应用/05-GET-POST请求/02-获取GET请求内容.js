var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (req,res){

    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true))) //把json字符串转换成js对象
    /* 
         将任意对象转换 为字符串的方法
        util.inspect(object,[showHidden],[depth],[colors]) 
        showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
        depth 表示最大递归的层数 默认2层
    */
}).listen(3000);
console.log('http://localhost:3000');

