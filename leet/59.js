function spiralOrder(matrix) {
  let ans = [];
  if (matrix.length == 0) return ans;
  let R = matrix.length,
    C = matrix[0].length;
  let seen = Array(R);
  for (let i = 0; i < seen.length; i++) {
    seen[i] = [];
  }
  let dr = [0, 1, 0, -1];
  let dc = [1, 0, -1, 0];
  let r = 0,
    c = 0,
    di = 0;
  for (let i = 0; i < R * C; i++) {
    ans.push(matrix[r][c]);
    seen[r][c] = true;
    let cr = r + dr[di];
    let cc = c + dc[di];
    if (0 <= cr && cr < R && 0 <= cc && cc < C && !seen[cr][cc]) {
      r = cr;
      c = cc;
    } else {
      di = (di + 1) % 4;
      r += dr[di];
      c += dc[di];
    }
  }
  return ans;
}
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// let a = Array(3);
// for (let i = 0; i < a.length; i++) {
//   a[i] = [];
// }
