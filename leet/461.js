function hammingDistance(x, y) {
  let ans = 0;
  for (let i = 0; i < 31; i++) {
    // 0-31 is because of given range (32 bits integer)
    let xBit = x % 2;
    let yBit = y % 2;
    if (xBit != yBit) {
      ans++;
    }
    x = (x - xBit) / 2;
    y = (y - yBit) / 2;
  }
  return ans;
}

console.log(hammingDistance(1, 4));
