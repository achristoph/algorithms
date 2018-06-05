/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (matrix == null || matrix.length == 0) return [];
  let m = matrix.length;
  let n = matrix[0].length;
  let result = [];
  let row = 0,
    col = 0,
    d = 1;

  for (let i = 0; i < m * n; i++) {
    result[i] = matrix[row][col];
    row -= d;
    col += d;
    if (row >= m) {
      row = m - 1;
      col += 2;
      d = -d;
    }
    if (col >= n) {
      col = n - 1;
      row += 2;
      d = -d;
    }
    if (row < 0) {
      row = 0;
      d = -d;
    }
    if (col < 0) {
      col = 0;
      d = -d;
    }
  }
  return result;
};

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
