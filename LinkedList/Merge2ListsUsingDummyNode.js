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
  // Approach 2 => Using a dummy node.
  let sentinel = new ListNode();
  let sentinelStart = sentinel;
  while (l1 && l2) {
    if (l2.val < l1.val) {
      sentinel.next = l2;
      l2 = l2.next;
    } else {
      sentinel.next = l1;
      l1 = l1.next;
    }
    sentinel = sentinel.next;
  }
  if (!l1) {
    sentinel.next = l2;
  } else {
    sentinel.next = l1;
  }
  return sentinelStart.next;
};
