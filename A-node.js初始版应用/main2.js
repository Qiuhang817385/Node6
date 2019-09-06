/*
非阻塞代码实例
创建一个文件 input.txt ，内容如下：

菜鸟教程官网地址：www.runoob.com
创建 main.js 文件, 代码如下：

var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!"); 
 */
var fs = require('fs');
/* fs.readFile('input.txt',function(err,data){
    if(err)
    return console.log(err)
    console.log(data.toString());
}) */
fs.readFile('input.txt',function(err,data){
    if(err){
        console.log(err)
        return; 
    }
    console.log(data.toString());
})
console.log("程序执行结束!2"); 