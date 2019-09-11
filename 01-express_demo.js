//express_demo.js 文件
var express = require('express');
var app = express();
 
app.get('/',function(req,res){
    res.send('hello');
})
var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(host);
    console.log(port);
    
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
    console.log(`应用实例，访问地址为 http://${host}:${port}`);
})
// req.app：当callback为外部文件时，用req.app访问express的实例