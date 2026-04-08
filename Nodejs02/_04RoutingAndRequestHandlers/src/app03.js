import express from "express";

const app = express();

//?If i go to "/hello",it gives me "Hello Hello Hello",just by changing the order of my code,a lot of things get changed.

//?Whenever a request comes to the server,we are listening to port number 7777,whenever a request is coming,the code will start running from the top,it starts matching the route from the top,

//&is the route "/hello"?? if it is hello,it will basically return the result from the very first route handler.

app.use("/hello", (req, res) => {
  res.send("Hello Hello Hello");
});

//~if the route is not "/hello",it will go to the second below route handler.if it does'not matched then it will go to the third route handler.And this order is very very very important.

//^ the order of the code matters a lot!!!

app.use("/test", (req, res) => {
  res.send;
});

//Now will the sequence of code matter??If I changed the order,now if i go to "/",it will give me "Namaste Keshav"

app.use("/", (req, res) => {
  res.send("Namaste Keshav!");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
