/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0;
  let xCopy = x;
  x = Math.abs(x);
  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }
  // if (xCopy < 0) {
  //     return -rev;
  // } else {
  //     return rev;
  // }
  // Handling the corner cases
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit - 1) return 0;
  return xCopy < 0 ? -rev : rev;
};
