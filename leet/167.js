var twoSum = function(numbers, target) {
  let low = 0,
    high = numbers.length - 1;
  while (low < high) {
    let sum = numbers[low] + numbers[high];
    if (sum === target) {
      return [low + 1, high + 1];
    } else if (sum < target) {
      ++low;
    } else {
      --high;
    }
  }
  return [-1, -1];
};

let numbers = [2, 7, 11, 15],
  target = 18;

var output = twoSum(numbers, target);
console.log(output);
