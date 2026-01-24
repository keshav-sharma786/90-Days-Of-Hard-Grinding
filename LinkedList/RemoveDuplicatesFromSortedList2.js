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
var deleteDuplicates = function (head) {
  if (head === null) return head;
  let sentinel = new ListNode();
  sentinel.next = head;
  let prev = sentinel;
  let firstPtr = head;
  let secPtr = head.next;
  let countOfDuplicateNodes = 0;
  while (secPtr !== null) {
    if (firstPtr.val === secPtr.val) {
      secPtr = secPtr.next;
      countOfDuplicateNodes++;
    } else {
      if (countOfDuplicateNodes > 0) {
        prev.next = secPtr;
        firstPtr = secPtr;
        secPtr = secPtr.next;
        countOfDuplicateNodes = 0;
      } else {
        prev = firstPtr;
        firstPtr = secPtr;
        secPtr = secPtr.next;
      }
    }
  }
  if (countOfDuplicateNodes > 0) {
    prev.next = secPtr;
  }

  return sentinel.next;
};
