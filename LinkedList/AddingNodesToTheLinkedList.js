function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.addAtHead = function (val) {
  console.log(this);
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

// Create linked list
let list = new LinkedList();
console.log(list);

// Add nodes
list.addAtHead(5);
list.addAtHead(6);

console.log(list);

// Adding a newNode at the Tail
LinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head === null) {
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

list.addAtTail(7);
list.addAtTail(8);

// adding element at index
LinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new Node(val);
  // handle the corner cases
  if (index === 0) {
    this.addAtHead(val);
    return;
  } else if (index === this.size) {
    this.addAtTail(val);
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

list.addAtIndex(2, 9);

// Linked List Traversal
LinkedList.prototype.traverse = function () {
  let current = this.head;
  let str = "";
  while (current) {
    str += current.val;
    if (current.next) str += " -> ";
    current = current.next;
  }

  console.log(str);
};

list.traverse();
