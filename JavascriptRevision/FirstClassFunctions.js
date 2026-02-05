// ! Function Statement
a();
// b();
function a() {
  console.log("a called");
}

// ! Function Expression
var b = function () {
  console.log("b called");
};
b();

// ! Function Declaration => Function statement is also known as function declaration.

// ! Anonymous Function
var c = function () {
  console.log("c called");
};
c();

// ! Named Function Expression
var d = function xyz() {
  console.log("d called");
  console.log(xyz);
};
d();
// ! xyz => ReferenceError: xyz is not defined

// ? Difference between Parameters and Arguments

// ! First Class Functions =>
var e = function (param1) {
  console.log(param1);
};

e(function () {
    
});
