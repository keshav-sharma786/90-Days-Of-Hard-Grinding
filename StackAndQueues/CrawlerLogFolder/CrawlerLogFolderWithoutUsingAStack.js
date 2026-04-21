/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  //Solving this problem without using a stack
  let count = 0;
  for (let i = 0; i < logs.length; i++) {
    if (logs[i] !== "../" && logs[i] !== "./") {
      ++count;
    } else if (logs[i] === "../") {
      if (count !== 0) {
        --count;
      }
    }
  }

  return count;
};
