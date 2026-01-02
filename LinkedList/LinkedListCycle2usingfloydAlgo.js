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
  // approach 2 => using floyd cycle algorithm
  let slow = head;
  let fast = head;
  if (fast === null || fast.next === null) return null;
  while (fast !== null || fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow || fast === null || fast.next === null) {
      break;
    }
  }
  if (fast === null || fast.next === null) return null;
  let temp = head;
  while (temp !== slow) {
    slow = slow.next;
    temp = temp.next;
  }
  return temp;
};
