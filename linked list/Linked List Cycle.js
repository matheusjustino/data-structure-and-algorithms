/** https://leetcode.com/problems/linked-list-cycle/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fastPointer = head;

    while (fastPointer && fastPointer.next) {
        head = head.next;
        fastPointer = fastPointer.next.next;

        if (head == fastPointer) return true;
    }

    return false;
};
