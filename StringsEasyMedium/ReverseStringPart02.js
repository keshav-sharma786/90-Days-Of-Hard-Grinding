/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split("");
  // Jumping 2k steps
  for (let x = 0; x < s.length; x = x + 2 * k) {
    // Reverse first k elements starting from x
    let mid = Math.floor(k / 2);
    let n = k;

    for (let i = 0; i < mid; i++) {
      let temp = s[i + x];
      s[i + x] = s[x + n - i - 1];
      s[x + n - i - 1] = temp;
    }
  }
  return s.join("");
};
