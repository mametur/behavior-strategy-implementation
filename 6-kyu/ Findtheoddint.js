'use strict';
/**
 *
 *Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
 *
 *@param {array} array
 *@return {number} 
 *
 *
 *
 */
// check here https://www.codewars.com/users/mametur/completed_solutions

const countInArray = (array, item) => {
	return array.reduce((total, current) => total + (current === item), 0);
};

function findOdd(array) {
	//happy coding!

	let newArray = array.map((element) => countInArray(array, element));

	let getFirstOdd = newArray.find((element) => element % 2 === 1);
	getFirstOdd = newArray.indexOf(getFirstOdd);

	return array[getFirstOdd];
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
