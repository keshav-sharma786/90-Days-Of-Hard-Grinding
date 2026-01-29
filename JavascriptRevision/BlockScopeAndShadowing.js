{
  // ! compound statement
  //   var a = 10;
  //   console.log(a);
}

// if (true) {
//   var a = 10;
//   console.log(a);
// }

// ? let, var and const inside the block
//debugger
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}

//console.log(a);// ? 10
//console.log(b);// ! Uncaught ReferenceError b is not defined
//console.log(c);

// ? Variable shadowing in JS

//debugger
var a = 100;
let b = 100;
const c = 100;
{
  // ? This variable a shadows the outer variable a
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a); // ! 10
  console.log(b); // ! 20
  console.log(c); // !30
}

console.log(a); // ! 10
console.log(b); // ! 100
console.log(c); // ! 100

// ? shadowing behaves the same way in the function scope as well

//debugger;
const d = 100;
function x() {
  var name = "Keshav";
  console.log(name);
  const d = 30;
  console.log(d); // ! 30
}
x();
console.log(d); // ! 100

// ! Illelegal Shadowing In JS
// let g = 20;
// {
//   var g = 20;
// }

// ! Uncaught SyntaxError: Identifier 'a' has already been declared (at BlockScopeAndShadowing.js:61:5)

// ? will the vice versa will work.
// var a = 20;
// {
//   let a = 20;
// }


// var e = 500;
// let e = 400;
// console.log(e); 
//! Uncaught SyntaxError: Identifier 'a' has already been declared (at BlockScopeAndShadowing.js:61:5)


let f = 20;
function x() {
  var f = 20;
}



