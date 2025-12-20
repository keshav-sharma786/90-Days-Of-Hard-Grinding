function isPowerOfThree(n) {
  // checking the corner cases
  if (typeof n !== "number" || !Number.isFinite(n) || !Number.isInteger(n)) {
    return false;
  }

  if (n === 1) return true;

  if (n < 1 || n % 3 !== 0) return false;

  return isPowerOfThree(n / 3);
}
module.exports = { isPowerOfThree };
