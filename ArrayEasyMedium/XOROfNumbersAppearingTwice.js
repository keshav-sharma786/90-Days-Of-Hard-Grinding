/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
  let hash = {};
  let arr = [];
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }

  for (let key in hash) {
    if (hash[key] === 2) {
      // take xor of it
      xor = xor ^ Number(key);
    }
  }

  return xor;
};
