/*
* js 特殊对象叫全局对象 global
* 它及其所有的属性可以在任何地方访问
* console  process
* */

//向标准输出流输出
console.log('this is log');
console.error('this is error');
//重定向
  //把普通日志和错误日志都输出到标准输出，
//node console.js 1>true.text 2>&1;
//node console.js 1>>true.text 2>&1;

//格式化输出
console.log('%s','rain');//转成字符串输出
console.log('%d','rain');//转成数字
//console.log('%j','{}');//转成json
//console.dir({});
//console.trace('tr');
JSON.stringify();
JSON.parse();
console.log('user:%s 今年 %d岁','rain',5);

console.time('time');
//code
console.timeEnd('time');