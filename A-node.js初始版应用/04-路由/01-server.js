// 为路由提供--请求的 URL 和其他需要的 GET 及 POST 参数
// 随后路由需要根据这些数据来执行相应的代码 
// 需要查看 HTTP 请求
// 从中提取出请求的 URL 以及 GET/POST 参数----HTTP服务器的功能
// 需要的所有数据都会包含在 request 对象中

/* 
    http://localhost:8888/start?foo=bar&hello=world
    url.parse(string).pathname :                 /start
    url.parse(string).query                      foo=bar&hello=world
    querystring.parse(queryString)["foo"]            bar
    querystring.parse(queryString)["hello"]               world
*/

var http = require('http');
var url  = require('url');

function start(route){
    function onRequest(req,res){
        var pathname = url.parse(req.url).pathname;//   /start
        // http://127.0.0.1:8888/start              直接在浏览器输入/start这个就可以了

        route(pathname);
        var pathname2 = url.parse(req.url).query;
        console.log(pathname2);
        
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write('hello world');
        console.log('Request for '+pathname+' received.');
        // /
        // Request for /start received.
        res.end();

    
    }
    http.createServer(onRequest).listen(8888);
    console.log('server has start');
    
}
exports.start = start;

/*
http://127.0.0.1:8888/start?foo=bar&hello=world
About to route a request for /start
foo=bar&hello=world
Request for /start received. */

// 中文名称是网站头像       favicon.ico
/* 
About to route a request for /favicon.ico
null
Request for /favicon.ico received.
 */
