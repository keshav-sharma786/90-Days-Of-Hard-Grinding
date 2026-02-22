

debugger;
var x = "Sum Module will run only once due to module caching";
console.log(x);

function sum() {
  debugger;
  let a = 10;
  let b = 20;
  let sum = a + b;
  console.log(sum);
}

function multiply() {
  debugger;
  let a = 5;
  let b = 6;
  let mul = a * b;
  console.log(mul);
}

sum();
multiply();
//?exporting the function sum and multiply with the help of module.exports

// module.exports = sum;
// exports = {
//   calculateSum: sum,
//   calculateMultiply: multiply,
// }; //! this will not work and will throw the error
module.exports = {
  calculateSum: sum,
  calculateMultiply: multiply,
};
