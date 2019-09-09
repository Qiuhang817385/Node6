var Hello = require('./hello2');
hello = new Hello();
hello.setName('邱航');
hello.sayHello();
// 如果要对外暴露属性或方法，就用 exports 就行，
// 要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。
// module.exports = Hello 代替了exports.world = function(){}