/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;
  let ans = [];
  nums.map((el) => {
    sum = sum + el;
    ans.push(sum);
  });

  return ans;
};
