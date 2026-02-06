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
  // corner cases
  if (!head || !head.next) return head;
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }
  k = k % length;
  let s = head;
  let f = head;
  for (let i = 0; i < k; i++) {
    f = f.next;
  }

  while (f.next) {
    s = s.next;
    f = f.next;
  }

  f.next = head;
  let newHead = s.next;
  s.next = null;
  return newHead;
};
