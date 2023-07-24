/** https://leetcode.com/problems/remove-duplicates-from-sorted-array/ */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const map = new Map();

    nums.forEach((v) => {
        map.set(v, (map.get(v) + 1) || 1)
    });

    const mapValues = Array.from(map.values());

    for (let i = 0; i < mapValues.length; i++) {
        for (let j = 0; j < mapValues[i] - 1; j++) {
            nums.push(nums.splice(i, 1)[0]);
        }
    }

    return mapValues.length;
};