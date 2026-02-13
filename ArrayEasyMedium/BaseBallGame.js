/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let ans = [];
  // looping on the operations array
  // which is basically a string
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      let last = ans[ans.length - 1];
      let secondLast = ans[ans.length - 2];
      ans.push(last + secondLast);
    } else if (operations[i] === "D") {
      let last = ans[ans.length - 1];
      ans.push(last);
    } else if (operations[i] === "C") {
      ans.pop();
    } else {
      let num = parseInt(operations[i]);
      ans.push(num);
    }
  }

  return ans;
};
