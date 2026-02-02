/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let start = null;
  let headStart;
  if (l1.val < l2.val) {
    start = l1;
    headStart = start;
    l1 = l1.next;
  } else {
    start = l2;
    headStart = start;
    l2 = l2.next;
  }
  while (l1 && l2) {
    if (l2.val < l1.val) {
      start.next = l2;
      start = start.next;
      l2 = l2.next;
    } else {
      start.next = l1;
      start = start.next;
      l1 = l1.next;
    }
  }

  while (l1) {
    start.next = l1;
    start = start.next;
    l1 = l1.next;
  }

  while (l2) {
    start.next = l2;
    start = start.next;
    l2 = l2.next;
  }

  return headStart;
};
