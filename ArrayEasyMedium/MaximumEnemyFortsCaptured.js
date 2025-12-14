var captureForts = function (forts) {
  let currCount = 0;
  let maxCount = 0;
  let curr = 0;
  let j = 0;
  
  for (let i = 0; i < forts.length; i++) {
    // this condition will basically stop my j at 1 or -1
    if (forts[j] === 0) {
      j++;
    }
    // i have to calculate my contagious zeroes only if my i is at -forts[j]
    if (forts[i] === -forts[j]) {
      if (i > j) {
        currCount = i - j - 1;
        curr = currCount;
        currCount = 0;
        j = i;
      }
    } else if (forts[i] === forts[j]) {
      //curr = 0;
      j = i;
    }
    if (curr > maxCount) {
      maxCount = curr;
    }
  }

  return maxCount;
};
