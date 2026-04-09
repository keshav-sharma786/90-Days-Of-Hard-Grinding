import express from "express";

const app = express();

//&for managing the GET and POST requests successfully,I will not use app.use(),I will rather use app.get().

//?this method will only match GET api calls to the route "/user".

//& this get() method only handle GET call to /user.
//& Now even if I try to make a POST call to the /user,it will show me ==> "CANNOT POST /user".
//& even if I try to make a GET call on the route "/user/123",still this get route handler will not work but in the case of app.use(),it was working.This is also the major difference between app.use() and app.get().
app.get("/user", (req, res) => {
  res.send({
    firstName: "Keshav",
    lastName: "Sharma",
  });
});

//~ Creating a new POST request on the "/user"
app.post("/user", (req, res) => {
  //& saving data to the database.
  //? it is working perfectly fine,now my GET call is not interfering with my POST call.
  res.send("Data successfully saved to the Database");
});

//Making a delete API call to the "/user"
app.delete("/user", (req, res) => {
  res.send("Deleted Successfully");
});

//& app.use() will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on the port 7777...");
});
