const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

console.log(json);
// {"type":"Buffer","data":[1,2,3,4,5]}

// 把json转回数据
const copy = JSON.parse(json,(key,value) => {
    return value && value.type==='Buffer'? Buffer.from(value.data):value;
})
console.log(copy);
// <Buffer 01 02 03 04 05>


/* 
    JSON.parse()
    JSON 通常用于与服务端交换数据。

    在接收服务器数据时一般是字符串。

    我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。

*/