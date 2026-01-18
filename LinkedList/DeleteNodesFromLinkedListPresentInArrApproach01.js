/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
  // solving this problem using hashSet
  // Approach 01
  // Using the concept of previous Node and
  // 2 loops

  // Step1 => storing the array elements into set
  let hashSet = new Set([...nums]);
  let prev = null;

  // Step2 => Running this loop only for deleting
  // elements at head/start
  while (head !== null) {
    if (hashSet.has(head.val)) {
      // delete that node by moving head pointer
      // to next node
      head = head.next;
    } else {
      break;
    }
  }
  if (head === null) return head;

  // Step 3 => Running this loop for deleting middle
  // node elements
  let curr = head;
  while (curr !== null) {
    if (hashSet.has(curr.val)) {
      prev.next = prev.next.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
};
