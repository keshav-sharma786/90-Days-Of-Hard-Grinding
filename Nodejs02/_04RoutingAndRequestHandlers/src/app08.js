import express from "express";

const app = express();

//& what if I write app.use() on the top ??Now if I try to make a GET api call to the "/user",it basically gives me "HAHA"

//? If I try to make a POST api call to "/user",it will still give me "HAHA".Order of the code matters a lot.

app.use("/user", (req, res) => {
  res.send("HAHAHAHAHAHAHA");
});

app.get("/user", (req, res) => {
  res.send({
    firstName: "Keshav",
    lastName: "Sharma",
  });
});

app.post("/user", (req, res) => {
  res.send("Data successfully saved to the Database");
});

app.delete("/user", (req, res) => {
  res.send("Deleted Successfully");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on the port 7777...");
});
