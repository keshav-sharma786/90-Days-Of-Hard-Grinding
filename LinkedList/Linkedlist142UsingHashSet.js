/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // approach 1 => using a hash set
  let seenNode = new Set();
  let curr = head;
  while (curr !== null) {
    if (!seenNode.has(curr)) {
      seenNode.add(curr);
      curr = curr.next;
    } else {
      return curr;
    }
  }
  return null;
};
