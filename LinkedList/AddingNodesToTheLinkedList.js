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
