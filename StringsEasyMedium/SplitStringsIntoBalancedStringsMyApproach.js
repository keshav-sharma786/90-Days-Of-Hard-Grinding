/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let rCount = 0;
  let lCount = 0;
  let balancedStringCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      ++rCount;
    } else {
      ++lCount;
    }

    if (rCount === lCount) {
      ++balancedStringCount;
      rCount = 0;
      lCount = 0;
    }
  }

  return balancedStringCount;
};
