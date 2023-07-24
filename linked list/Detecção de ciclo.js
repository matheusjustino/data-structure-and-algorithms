/** https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem */

/**
 * 
   For your reference:
  
   SinglyLinkedListNode:
       int data
       SinglyLinkedListNode next

  A linked list is said to contain a cycle if any node is visited more than once while traversing the list.
  Given a pointer to the head of a linked list, determine if it contains a cycle.
  If it does, return 1 Otherwise, return 0.
 */

let visited = [];

function hasCycle(currNode) {
    if (visited.includes(currNode)) {
        return 1;
    } else {
        if (currNode.next === null) {
            return 0;
        }
        visited.push(currNode);
        return hasCycle(currNode.next);
    }
}