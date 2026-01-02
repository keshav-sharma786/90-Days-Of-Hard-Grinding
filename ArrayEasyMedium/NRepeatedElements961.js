/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  let n = nums.length / 2;
  let hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hashTable[nums[i]]) {
      hashTable[nums[i]] = 1;
    } else {
      hashTable[nums[i]]++;
    }
  }
  // traversal on the hashTable object
  for (let key in hashTable) {
    if (hashTable[key] === n) {
      return Number(key);
    }
  }
};
