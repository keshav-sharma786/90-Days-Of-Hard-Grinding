import express from "express";
import { connectDB } from "./config/database.js";

const app = express();

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

connectDB()
  .then(() => {
    console.log("Database connection established...");
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });

app.listen(7777, () => {
  console.log("App is listening on Port 7777...");
});
