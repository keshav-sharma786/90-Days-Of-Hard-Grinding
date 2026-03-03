console.log("Hello World");

var a = 1078698;
var b = 20986;

setTimeout(() => {
  console.log("call me asap");
}, 0); //?Trust issues with setTimeOut => it will be only called, once the call stack of main thread is empty

function multiplyFn(a, b) {
  const result = a * b;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
