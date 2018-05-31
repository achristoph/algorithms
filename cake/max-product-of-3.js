function maxProduct(a) {
  let [max1, max2, max3] = [Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE];
  let [min1, min2] = [Number.MAX_VALUE, Number.MAX_VALUE];
  for (const n of a) {
    if (n >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = n;
    } else if (n >= max2) {
      max3 = max2;
      max2 = n;
    } else if (n >= max3) {
      max3 = n;
    }
    if (n <= min1) {
      min2 = min1;
      min1 = n;
    } else if (n <= min2) {
      min2 = n;
    }
  }
  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
}

a = [10, 3, 5, 6, 20];
console.log(maxProduct(a));
