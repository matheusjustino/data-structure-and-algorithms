/** https://leetcode.com/problems/palindrome-linked-list/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head.next) return true;
  
  let val = head.val;
  let next = head.next;
  const arr = [];
  while (next) {
      arr.push(val);
      val = next.val;
      next = next.next;
  };
  arr.push(val);

  let result = true;
  for (let i = 0; i < arr.length / 2; i += 1) {
      if (arr[i] !== arr[arr.length - i - 1]) {
          result = false;
          break;
      }
  }
  return result;
};