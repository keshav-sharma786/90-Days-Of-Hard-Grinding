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

// in this case module.exports will become an object with key x and it's value as 'multiply'
// module.exports.x = x;

/**
 *
 * Below playing with the module.exports !!!
 *
 */
// console.log(module.exports);

// module.exports.calculateMultiply = calculateMultiply;

// console.log(module.exports);

// module.exports = x;
// console.log(module.exports);

// module.exports = calculateMultiply;
// console.log(module.exports);
