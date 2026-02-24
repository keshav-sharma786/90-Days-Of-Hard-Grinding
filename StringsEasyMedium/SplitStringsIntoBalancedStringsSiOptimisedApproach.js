/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let temp = 0;
  let balancedStringCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      ++temp;
    } else {
      --temp;
    }

    if (temp === 0) {
      ++balancedStringCount;
    }
  }

  return balancedStringCount;
};
