>>Queue => Queue is a FIFO Data structure,FIFO means First In First Out.

>>In the queue,you can only add elements from the back i.e 'in',the 'in' operation can only happen from the back.And the out can only happen from the front.That is how the Queue behaves.That is why Queue data structure is called as First In First Out Data Structure.

>>In the queue,elements can only be removed from the front of the queue.That is why it is known as First In First Out.Suppose there are 3 elements which have gone inside the Queue,the element which was gone first inside the queue,that element will be the first one to come out.

>>Common operations and methods that you can perform inside the Queue are => enqueue(add), dequeue(remove), peek/front.

>>enqueue => suppose if i am adding an element in the queue,that is called enqueue operation,you can also call it as adding elements to the queue.

>>dequeue => dequeue means removing the elements from the queue,from the front.That operation is known as dequeue.

>>peek/front => This operation basically finds out what element is there inside the front of the Queue,If i write q.peek(),it will basically returns the element which is present in the front of queue

>>ex => ticket counter (metro station) => that is the example of the Queue data structure.you stand in a queue, the person who goes last in a Queue,that person is the last one to be served,the person who go first inside the queue,is the first one to be served.

>>ex => Operating System Task Scheduling => the task that you schedule first will be executed first.the task that you schedule after that,will be executed later,it will be executed in order.That order is known as Queue.

>>ex => Printers => Suppose I give a print command for a document,meanwhile that document is getting printed,I gave one more document print command,I gave multiple commands of printing multiple documents.So what will happen it will form a queue,and one by one those documents will be printed,one after the another.


## Stack => Stack is basically a LIFO Data structure.Last In First Out Data structure.

## LIFO [Last In First Out] => In stack data structure,you can add elements from the top,in i.e adding an element can only happen from the top,and out i.e deleting an element can also be happen from the top only.It only has one end,from where the elements can go inside and from that end only elements can come out.


## elements will be come out of the stack in the Last In First Out fashion,basically the element which was gone last inside,the element which went at the last in the stack will be first element to come out.This is basically known as the Last In First Out Data Structure.

## stack data structure also have multiple common methods as well as operations.

## push => push operation is used for pushing the element inside the stack.push(1) => it will add 1 to the stack.push(2) will add 2 onto the top of the stack.Adding elements inside the stack is called push operation.

## pop => pop means element comes out from the top of the stack.pop means removing the elements from the top of the stack.

## peek/top => This function means find out the topmost element of the stack.

## ex => Stack of books => suppose you have lot of books,and you are piling those books one on the top of another,that can be called as the stack of books.Now suppose if you want to take out a book,you will remove the book from the top.Ideally you can remove the book from the middle also,but stack data structure is not like that.stack means books are piled on top of one another,and only the book from the top can be removed.

## ex => undo feature => suppose if i am doing undo somewhere,their stack data structure is used.

## ex => Browsing History => Browsing History is also stored inside a stack.Suppose if you go to google.com and then you click on namastedev.com, you go namastedev.com and then you go to namastedev.com/learn page,and then you went to a specific section and watched the video,but all these that you are doing inside the browser are stored inside the stack.Whatever pages you are visiting,is basically stored inside a stack.And when you click on the back arrow button on the browser.It basically pops out one element from the stack and it returns back the page to you.

## recursion => Call Stack

>>Why do we need Stack And Queues ??

>> * for organising the data logically (based on the problem's need).There will be a lot of problems where you basically want to organise the data in a particular fashion.


>> * order of operations matter.

>> * optimise time/space for specific use cases.

>> recurrsion => call stack
>> Level order traversal in trees => Queues
>> BFS => Queues
>> DFS => Stack


## What is stack and queue in code ?? => stack is nothing, in javascript stack is like an array.If you do stack = [];this is a stack.All the arrays inside javascript are already stack.


## stack.push(10) ==> [10];
## stack.push(7) ==> [10,7];
## stack.pop ==> 7 returned => [10];

## stack is nothing but arrays only but it is restricted,you can just push() and pop() inside the stack.


>>When we already have arrays then why do we need stack and queues ??stack is nothing but a kind of array but with restricted access.

>> Restricted Access (Top only), cannot modify random index in stack as well as Queues

>> Stack === Array (with restricted access).

