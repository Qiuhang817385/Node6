var http = require('http');
var fs = require('fs');
var url = require('url');



http.createServer(function(request,response){
    console.log('----------');
    console.log(request.url);//      /index.html
    console.log(request.host);  //undefined
    console.log(request);//很多属性
    // headers: { host: 'localhost:8081', connection: 'close' },
    //          { host: 'localhost', port: '8081', path: '/index.html' }
    //                                              url: '/index.html',
    //rawHeaders: [ 'Host', 'localhost:8081', 'Connection', 'close' ],
    
    console.log('----------');
    //          http://127.0.0.1:8080/index.html?id=10
//request.url = /index.html?id=10
// pathName = /index.html
    var pathName  = url.parse(request.url).pathname;
    console.log("Request for " + pathName + " received.");
    console.log(pathName.substr(1));//      index.html
    console.log(pathName);///index.html
    fs.readFile(pathName.substr(1),function(err, data){
        if(err){
            console.log(err);
            response.writeHead(404,{'Content-Type': 'text/html'});
        }else{
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.write(data.toString());
            //这一步其实就可以模拟mock了
            //把上面改改    也不行,这是从浏览器访问的,访问的是data.json才能,
        }
        response.end();
    });
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/index.html');
