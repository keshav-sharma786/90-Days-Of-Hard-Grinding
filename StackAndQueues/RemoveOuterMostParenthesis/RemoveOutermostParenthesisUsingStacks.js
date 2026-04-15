/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let x = 0;
  let j = 0;
  let stack = [];
  let ans = "";
  while (x < s.length) {
    if (s[x] === "(") {
      stack.push(s[x]);
    } else {
      stack.pop();
    }
    ++x;
    if (stack.length === 0) {
      for (let i = j + 1; i < x - 1; i++) {
        ans = ans + s[i];
      }
      j = x;
    }
  }

  return ans;
};
