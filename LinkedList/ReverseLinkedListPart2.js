/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // corner case
  if (left === right) return head;
  let leftNode = null;
  let leftPrev = null;
  let rightNode = null;
  let rightNext = null;
  let pointer = 1;
  let prev = null;
  let curr = head;
  // finding the leftNode and rightNode
  while (curr !== null) {
    if (pointer === left) {
      leftNode = curr;
      leftPrev = prev;
    } else if (pointer === right) {
      rightNode = curr;
      rightNext = rightNode.next;
    }
    if (leftNode && rightNode) {
      break;
    }
    if (!leftNode) prev = curr;
    curr = curr.next;
    pointer++;
  }
  // now reversing the linked list from left to right
  curr = leftNode.next;
  prev = leftNode;
  while (curr !== rightNext) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  // handle this if corner case correctly
  if (leftPrev === null && rightNext === null) {
    leftNode.next = null;
    return rightNode;
  } else if (leftPrev === null && rightNext !== null) {
    leftNode.next = rightNext;
    return rightNode;
  }
  leftPrev.next = rightNode;
  leftNode.next = rightNext;
  return head;
};
// keep up the good work self attempted !!!