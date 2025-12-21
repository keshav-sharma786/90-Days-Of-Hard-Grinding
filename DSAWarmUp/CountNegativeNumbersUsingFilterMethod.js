function countNegatives(arr) {
  // implement your solution here
  // checking the corner cases
  if (!Array.isArray(arr)) return false;
  if (!arr.every((x) => typeof x === "number" && Number.isFinite(x)))
    return false;

  // solving this question by reducer method of javascript
  // return arr.reduce((acc, curr) => acc + (curr < 0 ? 1 : 0), 0);

  // Solving the same question using the filter method
  return arr.filter((x) => x < 0).length;
}

module.exports = { countNegatives };
