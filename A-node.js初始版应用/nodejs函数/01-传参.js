function say(value){
    console.log(value);
}
function toSay(someFun,value){
    someFun(value);
}

function toSay2(someFun,value){
    someFun(value);
}

toSay(say,'hello');
toSay2(function(wo){console.log(wo)},'hello2');