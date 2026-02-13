/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Approach 1
  s = s.trim();
  let n = s.length - 1;
  let count = 0;
  for (let i = n; i >= 0; i--) {
    if (s[i] === " ") {
      break;
    }
    count++;
  }

  return count;
};
