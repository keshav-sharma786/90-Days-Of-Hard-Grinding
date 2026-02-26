/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = "aeiouAEIOU";
  s = s.split("");
  let n = s.length;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    if (!vowels.includes(s[i])) {
      ++i;
    }
    if (!vowels.includes(s[j])) {
      --j;
    }
    if (vowels.includes(s[i]) && vowels.includes(s[j])) {
      // perform swapping
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
      ++i;
      --j;
    }
  }

  return s.join("");
};
