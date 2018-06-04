// var pivotIndex = function(nums) {
//   let sum1 = 0,
//     sum2 = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum1 = 0,
//       sum2 = 0;
//     for (let j of nums.slice(0, i)) {
//       sum1 += j;
//     }
//     for (let k of nums.slice(i + 1, nums.length)) {
//       sum2 += k;
//     }
//     if (sum1 == sum2) {
//       return i;
//     }
//   }
//   return -1;
// };
var pivotIndex = function(nums) {
  let sum = 0,
    leftsum = 0;
  for (let x of nums) sum += x;
  for (let i = 0; i < nums.length; ++i) {
    if (leftsum == sum - leftsum - nums[i]) return i;
    leftsum += nums[i];
  }
  return -1;
};
console.log(pivotIndex([-1, -1, -1, 0, 1, 1]));
