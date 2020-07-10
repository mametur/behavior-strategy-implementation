/**
 *Repeat letters depend on their index and place '-' between each different letter
 * @param {string}
 * @returns{string}
 */

function accum(paramString) {
	let result = '';
	// check whole numbers
	for (let i = 0; i < paramString.length; i++) {
		// make came case first letter of word
		let upperCase = paramString.toUpperCase();
		for (let j = 0; j <= i; j++) {
			// write same later depend in its index
			if (i === j) {
				// if letter is last one does not  concatenate it with '-'
				result += i === upperCase.length - 1 ? upperCase[i] : upperCase[i] + '-';
				upperCase = upperCase.toLowerCase();
			} else {
				// after first letter the rest should be lower case
				result += upperCase[i];
				upperCase = upperCase.toLowerCase();
			}
		}
	}
	return result;
}

console.log(accum('a'));
