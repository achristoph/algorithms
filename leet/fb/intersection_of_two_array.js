function intersect(nums1, nums2) {
  let d = new Map();

  for (const e of nums1) {
    if (!d.has(e)) {
      d.set(e, 1);
    } else {
      d.set(e, d.get(e) + 1);
    }
  }

  let arr = [];
  for (const e of nums2) {
    if (d.has(e) && d.get(e) > 0) {
      arr.push(e);
      d.set(e, d.get(e) - 1);
    }
  }
  return arr;
}

//What if the given array is already sorted? How would you optimize your algorithm?
function intersectSorted(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0,
    j = 0;
  res = [];

  while (i < nums1.length || j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      // equal
      res.push(nums1[i]);
      i++;
      j++;
    }
  }

  return res;
}

//What if nums1's size is small compared to nums2's size? Which algorithm is better?

console.log(intersectSorted([1, 2, 2, 1], [2, 2]));
