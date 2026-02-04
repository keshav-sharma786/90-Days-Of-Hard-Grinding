// ! Code example of a closure
function outest() {
  var c = 20;
  function outer(b) {
    //   var a = 10;
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("helloworld");
close();

// ! Achieving Data Privacy and the encapsulation using the closures

function counter() {
  var count = 0;
  function incrementCounter() {
    count++;
    console.log(count);
  }
  return incrementCounter;
}

var counter1 = counter();
counter1(); // 1
counter1(); // 2

var counter2 = counter();
counter2(); // 1

// ! constructor Function
function Counter1() {
  var count = 0;
  console.log(this);
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
  console.log(this);
}

var counter3 = new Counter1();
console.log(counter3);
counter3.incrementCounter();

// ! Relation between closures and garbage collectors

function aa() {
  var x = 0;
  z = 10;
  return function b() {
    
    console.log(x);
  };
}
aa()();
