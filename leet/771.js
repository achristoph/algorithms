var numJewelsInStones = function(J, S) {
  let count = 0;
  let s = new Set(J);
  for (const j of S) {
    if (J.includes(j)) {
      count += 1;
    }
  }
  return count;
};

let J = 'aA';
let S = 'ABC';
var output = numJewelsInStones(J, S);
console.log(output);
