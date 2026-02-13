/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Approach 1
  // ignoring the trailing spaces
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] === " ") {
      --n;
    } else {
      break;
    }
  }
  // n is the point where my word starts
  let count = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      ++count;
      --n;
    } else {
      break;
    }
  }

  return count;
};
