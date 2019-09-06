var fs = require("fs");
var data =fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束!");

/* 
阻塞代码实例
创建一个文件 input.txt ，内容如下：

菜鸟教程官网地址：www.runoob.com
创建 main.js 文件, 代码如下：

var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");
以上代码执行结果如下：

$ node main.js
菜鸟教程官网地址：www.runoob.com

程序执行结束! */