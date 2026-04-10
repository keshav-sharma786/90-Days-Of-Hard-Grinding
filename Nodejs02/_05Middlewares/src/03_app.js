import express from "express";

const app = express();

//&Can you predict the output of this question
app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user");
    next();
    res.send("Response");
  },
  (req, res) => {
    console.log("Handling the route user2 !!");
    res.send("2nd Response");
  },
);

app.listen(7777, () => {
  console.log("Server is successfully listening on the PORT 7777...");
});
