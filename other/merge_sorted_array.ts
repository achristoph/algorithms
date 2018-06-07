// https://www.interviewcake.com/question/javascript/merge-sorted-arrays

function mergeArrays(myArray, alicesArray) {
  // set up our mergedArray
  var mergedArray = [];

  var currentIndexAlices = 0;
  var currentIndexMine = 0;
  var currentIndexMerged = 0;

  while (currentIndexMerged < myArray.length + alicesArray.length) {
    var isMyArrayExhausted = currentIndexMine >= myArray.length;
    var isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

    // case: next comes from my array
    // my array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) the current element in my array is less
    //    than the current element in Alice's array
    if (
      !isMyArrayExhausted &&
      (isAlicesArrayExhausted ||
        myArray[currentIndexMine] < alicesArray[currentIndexAlices])
    ) {
      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;

      // case: next comes from Alice's array
    } else {
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
      currentIndexAlices++;
    }

    currentIndexMerged++;
  }

  return mergedArray;
}

// Complexity
// O(n) time and O(n) additional space, where nn is the number of items in the merged array.

// The added space comes from allocating the mergedArray. There's no way to do this " in-place" ↴ because neither of our input arrays are necessarily big enough to hold the merged array.

// But if our inputs were linked lists, we could avoid allocating a new structure and do the merge by simply adjusting the next pointers in the list nodes!

// In our implementation above, we could avoid tracking currentIndexMerged and just compute it on the fly by adding currentIndexMine and currentIndexAlices. This would only save us one integer of space though, which is hardly anything. It's probably not worth the added code complexity.

// Bonus
// What if we wanted to merge several sorted arrays? Write a function that takes as an input an array of sorted arrays and outputs a single sorted array with all the items from each array.

// Do we absolutely have to allocate a new array to use for the merged output? Where else could we store our merged array? How would our function need to change?
