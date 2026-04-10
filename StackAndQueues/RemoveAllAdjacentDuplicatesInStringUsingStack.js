/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  // writing the logic through the stack
  // is the most trickiest part here in this question
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
    } else {
      if (s[i] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }

  return stack.join("");
};
