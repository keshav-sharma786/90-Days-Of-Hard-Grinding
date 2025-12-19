function countEvens(arr) {
  // must be an array
  if (!Array.isArray(arr)) return false;

  // empty array is invalid
  if (arr.length === 0) return 0;

  // reject if ANY element is invalid
  if (!arr.every((x) => typeof x === "number" && Number.isFinite(x))) {
    return false;
  }

  // count even integers
  // using the reduce method
  // return arr.reduce((acc, curr) => {
  //   if (Number.isInteger(curr) && curr % 2 === 0) {
  //     acc++;
  //   }
  //   return acc;
  // }, 0);

  // counting even numbers using the filter method
  return arr.filter((x) => Number.isInteger(x) && x % 2 === 0).length;
}

module.exports = { countEvens };
