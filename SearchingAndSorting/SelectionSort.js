let arr = [7, 1, 5, 4, 3, 2];

function selectionSort(a) {
  const n = a.length;

  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the array
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    // swap through array deconstructing
    // creating a temporary array
    if (min !== i) {
      [a[i], a[min]] = [a[min], a[i]];
    }
  }

  return a;
}

let result = selectionSort(arr);

console.log(result);
