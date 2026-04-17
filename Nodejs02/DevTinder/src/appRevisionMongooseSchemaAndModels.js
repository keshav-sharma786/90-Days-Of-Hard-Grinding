import express from "express";
import { connectDB } from "./config/database.js";
import { User } from "./models/user.js";
import { Us } from "./models/us.js";
import { Ut } from "./models/ut.js";
import { John } from "./models/u.js";
import { SethRollins } from "./models/seth.js";
const app = express();

app.post("/signup", async (req, res) => {
  //suppose we have a dummy userObj
  //Basically a user is signing up to your website.
  //When you are creating the account,it basically takes firstName, lastName,emailID and your password
  // const userObj = {
  //   firstName: "Keshav",
  //   lastName: "Sharma",
  //   emailId: "Keshav123@gmail.com",
  //   password: "Keshav@123",
  // };
  //Now I want to save this user into our mongodb database,into our user collection,How would we do it ??for that we need to create a new instance (object) of our model.And we created a User model right.

  //We will basically create a new instance of this User model.
  //first of all import the User Model over here.

  //&Creating the new instance of the User model,User is a model,it is basically a function.

  //~Here I am basically creating a new user with the data present in the userObj object.Basically I am creating a new instance of the User Model.
  const user = new User({
    firstName: "Keshav",
    lastName: "Sharma",
    emailId: "Keshav123@gmail.com",
    password: "Keshav@123",
  });

  console.log(user);

  //?Once I have created the instance of the User Model,what I will do is ==>
  //user.save();
  //~Once I will do the user.save(),this user.save() function will basically return you a promise,all of the mongoose functions and methods will return you a promise,most of the time you have to use the async and await.Now the user will be saved into our database.Always remember that you are creating the new instance of the User Model and you are passing the data over here,the new instance (object) will come inside the user variable.

  //?Whenever you do a user.save(),it will basically save the data into the database.

  //&you basically have to make a POST api call to the "/signup" with the help of the POSTMAN.

  //&here user which is basically the new instance of the User model will be saved into our database devTinder with "users" as the collection Name.

  //~And also mongoDB will create these 2 fields which are ==> __id and __v automatically inside the document while saving it onto the database.

  //~Whenever you will add any document to the MongoDB database,mongoDB will automatically give it __id and it will automatically give it __v.__id is the unique ObjectId.

  //&You can manually also add the id.But do'nt add the __id manually.

  //?What is this __v?? ==> Whenever you create the document and you update the document,it is kind of maintaining the version of the document.If you are updating the data of the document,then the version automatically gets update.Do'not try to mess up with the automatic fields of the MongoDB.

  //&Whenever you are doing some db operations,whenever you are saving data into the database,whenever you are reading data from the database,whenever you are doing some db operations,always wrap them inside the try-catch block.It is a very good practice to wrap your code inside the try-catch Block.

  try {
    await user.save();
    res.send("User Added successfully");
  } catch (error) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

app.post("/us", async (req, res) => {
  const user = new Us({
    firstName: "Brock",
    lastName: "Lesnar",
    emailId: "Brock123@gmail.com",
    password: "Brock@123",
  });

  await user.save();

  res.send("Brock Lesnar saved successfully");
});

app.post("/ut", async (req, res) => {
  const user = new Ut({
    firstName: "Roman",
    lastName: "Reigns",
    emailId: "Roman123@gmail.com",
    password: "Roman@123",
  });

  await user.save();

  res.send("Roman Reigns saved successfully");
});

app.post("/john", async (req, res) => {
  const user = new John({
    firstName: "John",
    lastName: "Cena",
    emailId: "John123@gmail.com",
    password: "John@123",
  });

  await user.save();

  res.send("John Cena saved successfully");
});

app.post("/Seth", async (req, res) => {
  const user = new SethRollins({
    firstName: "Seth",
    lastName: "Rollins",
    emailId: "Seth123@gmail.com",
    password: "Seth@123",
  });

  await user.save();

  res.send("Seth Rollins saved successfully");
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

    // console.log(res);

    app.listen(7777, () => {
      console.log("App is listening on Port 7777...");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
