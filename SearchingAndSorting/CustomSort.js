function customSort(arr) {
  //write your implementation here
  // using bubble sort
  let nums = [];
  let char = [];
  for (let item of arr) {
    if (typeof item === "string" && item.length === 1) {
      char.push(item);
    } else if (typeof item === "number") {
      nums.push(item);
    }
  }

  // Applying bubble sort on the char array
  for (let i = 0; i < char.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < char.length - 1 - i; j++) {
      if (char[j] > char[j + 1]) {
        // swapping through array deconstructing
        // making a temporary array
        [char[j], char[j + 1]] = [char[j + 1], char[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }

  // Applying the bubble sort on the nums array
  for (let i = 0; i < nums.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        // swapping through the array deconstructing
        // making a temporary array
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }

  // returning the final sorted array
  return [...char, ...nums];
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
customSort(input);
module.exports = customSort;
