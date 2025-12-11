require("./xyz"); // one module into another
// requiring the sum.js file

// In CommonJS Modules, code runs in the non-strict mode
z = "In CommonJS code runs in the non-strict mode";

console.log(z);
// const {x, calculateSum} = require("./calculate/sum");
// console.log(require("./sum"));
// const { calculateMultiply } = require("./calculate/multiply");

// comment it out
const { calculateSum, calculateMultiply} = require("./calculate");

// requiring a json file

const data = require("./data.json");
console.log(data);

var name = "Keshav Sharma";

console.log(a);//undefined
var a = 10;

var b = 20;
calculateSum(a, b);
calculateMultiply(a, b);


console.log(name);
// console.log(a + b);

// global object in Node JS
// console.log(global);
console.log(this);// Empty object
//console.log(globalThis);// global object
console.log(global === globalThis);//true
//require("./xyz.js");

