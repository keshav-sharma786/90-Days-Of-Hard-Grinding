/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let rev = "";
  let filteredString = "";
  for (let i = 0; i < s.length; i++) {
    // without regular expressions
    if (
      (s[i].charCodeAt() >= "a".charCodeAt() &&
        s[i].charCodeAt() <= "z".charCodeAt()) ||
      (s[i].charCodeAt() >= "0".charCodeAt() &&
        s[i].charCodeAt() <= "9".charCodeAt())
    ) {
      filteredString += s[i];
      rev = s[i] + rev;
    }
  }

  return filteredString === rev;
};
