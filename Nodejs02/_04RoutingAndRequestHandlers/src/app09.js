import express from "express";

const app = express();

//&If I put a question mark in front of b that means now b is optional over here,
app.get("/ab?c", (req, res) => {
  res.send("Namaste Keshav");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777....");
});
