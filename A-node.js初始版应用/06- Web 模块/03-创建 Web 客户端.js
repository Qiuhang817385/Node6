var http = require('http');
 
// 可以理解成ajax
//数据是假数据,没有通过java后台操作数据库处理


// 用于请求的选项
var options = {
   host: 'localhost',
   port: '8081',
   path: '/index.html'  
};
 
// 处理响应的回调函数
var callback = function(response){
   // 不断更新数据
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // 数据接收完成
      console.log(body);
   });
}
// 向服务端发送请求

console.log(options);
//自动拼接起来的{ host: 'localhost', port: '8081', path: '/index.html' }   写到头文件里面

var req = http.request(options, callback);
req.end();