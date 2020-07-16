'use strict';
/**
 *
 *@param {number} number is an integer bigger then 0 will be divided by 13
 * @return {number} stationary integer
 *
 */
let check = 0;
function thirt(n) {
	let reminders = [1, 10, 9, 12, 3, 4];

	let checkNumber = Number(n);

	if (Number.isNaN(checkNumber) || checkNumber < 1) {
		return `${n} is not valid for test`;
	}

	let convertString = String(n);
	let sum = 0;
	for (let i = 0; i < convertString.length; i++) {
		let indexReminder = i;
		if (indexReminder > reminders.length - 1) {
			indexReminder = indexReminder % reminders.length;
		}

		sum += convertString[convertString.length - 1 - i] * reminders[indexReminder];
	}

	let runWhile = true;

	while (runWhile) {
		if (check === sum) {
			return sum;
		}
		check = sum;
		return thirt(sum);
	}

	return sum;
}

console.log(thirt(1234567));
