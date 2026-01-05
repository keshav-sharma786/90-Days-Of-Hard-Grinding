/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
  let absoluteSum = 0;
  let negativeNumCount = 0;
  let small = Infinity;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      absoluteSum += Math.abs(matrix[i][j]);
      if (matrix[i][j] < 0) negativeNumCount++;
      if (Math.abs(matrix[i][j]) < small) small = Math.abs(matrix[i][j]);
    }
  }
  if (negativeNumCount % 2 === 0) {
    return absoluteSum;
  } else {
    // small = Math.abs(small);
    return absoluteSum - 2 * small;
  }
};
