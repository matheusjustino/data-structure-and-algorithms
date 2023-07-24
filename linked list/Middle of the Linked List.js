/** https://leetcode.com/problems/middle-of-the-linked-list/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  if (!head.next) return head;

  let oldHead = head;
  let headLength = 0;

  while(head) {
      headLength += 1;
      head = head.next;
  }

  for (let i = 0; i < Math.floor(headLength / 2); i++) {
      oldHead = oldHead.next;
  }

  return oldHead;
};