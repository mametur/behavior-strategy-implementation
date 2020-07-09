'use strict';

/**
 * Multiples of 3 or 5 in the nature numbers from zero to until parameter(excluded)
 * @param {number} parameter should be number
 * @return {number} sum of the the numbers pass condition and should be number
 */

function solution(number) {
	let total = 0;
	// check range and find numbers then add to each other
	for (let i = 0; i < number; i++) {
		total += !(i % 3) || !(i % 5) ? i : 0;
	}
	return total;
}



