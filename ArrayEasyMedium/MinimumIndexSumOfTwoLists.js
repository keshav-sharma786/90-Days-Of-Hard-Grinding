/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  // value -> index store karne ke liye
  let map = new Map();

  // list1 ke elements ke index store karo
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  let minSum = Infinity;
  let ans = [];

  // list2 traverse karo
  for (let j = 0; j < list2.length; j++) {
    if (map.has(list2[j])) {
      let sum = j + map.get(list2[j]);

      if (sum < minSum) {
        minSum = sum;
        ans = []; // purane answers hatao
        ans.push(list2[j]);
      } else if (sum === minSum) {
        ans.push(list2[j]);
      }
    }
  }

  return ans;
};
