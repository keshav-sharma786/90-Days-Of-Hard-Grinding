function Sum(n) {
  let isOdd = arr[n] % 2 !== 0;

  // base case
  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }

  // Recursive function call
  return (isOdd ? arr[n] : 0) + Sum(n - 1);
}

const arr = [5, 2, 0, 3, 6, 7];
const oddSum = Sum(arr.length - 1);

console.log(oddSum);//15
