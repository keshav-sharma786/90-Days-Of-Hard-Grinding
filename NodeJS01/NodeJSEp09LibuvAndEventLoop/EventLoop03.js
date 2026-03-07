const fs = require("node:fs");

setImmediate(() => {
  console.log("setImmediate");
}); //A

setTimeout(() => {
  console.log("Timer expired");
}, 0); //B

Promise.resolve().then(() => {
  console.log("Promise");
});//C

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => {
    console.log("2nd timer");
  }, 0); //F

  process.nextTick(() => {
    console.log("2nd nextTick");
  }); //G

  setImmediate(() => {
    console.log("2nd setImmediate");
  }); //H

  console.log("File Reading CB");
}); //D

process.nextTick(() => {
  console.log("nextTick");
}); //E

console.log("Last line of the file");
