/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let prev = null;
  // running this while loop only for checking
  // head node
  while (head !== null) {
    if (head.val === val) {
      head = head.next;
    } else {
      break;
    }
  }
  if (head === null) return head;

  // checking for the middle Node
  let curr = head;
  while (curr !== null) {
    if (curr.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  return head;
};
