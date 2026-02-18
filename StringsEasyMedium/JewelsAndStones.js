/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let hashSet = new Set();
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    hashSet.add(jewels[i]);
  }

  for (let i = 0; i < stones.length; i++) {
    if (hashSet.has(stones[i])) {
      count++;
    }
  }

  return count;
};
