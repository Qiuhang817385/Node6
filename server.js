 //加载一个http模块，目的是创建使用这个对象创建一个Web服务器
 const http = require('http'); 
 const hostname = '127.0.0.1'; 
 const port = 3000;
 const server = http.createServer((req, res) => { 
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Hello World\n');
  });
 server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); 
});
/* 
    node.js环境顶级对象是 global
     浏览器环境顶级对象是Ojbect
     引入模块使用require(“模块名”)
    每个模块为一个js文件
     每个模块中定义的全局变量或函数的作用范围被限定在这个模块内

*/