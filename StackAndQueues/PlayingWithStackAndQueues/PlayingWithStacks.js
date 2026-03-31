// Playing with stacks and Queues

// In Javascript,you can simply use your arrays as the stack data structure
let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);

console.log(stack);

stack.pop();

console.log(stack);

stack[3]; //~invalid stack operation.

// To find the top of the stack in Javascript, we have to use a way of arrays,how do you find the last element of array,this is basically what will be the top of the stack.

console.log(stack[stack.length - 1]);
