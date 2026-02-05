/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }
  k = k % length;
  // corner case
  if (length === 0) return null;
  if (length === 1 || k === 0) return head;
  let slow = head;
  let fast = head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  let prev = slow;
  slow = slow.next;
  prev.next = null;
  fast.next = head;
  return slow;
};
