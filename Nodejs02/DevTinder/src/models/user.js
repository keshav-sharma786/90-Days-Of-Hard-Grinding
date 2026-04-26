import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  //?we will add some strict checks over here in the database and basically if those checks are not met,we will not insert the document into our database.

  //*Go to the official documentation of mongoose, on the right hand side go to the schemaTypes over there.This basically tells you more about information about what can be the different types inside your schema.

  //&If I want that there should be some mandatory fields inside our database.If those fields are not there,we will not create our user document.What can be these fields.It can be email,It can be password,It can be firstName, lastName these are kind of like required fields,these are mandatory fields which are required to sign up a user.Suppose if a user is signing up you should atleast know his firstName,emailId and password right?Otherwise How would you register a user onto the platform??These are mandatory fields.

  //~you can basically add a required field over here.

  //~ I want If a user registers onto our platform then he should definitely have a firstName and he should definitely have a lastName.

  //?Another important check is basically a unique check, suppose if I want in my database that there should be only one entry with one email id,there cannot be the 2 different users with the same email id.for that you have to keep emailId as the unique field.you can basically pass a unique flag.This unique flag is a also a boolean flag over here.

  //*Suppose if i also want to add a default value,suppose If I want that whenever a user registers so it should take some default value.When I will create the userSchema, it can also take a photoUrl.So let us also store a photoUrl.it is basically the link to the photograph of the user.

  //todo=== there can also be a kind of like a short description basically like about section or on instagram you might have seen that bio, headline on the linkedin.Something like that.Let us also add that about field inside my userSchema.Let us also add one more field i.e skills.And you can also add a default value for some users.

  //&Whenever you will have schema,with [String] i.e array of strings or something, so mongoDB by default creates an empty space for your array so basically that's a default behaviour.

  //&Whenever a new user will register,without an About Section,so the default About will be the default value which we have added in the schema.Similarly you can also add a default photo url.

  //~Suppose If somebody is entering their emailId in the capital letters like inside the random cases.To keep ypur emailId's consistent,you can add lowercase flag into the emailId.

  //~Similarly I can also add much more  checks

  firstName: {
    type: String,
    //!Now user will definitely have to give a firstName, otherwise mongoose will not allow the insertion into the database.Mongoose will not allow the insertion of documents into the collection.
    required: true,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },

  emailId: {
    // ← was completely missing!
    type: String,
    //!Now whatever case user may use,but the email id will be stored in the lowercase format.Whatever the user is sending, we will just store it how we want to,I want all my email id's to be unique , they should always be in lowercase
    lowercase: true,
    required: true,
    //! unique:true will not let me insert the same emailId into my database.If I will try to pass then mongoose will throw this error === Error saving the user:E11000 duplicate key error collection: devTinder.users index: emailId_1 dup key: { emailId:

    unique: true,
  },
  photoUrl: {
    type: String,
    //&Adding a default image url over here.So if you dont give a photo then by default it will take this below photo url.Let us enter Mark Zuckerberg into our database.
    default: "https://geographyandyou.com/images/user-profile.png",
  },
  about: {
    type: String,
    //~Adding a default value
    default: "This is a default description about the user",
  },
  skills: {
    //& user can have multiple skills, a user can have javascript, java full stack, nodeJS and so on.It is kind of like a array of skills.
    type: [String],
  },
});

export const User = mongoose.model("User", userSchema);
