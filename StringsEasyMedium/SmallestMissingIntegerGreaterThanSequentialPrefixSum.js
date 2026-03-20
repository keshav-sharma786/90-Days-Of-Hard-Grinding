/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  // very much similar problem to the longest common
  // prefix problem of the strings
  // I will solve this problem later on, let us now

  // step1 => Firstly find the longest common prefix
  // in nums

  if (nums.length === 1) return nums[0] + 1;

  let sum = nums[0];
  let x = 1;
  const hashSet = new Set();

  while (x < nums.length) {
    if (nums[x] === nums[x - 1] + 1) {
      sum = sum + nums[x];
    } else {
      break;
    }
    ++x;
  }

  console.log(sum); // sum is coming perfectly fine.

  let sumCopy = sum;

  //Now I basically have to find the smallest missing
  //integer greater than or equal to Sequential Prefix Sum

  // Step 2 => sort the array
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= sum) {
      hashSet.add(nums[i]);
    }
  }

  let setLength = hashSet.size;

  if (!hashSet.has(sum) || setLength === 0) {
    return sum;
  } else {
    // sum is there
    while (setLength !== 0) {
      if (hashSet.has(sum + 1)) {
        sum = sum + 1;
        --setLength;
      } else {
        return sum + 1;
      }
    }
  }
};
