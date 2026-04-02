var MyStack = function () {
  // creating 2 Queues
  // q1 ==> Main Queue
  // q2 ==> Helper Queue
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  // In push function,we will simply push the
  // element x in the main q1 queue
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    let ele = this.q1.shift();
    this.q2.push(ele);
  }
  let ele = this.q1.shift();
  // exchanging q1 and q2
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return ele;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  // top just returns the top most element
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
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
