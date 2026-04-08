import express from "express";

const app = express();

// request will go to this route handler only.But what if I comment this route handler??

// After commenting out,now if I go to the localhost:7777/.I am getting Cannot GET /

// app.use("/", (req, res) => {
//   res.send("Namaste Keshav!");
// });

// But if i go to localhost:7777/hello,then the request is successfully going to the below route handler.

//Now suppose if i go to the "/hello/xyz",it will still give me "Hello Hello Hello" below route handler will still work.

//This route handler will not only handle my "/hello",but it will also handle anything that comes after "/hello".

//Suppose if i am doing "/hello/1",still the below route handler will work out.

// Even if i go to the "/hello/xyz/1234/12323",it will still give me "Hello Hello Hello",the below route handler will handle it.

//But if you write "/hello123",it will not match.Because this "/hello123" is a different string.

//When I say that your route should start with "/hello",that means it should start with "/hello/anything...."
app.use("/hello", (req, res) => {
  res.send("Hello Hello Hello");
});

// But if I go to the localhost:7777/test,then the request is also successfully going to the below route handler.

//If your route is starting from "/test",then anything after that will be matched inside this route handler.
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
