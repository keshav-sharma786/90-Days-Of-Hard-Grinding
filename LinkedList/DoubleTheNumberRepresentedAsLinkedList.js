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
var doubleIt = function (head) {
  // Step 1 = Reverse the linked List
  let curr = head;
  let prev = null;
  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  // Step 2 = Start multiplying the linked list
  // with 2 from the last Node along with multiply,
  // carry and digitToBeAdded
  let carry = 0;
  let countOfHead = 0;
  let previous = null;
  while (head !== null || carry !== 0) {
    let multiply = (!head ? 0 : head.val) * 2 + carry;
    let digitToBeAdded = multiply % 10;
    carry = Math.floor(multiply / 10);
    // Creating a new Node storing digitToBeAdded
    // as the value inside it.
    let newNode = new ListNode(digitToBeAdded);
    if (countOfHead === 0) {
      newNode.next = null;
      previous = newNode;
    } else {
      newNode.next = previous;
      previous = newNode;
    }
    countOfHead++;
    head = head && head.next;
  }
  return previous;
};
