/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // if (head === null) return false;
  if (head.next === null) return true;
  // First Step => finding the middle element
  let prev = null;
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // Second Step => Reversing the second half of ll
  curr = slow;
  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  // Third Step => checking for pallindrome
  let start = head;
  let end = prev;
  while (start !== slow) {
    if (start.val !== end.val) {
      return false;
    }
    start = start.next;
    end = end.next;
  }
  return true;
};
