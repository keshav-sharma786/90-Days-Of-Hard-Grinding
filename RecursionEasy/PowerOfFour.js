function isPowerOfFour(n) {
  // your function implementation
  // checking the corner cases
  if (typeof n !== "number" || !Number.isFinite(n) || !Number.isInteger(n))
    return false;

  if (n === 1) return true;

  if (n < 1 || n % 4 !== 0) return false;

  return isPowerOfFour(n / 4);
}

module.exports = { isPowerOfFour };
