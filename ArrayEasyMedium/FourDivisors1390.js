/**
 * @param {number[]} nums
 * @return {number}
 */

var calculateDivisors = function (num) {
  let count = 2;
  let sum = 1 + num;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    // if num is a perfect square ???

    if (i * i == num) {
      sum += i;
      count += 1;
    } else if (num % i === 0) {
      sum += i + num / i;
      count += 2;
    }
  }
  return [count, sum];
};
var sumFourDivisors = function (nums) {
  // let sum = 1 + nums;
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let [count, sum] = calculateDivisors(nums[i]);
    if (count === 4) {
      totalSum = totalSum + sum;
    }
  }
  return totalSum;
};
