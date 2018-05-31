'use strict';

function blocksNo(a, maxBlock) {
  // Initially set the A[0] being an individual block
  let blocksNumber = 0;
  // The number of blocks, that A could be divided to with the restriction
  // that, the sum of each block is less than or equal to maxBlock
  let preBlockSum = a[0];
  for (let e of a.slice(1, a.length)) {
    if (preBlockSum + e > maxBlock) {
      preBlockSum = element;
      blocksNumber += 1;
    } else {
      preBlockSum += e;
    }
  }
  return blocksNumber;
}

function solution(k, m, a) {
  let blocksNeeded = 0;
  let resultLowerBound = Math.max(...a);
  let resultUpperBound = a.reduce((p, c) => p + c);
  let result = 0;

  if (k === 1) return resultUpperBound;
  if (k >= a.length) return resultLowerBound;

  while (resultLowerBound <= resultUpperBound) {
    let resultMaxMid = (resultLowerBound + resultUpperBound);
    let blocksNeeded = blocksNo(a, resultMaxMid);
    if (blocksNeeded <= k) {
      resultUpperBound = resultMaxMid - 1;
      result = resultMaxMid;
    }
  }
  result;
}

console.log(Math.max(...[2, 1, 5, 1, 2, 2, 2]));
let a = solution(3, 5, [2, 1, 5, 1, 2, 2, 2]);
console.log(a);
console.log('done');
