/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // very very very interesting problem

  // Step 1 => Find the middle Node
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2 => Reverse the linked List from middle node
  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // step 3 ==> Main logic
  let sentinel = new ListNode();
  let newHead = sentinel;
  sentinel.next = head;
  sentinel = sentinel.next;
  while (prev && prev.next) {
    head = head.next;
    sentinel.next = prev;
    sentinel = sentinel.next;
    prev = prev.next;
    sentinel.next = head;
    sentinel = sentinel.next;
  }

  return newHead.next;
};
