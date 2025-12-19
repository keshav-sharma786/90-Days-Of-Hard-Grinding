function x() {
  const a = 10;
  b();
  //   console.log(name);
  function b() {
    var name = "Keshav";
    console.log("b");
    console.log(a);
  }
}

x();
// require("./path")
// All the code of the module is wrapped inside a function (IIFE)


