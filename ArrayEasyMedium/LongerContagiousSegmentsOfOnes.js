/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let currOneCount = 0;
  let maxOneCount = 0;
  let currZeroCount = 0;
  let maxZeroCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      currOneCount++;
    } else {
      maxOneCount = Math.max(currOneCount, maxOneCount);
      currOneCount = 0;
    }
  }
  maxOneCount = Math.max(currOneCount, maxOneCount);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      currZeroCount++;
    } else {
      maxZeroCount = Math.max(currZeroCount, maxZeroCount);
      currZeroCount = 0;
    }
  }

  maxZeroCount = Math.max(currZeroCount, maxZeroCount);

  if (maxOneCount > maxZeroCount) return true;
  return false;
};
