/** https://leetcode.com/problems/pascals-triangle/ */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];

    for (let i = 0; i < numRows; i++) {
        result.push(Array(i + 1));

        for (let j = 0; j < i + 1; j++) {
            if (j === 0) {
                result[i][j] = 1;
            } else if (j === i) {
                result[i][j] = 1;
            } else {
                result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
            }
        }
    }

    return result;
};
