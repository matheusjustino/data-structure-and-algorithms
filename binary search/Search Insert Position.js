/** https://leetcode.com/problems/search-insert-position/description/ */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function binarySearch(arr, x, start, end) {
  if (start > end) return start;

  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) return mid;

  if (arr[mid] > x) {
      return binarySearch(arr, x, start, mid - 1);
  } else {
      return binarySearch(arr, x, mid + 1, end);
  }
}

var searchInsert = function(nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};