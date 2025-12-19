function sum(n) {
  // base case
  if (n === 0) {
    return arr[0];
  }

  // recursive function call
  return arr[n] + sum(n - 1);
}

let arr = [5, 3, 2, 1, 0];

const sumOfElements = sum(arr.length - 1);
console.log(sumOfElements);
