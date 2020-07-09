'use strict';

/**
 * Multiples of 3 or 5 in the nature numbers from zero to until parameter(excluded)
 * @param {number} parameter should be number
 * @return {number} sum of the the numbers pass condition and should be number
 */
/*
function solution(number) {
	let total = 0;
	// check range and find numbers then add to each other
	for (let i = 0; i < number; i++) {
		total += !(i % 3) || !(i % 5) ? i : 0;
	}
	return total;
}
*/
/*
function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}

*/
### Strategy

This problem has many solutions, here the developer has decided to use built-functions to create new array, then by other built-in functions to return sum of them.

### Implementation

The developer strategy is basically on built-in functions. Firstly created an array with numbers from zero to user numbers then with filter function to make a new array just numbers can dived by 3 or 5 (reminder 0). At the end developer reduce array values with addition of them.

`new Array(number)`: This function create an array with **number** length.  
 `[...new Array(number).keys()]`: create a new array with keys of new array .  
 `filter` return a new array just values passes the condition.
 `reduce` reduce to one value.

### Possible Refactors

> This strategy could also be implemented with these Implementation

- for sake of readeblety can assign to variable each step of built-in function results
