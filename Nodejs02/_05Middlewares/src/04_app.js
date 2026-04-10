import express from "express";

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling route user");
    next();
  },
  (req, res, next) => {
    console.log("Handling route user 2");
    next();
  },
  (req, res, next) => {
    console.log("Handling route user 3 ...");
    next();
  },
  (req, res, next) => {
    console.log("Handling route user 4...");
    next();
  },
);

app.listen(7777, () => {
  console.log("Server is successfully listening on the port 7777..");
});
