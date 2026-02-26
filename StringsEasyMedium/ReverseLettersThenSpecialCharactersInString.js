/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function (s) {
  // very very easy problem

  // Step1 = Reversing only letters
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

  // Step2 => Reversing only the special characters

  i = 0;
  j = n - 1;
  while (i < j) {
    if (letters.test(s[i])) {
      ++i;
    }

    if (letters.test(s[j])) {
      --j;
    }

    if (!letters.test(s[i]) && !letters.test(s[j])) {
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
