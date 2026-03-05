/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let rev = "";
  let filteredString = "";
  for (let i = 0; i < s.length; i++) {
    // regular expressions
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString += s[i];
      rev = s[i] + rev;
    }
  }

  return filteredString === rev;
};
