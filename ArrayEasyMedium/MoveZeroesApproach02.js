var moveZeroes = function (nums) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // In the approach02, there is basically no need to perform the swapping!!
      nums[x] = nums[i];
      x++;
    }
  }

  // Fill all the remaining elements to zero
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
};
