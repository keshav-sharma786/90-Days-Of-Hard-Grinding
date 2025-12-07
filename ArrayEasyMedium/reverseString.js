/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */


var reverseString = function (s) {
  let i = 0;
  let x = s.length - 1;
  while (i < x) {
    // keep swapping
    let temp = s[i];
    s[i] = s[x];
    s[x] = temp;
    i++;
    x--;
  }
};
