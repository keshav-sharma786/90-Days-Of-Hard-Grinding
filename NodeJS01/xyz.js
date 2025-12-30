debugger;
function x() {
  const a = 10;
  b();
  //   console.log(name);
  function b() {
    var name = "Keshav";
    console.log("b");
    console.log(a);
  }
}

x();
// require("./path")
// All the code of the module is wrapped inside a function (IIFE) when you call the require function.

// IIFE - Immediately Invoked Function Expression

const a = 100;
const b = 200;

console.log(a + b);

var sum = (function () {
  console.log("Namaste IIFE 🚀");
  const a = 2020;
  const b = 6;
  return a + b;
})();

(function () {
  console.log("hello world");
});

const functionExpression = function () {
  const a = 10;
  const b = 20;
  return 20;
};

functionExpression();

const k = "playing with the function expressions";
const playingWithFunctionExpressions = function () {
  console.log("playing with the function expressions");
};

// All the code of the module is copied inside IIFE
(function (module, require) {
  // All the code of the module runs inside here
  require("/path");
  function calculateMultiply(a, b) {
    const result = a * b;

    console.log(result);
  }

  console.log("multiplication module executed");

  var x = "multiply";
  // console.log(x);

  console.log(module.exports);

  module.exports = { calculateMultiply };

  console.log(module.exports);
})(module, require);
