/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      // increase the count
      count++;
    } else {
      if (count > maxCount) {
        maxCount = count;
      }
      count = 0;
    }
    // when the loop ends
    if (i >= nums.length - 1 && count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
};
