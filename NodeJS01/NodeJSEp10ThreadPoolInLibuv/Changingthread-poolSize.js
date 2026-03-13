const fs = require("fs");
const crypto = require("crypto");

//~command for changing the size of threadPool
//~$env:UV_THREADPOOL_SIZE = 12; node my_app.js

//?for debugging use
// $env:UV_THREADPOOL_SIZE=12; nodemon --inspect Changingthread-poolSize.js

crypto.pbkdf2("password", "salt", 50000000, 50, "sha512", (err, key) => {
  console.log("1 - cryptoPBKDF2 done");
});

// fs.readFile("./file.txt", "utf-8", () => {
//   console.log("File Reading CB");
// });

crypto.pbkdf2("password", "salt", 50000000, 50, "sha512", (err, key) => {
  console.log("2 - cryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 50000000, 50, "sha512", (err, key) => {
  console.log("3 - cryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 50000000, 50, "sha512", (err, key) => {
  console.log("4 - cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 50000000, 50, "sha512", (err, key) => {
  console.log("5 - cryptoPBKDF2 done");
});
