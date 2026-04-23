/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (a1, arr) {
  //&Let us conquer this problem today
  //&Si Way of Writing code
  let ngeMap = {};
  let stack = [];
  let n = arr.length;

  stack.push(arr[n - 1]);
  ngeMap[arr[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      if (stack[stack.length - 1] < arr[i]) {
        stack.pop();
      } else {
        ngeMap[arr[i]] = stack[stack.length - 1];

        break;
      }
    }
    if (stack.length === 0) {
      ngeMap[arr[i]] = -1;
    }

    stack.push(arr[i]);
  }

  return a1.map((x) => ngeMap[x]);
};
