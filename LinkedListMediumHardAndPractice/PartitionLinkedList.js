/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // Conquering the problem today
  // corner cases
  if (head === null || head.next === null) return head;
  let greaterHead = null;
  let secondSentinel = null;
  let greaterHeadStart = 0;
  let sentinel = new ListNode();
  let newHead = sentinel;
  while (head !== null) {
    if (head.val < x) {
      sentinel.next = head;
      sentinel = sentinel.next;
    } else {
      if (greaterHeadStart === 0) {
        greaterHead = head;
        secondSentinel = greaterHead;
        ++greaterHeadStart;
      } else {
        secondSentinel.next = head;
        secondSentinel = secondSentinel.next;
      }
    }
    head = head.next;
  }
  if (greaterHeadStart === 1) {
    sentinel.next = greaterHead;
    secondSentinel.next = null;
  }
  return newHead.next;
};
