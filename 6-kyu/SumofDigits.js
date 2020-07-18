'use strict';
/**
 *Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
 *
 * @param {number} number is nature
 * @return {number} should be one digit
 */

function digital_root(number) {
	let checkType = Number(number);
	// check type or nature numbers
	if (Number.isNaN(checkType) || checkType < 0) {
		return 'Input should be nature numbers';
	}
	// store in array to manipulate
	// spread operator
	let storeInArray = [...(checkType + '')];
	let reduceNumbers = storeInArray.reduce((total, currentValue) => (total += parseInt(currentValue)), 0);
	if (reduceNumbers <= 9) {
		return reduceNumbers;
	}

	return digital_root(reduceNumbers);
}
