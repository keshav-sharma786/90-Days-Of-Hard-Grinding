/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Approach 3 => Using One Pass solution only
  let count = 0;
  // let spaceCount = 0;
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] === " " && count === 0) {
      --n;
    } else if (s[n] !== " ") {
      ++count;
      --n;
    } else {
      break;
    }
  }
  return count;
};
