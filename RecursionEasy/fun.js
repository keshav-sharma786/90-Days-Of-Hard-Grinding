// basic recursion demo

function fun(num) {
  // base case
  if (num === 0) {
    return;
  }
  console.log(num);
  num = num - 1;
  fun(num);
}

const a = 10;
fun(a);
