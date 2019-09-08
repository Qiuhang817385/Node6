/* 
Stream 有四种流类型
    Readable - 可读操作
    Writable - 可写操作
    Duplex - 可读可写操作
    Transform - 操作被写入数据，然后读出结果
所有的 Stream 对象都是 EventEmitter 的实例:事件有
    data - 当有数据可读时触发。
    end  - 没有更多的数据可读时触发。
    error - 在接收和写入过程中发生错误时触发。
    finish - 所有数据已被写入到底层系统时触发。
 */
// 之前写入方法的问题,需要提前准备好要写入的文件,把数据一次性准备好
//如果文件过大,那么导致占用内存过大,内存溢出,性能损耗过大,相当于把一缸水直接抱进另一个水缸
/*
- 流式文件读取和写入
				- 流式读取和写入适用于一些比较大的文件
					fs.createWriteStream(path[, options])
					fs.createReadStream(path[, options])    
*/

var fs  = require('fs');
// var ws = fs.createWriteStream('input.txt',{flags:'a'});
var ws = fs.createWriteStream('input.txt');

// 通过监听流的open和close来监听流的打开和关闭
// 所有的 Stream 对象都是 EventEmitter 的实例:事件有
ws.once('open',function(){
    console.log('打开');
    // 只会触发一次 ,但是on绑定完之后函数依然还在,使用once
})

//通过ws向文件里面写
ws.write('sasasas');
ws.write('sasasas');
ws.write('sasasas');

/* 
on(事件字符串,回调函数)
可以为对象绑定一个事件
one(事件字符串,回调函数)
可以为对象绑定一个  一次性  的事件
*/
//水给关闭了
// ws.close();相当于把,要注入的那一方,  水管给拔掉了    会导致写不完全
// 现在想把出水管处的水管拔掉

ws.end();

ws.once('close',function(){
    console.log('关闭');
    // 只会触发一次 ,但是on绑定完之后函数依然还在,使用once
})

