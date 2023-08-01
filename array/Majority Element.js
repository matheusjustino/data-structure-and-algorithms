/** https://leetcode.com/problems/majority-element/ */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const middle = Math.floor(nums.length / 2);
    nums.sort((a, b) => a - b)
    return nums[middle];
};
