debugger
const crypto = require("node:crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

//?Sync Function
//?This function will basically block your main thread
//?Synchronous function - Will BLOCK THE MAIN THREAD - DON'T USE IT
const syncKey = crypto.pbkdf2Sync("keshav@2468", "salt", 5000000, 50, "sha512");
console.log(syncKey);
//~unless the first key is generated using sync method, the below console.log will not be printed
console.log("First Key is generated");

//~Password Base Key Derivative function
//~keshav@2468 => name of my password
//~5000000 => It is basically the number of iterations, the more the iterations harder the key for the password will become and it is harder for anyone to crack the password
//~sha512 => It is the digest, digest basically means which algo
//50=> 50 is the key length.The generated key should be of 50 length
//?Async Function
crypto.pbkdf2("keshav@2468", "salt", 5000000, 50, "sha512", (err, key) => {
  debugger
  console.log("Key is generated");
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);

