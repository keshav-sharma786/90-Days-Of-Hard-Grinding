console.log("Hello");

setTimeout(() => {
  console.log("hello");
}, 3000);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});
