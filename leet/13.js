function getVal(c) {
  switch (c) {
    case 'M':
      return 1000;
    case 'D':
      return 500;
    case 'C':
      return 100;
    case 'L':
      return 50;
    case 'X':
      return 10;
    case 'V':
      return 5;
    case 'I':
      return 1;
  }
}

function romanToInt(s) {
  res = 0;
  if (s.length === 0) return res;
  for (let i = 0; i < s.length - 1; i++) {
    let cur = getVal(s[i]);
    let next = getVal(s[i + 1]);
    if (cur < next) {
      res -= cur;
    } else {
      res += cur;
    }
  }
  return res + getVal(s[s.length - 1]); // total so far plus last char, which is not included in the loop
}

console.log(romanToInt('LVIII'));
