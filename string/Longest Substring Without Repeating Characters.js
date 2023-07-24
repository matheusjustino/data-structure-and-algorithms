/** https://leetcode.com/problems/longest-substring-without-repeating-characters/ */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let subStr = '';

    for (let i = 0; i < s.length; i++) {
        let tempSubStr = '';
        for (let j = i; j < s.length; j++) {
            let char = s[j];
            if (tempSubStr.includes(char)) {
                break;
            }

            tempSubStr += char;
        }

        if (tempSubStr.length > subStr.length) {
            subStr = tempSubStr;
        }
    }

    return subStr.length;
};