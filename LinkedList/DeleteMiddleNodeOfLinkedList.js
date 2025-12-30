/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // looping over the linked list until we reach the middle node
  let curr = head;
  // special corner case
  if (curr.next === null) {
    // means there is a single node present only in linked list
    head = null;
  } else {
    while (curr.next !== slow) {
      curr = curr.next;
    }
    // finally deleting the middle node
    curr.next = slow.next;
    // finally returning the head of linked list
  }
  return head;
};
