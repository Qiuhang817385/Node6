//event.js 文件
// 事件相当于一个主题(Subject)
// 所有注册到这个事件上的处理函数相当于观察者(Observer)
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
// event 对象注册了事件 eventDemo 的一个监听器
event.on('eventDemo',function(){
    console.log('事件触发啦');
})

// 通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event
// 此时会调用some_event 的监听器。
setTimeout(function(){
    event.emit('eventDemo');
},2000);

// ('listener', 'Function', listener)
/* event.on('eventDemo2');
function eventDemo2(){
    console.log('触发事件2')
}
event.emit('eventDemo2'); */
// 上面这种写法是不对的