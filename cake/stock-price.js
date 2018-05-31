function getMaxProfitNaive(stockPricesYesterday) {
  let maxProfit = 0;

  // Go through every time
  for (let outerTime = 0; outerTime < stockPricesYesterday.length; outerTime++) {
    // For each time, go through every other time
    for (let innerTime = 0; innerTime < stockPricesYesterday.length; innerTime++) {
      // For each pair, find the earlier and later times
      const earlierTime = Math.min(outerTime, innerTime);
      const laterTime = Math.max(outerTime, innerTime);

      // And use those to find the earlier and later prices
      const earlierPrice = stockPricesYesterday[earlierTime];
      const laterPrice = stockPricesYesterday[laterTime];

      // See what our profit would be if we bought at the
      // min price and sold at the current price
      const potentialProfit = laterPrice - earlierPrice;

      // Update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  }

  return maxProfit;
}

function getMaxProfitNaive2(stockPricesYesterday) {
  let maxProfit = 0;

  // Go through every price and time
  for (let earlierTime = 0; earlierTime < stockPricesYesterday.length; earlierTime++) {
    const earlierPrice = stockPricesYesterday[earlierTime];

    // And go through all the LATER prices
    for (let laterTime = earlierTime + 1; laterTime < stockPricesYesterday.length; laterTime++) {
      const laterPrice = stockPricesYesterday[laterTime];

      // See what our profit would be if we bought at the
      // min price and sold at the current price
      const potentialProfit = laterPrice - earlierPrice;

      // Update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  }

  return maxProfit;
}

function getMaxProfitGreedy(stockPricesYesterday) {
  let minPrice = stockPricesYesterday[0];
  let maxProfit = 0;

  for (let i = 0; i < stockPricesYesterday.length; i++) {
    const currentPrice = stockPricesYesterday[i];

    // Ensure minPrice is the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);

    // See what our profit would be if we bought at the
    // min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;

    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
}

// not handling edge cases of always down price and less than two elements
function getMaxProfitGreedy(stockPricesYesterday) {
  let minPrice = stockPricesYesterday[0];
  let maxProfit = 0;

  for (let i = 0; i < stockPricesYesterday.length; i++) {
    const currentPrice = stockPricesYesterday[i];

    // Ensure minPrice is the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);

    // See what our profit would be if we bought at the
    // min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;

    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
}

function getMaxProfit(stockPricesYesterday) {
  if (stockPricesYesterday.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  // We'll greedily update minPrice and maxProfit, so we initialize
  // them to the first price and the first possible profit
  let minPrice = stockPricesYesterday[0];
  let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  // Start at the second (index 1) time
  // We can't sell at the first time, since we must buy first,
  // and we can't buy and sell at the same time!
  // If we started at index 0, we'd try to buy *and* sell at time 0.
  // this would give a profit of 0, which is a problem if our
  // maxProfit is supposed to be *negative*--we'd return 0.
  for (let i = 1; i < stockPricesYesterday.length; i++) {
    const currentPrice = stockPricesYesterday[i];

    // See what our profit would be if we bought at the
    // min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;

    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);

    // Update minPrice so it's always
    // the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}
const stockPricesYesterday = [10, 7, 5, 8, 11, 9];

console.log(getMaxProfit(stockPricesYesterday));
