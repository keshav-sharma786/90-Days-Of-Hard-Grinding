const fs = require("fs");
const https = require("https");


console.log("Hello World");

var a = 1078698;
var b = 20986;

//~Synchronous Function for reading the file ==> Now this function will actually block the main thread
const htmlFileData = fs.readFileSync("./file.html", "utf-8"); // 100 ms
console.log(htmlFileData);
console.log("This will execute only after file read");

//~Making an api call

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 30000);

//~Async function
fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data: ", data);
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is :", c);
