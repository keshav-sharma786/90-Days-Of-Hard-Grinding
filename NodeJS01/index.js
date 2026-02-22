//~ 19th feb, 2026 ==> working on 2 files index.js and sum.js
//~ requiring sum.js file
console.log("debugging Node JS Application");
debugger;
const { calculateSum, calculateMultiply } = require("./sum");
console.log(require.cache);//~Shows all the cached modules

console.log("Namaste Require Function");
calculateSum();
calculateMultiply();
//~Let me try to access the variables and functions of sum file/module
//?acquiring the calculateSum from sum file/module

// const calculateSum = require("./sum");
// calculateSum();
