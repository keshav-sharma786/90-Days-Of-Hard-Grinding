/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  // Totally Similar to the Pallindrome Linked List
  // Problem

  // Step 1 => Finding the middle Node
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2 => Reversing second half of LL
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // Step 3 => Calculating the maximum twin sum
  let firstNode = head;
  let lastNode = prev;
  let maxTwinSum = -Infinity;

  while (lastNode) {
    if (firstNode.val + lastNode.val > maxTwinSum) {
      maxTwinSum = firstNode.val + lastNode.val;
    }
    firstNode = firstNode.next;
    lastNode = lastNode.next;
  }

  return maxTwinSum;
};
