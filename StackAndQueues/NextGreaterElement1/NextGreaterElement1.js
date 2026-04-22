/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  //&Let us conquer this problem today
  let map = new Map();
  let stack = [];
  let lastEle = nums2[nums2.length - 1];
  map.set(lastEle, -1);
  stack.push(lastEle);
  for (let i = nums2.length - 2; i >= 0; i--) {
    if (nums2[i] < stack[stack.length - 1]) {
      map.set(nums2[i], stack[stack.length - 1]);
      stack.push(nums2[i]);
    } else {
      while (stack.length && nums2[i] > stack[stack.length - 1]) {
        stack.pop();
      }
      if (stack.length === 0) {
        map.set(nums2[i], -1);
      } else {
        map.set(nums2[i], stack[stack.length - 1]);
      }
      stack.push(nums2[i]);
    }
  }

  // looping on nums1 array
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans.push(map.get(nums1[i]));
  }

  return ans;
};
