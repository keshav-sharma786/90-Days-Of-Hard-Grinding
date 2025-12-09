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
  // using Math.max() and spread operator for finding the maximum element

  return Math.max(...arr);
}

module.exports = { findLargest };
