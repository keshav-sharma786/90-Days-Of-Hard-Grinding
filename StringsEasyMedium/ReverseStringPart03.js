/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // the approach is clear in head
  // writing the code is the trickier part now
  s = s.split("");
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (s[j] !== "") {
      ++j;
    } else {
      let k = j - 1;
      while (k > i) {
        let temp = s[i];
        s[i] = s[k];
        s[k] = temp;
        ++i;
        --k;
      }
      ++j;
      i = j;
    }
  }

  let k = j - 1;
  while (k > i) {
    let temp = s[i];
    s[i] = s[k];
    s[k] = temp;
    ++i;
    --k;
  }

  return s.join("");
};
