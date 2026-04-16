//&Just playing with the code...
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  //~here pass all the parameters that define the user.This is basically how you define a schema.This schema basically tells you what all information about the user are we stroing into our database.These are the legit fields that can be present inside the user's collection.
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
});

//&Let me write the name of the model as "Us".
//&Observations ==> the new instance of the "Us",instance here will be a new object,basically a new document,it will be saved into the database devTinder under the collection name "us".Go to MongoDB Atlas and see the result.

export const Us = mongoose.model("Us", userSchema);
