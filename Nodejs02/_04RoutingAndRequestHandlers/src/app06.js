import express from "express";

const app = express();

console.log("testing out");

app.use("/hello/2", (req, res) => {
  res.send("Abracadabra");
});

app.use("/hello", (req, res) => {
  res.send("Hello Hello Hello");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

//&Let us now comment this wild card route,now if i try to call this "/xyz",it basically says "Cannot GET /xyz".What does it mean ??

//&If I go to the network tab of my browser,go to xyz anf go inside the headers,it made a GET api call,under the Request Method: GET is being written.Basically it is exactly making a GET api call to "/xyz".Whenver you type in some url,whenever you are going to some URL,you are basically making an GET api call to that respective route on the respective server.

//~By default when you write any URL on the top of the browser,that basically makes a GET Api call.How do you make a POST API call ?you basically have to write some explicit code to make a POST Api call.you cannot directly do from the browser's search bar.

//?But suppose if i want to test some POST calls,how will I do that ??Will I always keep writing the fetch code ??for testing our application,for testing our api's we will not be using browser,browser is the worst way to test your api's,to test your routes,to test your backend code.Browser is not a good way.

//&so we will basically use a software which is known as POSTMAN.This postman application is generally used for the API testing.

//&1) Go to postman and create a workspace for yourself.
//&2) Now create a blank collection,collection basically means the collection of your api's.
//&3) Just click on this new and then It will ask you that what kind of API call do you want to make like http etc.
//&4) Now select GET, POST call based on your choice.
//&5) Click on save.
// app.use("/", (req, res) => {
//   res.send("Namaste Keshav!");
// });

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
