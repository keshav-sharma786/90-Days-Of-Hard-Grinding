// Find the second largest number in an array
// Always think aboout the corner cases
function secondLargest(arr) {
    if (arr.length < 2) {
        return -1;
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr = [10];

let result = secondLargest(arr);

console.log(result);

