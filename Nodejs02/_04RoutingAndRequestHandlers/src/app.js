import express from "express";

const app = express();

// request will go to this route handler only.
//So this code is basically overriding every other route handler.
//when you use app.use("/"),inside it when you pass some route,this means that if any route matches this route which starts with this slash ("/").It is kind of like a wild card,anything that matches after this slash "/",this route handler will handle it.Anything that matches after this slash "/".

//That is why evertyhing is going inside this route handler.
app.use("/", (req, res) => {
  res.send("Namaste Keshav!");
});

// request will not go to this route handler.
app.use("/hello", (req, res) => {
  res.send("Hello Hello Hello");
});

// request will also not go to this route handler.
app.use("/test", (req, res) => {
  res.send;
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
