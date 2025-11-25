const arr = [5, 1, 3, 2, 6];

// Double - [10, 2, 6, 4, 12]

// Triple - [15, 3, 9, 6, 10]

// Binary - ["101", "1", "11", "10", "110"]
// map

function double(x) {
  return x * 2;
}

// function triple(x) {
//   return x * 3;
// }

function binary(x) {
  return x.toString(2);
}

const output = arr.map(double);
const output1 = arr.map((x) => x * 3);
const output2 = arr.map(binary);

console.log(output);
console.log(output1);
console.log(output2);

// filter method
// filter odd values
const output3 = arr.filter((x) => x % 2 != 0);
console.log(output3);

// filter even values
const output4 = arr.filter((x) => x % 2 === 0);
console.log(output4);

// filtering those values greater than 4
const output5 = arr.filter((x) => x > 4);
console.log(output5);

const output6 = arr.map((x) => x);
console.log(output6);

const output7 = arr.filter((x) => x);
console.log(output7);

// Reduce In Javascript
// sum or max

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(findSum(arr));

// writing the same logic using the reduce function
const output8 = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(output8);

// let us try to find the maximum element inside the array
function findMax(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax(arr));

// writing the same logic using reduce function
const output9 = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, -Infinity);

console.log(output9);

// some more examples of map, filter and reduce
const users = [
  { firstName: "Keshav", lastName: "Sharma", age: 22 },
  { firstName: "Raghav", lastName: "Sharma", age: 75 },
  { firstName: "Anmol", lastName: "Sharma", age: 50 },
  { firstName: "Yuvraaj", lastName: "Sharma", age: 22 },
];

// list of full names
// ["Keshav Sharma", "Raghav Sharma", ...]

const fullName = users.map((el) => el.firstName + " " + el.lastName);

console.log(fullName);

// there are 2 people with age 22
// { 22 : 2, 75 : 1, 50 : 1}
// We basically need to find out how many people are with the particular unique age group

// reduce
const uniqueAge = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(uniqueAge);


