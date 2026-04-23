var asteroidCollision = function (arr) {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let destroyed = false;

    while (stack.length > 0 && stack[stack.length - 1] > 0 && curr < 0) {
      let top = stack[stack.length - 1];

      if (Math.abs(top) < Math.abs(curr)) {
        stack.pop(); // top destroy
      } else if (Math.abs(top) === Math.abs(curr)) {
        stack.pop(); // both destroy
        destroyed = true;
        break;
      } else {
        destroyed = true; // curr destroy
        break;
      }
    }

    if (!destroyed) {
      stack.push(curr);
    }
  }

  return stack;
};
