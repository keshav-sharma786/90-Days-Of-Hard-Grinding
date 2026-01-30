/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // Step1 => Reversing both linked lists
  function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
      // storing next node inside temp
      // so that I can always have it's
      // access
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    head = prev;
    return head;
  }
  // Calling reverseList for l1
  l1 = reverseList(l1);
  // Calling reverseList for l2
  l2 = reverseList(l2);
  // Step 2 => Adding 2 Linked Lists
  // with sum, carry and digitToBeAdded
  let carry = 0;
  let countOfHead = 0;
  let prev = null;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
    let digitToAdd = sum % 10;
    carry = Math.floor(sum / 10);
    // Create a newNode and store digitToAdd in it
    let newNode = new ListNode(digitToAdd);
    // let prev = null;
    if (countOfHead === 0) {
      newNode.next = null;
      prev = newNode;
    } else {
      newNode.next = prev;
      prev = newNode;
    }
    countOfHead++;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return prev;
};
