/* totalPayable = 210         // £2.10
cashPaid     = 300         // £3.00
dfference    =  90         // 90p
change       = [50,20,20]  // 50p, 20p, 20p */ 

var _ = require("underscore");
var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
var C = {};

C.getChange = function (totalPayable, cashPaid) {
	'use strict';
	// a function that consumes a value and an array of Coin sizes, in order from largest to smallest
	// returns the minimal combination of coins for the given value
	var getCoins = function (amount, coinsSoFar, coinsAvailable) {
		var biggestCoin = coinsAvailable[0]; // the first Coin in the list will be the biggest.
		if (amount == 0) { // we've already taken care of all the coins and they're in our array, just return it.
			return coinsSoFar;
		} 
		else if (amount >= biggestCoin) { // we're definitely going to use the biggest coin, maybe bringing us to zero if it's equal to the amount.
			return getCoins (amount - biggestCoin, coinsSoFar.concat([biggestCoin]), (coinsAvailable));
		}
				else { // the biggest coin is too big so throw it out and try again
					return getCoins (amount, coinsSoFar, _.rest(coinsAvailable));
				}
		};
		// now substract the amount, give getCoins an empty array and the constant "coins"
	return getCoins (cashPaid - totalPayable, [], coins);
};
module.exports = C;