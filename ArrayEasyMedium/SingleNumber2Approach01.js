/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // Approach 1
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] === 1) {
      return nums[i];
    }
  }
};
