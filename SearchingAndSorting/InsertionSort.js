let arr = [7, 1, 5, 4, 3, 2];

function insertionSort(a) {
  const n = a.length;

  for (let i = 0; i < n; i++) {
    let curr = a[i];
    let prev = i - 1;
    while (a[prev] > curr && prev >= 0) {
      // keep shifting the previous elements to prev + 1
      a[prev + 1] = a[prev];
      prev--;
    }

    a[prev + 1] = curr;
  }

  return a;
}

let result = insertionSort(arr);

console.log(result);
