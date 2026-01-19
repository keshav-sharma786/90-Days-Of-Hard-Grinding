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
var removeNodes = function (head) {
  // Step 1 => Reverse the Linked List
  let curr = head;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  // Step 2 => while iterating in reverse order,save
  // the max value that was passed before, and keep
  // removing every node with a smaller value anywhere
  // to left of it
  curr = head;
  let maxNodeVal = curr.val;
  while (curr && curr.next) {
    if (curr.next.val < curr.val) {
      // remove the smaller node on left side
      curr.next = curr.next.next;
    } else {
      // case 1=> if next node value is bigger than
      // current node
      if (curr.next.val > curr.val) {
        // update maxNode val
        maxNodeVal = curr.next.val;
        // bring curr to next / max node
        curr = curr.next;
      }
      // case 2 => if next node value is exactly
      // similar to curr node, just increment the curr
      // pointer to that node, no need to update the
      // maxNodeVal
      else if (curr.next.val === curr.val) {
        // just update the curr pointer
        curr = curr.next;
      }
    }
  }
  // Last Step => again reverse the list
  curr = head;
  prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  return head;
};
