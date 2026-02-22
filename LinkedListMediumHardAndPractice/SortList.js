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
var sortList = function (head) {
  // We will conquer this problem on sunday
  // By Using Recursion
  // making a helper merge function
  if (!head) return head;
  function merge(l1, l2) {
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
  }
  if (head.next === null) return head;
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // dividing the list into 2 equal parts
  prev.next = null;
  let left = sortList(head);
  let right = sortList(slow);
  return merge(left, right);
};
