// function addBinary(a, b) {
//   let s = [];
//   for (i = a.length - 1, j = b.length - 1, carry = 0; i >= 0 || j >= 0; ) {
//     let sum = carry;
//     if (j >= 0) {
//       s.push(Number.parseInt(b[j]));
//     }
//     if (i >= 0) {
//       s.push(Number.parseInt(a[i]));
//     }
//     i -= 1;
//     j -= 1;
//     s.push(sum % 2);
//     carry = Math.floor(sum / 2);
//     if (carry != 0) {
//       s.push(carry);
//     }
//   }
//   console.log(s);
//   console.log(s.reverse());
// }

function addBinary(a, b) {
  return (a + b).toString(2);
}
let a = '11',
  b = '1';
console.log(addBinary(a, b));
console.log(a - '0');
console.log(b - '0');
