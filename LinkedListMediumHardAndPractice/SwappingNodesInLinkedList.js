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
var swapNodes = function (head, k) {
  // let us conquer this problem today
  let sentinel = new ListNode();
  sentinel.next = head;
  let slow = sentinel;
  let fast = sentinel;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  let fastPtr = fast;
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  let temp = fastPtr.val;
  fastPtr.val = slow.val;
  slow.val = temp;
  return sentinel.next;
};
