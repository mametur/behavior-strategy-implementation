'use strict';
/**
 *Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
 *
 * @param {number} num is number positive
 * @return {number}
 *
 *@example
 *
 *  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
   persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
   persistence(4) === 0 // because 4 is already a one-digit number
 *
 */

let count = 0;
function persistence(num) {
	let CheckIsNumber = Number(num);

	if (Number.isNaN(CheckIsNumber) || CheckIsNumber <= 0) {
		return `This '${num}' is not valid argument`;
	}
	//for one digit
	if (num <= 9) {
		return 0;
	}

	let reduceOneDigit = eval([...(num + '')].join('*'));
	count++;
	if (reduceOneDigit <= 9) {
		let lastCount = count;
		count = 0;
		return lastCount;
	}
	return persistence(reduceOneDigit);
}
