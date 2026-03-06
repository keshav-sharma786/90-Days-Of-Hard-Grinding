/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let count = 0;
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] === s[j]) {
      ++i;
      --j;
    } else {
      if (count === 0) {
        ++i;
        if (s[i] !== s[j]) {
          --i;
          --j;
        }
        if (s[i] !== s[j]) {
          return false;
        }
        ++count;
      } else {
        return false;
      }
    }
  }
  return true;
  // "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
};
