function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.addAtTail = function (val) {
  // looping on linkedlist and reach it's tail
  let newNode = new Node(val);
  if (this.size === 0) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = newNode;
  }
  this.size++;
};

LinkedList.prototype.traversal = function () {
  let linkedList = "";
  let curr = this.head;
  while (curr != null) {
    linkedList = linkedList + curr.val + " -> ";
    curr = curr.next;
  }
  console.log(linkedList);
};

let list = new LinkedList();
list.addAtTail(1);
list.addAtTail(2);
list.traversal();
