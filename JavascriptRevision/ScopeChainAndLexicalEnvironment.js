function a() {
  var b = 10;
  console.log(b); // 10
  c(); 
  // c function is lexically present inside function a ()
  function c() {
    console.log(b);
  }
}

// var b = 10;
a();
