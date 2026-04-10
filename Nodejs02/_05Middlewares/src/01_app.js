import express from "express";

const app = express();

//& In this case if I will not put next() and I will not send back response from the first route handler and I will not call next(),then my request will go in an infinite loop,it will hang out here.
// app.use(
//   "/user",
//   (req, res) => {
//     console.log("Handling");
//   },
//   (req, res) => {
//     console.log("Handling 2");
//     res.send("2nd response");
//   },
// );
app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling");
    //~ res.send("Response");
    next();
  },
  (req, res) => {
    console.log("Handling 2");
    res.send("2nd Response");
  },
);

//&steps for killing the PORT number of the Browsers Node JS Debugger
//&1) netstat -ano | findstr :9229 <9229 is the PORT number of the debugger>
//&2) you will get something like this ==> TCP    127.0.0.1:9229    ...    LISTENING    12345
//&3) 12345 is the PID i.e process ID, kill it by using this command taskkill /PID 12345 /F

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777....");
});
