const fs = require("node:fs");

setImmediate(() => {
  console.log("setImmediate");
}); //A

setTimeout(() => {
  console.log("timer expired");
}, 0); //B

Promise.resolve().then(() => {
  console.log("Promise");
}); //C

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File Reading CB");
});

process.nextTick(() => {
  process.nextTick(() => {
    console.log("inner nextTick");
  }); //E
  console.log("nextTick");
}); //D

console.log("Last Line of the file");

