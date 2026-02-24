/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  let ans = [];
  let word = "";
  for (let i = 0; i < words.length; i++) {
    // inner loop
    for (let j = 0; j < words[i].length; j++) {
      // word += words[i][j];
      if (words[i][j] === separator) {
        if (word !== "") {
          ans.push(word);
        }
        word = "";
      } else {
        word += words[i][j];

        // break;
      }
    }
    if (word) {
      ans.push(word);
    }
    word = "";
  }

  return ans;
};
