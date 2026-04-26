/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (arr) {
  //&Let us conquer this problem today
  //~Very Very similar to the Next Greater Element -I
  let ans = [];
  let stack = [];
  let n = arr.length;
  let last = arr[n - 1];
  ans.push(0);
  stack.push([last, n - 1]);
  for (let i = n - 2; i >= 0; i--) {
    while (stack.length !== 0) {
      if (arr[i] >= stack[stack.length - 1][0]) {
        stack.pop();
      } else {
        ans.push(stack[stack.length - 1][1] - i);
        break;
      }
    }
    if (stack.length === 0) {
      ans.push(0);
    }
    stack.push([arr[i], i]);
  }

  return ans.reverse();
};
