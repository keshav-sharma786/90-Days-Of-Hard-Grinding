/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let ans = [];
  let carry = 0;
  let i = num.length - 1;

  while (i >= 0 || k > 0 || carry > 0) {
    let digitToAdd = k % 10;
    k = Math.floor(k / 10);
    let sum = (!num[i] ? 0 : num[i]) + (!digitToAdd ? 0 : digitToAdd) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;
    ans.push(digit);
    i--;
  }
  // ans.reverse();
  // if (carry !== 0) {
  //     ans.push(1);
  // }
  return ans.reverse();
};
