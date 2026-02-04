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

  // k = k % length;
  curr = head;
  let prev = null;
  for (let i = 1; i < length - k + 1; i++) {
    prev = curr;
    curr = curr.next;
  }
  prev.next = null;
  let currHead = curr;
  while (curr.next) {
    curr = curr.next;
  }
  curr.next = head;
  return currHead;
};
