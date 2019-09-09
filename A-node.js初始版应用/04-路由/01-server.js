// 为路由提供--请求的 URL 和其他需要的 GET 及 POST 参数
// 随后路由需要根据这些数据来执行相应的代码 
// 需要查看 HTTP 请求
// 从中提取出请求的 URL 以及 GET/POST 参数----HTTP服务器的功能
// 需要的所有数据都会包含在 request 对象中
var http = require('http');
var url = require('url');

function start(route){
    function onRequest(req,res){
        var pathname = url.parse(req.url).pathname;

        route(pathname);

        
        console.log('Request for'+pathname+'received.');
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write('hello world');
        res.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('server has start');
    
}
exports.start = start;