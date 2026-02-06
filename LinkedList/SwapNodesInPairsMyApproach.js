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
var swapPairs = function (head) {
  // Writing code for even nodes only
  // corner case
  if (!head || !head.next) return head;
  let l1 = head;
  let l2 = head.next;
  let nextNode = l2.next;
  // corner case => in case of even nodes
  if (nextNode === null) {
    l2.next = l1;
    l1.next = null;
    return l2;
  }
  // corner case => in case of odd nodes
  if (nextNode.next === null) {
    l2.next = l1;
    l1.next = nextNode;
    return l2;
  }
  l2.next = l1;
  let newHead = l2;
  l2 = nextNode.next;
  l1.next = l2;
  l1 = nextNode;
  nextNode = l2.next;
  while (nextNode !== null && nextNode.next !== null) {
    l2.next = l1;
    l2 = nextNode.next;
    l1.next = l2;
    l1 = nextNode;
    nextNode = l2.next;
  }
  // corner case => for odd nodes
  if (nextNode !== null && nextNode.next === null) {
    l2.next = l1;
    l1.next = nextNode;
    return newHead;
  }
  l2.next = l1;
  l1.next = null;
  return newHead;
};
