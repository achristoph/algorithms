'use strict';

function solution(a){
  let ans = a.length + 1;
  for (var i = 0; i < a.length; i++) {
    ans = ans ^ a[i] ^ i+1;
  }
  return ans;
}
