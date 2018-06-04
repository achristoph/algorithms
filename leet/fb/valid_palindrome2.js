function isPalindromRange(s, i, j) {
  for (let k = i; k <= i + Math.floor((j - i) / 2); k++) {
    if (s[k] != s[j - k + i]) {
      return false;
    }
  }
  return true;
}
function validPalindrome(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] != s[s.length - 1 - i]) {
      let j = s.length - 1 - i;
      return isPalindromRange(s, i + 1, j) || isPalindromRange(s, i, j - 1);
    }
  }
  return true;
}

console.log(validPalindrome('abbca'));
