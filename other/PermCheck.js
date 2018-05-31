'use strict';

function solution(a) {
  let counter = Array(a.length).fill(0);

  for (let e of a) {
    console.log(e > a.length);
    if ((e <= 0) || (e > a.length)){
      return 0;
    }
    else {
      if(counter[e-1] === 1){
        return 0;
      }
      else {
        counter[e-1] = 1;
      }
    }
  }
  return 1;
}

console.log(solution([4,1,3]));
