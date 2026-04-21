import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },

  emailId: {
    // ← was completely missing!
    type: String,
  },
});

//console.log(userSchema);

//~Here BrockLesnar is a class/constructor function
export const BrockLesnar = mongoose.model("BrockLesnar", userSchema);

console.log(BrockLesnar);

//&Static Methods (present on the model/class/constructor function itself)
console.log(Object.getOwnPropertyNames(BrockLesnar));

//~This will show the inherited static methods too
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(BrockLesnar)));

//*Printing the Instance/prototype methods
console.log(BrockLesnar.prototype);
console.log(Object.getOwnPropertyNames(BrockLesnar.prototype));

// console.log(User);
// console.log(User.prototype);
