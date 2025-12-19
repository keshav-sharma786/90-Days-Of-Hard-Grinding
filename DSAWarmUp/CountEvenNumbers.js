function countEvens(arr) {
  // your solution here
  // first of all check all the validations
  // first of all check that weather the given input is array or not
  if (!Array.isArray(arr)) {
    return false;
  }
  // checking for array containing non numbers
  if (arr.every((x) => typeof x !== "number" || !Number.isFinite(x))) {
    return false;
  }

  // now counting the even numbers
  // using the reduce method of Javascript
  return arr.reduce(function (acc, curr) {
    if (Number.isInteger(curr) && curr % 2 === 0) {
      acc = acc + 1;
    }
    return acc;
  }, 0);
}

module.exports = { countEvens };
