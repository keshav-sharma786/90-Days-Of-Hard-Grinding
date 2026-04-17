/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let ans = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      ++count;
      if (count > 1) {
        ans = ans + s[i];
      }
    } else {
      if (count > 1) {
        ans = ans + s[i];
      }
      --count;
    }
  }

  return ans;
};
