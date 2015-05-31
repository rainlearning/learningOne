/*
*
* */
var  util =  require('util');


function Parent(){
    this.name = 'far';
    this.age = 6;
    this.say = function(){
        console.log('hellow'+this.name);
    };
};
Parent.prototype.showName = function(){
    console.log(this.name);
};
function Child(){
    this.name = 'child';
}
util.inherits(Child,Parent);
var p =  new Child();
p.showName();



function Person(){
    this.name = 'rain';
    this.toString = function(){
        return this.name;
    }
}
var p =new Person();
console.log(util.inspect(p,true,4,true));