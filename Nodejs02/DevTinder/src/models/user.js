import mongoose from "mongoose";

//&here I will define what a user in our database is ??What fields this user collection will have ???All those things will be defined over here.

//&Schema is a method which is basically defined inside the mongoose object.I have to pass some object inside it as an argument.

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

//console.log(userSchema);

//&Step2 ==> Once you create the schema then we will create the mongoose model.We will create a "User" model So write "User".first thing you will pass is the name of the model and the second thing you will pass is the schema

export const User = mongoose.model("User", userSchema);

//?Whenever you create a database a mongoDB database,you create collection inside it,that collection will basically hold some data.

//~Whenever you are creating a model,the name always starts with a capital letter,basically name when it starts with a capital letter,says that okay it is a kind of like a mongoose model.It is a User,it is defining a collection.

//&This is like a class,User class and then we will create small new instances (objects) of that class,whenever a new User will come in it will be a new type of instance (object) of that model,this userSchema is basically the definition of the model.this userSchema defines this model.

//~This userModel is basically a class which will create it's own instances (objects),this model will create it's own instances.

//?Suppose if a user Rahul came onto your website,so it is of type user and it will go into the user collection.

//&with the help of this User model I will now create new-new instances.Suppose if I need to add a new user,so I will create a new instance of this User model and I will put it into the database.

//&Now you can create a API to add a user into the database.

//&We will basically create a POST api.We will basically create an API which will sign up the user.Let us meet again in the app.js
