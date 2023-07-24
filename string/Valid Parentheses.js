/** https://leetcode.com/problems/valid-parentheses/ */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 1) return false;

    let stack = [];

    function verifyIsOpen(char) {
        return char === '(' || char === '[' || char === '{';
    }
    function verifyIsPair(char1, char2) {
        return  char1 === '(' && char2 === ')' ||
                char1 === '[' && char2 === ']' ||
                char1 === '{' && char2 === '}';
    }

    for (let i = 0; i < s.length; i++) {
        let lastStackChar = stack[stack.length - 1];

        if (verifyIsOpen(s[i])) {
            stack.push(s[i]);
        } else if (verifyIsPair(lastStackChar, s[i])) {
            stack.pop();
        } else {
            return false;
        }
    }

    return !stack.length;
};