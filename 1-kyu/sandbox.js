'use strict';

function solution(number) {
	let total = 0;

	for (let i = 0; i < number; i++) {
		total += !(i % 3) || !(i % 5) ? i : 0;
	}
	return total;
}
