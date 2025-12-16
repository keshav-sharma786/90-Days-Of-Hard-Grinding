function Print(x) {
  // base case
  if (x > 10) {
    return;
  }
  console.log(x);
  // Recursive function call
  Print(++x);
}

let x = 10;
Print(1);
