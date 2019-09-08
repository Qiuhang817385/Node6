/* JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
    在处理像TCP流或文件流时，必须使用到二进制数据
     Buffer 类
     用来创建一个专门存放二进制数据的缓存区(数组)
     每当需要在 Node.js 中处理I/O操作中移动的数据时,使用 Buffer 库

     一个 Buffer 类似于一个整数数组=========可以说就是数组

     为什么用buffer,原生数组性能相对差
     buffer支持的数据类型更多,图片,mp3,视频,从服务端返回的数据类型
     二进制文件
     buffer就是为了弥补数组的不足
    
     元素是16进制的两位数

     不用引入模块,直接使用就可以
     Buffer.from('')

     计算机所有的二进制数据都会用16进制显示
     范围 00-ff

     buf.length     //占用内存的大小    字节    邱航        -----6  一个汉字三个字节
     str.length     //字符串的长度      长度    邱航        -----2  长度就是2

     


     但它对应于 V8 堆内存之外的一块原始内存
     Buffer.from() 接口去创建Buffer对象。

     通过使用显式的字符编码

*/
const buf = Buffer.from('qiuhang', 'ascii');
//Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(buf.toString('utf8'));

console.log(Buffer.from('zhuziyi', 'utf-8').toString());//zhuziyi
console.log(Buffer.from('zhuziyi', 'utf-8'));//<Buffer 7a 68 75 7a 69 79 69>

const allock = Buffer.alloc(256);   //256字节, 0.25kb
console.log(allock);

allock[13] = 88;
// allock[max] = 88; //当索引值超过的时候,自动截取,不会报错,buffer的大小确定永远不能修改
// allock[索引] = 556       后面数字最大值是255,超过的话,转成2进制自动截取后8位
// buffer实际上是对底层内存的直接操作,内存区域连续
//只要在控制台或者页面输出,一定是10进制
// allock[m] = 0xaa   log(allock[m])>>>>>170
//                      log(allock[m].toString(16))>>>>aa

// 什么叫敏感数据，因为内存是重复使用的，使用安全的方法调用buffer的时候会自动清空内存，
// 但是unsafe，会重复利用上次的
console.log(allock);

let len = allock.write('helloWorld');//写入流
console.log(len + '字节数');//10

//缓冲区合并
var buffer1 = Buffer.from(('合并内容1'));
var buffer2 = Buffer.from(('+合并内容2'));
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
// 缓冲区比较
// 拷贝缓冲区
/* 
var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');

将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 2);
console.log(buf1.toString());
abRUNOOBijkl
 */
//缓冲区裁剪    裁剪功能返回的实际是原始缓存区 buffer 或者一部分，操作的是与原始 buffer 同一块内存区域。
/* 
var buffer1 = Buffer.from('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
 */
//缓冲区长度    buf.length;




