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
  let slow = head;
  let fast = head;
  // Step 1 => Finding the Middle Node
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2 => We basically now have to reverse the    second half of the Linked List
  let prev = null;
  let curr = slow;

  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // Step 3 => Checking and validating pallindrome
  let firstNode = head;
  let lastNode = prev;
  while (lastNode !== null) {
    if (firstNode.val !== lastNode.val) {
      return false;
    }
    firstNode = firstNode.next;
    lastNode = lastNode.next;
  }

  return true;
};
