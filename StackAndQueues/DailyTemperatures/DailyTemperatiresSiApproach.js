/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (arr) {
  //&Let us conquer this problem today
  //~Very Very similar to the Next Greater    Element -I
  //?Si Approach
  let stack = [];
  let n = arr.length;
  let ans = Array(n).fill(0); //[0, 0, 0 _ _]

  stack.push(n - 1);
  ans[n - 1] = 0;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length !== 0) {
      let top = stack[stack.length - 1];
      if (arr[i] >= arr[top]) {
        stack.pop();
      } else {
        ans[i] = top - i;
        break;
      }
    }
    if (stack.length === 0) {
      ans[i] = 0;
    }
    stack.push(i);
  }

  return ans;
};
