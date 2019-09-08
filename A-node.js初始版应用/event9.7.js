var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
var fs = require('fs');

event.on('dataDemo',function(arg3){
    console.log('dataDemo+数据接收成功');
    var data = fs.readFileSync('input.txt');
    console.log(data.toString()+' ========>'+arg3);
    
})
//顺序不能错误
event.on('connDemo',function(arg1,arg2){
    //事件处理函数
    console.log('connDemo+连接成功 '+arg1+' '+arg2);
    event.emit('dataDemo','数据参数1');
});


event.emit('connDemo','连接参数1','连接参数2');

console.log('执行完毕');

