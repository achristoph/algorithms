'use strict';

function solution(x,y,d) {
  let dist = y-x;

  return Math.ceil(dist/d);
}

console.log(solution(10,85,30));
