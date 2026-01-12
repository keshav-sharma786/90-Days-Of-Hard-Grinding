/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let answer0 = [];
  let answer1 = [];
  let finalAns = [];
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  set1.forEach((el) => {
    if (!set2.has(el)) {
      answer0.push(el);
    }
  });

  set2.forEach((el) => {
    if (!set1.has(el)) {
      answer1.push(el);
    }
  });

  finalAns.push(answer0);
  finalAns.push(answer1);

  return finalAns;
};
