// ? we are trying to access getName() before even we have initialised it.

getName(); // Namaste Javascript
// ? we are trying to access x even before we have put some value in it.
console.log(x); // undefined
console.log(getName); // whole getName function body.

var x = 7;

function getName() {
  console.log("Namaste Javascript");
}

// getName();
// console.log(x);

// ! Making the getName function as a arrow function

getName2(); // Uncaught TypeError: getName2 is not a function

var getName2 = () => {
  console.log("Namaste Arrow Function");
};

getName3(); // ! Uncaught TypeError: getName2 is not a function

// ? In this case getName3 will behave like a variable
var getName3 = function () {
  console.log("function expression");
};

getName3();