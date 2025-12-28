// function to create a new node
function Node(val) {
  this.val = val;
  this.next = null;
}

// Initialising Linked List
function LinkedList() {
  this.head = null;
  this.size = 0;
}

// addAtHead function
LinkedList.prototype.addAtHead = function (val) {
  // Create a new Node
  console.log(this);
  let newNode = new Node(val);
  // main logic
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

// addAtTail function
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

// addAtIndex


LinkedList.prototype.traversal = function () {
  let linkedList = "";
  let curr = this.head;
  while (curr != null) {
    linkedList = linkedList + curr.val + " -> ";
    curr = curr.next;
  }
  console.log(linkedList);
};

// console.log(LinkedList.prototype);

let list = new LinkedList();
// console.log(list);
list.addAtHead(1);
list.addAtHead(2);
list.addAtTail(3);

// addAtTail

// Traversing the linked List
list.traversal();
