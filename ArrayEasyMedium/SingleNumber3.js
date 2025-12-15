/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let hash = {};
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  
  // using the for in loop for traversing an object
  for (let key in hash) {
    if (hash[key] === 1) {
      arr.push(Number(key));
    }
  }

  return arr;
};
