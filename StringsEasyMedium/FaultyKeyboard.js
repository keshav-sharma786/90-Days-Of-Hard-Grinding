/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  // This Question was asked In Samsung
  // Let us conquer this Question today itself
  let ans = "";

  function reverse(i, k) {
    while (k > i) {
      let temp = s[i];
      s[i] = s[k];
      s[k] = temp;
      ++i;
      --k;
    }
  }

  s = s.split("");
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (s[j] !== "i") {
      ++j;
    } else {
      let k = j - 1;
      while (s[j] === "i") {
        reverse(i, k);
        ++j;
      }
    }
  }

  // At last removing the occurences of 'i'
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "i") {
      ans += s[i];
    }
  }

  return ans;
};
