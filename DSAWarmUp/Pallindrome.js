/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // handling the negative numbers
  if (x < 0) return false;
  let xCopy = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }
  // if (rev === xCopy) {
  //     return true
  // } else {
  //     return false;
  // }

  return rev === xCopy;
};
