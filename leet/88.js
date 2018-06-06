function merge(A, m, B, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  while (i >= 0 && j >= 0) {
    A[k--] = A[i] > B[j] ? A[i--] : B[j--];
  }
  while (j >= 0) {
    A[k--] = B[j--];
  }
}
let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
merge(nums1, m, nums2, n);
