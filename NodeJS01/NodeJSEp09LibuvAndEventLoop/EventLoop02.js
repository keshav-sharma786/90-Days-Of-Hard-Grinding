const fs = require("node:fs");

const a = 100;

setImmediate(() => {
  console.log("setImmediate");
}); //A

Promise.resolve().then(() => {
  console.log("Promise");
}); //B

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File Reading CB");
});

setTimeout(() => {
  console.log("Timer expired");
}, 0); //C

process.nextTick(() => {
  console.log("process.nextTick");
}); // D

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last line of the file. ");
