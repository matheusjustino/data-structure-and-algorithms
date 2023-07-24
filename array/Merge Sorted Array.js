/** https://leetcode.com/problems/merge-sorted-array/ */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let oldNums1 = [...nums1];
  let indexM = 0;
  let indexN = 0;

  for (let i = 0; i < nums1.length; i++) {
      if (oldNums1[indexM] <= nums2[indexN]) {
          if (m) {
              nums1[i] = oldNums1[indexM];
              m--;
              indexM++;
          } else {
              nums1[i] = nums2[indexN];
              n--;
              indexN++;
          }
      } else {
          if (n) {
              nums1[i] = nums2[indexN];
              n--;
              indexN++;
          } else {
              nums1[i] = oldNums1[indexM];
              m--;
              indexM++;
          }
      }
  }

  return nums1;
};