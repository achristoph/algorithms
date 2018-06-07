function spiralOrder1(matrix) {
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
      //hits a boundary, then switch direction by rotating dr and dc arrays
      di = (di + 1) % 4;
      r += dr[di];
      c += dc[di];
    }
  }
  return ans;
}

function spiralOrder(matrix) {
  ans = [];
  if (matrix.length == 0) return ans;
  let r1 = 0,
    r2 = matrix.length - 1;
  let c1 = 0,
    c2 = matrix[0].length - 1;
  while (r1 <= r2 && c1 <= c2) {
    for (let c = c1; c <= c2; c++) ans.push(matrix[r1][c]);
    for (let r = r1 + 1; r <= r2; r++) ans.push(matrix[r][c2]);
    if (r1 < r2 && c1 < c2) {
      for (let c = c2 - 1; c > c1; c--) ans.push(matrix[r2][c]);
      for (let r = r2; r > r1; r--) ans.push(matrix[r][c1]);
    }
    r1++;
    r2--;
    c1++;
    c2--;
  }
  return ans;
}
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
