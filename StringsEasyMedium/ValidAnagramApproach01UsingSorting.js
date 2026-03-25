/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // Approach 01 => Using Sorting
  const str1 = [...s].sort().join("");
  const str2 = [...t].sort().join("");
  return str1 === str2 ? true : false;
};
