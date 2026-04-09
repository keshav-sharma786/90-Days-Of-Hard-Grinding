var MinStack = function () {
  this.s1 = [];
  this.min = Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.s1.length === 0) {
    this.s1.push({
      val: val,
      min: val,
    });
  } else {
    if (val < this.s1[this.s1.length - 1].min) {
      this.s1.push({
        val: val,
        min: val,
      });
    } else {
      this.s1.push({
        val: val,
        min: this.s1[this.s1.length - 1].min,
      });
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.s1.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.s1[this.s1.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let obj = this.s1[this.s1.length - 1];
  return obj.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
