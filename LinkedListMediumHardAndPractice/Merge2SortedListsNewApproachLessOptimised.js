/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // Approach1 => using extra space
  // some corner cases to handle
  if (!l1 && !l2) return null;
  if (!l1 && l2) return l2;
  if (!l2 && l1) return l1;
  let countStart = 0;
  let newHead = null;
  let curr = null;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      let newNode = new ListNode(l1.val);
      countStart++;
      l1 = l1.next;
      if (countStart === 1) {
        newHead = newNode;
        curr = newHead;
      } else {
        curr.next = newNode;
        curr = curr.next;
      }
    } else {
      let newNode = new ListNode(l2.val);
      countStart++;
      l2 = l2.next;
      if (countStart === 1) {
        newHead = newNode;
        curr = newHead;
      } else {
        curr.next = newNode;
        curr = curr.next;
      }
    }
  }

  while (l1) {
    let newNode = new ListNode(l1.val);
    l1 = l1.next;
    curr.next = newNode;
    curr = curr.next;
  }

  while (l2) {
    let newNode = new ListNode(l2.val);
    l2 = l2.next;
    curr.next = newNode;
    curr = curr.next;
  }

  return newHead;
};
