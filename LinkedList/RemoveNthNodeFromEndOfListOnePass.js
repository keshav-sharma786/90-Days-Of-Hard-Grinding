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
  // step 1 => Traversing the linked list for
  // finding out the length of linked list
  let length = 0;
  let curr = head;
  while (curr) {
    length = length + 1;
    curr = curr.next;
  }

  // step 2 => creating a sentinel node
  let sentinel = new ListNode();
  // pointing the sentinel node towards head
  sentinel.next = head;
  let prev = sentinel;
  let countOfNodeToBeDeleted = 1;
  while (prev && prev.next) {
    if (countOfNodeToBeDeleted === length - n + 1) {
      prev.next = prev.next.next;
      break;
    } else {
      countOfNodeToBeDeleted++;
      prev = prev.next;
    }
  }
  return sentinel.next;
};
