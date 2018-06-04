function isPalindrome(s) {
  let a = s.split('');
  for (let i = 0, j = s.length - 1; i < j; ) {
    if (!s[i].match(/[a-zA-Z0-9]+/)) {
      i++;
      continue;
    }
    if (!s[j].match(/[a-zA-Z0-9]+/)) {
      j--;
      continue;
    }
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('radar!!'));
