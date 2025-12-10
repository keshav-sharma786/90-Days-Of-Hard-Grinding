/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    profit = prices[i] - min;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }

  return maxProfit;
};
