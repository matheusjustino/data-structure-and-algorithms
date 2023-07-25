/** https://leetcode.com/problems/single-number/ */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
  
    // using XOR operator
    for (let num of nums) {
        result ^= num;
    }
    
    return result;
};
