//Naive
// function lengthOfLongestSubstring(s) {
//   let n = s.length;
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j <= n; j++) {
//       if (allUnique(s, i, j)) {
//         ans = Math.max(ans, j - i);
//       }
//     }
//   }
//   return ans;
// }

// function allUnique(s, start, end) {
//   let set = new Set();
//   for (let i = 0; i < end; i++) {
//     let c = s[i];
//     if (set.has(c)) {
//       return false;
//     }
//     set.add(c);
//   }
//   return true;
// }

function lengthOfLongestSubstring(s) {
  let n = s.length;
  let set = new Set();
  let ans = 0,
    i = 0,
    j = 0;
  while (i < n && j < n) {
    if (!set.has(s[j])) {
      set.add(s[j]);
      j++;
      ans = Math.max(ans, j - i);
    } else {
      set.delete(s[i]);
      i++;
    }
  }
  return ans;
}

function lengthOfLongestSubstringOptimized(s) {
  let n = s.length,
    ans = 0;

  let map = new Map();

  for (let i = 0, j = 0; j < n; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i);
    }
    ans = Math.max(ans, j - i + 1);
    map.set(s[j], j + 1);
  }
  return ans;
}

// console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstringOptimized('abcabcbb'));
