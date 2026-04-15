import express from "express";
import { connectDB } from "./config/database.js";

const app = express();

app.post("/signup", (req, res) => {
  //suppose we have a dummy userObj
  //Basically a user is signing up to your website.
  //When you are creating the account,it basically takes firstName, lastName,emailID and your password
  const userObj = {
    firstName: "Keshav",
    lastName: "Sharma",
    emailId: "Keshav123@gmail.com",
    password: "Keshav@123",
  };
  //Now I want to save this user into our mongodb database,into our user collection,How would we do it ??for that we need to create a new instance (object) of our model.And we created a User model right.
});

//& Go to your MongoDB cluster,on compass,and copy the connection string from there,this is the only url which is basically required to connect to the database.

//&First of all let us connect our application to the free MongoDB cluster.Below are the steps ==>

//?1).First of all you have to create a config folder inside the src folder.All the configuration files and anything that you want to configure in your app,just use this config folder.Inside the config folder,create a file database.js.In the database.js file I will write the logic to connect to our database.To connecting to the database,to talk to the database,we will be using an important npm library and that npm library is known as Mongoose.Whenever you are connecting your NodeJS Application to your Mongo Database,use mongoose because mongoose is a very amazing library for creating schemas,models and talking to your MongoDB database.

//?2) npm install mongoose
//?3) go to database.js

//&Whenever this app.listen() code runs,basically now my server has started accepting some requests,but what if my server has already started listening to the requests,but my database is not connected.It will be a big problem.Now people are hitting our api's but the database connection is not successfully established.It is a bad thing is'nt it.

//&The right process is first of all connect to your database,then listen onto the server.

//&once your database connection has successfully established,then only you do app.listen().

//&I will import connectDB function from database.js and I will call it in my app.js.

//&This is the correct and proper way of connecting to the database.

//~Think about a case where the database is not connected successfully and and your app started listening to the api requests,the app has started up but your database is not connected successfully,that can cause problems is'nt it.There will be the users who are hitting your api's and you are still not connected to your database,so always connect to your database,then call app.listen().Once you call app.listen() that means your server has started.

//&What do you mean by the schema of the database ?? ==> Whenever you are creating a database,Suppose you are putting some user's information into the database,User Collection and before I create a collection,I will basically have to create the schema of the user.Schema is an identity for that particular collection documents.

//?If I say that I am creating a User schema,basically I am defining a User.

//&Creating a schema means that you are telling what all things will you store in this user's collection??What can a User have,user can have a firstName,user can have a lastName,user can have an email id,user can have a password.All these things we will store inside the user's collection,for that we will need a Schema.

//^Inside the mongoose docs go to the schema,read more about it that how can you create a schema.

//?Inside the src create a new folder named as models.We are basically creating a model,we are modelling our database.We will create a User Model.

//&Inside models create a file user.js and we will now meet in the user.js file.

connectDB()
  .then((res) => {
    console.log("Database connection established...");

    console.log(res);

    app.listen(7777, () => {
      console.log("App is listening on Port 7777...");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
