/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  // in this Question we will use the regular
  // expressions for checking that weather the
  // given letter is a english letter or not

  // This Question is very similar to the reverse
  // vowels in a string
  s = s.split("");
  let letters = /[a-zA-Z]/;
  let n = s.length;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    if (!letters.test(s[i])) {
      ++i;
    }

    if (!letters.test(s[j])) {
      --j;
    }

    if (letters.test(s[i]) && letters.test(s[j])) {
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
