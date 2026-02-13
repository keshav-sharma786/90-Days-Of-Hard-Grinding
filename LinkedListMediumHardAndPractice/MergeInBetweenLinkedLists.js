/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let sentinel = new ListNode();
  sentinel.next = list1;
  let slow = sentinel;
  let fast = sentinel;
  for (let i = 0; i < a; i++) {
    slow = slow.next;
    fast = fast.next;
  }

  for (let i = a - 1; i < b + 1; i++) {
    fast = fast.next;
  }

  slow.next = list2;

  while (list2.next) {
    list2 = list2.next;
  }

  list2.next = fast;
  return sentinel.next;
};
