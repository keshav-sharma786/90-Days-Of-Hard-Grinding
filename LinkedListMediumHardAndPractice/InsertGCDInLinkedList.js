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
var insertGreatestCommonDivisors = function (head) {
  // corner cases
  if (!head || !head.next) return head;
  // helper gcd function
  function gcdHelper(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  let i = head;
  let j = head.next;
  while (j !== null) {
    let gcdVal = gcdHelper(i.val, j.val);
    let newNode = new ListNode(gcdVal);
    i.next = newNode;
    newNode.next = j;
    i = j;
    j = j.next;
  }

  return head;
};
