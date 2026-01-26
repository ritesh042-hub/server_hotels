/*var pri = require('./preetam.js');

var age = pri.age;
var result = pri.addsum(age, age + 18);

console.log(age);
console.log(result);*/

var _=require('lodash')
var arr=['a','a','a',1,1,1,2,3,4,4,4,'c','b','d','c']
var res=_.uniq(arr)
console.log(res)