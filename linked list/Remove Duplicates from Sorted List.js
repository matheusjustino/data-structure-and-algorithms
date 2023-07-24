/** https://leetcode.com/problems/remove-duplicates-from-sorted-list/ */

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
var deleteDuplicates = function(head) {
  const resolve = (node) => {
      if (node?.next) {
          if (node.val === node.next.val) {
              node.next = node.next?.next;
              return resolve(node);
          }
          return resolve(node?.next);
      }
      return node;
  }

  resolve(head);
  return head;
};