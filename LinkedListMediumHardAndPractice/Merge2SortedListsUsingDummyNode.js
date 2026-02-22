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
  // Approach3 => using dummy Node
  // some corner cases to handle
  if (!l1) return l2;
  if (!l2) return l1;
  let sentinel = new ListNode();
  let curr = sentinel;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      curr = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      curr = l2;
      l2 = l2.next;
    }
  }
  if (!l1) {
    curr.next = l2;
  }

  if (!l2) {
    curr.next = l1;
  }

  return sentinel.next;
};
