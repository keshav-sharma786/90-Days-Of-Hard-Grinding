"use strict";

console.log("Namaste Javascript 🚀");

// this in global space
console.log(this); // globalObject window

// this inside a function
function x() {
  // this value depends on strict / non strict mode
  console.log(this);
}
x();
// this inside non-strict mode - (this substitution)

// If the value of this keyword is undefined or null, then this keyword will be replaced with globalObject only in non strict mode

// this keyword value depends on how the function is called/invoked
window.x();

// this inside a object's method
const obj = {
  a: 10,
  x: function () {
    console.log(this);
    console.log(this.a);
  },
};

obj.x();

// before going to this keyword further
// let me also cover Call, Apply and Bind methods in depth
const myName = {
  firstName: "Keshav",
  lastName: "Sharma",
};

const printFullName = function (hometown, state) {
  console.log(this);
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

printFullName.call(myName, "Ludhiana", "Punjab");

const name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

// function borrowing
printFullName.call(name2, "Mumbai", "Maharashtra");

// apply method
printFullName.apply(myName, ["Ludhiana", "Punjab"]);

// bind method
let printName = printFullName.bind(myName, "Vancouver", "Canada");
console.log(printName);
printName();

// this keyword inside call, apply and bind
const student = {
  name: "Keshav",
  printName: function () {
    console.log(this.name);
  },
};

student.printName();

const student2 = {
  name: "Deepika",
};

student.printName.call(student2);

// this keyword inside arrow functions
const obj1 = {
  a: 10,
  // arrow function
  x: () => {
    console.log(this);
  },
};
obj1.x();

// Another example
const obj2 = {
  a: 10,
  // enclosing lexical context
  x: function () {
    const y = () => {
      console.log(this); // obj2
    };
    y();
  },
};

obj2.x();

// this inside DOM elements => reference to the HTML element


