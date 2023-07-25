/** https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;

    let priceBuy = prices[0];
    let profity = 0;

    for (let i = 1; i < prices.length; i++) {
        priceBuy = Math.min(priceBuy, prices[i]);
        profity = Math.max(profity, prices[i] - priceBuy);
    }

    return profity;
};
