/**
 * Created by Administrator on 2015/5/31 0031.
 */
/*
* process
* 全局对象
* 全局变量的宿主
* 1全局变量的属性
* 2隐式定义
* */
global.name ='rain';
console.log(name);
/*
* process 就是一个全局变量，global对象的属性
* 当前的进程
* */
//标准输出流
process.stdout.write('hello');
process.stdin.on('data',function(data){
    process.stdout.write(data);
});