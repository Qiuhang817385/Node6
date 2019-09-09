// util.inspect(object,[showHidden],[depth],[colors]) 
// showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
// depth 表示最大递归的层数 默认2层

// 将任意对象转换 为字符串的方法
// 至少接受一个参数 object，即要转换的对象
// util.inspect 并不会简单地直接把对象转换为字符串，即使该对象定义了 toString 方法
// toString方法也不会调用
var util = require('util'); 
function Person(){
    this.name = 'qiuhang';
    this.toString = function(){
        return this.name;
    }
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));
