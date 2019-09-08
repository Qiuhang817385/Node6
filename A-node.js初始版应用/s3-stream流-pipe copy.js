
var fs  = require('fs');
var rs = fs.createReadStream('input.txt');
var ws = fs.createWriteStream('aaaadsdadadsaaa.txt');


rs.pipe(ws);
// 这些可能用不上,这是服务器底层的
// 请求和响应其实就是流


