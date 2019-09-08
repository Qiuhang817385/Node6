var http = require('http');

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello\n');
}).listen(8888);

/* 
 server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); 
})
 */
/* 接下来我们调用 http 模块提供的函数： createServer 。
这个函数会返回 一个对象，这个对象有一个叫做 listen 的方法，
这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。
 */
console.log(' http://127.0.0.1:8888/');

