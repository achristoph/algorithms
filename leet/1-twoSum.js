var twoSum = function(nums, target) {
  let d = new Map();
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    let complement = target - e;
    if (d.has(complement)) {
      return [d.get(complement), i];
    }
    d.set(e, i);
  }
  throw new Error('No two sum solution');
};

var output = twoSum([5, 7, 5, 3], 10);
console.log(output);
