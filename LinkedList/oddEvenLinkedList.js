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
var oddEvenList = function (head) {
  // Let us conquer this problem on Saturday
  if (head === null) return head;
  let odd = head;
  oddHead = odd;
  let even = head.next;
  let evenHead = even;
  while (odd !== null && even !== null) {
    if (odd.next !== null) {
      odd.next = odd.next.next;
      odd = odd.next;
    }
    if (even.next !== null) {
      even.next = even.next.next;
      even = even.next;
    }
  }

  while (oddHead.next !== null) {
    oddHead = oddHead.next;
  }
  oddHead.next = evenHead;

  return head;
};
