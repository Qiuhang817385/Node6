// 引入events模块
var events = require('events');
// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
 });
 

//创建事件处理程序
var connectHandler = function connected(){
    console.log('连接成功');

    //触发data_received事件
    eventEmitter.emit('data_received')
}


// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

 // 触发 connection 事件 
eventEmitter.emit('connection');
console.log("程序执行完毕。");


// on   绑定事件
// emit 触发事件