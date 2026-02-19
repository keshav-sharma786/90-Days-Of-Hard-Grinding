/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      ++map[s[i]];
    }
  }

  // find the max vowel and max consonant in map
  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowel = 0;
  let maxConsonant = 0;

  for (let i = 0; i < s.length; i++) {
    // check for vowels
    if (vowels.includes(s[i])) {
      maxVowel = Math.max(maxVowel, map[s[i]]);
    } else {
      maxConsonant = Math.max(maxConsonant, map[s[i]]);
    }
  }

  return maxConsonant + maxVowel;
};
