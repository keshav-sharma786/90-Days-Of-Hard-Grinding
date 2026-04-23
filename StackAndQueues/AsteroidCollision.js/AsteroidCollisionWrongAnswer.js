/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (arr) {
  //We will conquer this problem today only..
  //I will write the code of it after some time.
  //nice effort...
  let stack = [];
  stack.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    let top = stack[stack.length - 1];

    if (
      (top > 0 && arr[i] > 0) ||
      (top < 0 && arr[i] < 0) ||
      (top < 0 && arr[i] > 0)
    ) {
      stack.push(arr[i]);
    } else {
      // one thing is sure that the incoming
      // element is negative
      let incomingSize = Math.abs(arr[i]);
      while (stack.length !== 0) {
        if (incomingSize > stack[stack.length - 1]) {
          stack.pop();
        } else if (
          incomingSize === Math.abs(arr[i]) &&
          arr[i] !== stack[stack.length - 1]
        ) {
          stack.pop();
          break;
        } else if (
          incomingSize === Math.abs(arr[i]) &&
          arr[i] === stack[stack.length - 1]
        ) {
          stack.push(arr[i]);
          break;
        }
      }
      if (stack.length === 0) {
        stack.push(arr[i]);
      }
    }

    return stack;
  }
};
