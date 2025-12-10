require("./xyz"); // one module into another
// requiring the sum.js file
const {x, calculateSum} = require("./sum");



var name = "Keshav Sharma";

console.log(a);//undefined
var a = 10;

var b = 20;
calculateSum(a, b);
console.log(x);

console.log(name);
// console.log(a + b);

// global object in Node JS
// console.log(global);
console.log(this);// Empty object
//console.log(globalThis);// global object
console.log(global === globalThis);//true
//require("./xyz.js");
