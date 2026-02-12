/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Easiest Javascript Approach
  s = s.trim();
  s = s.split(" ");
  return s[s.length - 1].length;
};
