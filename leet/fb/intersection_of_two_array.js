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

function intersectSorted(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
}

console.log(intersectSorted([1, 2, 2, 1], [2, 2]));
