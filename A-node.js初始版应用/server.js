// 第一行请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量

var http = require('http');

// 接下来我们调用 http 模块提供的函数： createServer 。
// 这个函数会返回 一个对象，
// 这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。
http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

//  http.createServer() 方法创建服务器
//  listen 方法绑定 8888 端口
// 函数通过 request, response 参数来接收和响应数据

/* const server = http.createServer((req, res) => { 
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); res.end('Hello World\n');
  });
 server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); 
}); */