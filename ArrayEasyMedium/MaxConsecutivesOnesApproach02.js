var findMaxConsecutiveOnes = function (nums) {
  let currCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCount++;
    } else {
      // updating maxCount
      maxCount = Math.max(currCount, maxCount);
      // resetting the currentCount to zero
      currCount = 0;
    }
  }
  // When the loop ends
  return Math.max(maxCount, currCount);
};
