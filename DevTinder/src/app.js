const express = require("express");

const app = express();

// Order of the code also matters my dear friends
app.use("/user", (req, res) => {
  res.send("HAHAHAHAHAHAHAHA");
});

// This will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Keshav", lastName: "Sharma" });
});

// post request
app.post("/user", (req, res) => {
  // saving data to DB
  res.send("Data successfully saved to the database!");
});

// delete request
app.delete("/user", (req, res) => {
  res.send("user deleted successfully!");
});

// this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
