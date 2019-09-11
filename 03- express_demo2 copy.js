var express = require('express');
var app = express();

app.get('/',function(req,res){
    console.log('主页的Get请求');
    res.send('helloGet');
    
})
app.post('/',function(req,res){
    
    console.log('主页的post请求');
    res.send('helloPOST');
})
app.get('/del_user',function(req,res){
    console.log('del_user的get请求');
    res.send('删除页面');
    
})
app.get('/list_user',function(req,res){
    console.log('del_user的get请求');
    res.send('用户列表');
    
})

app.get('/ab*cd',function(req,res){
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');

})

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})