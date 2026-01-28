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

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);// ? 10
console.log(b);// ! Uncaught ReferenceError b is not defined
console.log(c);
