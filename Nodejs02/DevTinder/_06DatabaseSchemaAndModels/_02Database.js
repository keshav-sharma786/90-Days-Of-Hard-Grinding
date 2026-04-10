import mongoose from "mongoose";

//&connecting to the mongodb cluster.But this is not the good way,a good way is to wrap this inside an async function,because mongoose.connect() returns you a promise.It also tells you that connection was successfully established or it was not successfully established.

//&Async function always returns the promise object no matter what you return,it will wrap your returned value inside the result of the returned promise object.

//&What if I do'not return anything explicitly from the promise object??still the async function will return the promise object.
const connectDB = async () => {
  console.log("this is an async function");
  const promiseResult = await mongoose.connect(
    "mongodb+srv://NamasteNodeKeshav:65SrE7eKfCTIZDg7@namastenodedatabase.jqadp0w.mongodb.net/",
  );
  console.log("database connection established");
  console.log(promiseResult);
  // return promiseResult;
  return "Namaste Keshav";
};

connectDB()
  .then((res) => {
    console.log(connectDB);
    console.log(res);
    console.log("Database connection established...");
  })
  .catch((err) => {
    console.log(err);
  });
