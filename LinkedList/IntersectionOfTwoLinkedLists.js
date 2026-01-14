/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let hashSet = new Set();
  // put all elements of headB into set
  let curr = headB;
  while (curr) {
    hashSet.add(curr);
    curr = curr.next;
  }

  // looping on headA List
  curr = headA;
  while (curr) {
    if (hashSet.has(curr)) {
      return curr;
    }
    curr = curr.next;
  }

  return null;
};
