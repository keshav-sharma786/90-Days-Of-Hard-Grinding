/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  // using a hashMap for solving this problem
  let hash1 = {};
  let hash2 = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash1[s[i]]) {
      hash1[s[i]] = 1;
    } else {
      hash1[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!hash2[t[i]]) {
      hash2[t[i]] = 1;
    } else {
      hash2[t[i]]++;
    }
  }

  console.log(hash1);
  console.log(hash2);

  // looping over hashMap2
  for (const key in hash2) {
    if (hash2[key] != hash1[key]) {
      return key;
    }
    // console.log(key);
    // console.log(hash2[key]);
  }
};
