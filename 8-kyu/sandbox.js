/**
 * Function to check whether the given number is Even or Odd
 * @param {number} integer number
 * @return {string} "Even" if the number is even "Odd" otherwise
 */

function even_or_odd(number) {
	let result = 'Not valid Number';
	if (Number.isInteger(number)) {
		switch (number % 2) {
			case 0:
				result = 'Even';
				break;
			default:
				result = 'Odd';
		}
	}
	return result;
}
