function countVowels(str) {
  // Your implementation
  // let us first of all loop through the array
  // I will basically use the for of loop
  let count = 0;
  for (const st of str) {
    if (
      st === "a" ||
      st === "A" ||
      st === "e" ||
      st === "E" ||
      st === "i" ||
      st === "I" ||
      st === "o" ||
      st === "O" ||
      st === "u" ||
      st === "U"
    ) {
      count++;
    }
  }

  return count;
}

//For the purpose of user debugging.
countVowels("JavaScript");

module.exports = countVowels;
