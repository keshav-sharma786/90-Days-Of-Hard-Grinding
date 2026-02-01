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
var mergeTwoLists = function (list1, list2) {
  let newNode = null;
  let ans = new ListNode();
  let ansHead = ans;
  // let prev = null;
  let l1 = list1;
  let l2 = list2;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      newNode = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      newNode = new ListNode(l2.val);
      l2 = l2.next;
    }
    // if (prev !== null) {
    //     prev.next = newNode;
    // }
    // prev = newNode;
    ans.next = newNode;
    ans = ans.next;
  }
  while (l1) {
    newNode = new ListNode(l1.val);
    l1 = l1.next;
    // if (prev !== null) {
    //     prev.next = newNode;
    // }
    // prev = newNode;
    ans.next = newNode;
    ans = ans.next;
  }
  while (l2) {
    newNode = new ListNode(l2.val);
    l2 = l2.next;
    // if (prev !== null) {
    //     prev.next = newNode;
    // }
    // prev = newNode;
    ans.next = newNode;
    ans = ans.next;
  }
  return ansHead.next;
};
