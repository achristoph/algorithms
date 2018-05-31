'use strict';
function solution(a) {
  let seen = Array(a.length).fill(false);

  for (let i of a) {
    if (0 < i <= a.length) {
      seen[i-1] = true;
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (seen[i] == false){
      return i+1
    }
  }
  return a.length+1;
}

console.log(solution([100]));
