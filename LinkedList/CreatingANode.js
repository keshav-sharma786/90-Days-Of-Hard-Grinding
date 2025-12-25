
// creating a node in the linked list 
function Node(val) {
    // we basically have to pass the 2 parameters
    console.log(this);// empty object/node  
    this.val = val;
    this.next = null;
    console.log(this);
    // return this;
}

let newNode = new Node(5);

console.log(newNode);// A simple javascript object
console.log(newNode.val);