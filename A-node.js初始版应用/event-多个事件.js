var EventEmitter = require('events').EventEmitter;
var event2 = new EventEmitter();
event2.on('eventDemo',function(arg1,arg2){
    console.log('事件1',arg1,arg2);
});
event2.on('eventDemo',function(arg1,arg2){
    console.log('事件2',arg1,arg2);
});
event2.emit('eventDemo','111','222');