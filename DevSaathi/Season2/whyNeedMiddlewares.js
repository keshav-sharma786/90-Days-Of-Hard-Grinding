const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

// defining a middleware for /admin
app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("user data sent");
});

app.get("/user/login", (req, res) => {
  res.send("Any user can login. Open for all the users");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User Deleted");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on the port");
});
