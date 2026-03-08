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
  // Approach 02
  // corner cases
  if (head === null || head.next === null) return head;
  let less = new ListNode();
  let lessHead = less;
  let greater = new ListNode();
  let greaterHead = greater;
  while (head) {
    if (head.val < x) {
      less.next = head;
      less = less.next;
    } else {
      greater.next = head;
      greater = greater.next;
    }

    head = head.next;
  }

  less.next = greaterHead.next;
  greater.next = head;

  return lessHead.next;
};
