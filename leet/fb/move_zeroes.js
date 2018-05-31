function moveZeroes(a) {
  for (let i = 0, j = 1; j < a.length; ) {
    if (a[i] == 0) {
      if (a[j] == 0) {
        j++;
      } else {
        [a[i], a[j]] = [a[j], a[i]];
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
  return a;
}
console.log(moveZeroes([0, 1, 0, 3, 12]));
