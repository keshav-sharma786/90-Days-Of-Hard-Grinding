import express from "express";

const app = express();

//&Can you predict the output of this code
app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling");
    res.send("Response");
    next();
  },
  (req, res) => {
    console.log("Handling 2");
    res.send("2nd Response");
  },
);

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777....");
});
