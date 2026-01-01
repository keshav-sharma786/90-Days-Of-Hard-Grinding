/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let n = digits.length;
  let lastIdx = n - 1;
  if (digits[lastIdx] < 9) {
    digits[lastIdx]++;
  } else if (digits[lastIdx] === 9) {
    while (digits[lastIdx] === 9) {
      digits[lastIdx] = 0;
      lastIdx--;
    }

    if (lastIdx === -1) {
      return [1, ...digits];
    }
    digits[lastIdx]++;
  }
  return digits;
};
