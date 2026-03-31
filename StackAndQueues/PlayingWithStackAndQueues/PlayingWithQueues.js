//? Queue is nothing but an Array with the restricted operations.

let queue = [];

// enqueue values in the queue
queue.push(1);// enqueue
queue.push(2);
queue.push(3);
queue.push(4);

console.log(queue);

// dequeue values inside the queue => shift() will basically remove the first element of the queue.
queue.shift();// dequeue


// How will I find out the front value of my Queue ?????

let front = queue[0];

console.log(front);

console.log(queue);