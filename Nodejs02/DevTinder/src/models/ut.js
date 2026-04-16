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

//&Let me write the name of the model as "Ut".
//&Observations ==> the new instance of the "Ut" model here will be a new object,basically a new document,it will be saved into the database devTinder under the collection name "uts".Go to MongoDB Atlas and see the result.
//~Whatever name of the model we will pass inside the mongoose.model(),the instance of that model will be saved under the collection in the plural form,if the model name is "Ut",then the collection name would be "uts".
//?If the model name is "User",then the collection name would be "users",
//?If the model name is "Us",then the collection name would remain same because we have already given the name of the model in the plural form,so the name of the collection will remain as it is as "us",But always remember the name of the collection will always be a small letter.

export const Ut = mongoose.model("Ut", userSchema);
