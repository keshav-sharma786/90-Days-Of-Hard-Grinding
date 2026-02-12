/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // Step 1 => calcullate the length of list
  let curr = head;
  let length = 0;
  while (curr) {
    curr = curr.next;
    length++;
  }
  // step 2 => Making the formula for reaching
  // nth node from end of list
  // Creating a sentinel node
  let sentinel = new ListNode();
  sentinel.next = head;
  let prev = sentinel;
  for (let i = 0; i < length - n; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinel.next;
};
