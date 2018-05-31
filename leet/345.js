function reverseVowels(s) {
  const vowels = new Set(['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O']);
  let start = 0,
    end = s.length - 1;
  let sa = Array.from(s);
  while (start < end) {
    while (start < end && !vowels.has(s[start])) {
      start++;
    }
    while (start < end && !vowels.has(s[end])) {
      end--;
    }
    [sa[start], sa[end]] = [sa[end], sa[start]];
    start++;
    end--;
  }
  return sa.join('');
}

reverseVowels('hello');
