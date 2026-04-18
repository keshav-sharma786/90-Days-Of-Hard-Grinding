/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (tokens.length === 1) {
    return parseInt(tokens[0]);
  }
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] !== "+" &&
      tokens[i] !== "-" &&
      tokens[i] !== "*" &&
      tokens[i] !== "/"
    ) {
      stack.push(tokens[i]);
    } else {
      let b = parseInt(stack.pop());
      let a = parseInt(stack.pop());
      if (tokens[i] === "+") {
        stack.push(a + b);
      } else if (tokens[i] === "-") {
        stack.push(a - b);
      } else if (tokens[i] === "*") {
        stack.push(a * b);
      } else if (tokens[i] === "/") {
        let ans = Math.trunc(a / b) || 0;
        stack.push(ans);
      }
    }
  }

  return stack[stack.length - 1];
};
