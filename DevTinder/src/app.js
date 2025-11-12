const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res) => {
    console.log("Handling the route user!!");
    //res.send("Response!!!");
  },
  (req, res) => {
    // third argument => route handler2
    console.log("Handling the route user2!!");
    res.send("2nd Response!!!");
  }
);

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
