/** https://leetcode.com/problems/longest-common-prefix/ */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];
    if (!strs.length) return '';

    strs = strs.sort((a, b) => a.length - b.length);
    let subStr = [];

    for (let i = 1; i < strs[0].length + 1; i++) {
        subStr.push(strs[0].substring(0, i))
    }

    let prefix = '';
    for (let i = 0; i < subStr.length; i++) {
        let sub = subStr[i];

        let allHasSubStr = strs.reduce((prev, curr) => {
            return prev && curr.startsWith(sub);
        }, true);

        if (allHasSubStr) {
            if (sub.length > prefix.length) prefix = sub;
        }
    }

    return prefix;
};