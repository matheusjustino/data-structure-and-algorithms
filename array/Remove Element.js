/** https://leetcode.com/problems/remove-element/description/ */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let freq = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
      if (nums[i] === val) {
          nums.push(nums.splice(i, 1)[0]);
          freq++;
          i--;
          len--;
      }
  }

  return nums.length - freq;
};