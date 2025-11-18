const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  // Logic of DB call and get user data
  try {
    throw new Error("xyzjkdjfdkjfdk");
    res.send("User Data Sent");
  } catch (err) {
    res.status(500).send("Some Error occured Contact Support Team");
  }
});

// Error Handling Middleware
app.use("/", (err, req, res, next) => {
  if (err) {
    // Log your errors
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});

