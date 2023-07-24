/** https://leetcode.com/problems/length-of-last-word/ */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const splited = s.split(' ');
  let lastWord = splited.length - 1;

  while (splited[lastWord] === '') {
      lastWord -= 1;
  }

  return splited[lastWord].length;
};