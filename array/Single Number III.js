/** https://leetcode.com/problems/single-number-iii/ */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const countMap = {};
  const deletedMap = {};

  nums.forEach((n) => {
      if (deletedMap[n]) return;

      countMap[n] = (countMap[n] || 0) + 1;

      if (countMap[n] > 1) {
          delete countMap[n];
          deletedMap[n] = 1;
      };
  });

  return Object.keys(countMap);
};