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

//&here what happened I name the model as "Seth" but i stored that model function inside SethRollins but the new instance (object/document) of this model was saved in the database under the collection "seths".whatever name you will pass inside the mongoose.model that will basically become the name of the collection with first letter as small and collection name will be in plural with 's'comes at end.

export const SethRollins = mongoose.model("Seth", userSchema);
