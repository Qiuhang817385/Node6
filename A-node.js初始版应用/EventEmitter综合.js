var EventEmitter = require('events').EventEmitter;
var eventEmitter = new EventEmitter();
//监听器1
var listener1 = function listener1(){
    console.log('监听器lis1执行');
}
//监听器2
var listener2 = function listener2(){
    console.log('监听器lis2执行');
}
//一个是add
// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection',listener1);

//一个是on
// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);


var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners+ " 个监听器监听连接事件。");

// 处理 connection 事件 
eventEmitter.emit('connection');



// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");
// 触发连接事件
eventEmitter.emit('connection');


// 需要重新创建监听器连接事件计算
 eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners+ " 个监听器监听连接事件。");

// 继承 EventEmitter
// 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它

// 包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
// 具有某个实体功能的对象实现事件符合语义， 
// 事件的监听和发生应该是一个对象的方法。
// JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。