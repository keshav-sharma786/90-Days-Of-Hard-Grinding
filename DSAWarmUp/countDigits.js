// Write a function that returns the count of digits in a number

function countDigits(n) {
  // corner case to handle
  if (n === 0) return 1;
  // Handling negative numbers
  // Converting negative numbers to positive
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    // divide the number by 10
    n = Math.floor(n / 10);
    // console.log(n);
    // incrementing the count
    count++;
  }
  return count;
}

let num = -298;

let result = countDigits(num);
console.log(result);
// playing with Math object
console.log(Math.floor(10.9));
console.log(Math.ceil(10.2));
console.log(Math.floor(10.99999999999999));
console.log(Math.ceil(10.00000001));
console.log(Math.floor(10.0));
console.log(Math.ceil(25.9));
console.log(Math.ceil(2.6));
console.log(Math.ceil(0.3));
console.log(Math.ceil(0.1));
console.log(Math.ceil(25.9));
console.log(Math.round(0.3));
console.log(Math.abs(-259));
