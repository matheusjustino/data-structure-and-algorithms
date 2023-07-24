/** https://leetcode.com/problems/add-two-numbers/description/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let oldL1 = l1;
  let oldL2 = l2;
  let lengthL1 = 0;
  let lengthL2 = 0;

  while (l1) {
      lengthL1 += 1;
      l1 = l1.next;
  }
  while (l2) {
      lengthL2 += 1;
      l2 = l2.next;
  }

  function resolve(node1, node2) {
      if (node1) {
          let sum = node1.val;
          if (node2) {
              sum += node2.val;
          }

          if (sum < 10) {
              node1.val = sum;
              resolve(node1?.next, node2?.next);
          } else if (sum === 10) {
              node1.val = 0;
              if (!node1.next) {
                  node1.next = new ListNode(1, undefined);
                  return node1;
              } else {
                  node1.next.val = node1?.next.val + 1;
                  resolve(node1?.next, node2?.next);
              }
          } else {
              node1.val = sum - 10;
              if (!node1.next) {
                  node1.next = new ListNode(1, undefined);
                  return node1;
              } else {
                  node1.next.val = node1?.next.val + 1;
                  resolve(node1?.next, node2?.next);
              }
          }
      }

      return node1;
  }

  let result = lengthL1 >= lengthL2 ? resolve(oldL1, oldL2) : resolve(oldL2, oldL1);
  return result;
};