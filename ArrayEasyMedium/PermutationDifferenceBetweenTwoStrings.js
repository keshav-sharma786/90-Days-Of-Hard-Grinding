/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  // using a hashmap to solve this problem
  // each character appears atmost once
  // that means each character appears only once in s and t strings
  let hash1 = {};
  let hash2 = {};
  let diff = 0;

  // filling the hashMap01 with s string characters
  for (let i = 0; i < s.length; i++) {
    hash1[s[i]] = i;
  }

  console.log(hash1);
  console.log(hash1.a);

  // filling the hashMap02 with t string characters
  for (let i = 0; i < t.length; i++) {
    hash2[t[i]] = i;
  }

  console.log(hash2);

  // finding the difference between values of both of these hash objects
  // using for in loop
  for (const key in hash2) {
    // console.log(key);
    // console.log(hash1[key]);
    // console.log(hash2[key]);
    // console.log(Math.abs(hash2[key] - hash1[key]));
    diff = diff + Math.abs(hash2[key] - hash1[key]);
  }

  return diff;
};
