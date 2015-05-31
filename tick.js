/*
* 事件和事件环
* IO密集型 不适合计算密集型
* 任何时间只有一个进程
* */

exec();
function exec(){
    process.nextTick(function(){
        save();
    });
    console.log('1000');
    var i=0;
    while(i++ < 10){
        console.log('2快');
    }
}
function save(){
    for(var i =0;i<10;i++){
        console.log(i);
    }
}

setImmediate(function(){
    console.log('e');
});