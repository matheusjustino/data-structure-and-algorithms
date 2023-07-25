/** https://leetcode.com/problems/pascals-triangle-ii/ */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [];

    for (let i = 0; i < rowIndex + 1; i++) {
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

    return result[rowIndex];
};
