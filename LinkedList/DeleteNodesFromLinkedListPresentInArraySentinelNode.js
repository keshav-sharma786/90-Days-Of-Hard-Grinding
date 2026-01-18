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
  // Approach 02
  // Using the concept of sentinel / Dummy Node
  // 1 loop

  // Step1 => storing the array elements into set
  let hashSet = new Set([...nums]);
  let sentinel = new ListNode();
  sentinel.next = head;
  let prev = sentinel;
  while (prev && prev.next) {
    if (hashSet.has(prev.next.val)) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinel.next;
};
