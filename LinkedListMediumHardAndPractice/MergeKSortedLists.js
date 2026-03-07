/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (arr) {
  // let us conquer this problem today itself

  // corner case
  if (arr.length === 0) return null;

  // Step 1 => create a helper function which will
  // basically merge the 2 sorted lists
  function mergeHelper(l1, l2) {
    let sentinel = new ListNode();
    let newHead = sentinel;
    while (l1 && l2) {
      if (l2.val < l1.val) {
        sentinel.next = l2;
        sentinel = sentinel.next;
        l2 = l2.next;
      } else {
        sentinel.next = l1;
        sentinel = sentinel.next;
        l1 = l1.next;
      }
    }
    if (!l1) {
      sentinel.next = l2;
    }

    if (!l2) {
      sentinel.next = l1;
    }

    return newHead.next;
  }

  // Main Logic
  while (arr.length !== 1) {
    let l1 = arr[arr.length - 1];
    let l2 = arr[arr.length - 2];
    arr.pop();
    arr.pop();
    let mergedList = mergeHelper(l1, l2);
    arr.push(mergedList);
  }

  return arr[0];
};
