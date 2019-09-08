// 同步+异步
/* 
- 简单文件读取和写入            封装了底层的同步和异步函数

				fs.writeFile(file, data[, options], callback)
				fs.writeFileSync(file, data[, options]) 不需要传递回调函数
                    file:操作文件的路径
                    data:要写入的数据
                    options:选项,可以对写入进行一些设置
                    callback:写入完成以后执行的函数
                options一般都是一个对象,查看文档
 */
                
var fs = require('fs');
/* fs.writeFile('input.txt','写入的新内容222',function(err){
    if(!err){
        console.log('写入成功');
        //每次都会先清空
    }
}) */
fs.writeFile('input.txt','写入的新内容222',{flag:'a'},function(err){
    if(!err){
        console.log('写入成功');
        //每次都会先清空
    }
})

// 追加内容     flag:w (默认) 截断:就是清空再写   a选项改成a

//写其他路径的文件
//可以是绝对路径,记得加转义字符C:\\user\\~~
//可以是绝对路径,记得加转义字符C:/user/~~           效果一样