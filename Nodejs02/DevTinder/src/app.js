import express from "express";
import { connectDB } from "./config/database.js";
import { User } from "./models/user.js";

const app = express();

//&Our middleware will now be activated for all the routes.
app.use(express.json());

app.post("/signup", async (req, res) => {
  //&But this data cannot be hardcoded right??We basically need a user to fill this data in an HTML form,and then send us the data in an api,we get this data and then we push it into the database.We have to make this data dynamic.

  //?So what we will do is,instead of writing this data over here,I want my data to be sent inside the signup api,while I am making a POST call,I should send the data right from here,and then my api should receive that data and push it into the database.Let us pass the dynamic data into the API.

  //~In the POSTMAN,the top portion represents the request and the below portion is the response.In this top portion,Go to Body ==> This is basically the request body.If I will click on this body,so there are different ways I can send the data inside the API ===  I can either send the form-data,raw data,I can even send the binary data.But I want to send the JSON data to my backend,to my server.My server should read that JSON data and then push it into the database.

  //&In the POSTMAN inside body select the raw.Under raw === under json also you can basically select the lot of things like ==> Text,JSON,javascript,html,XML.You can either send that raw data in text,you can also send the raw data in javascript,you can also send the raw data in json,you can send the raw data in HTML,XML.XML was used widely before JSON.So I will basically send the dynamic data in the form of JSON object from the POSTMAN like this === {"firstName": "Rohit",}

  //?JSON cannot accept the last comma,but a JS object can accept.After sending the data from the POSTMAN,I want to receive that data over here and push it inside my database,How will I do that ???

  // console.log(req); //&This req is the request,this is basically the whole request that POSTMAN has sent to us,and the server has received this request and express has converted this request into an object and it has given this object to us to use it.The data that you sent over here is also the part of the request object but you cannot directly read the data from this req object.Now I want to read the data which is present on the body of this request.I can just do the req.body.
  //console.log(req.body); //~undefined.Why??Ideally In my req body I have sent this JSON data then why it is coming undefined over here ???the reason is data which is being sent over here is being sent in the JSON format and our server is not able to read that JSON data,to read that JSON data we will need a help of a middleware,why I am saying a middleware?? Because I will have to use it for all my api's.I need a middleware that can just check the incoming request and it can just read the JSON,convert that JSON into a javascript object put it into the body of the request,give us access to that data over here.

  //?There is a very famous middleware which is given to us the expressJS itself, and it is known as express. json middleware.This was also the major concern when we use to develop applications using express,If we want to read some JSON,I can write my own middleware or I have to rely on some random third party middleware.

  //console.log(req.body);

  //&What does this express.json() middleware has done is === It reads the JSON object,converts it into a Javascript object,and it just adds that javascript object back to this req object in the body.Now my req.body is a Javascript object.And now I can also read this body properly.

  //~This req.body is exactly same as that object (dummyUser) which I basically passed inside the new User({})

  //&This JSON data(Rohit Sharma) come over here,this express.json() plugin,a middleware will just read that json object,it will convert it into a javascript object,and will add that javascript object onto the req.body.Now I can read this body.Now I can basically create the new instance of the User model using the data which I have got from the sign-up post api.And this user can now be properly saved to the database.

  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Added successfully");
  } catch (error) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

//?Now is the time to read the data also from the database.Let us now make the GET api and in that GET api,I want to get all the users from the database.Basically In the Dev Tinder I basically want to create the feed API.I want to get all the users from the database,It is kind of like my feed.I basically want to create a feed API which will get all the users from the database and give it back to the UI or the POSTMAN.

//~Let us make an api to find only one user from the database.
//~Get user by email.
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  //&Go to the postman,create a new GET request.Go to the body.Go to the raw and add the JSON data in the form of === {"emailId": "Keshav@gmail.com"} and hit the enter and send the data,you will get that document as the response in the postman.

  //?It will basically give you the array of objects over here.And that array only has one object with the emailId that I passed while sending the request on the POSTMAN.

  //~Suppose that the user with that emailId was not found,How do you handle that case ???Suppose If I passed the wrong email Id??? while sending GET request on the POSTMAN.It will return me an empty array.But what if I have to throw an error ???

  //&What I was doing over here was I was finding the user by using the emailId,what if there were 2 users with the same emailId???Let us first of all create 2 users with the same emailId.Let us create 2 Rohit Sharma's.Now if i send the request,It will give me the 2 objects (Rohit Sharma),but there is also the method findOne() === it will basically return you only the one Object from the database.It will basically not give you an array.Let us create one more GET api for just finding out only the one user.

  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

//~findOne()
app.get("/findOneUser", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: userEmail });
    res.send(user);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

//&Feed API === GET/feed === get all the users from the database
app.get("/feed", async (req, res) => {
  //&Whenever you want to get the data from the database,you should know which model you have to use.
  //~I am getting users,so I want to query using this model User.Go to docs === mongoose.com/docs/ === Then go to the Model in the left side secion.Go to the Model.find() method.Suppose If I want to find out the documents in my database,this is how I can find it.

  //?Suppose If I want to find out all the documents inside the collection

  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

connectDB()
  .then((res) => {
    console.log("Database connection established...");

    // console.log(res);

    app.listen(7777, () => {
      console.log("App is listening on Port 7777...");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
