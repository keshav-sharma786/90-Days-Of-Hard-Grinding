// debugger;
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}

var z = x();
console.log(z); // whole function y code

// 1000 of lines of code .....
z(); // 100

// ! Let us go one more level deep inside the scope chain.
function z() {
  console.log("hii");
}

z(); // 100 because at line 11 var z has been reinitialised to returned function y

function k() {
  console.log("hii");
}
//let k = 10;// !Uncaught SyntaxError: Identifier k has already been declared
var k = 100; //? This is absolutely correct

// ! One more level deep of lexical chain

function zz() {
  var b = 900;
  function xx() {
    var a = 7;
    function yy() {
      console.log(a, b);
    }
    yy();
    // a = 100;
  }
  xx();
//   return yy;
}
// var y = zz();
// yy();
zz();
