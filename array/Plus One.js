/** https://leetcode.com/problems/plus-one/ */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let index = digits.length - 1;
  
  while (true) {
      let temp = digits[index] + 1;

      if (temp === 10) {
          digits[index] = 0;

          if (digits[index - 1] !== undefined) {
              if (digits[index - 1] + 1 === 10) {
                  index--;
                  continue;
              } else {
                  digits[index - 1] += 1;
                  break;
              }
          }

          if (digits[index - 1] === undefined) {
              digits.splice(index, 0, 1);
              break;
          }
      } else {
          digits[index] = temp;
          break;
      }

      index--;
  }

  return digits;
};