function factorial(n) {
  // your solution here
  // first of all checking all the corner cases
  if (typeof n !== "number" || !Number.isFinite(n)) {
    return false;
  }
  if (n < 0 || !Number.isInteger(n)) {
    return false;
  }

  // base case
  if (n === 0 || n === 1) {
    return 1;
  }

  // recursive function call
  return n * factorial(n - 1);
}

module.exports = { factorial };
