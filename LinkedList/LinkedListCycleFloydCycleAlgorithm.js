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
var hasCycle = function (head) {
  if (head === null) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    // if ll has no cycle
    if (fast === null || fast.next === null) {
      return false;
    }
    // Move the slow pointer by one step
    slow = slow.next;
    // Move the fast pointer by two steps
    fast = fast.next.next;
  }
  // if loop breaks that means slow === fast
  // means there is a cycle in the Linked List
  return true;
};
