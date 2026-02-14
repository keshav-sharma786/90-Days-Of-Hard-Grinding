/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Si Approach
  let count = 0;
  // let spaceCount = 0;
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }
    n--;
  }
  return count;
};
