function sumN(n) {
  // validating the input
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    return false;
  }
  // base
  if (n === 0) {
    return 0;
  }
  return n + sumN(n - 1);
}

module.exports = { sumN };
