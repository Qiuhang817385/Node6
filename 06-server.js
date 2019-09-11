var express = require('express');
var app = express();

app.use('/public',express.static('public'));
app.get('/',function(req,res){
    res.send('hello');
})
app.get('/index.html',function(req,res){
    console.log(__dirname+'/'+'index.html');
    
    res.sendFile(__dirname+'/'+'index.html');
})

app.get('/process_get',function(req,res){
    //输出json格式
    var response = {
        'first_name':req.query.first_name,//????    从前台form表单请求的值
        'last_name':req.query.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response));//从服务端返回页面的值
})
var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

//请求和响应自己自动完成了