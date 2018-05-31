function threeSum(a) {
  a.sort((a, b) => a - b);
  let solution = [];
  for (let i = 0; i < a.length - 2; i++) {
    if (i === 0 || (i > 0 && a[i] !== a[i - 1])) {
      for (var l = i + 1, r = a.length - 1, sum = 0 - a[i]; l < r; ) {
        if (a[l] + a[r] === sum) {
          solution.push([a[i], a[l], a[r]]);
          while (l < r && a[l] === a[l + 1]) l++;
          while (l < r && a[r] === a[r - 1]) r--;
          l++;
          r--;
        } else if (a[l] + a[r] < sum) l++;
        else r--;
      }
    }
  }
  return solution;
}
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
