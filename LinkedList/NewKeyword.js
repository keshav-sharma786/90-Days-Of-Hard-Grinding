// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Manual new function
function newKeshav(Constructor) {
  // Step 1: Create a new empty object
  var obj = {};
  // Step 2: Set the prototype of the new object to the prototype property of the constructor function
  obj.__proto__ = Constructor.prototype;
  // Step 3: Call the constructor function with the newly created object as the 'this' context
  var result = Constructor.apply(obj, Array.prototype.slice.call(arguments, 1));
  // Step 4: Return the newly created object unless the constructor function
  // explicitly returns another object
  return result instanceof Object ? result : obj;
}

var person1 = newKeshav(Person, "Keshav", 30);

console.log(person1.name);
console.log(person1.age);