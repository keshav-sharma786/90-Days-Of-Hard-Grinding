in express when i schema and User model

and in app.js if I call new User({}),

then behind the scenes is this will happen ???
1.) new keyword will create an empty object.
2.) it will set the **proto** of this empty object to prototype of User class/constructor function.User model at the end of the day is a class or we can say it is a constructor function
3.) it will check the schema field that we passed while making the schema
4.) in the prototype of User constructor function there will be mongodb methods present like === insertMany, find, findOne right ????
5.) it will create a collection with name users in my mongoDB database

## Your Understanding - Mostly Right, But Let Me Clarify Each Point

### ✅ Point 1 — Correct

```javascript
new User({});
// new keyword creates an empty object internally ✓
```

---

### ✅ Point 2 — Correct

```javascript
User.__proto__ === mongoose.Model; // true
// User is a constructor function (class under the hood)
// instances get User.prototype set as their __proto__
```

`mongoose.model()` internally creates a **class that extends `mongoose.Model`**, so yes — it's a constructor function/class.

---

### ✅ Point 3 — Correct, but let me be precise

When you call `new User({ firstName: "Rahul", age: 25 })`, Mongoose:

- Looks at `userSchema` fields
- **Filters out** any fields not defined in the schema (by default)
- **Casts** values to the defined types (`"25"` → `25` for Number)
- Attaches validation rules to the instance

```javascript
const u = new User({ firstName: "Rahul", hack: "injected" });
console.log(u.hack); // undefined — stripped by schema ✓
```

---

### ✅ Point 4 — Correct, but split between prototype and static

There are **two kinds** of methods, and this is an important distinction:

```javascript
// INSTANCE methods (on User.prototype) — called on a single document
const user = new User({});
user.save(); // saves this specific document
user.validate(); // validates this document

// STATIC methods (on User itself) — called on the Model/collection
User.find();
User.findOne();
User.insertMany();
User.findByIdAndUpdate();
```

So `find`, `findOne`, `insertMany` are **NOT** on `User.prototype` — they're **static methods on `User` directly**.

```javascript
User.find(); // ✅ static — queries the collection
new User().find(); // ❌ won't work
new User().save(); // ✅ instance — saves this document
```

---

## Complete Picture

```
mongoose.Schema({...})
        │
        │  defines shape/rules
        ▼
mongoose.model("User", userSchema)
        │
        │  returns a Class (constructor function)
        │  with static methods: find, findOne, insertMany...
        │  and prototype methods: save, validate...
        ▼
new User({ firstName: "Rahul" })
        │
        │  1. Creates empty JS object
        │  2. Sets __proto__ = User.prototype
        │  3. Validates/casts fields against schema
        │  4. Lives in MEMORY only
        ▼
await user.save()
        │
        │  NOW it hits MongoDB
        │  Creates "users" collection if not exists
        └──► inserts document into DB
```

> **Key rule:** Mongoose pluralizes + lowercases the model name automatically.  
> `"User"` → `users` collection, `"BlogPost"` → `blogposts` collection.

## Interesting! This is Because of Mongoose's Eager Collection Initialization 🔍

When you call `mongoose.model("brockLesnar", schema)` — Mongoose **immediately reserves/initializes the collection handle** in the background, even before any write operation.

---

## What actually happens

```javascript
// The moment you write this line ↓
const User = mongoose.model("brockLesnar", userSchema);

// Mongoose internally does something like:
// 1. Pluralizes → "brockLesnars"
// 2. Immediately calls db.collection("brockLesnars")
// 3. This can trigger collection creation in MongoDB
//    depending on your MongoDB version and driver settings
```

---

## Why this happens

MongoDB drivers have a concept called **"collection handle"** — when Mongoose asks the driver for a collection reference, some versions of MongoDB/driver will **physically create it** at that point.

```
mongoose.model() called
        │
        ▼
Mongoose asks MongoDB driver → "give me handle for brockLesnars"
        │
        ▼
MongoDB sees collection doesn't exist → creates it immediately
        │
        ▼
You see "brockLesnars" in DB even before .save() or .insertMany()
```

---

## This behavior depends on

```
MongoDB version       →  newer versions are more lazy
Mongoose version      →  behavior has changed across versions
Driver settings       →  some configs create eagerly
Connection timing     →  if connection is established before model creation
```

---

## Key takeaway

> The **"collection created on first write"** rule is the **general MongoDB rule** — but Mongoose adds its own layer on top, and depending on versions, it can create the collection **earlier than expected**.

This is why you saw `brockLesnars` already there before saving. It's Mongoose being eager under the hood — not something you did wrong!

Q === so mongoose model is equivalent to the collection in our mongoDb database ???

## Yes — Exactly Right! ✅

But let me add one small nuance — the collection gets created **lazily**, meaning MongoDB only physically creates it the **first time data is written**.

---

## The full timeline

```javascript
// Step 1 — Schema defined (pure JS, nothing in MongoDB)
const userSchema = new mongoose.Schema({ firstName: String });

// Step 2 — Model created (pure JS, nothing in MongoDB)
const User = mongoose.model("User", userSchema);

// Step 3 — Still nothing in MongoDB
const user = new User({ firstName: "Rahul" });

// Step 4 — THIS is when MongoDB wakes up
await User.insertMany([{ firstName: "Rahul" }, { firstName: "Amit" }]);
// ✅ "users" collection created
// ✅ 2 documents inserted into it
```

---

## Same is true for other write operations

Any write operation triggers collection creation if it doesn't exist yet:

```javascript
await User.insertMany([...])   // ✅ creates collection + inserts
await User.create({...})       // ✅ creates collection + inserts
await user.save()              // ✅ creates collection + inserts
await User.findByIdAndUpdate() // ✅ creates collection (if not exists)
```

---

## But READ operations do NOT create the collection

```javascript
await User.find(); // collection doesn't exist yet → just returns []
await User.findOne(); // returns null, no collection created
```

---

## One line to remember

> MongoDB follows **"create on first write"** — the collection doesn't exist until you actually push data into it.

This is very different from SQL databases where you have to explicitly run `CREATE TABLE` before inserting anything. MongoDB (and Mongoose) handles it automatically behind the scenes on the first write.
=== Let us verify this by creating inserting BrockLLesnar document..

Q === Can i acess the User.prototype and static methods using console ???

## Yes! Absolutely — Let's See What's There

```javascript
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ firstName: String });
const User = mongoose.model("User", userSchema);

// Static methods (on User itself)
console.log(User); // logs the whole Model class
console.log(Object.getOwnPropertyNames(User)); // static methods on User

// Instance/prototype methods
console.log(User.prototype); // logs prototype object
console.log(Object.getOwnPropertyNames(User.prototype)); // instance methods
```

---

## What you'll actually see

### Static methods — `User` directly

```javascript
console.log(typeof User.find); // "function"
console.log(typeof User.findOne); // "function"
console.log(typeof User.insertMany); // "function"
console.log(typeof User.create); // "function"
console.log(typeof User.deleteMany); // "function"
```

### Instance/prototype methods — `User.prototype`

```javascript
console.log(typeof User.prototype.save); // "function"
console.log(typeof User.prototype.validate); // "function"
console.log(typeof User.prototype.toJSON); // "function"
console.log(typeof User.prototype.toObject); // "function"
```

---

## Best way to see ALL methods at once

```javascript
// See all static methods
console.log(Object.getOwnPropertyNames(User));

// See all instance methods
console.log(Object.getOwnPropertyNames(User.prototype));

// Walk the entire prototype chain
let proto = User.prototype;
while (proto) {
  console.log(Object.getOwnPropertyNames(proto));
  proto = Object.getPrototypeOf(proto);
}
```

---

## Key thing to remember

```
User                    ← static methods live here  (find, create, insertMany...)
User.prototype          ← instance methods live here (save, validate, toJSON...)
new User().__proto__    ← same as User.prototype
```

Just run these `console.log` statements in your `app.js` after defining the model — you'll see everything Mongoose gives you out of the box.

## That's Because of Prototype Chain! 🔍

`Object.getOwnPropertyNames(User)` only shows **own properties** directly on `User` — but Mongoose static methods like `find`, `findOne` are **inherited** from `mongoose.Model` up the prototype chain.

---

## Do this to see them

```javascript
// This will show inherited static methods too
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(User)));
```

You'll now see things like:

```
find, findOne, findById, create, insertMany,
deleteMany, deleteOne, updateMany, updateOne...
```

---

## Why this happens — visually

```
User  ← (Object.getOwnPropertyNames gives you what you saw)
  │
  │  inherits from
  ▼
mongoose.Model  ← find, findOne, create, insertMany live HERE
  │
  │  inherits from
  ▼
mongoose.Document  ← save, validate, toJSON live HERE
```

So Mongoose static methods are **not directly on User** — they are on `mongoose.Model`, and `User` inherits them.

---

## To walk the FULL chain

```javascript
let current = User;
while (current) {
  console.log("=== ", current.name, " ===");
  console.log(Object.getOwnPropertyNames(current));
  current = Object.getPrototypeOf(current);
}
```

This will print every level of the chain and you'll clearly see at which level `find`, `create` etc. appear.
