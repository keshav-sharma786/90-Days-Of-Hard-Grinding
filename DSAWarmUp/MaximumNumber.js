function findLargest(arr) {
  // your solution here
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length === 0) {
    return null;
  }
  if (!arr.every((x) => typeof x === "number" && Number.isFinite(x))) {
    return false;
  }
  // using the reduce method to calculte the maximum value in array

  return arr.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr;
    }
    return acc;
  }, arr[0]);
}

module.exports = { findLargest };
