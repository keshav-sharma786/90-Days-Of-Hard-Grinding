import mongoose from "mongoose";

//&connecting to the mongodb cluster.But this is not the good way,a good way is to wrap this inside an async function,because mongoose.connect() returns you a promise.It also tells you that connection was successfully established or it was not successfully established.
const promise = mongoose.connect(
  "mongodb+srv://NamasteNodeKeshav:65SrE7eKfCTIZDg7@namastenodedatabase.jqadp0w.mongodb.net/",
);

console.log(promise);

promise
  .then((res) => {
    console.log("promise resolved");
    console.log(promise);
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
