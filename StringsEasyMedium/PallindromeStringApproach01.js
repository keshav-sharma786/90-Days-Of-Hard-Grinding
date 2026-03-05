/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  for (let i = 0; i < s.length; i++) {
    // regular expressions
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString += s[i];
    }
  }

  let rev = filteredString.split("").reverse().join("");

  return filteredString === rev;
};
