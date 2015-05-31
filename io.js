/**
 * Created by Administrator on 2015/5/31 0031.
 */
var fs = require('fs');
fs.readFile('./true.txt',function(err,data){
    console.log(data.toString());
});
console.log("1");
var content = fs.readFileSync('./true.txt');
console.log(content.toString());
console.log("2222");