//debugger;
function MyStack() {
  console.log(this); //initially this will point to the empty object.
  this.q1 = [];
  this.q2 = [];
}

MyStack.prototype.push = function (x) {
  // In push function we will simply push the element x in the main q1 queue
  this.q1.push(x);
};

// Making the pop function
MyStack.prototype.pop = function (x) {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    let ele = this.q1.shift();
    console.log(this.q1);
    this.q2.push(ele);
    console.log(this.q2);
  }
  let ele = this.q1.shift();
  //?exchanging q1 and q2
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return ele;
};

// Making the top function now
MyStack.prototype.top() = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    let ele = this.q1.shift();
    this.q2.push(ele);
  }
  let ele = this.q1.shift();
  this.q2.push(ele);
  //? exchanging q1 and q2
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return ele;
}

MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

console.log(MyStack.prototype);
let myOwnStack = new MyStack();
console.log(MyStack.prototype);
console.log(myOwnStack.__proto__);

//?Actually calling the functions
//debugger;
myOwnStack.push(1);
console.log(myOwnStack);
myOwnStack.push(2);
console.log(myOwnStack);
myOwnStack.push(3);
console.log(myOwnStack);
myOwnStack.push(4);
console.log(myOwnStack);
debugger;
console.log(myOwnStack.pop());
console.log(myOwnStack);
