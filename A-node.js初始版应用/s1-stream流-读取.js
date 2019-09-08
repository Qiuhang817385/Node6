
/*
- 流式文件读取和写入
				- 流式读取和写入适用于一些比较大的文件
					fs.createWriteStream(path[, options])
					fs.createReadStream(path[, options])    
*/

var fs  = require('fs');
var rs = fs.createReadStream('input.txt');
var ws = fs.createWriteStream('aaaaaa.txt');

rs.once('open',function(){
    console.log('rs打开');
})

rs.once('close',function(){
    console.log('rs关闭');
    //当数据读取完毕,再关闭可写流
    ws.end();
})
ws.once('open',function(){
    console.log('ws打开');
})

ws.once('close',function(){
    console.log('ws关闭');
})
//如果要读取一个可读流当中的数据,必须要为可读流绑定一个data事件,data事件绑定完毕,会自动开始读取数据
//读取的话必须绑定on
rs.on('data',function(data){//没有err
    // console.log(data);

    //文件太小了,只读了一次
    // 大的话每次只读一部分
    ws.write(data);
    //当数据读取完毕,再关闭可写流
    //读取完之后,会自动关闭rs
})



