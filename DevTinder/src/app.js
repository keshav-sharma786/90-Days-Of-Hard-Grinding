const express = require("express");

const app = express();

// app.use("/user", [
//   (req, res, next) => {
//     console.log("Handling the route user!!");
//     next();
//   },
//   (req, res, next) => {
//     // third argument => route handler2
//     console.log("Handling the route user2!!");
//     //res.send("2nd Response!!!");
//     next();
//   },
//   (req, res, next) => {
//     // third argument => route handler2
//     console.log("Handling the route user3!!");
//     //res.send("3rd Response!!!");
//     next();
//   },
//   (req, res, next) => {
//     // third argument => route handler2
//     console.log("Handling the route user4!!");
//     //res.send("4th Response!!!");
//     next();
//   },
//   (req, res) => {
//     // third argument => route handler2
//     console.log("Handling the route user5!!");
//     res.send("5th Response!!!");
//   },
// ]);

// this is now an independent route
app.get("/user", (req, res, next) => {
  console.log("Handling the route user2!!");
  //res.send("2nd Route Handler");
  next();
});

app.get("/user", (req, res, next) => {
  console.log("Handling the route user!!");
  next();
});



app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
