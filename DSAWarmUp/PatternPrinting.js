/* 
****
****
****
****

**/
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row = row + "*";
  }
  console.log(row);
}

/**
 *
 **
 ***
 ****
 */
for (let i = 0; i < 8; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

/* 
1
12
123
1234
12345
*/
for (let i = 0; i < 8; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

/*
1
22
333
4444
55555
*/
for (let i = 0; i < 8; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}
/* 
12345
1234
123
12
1
*/

for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

/* 
________*
_______**
______***
_____****
____*****
*/

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - (i + 1); j++) {
    row = row + " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}

/* 
1
10
101
1010
10101
101010
*/

for (let i = 0; i < 6; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    // if column is even print 1
    if (j % 2 == 0) {
      row = row + "1";
    }
    // if column is odd print 0
    else {
      row = row + "0";
    }
  }
  console.log(row);
}
// Alternative solution
for (let i = 0; i < 6; i++) {
  let row = "";
  let switches = "1";
  for (let j = 0; j <= i; j++) {
    row = row + switches;
    if (switches == 1) {
      switches = 0;
    } else {
      switches = 1;
    }
  }
  console.log(row);
}

