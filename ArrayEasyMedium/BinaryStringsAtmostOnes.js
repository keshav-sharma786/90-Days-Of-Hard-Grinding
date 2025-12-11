/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  let currSegment = 0;
  let maxSegment = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      // increase the currSegment
      currSegment++;
    } else {
      if (currSegment > 0) {
        maxSegment++;
      }
      currSegment = 0;
    }
    // when the loop ends
    if (i >= s.length - 1 && currSegment > 0) {
      maxSegment++;
    }
  }

  return maxSegment === 1;
};
