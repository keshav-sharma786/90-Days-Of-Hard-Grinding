// Modules protects their variables and functions from leaking.

console.log("Sum module executed");

var x = "Hello World";

function calculateSum(a, b) {
  const sum = a + b;

  console.log(sum);
}

module.exports = {
  x,
  calculateSum,
};
