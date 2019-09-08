//简单文件读取
/* 

				fs.readFile(path[, options], callback)
                fs.readFileSync(path[, options])
 */
var fs = require('fs')

// var path = '图片路径';
// 实现图片的复制
/* fs.readFile('path',(err,data)=>{
    if(!err){
       fs.writeFile('hello.jpg,data,function (err, data){
            if(!err){
        // 数据可能是mp3,jpg,这个时候直接用data
        console.log(data.toString());
    }
       })
    }
}); */



fs.readFile('input.txt', (err, data) => {
    if (!err) {
        // 数据可能是mp3,jpg,这个时候直接用data
        console.log(data.toString());
    }
});