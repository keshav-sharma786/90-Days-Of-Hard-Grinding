console.log(b);
//console.log(a); // ! Error => Uncaught ReferenceError: Cannot access 'a' before initialisation.

const c = 200;
let a = 10;
//let a = 100; // ! Uncaught SyntaxError: Identifier 'a' has already been declared
console.log(a); // ? 10
console.log(c); // ? 200

var b = 100;

// const d = 9;
// const d = 9;

// let d = 200;
// var d = 200; // ! Uncaught SyntaxError: Identifier 'd' has already been declared

let d;
console.log(d); // ? undefined

console.log("keshav");

// const e;
// e = 200; // ! SyntaxError: Missing initialiser in const declarations


