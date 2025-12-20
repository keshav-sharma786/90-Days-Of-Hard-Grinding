function isPowerOfTwo(n) {
  // checking the corner cases
  if (typeof n !== "number" || !Number.isFinite(n) || !Number.isInteger(n)) {
    return false;
  }

  // base case
  if (n === 1) return true;

  if (n < 1 || n % 2 !== 0) return false;

  return isPowerOfTwo(n / 2);
}

module.exports = { isPowerOfTwo };
