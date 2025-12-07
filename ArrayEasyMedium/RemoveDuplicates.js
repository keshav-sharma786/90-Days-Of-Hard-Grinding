/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      // we have found an unique element
      // nums[i] is the unique element
      x = x + 1;
      nums[x] = nums[i];
    }
  }

  return x + 1;
};
