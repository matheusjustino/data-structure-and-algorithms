/** https://leetcode.com/problems/top-k-frequent-elements/ */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const mapNums = nums.reduce((prev, curr) => {
      if (prev[curr]) {
          prev[curr] += 1;
      } else {
          prev[curr] = 1;
      }
      return prev;
  }, {});

  const sortedMap = Object.entries(mapNums).sort((a, b) => {
      return b[1] - a[1];
  });

  return Object.values(sortedMap).slice(0, k).map((v) => v[0]);
};