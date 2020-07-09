# 6 kyu

# Multiples of 3 or 5

If we list all the natural numbers below user input that are multiples of 3 or 5,for user input 10 we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

> Note: If the number is a multiple of both 3 and 5, only count it once.

## Syntax

> solution(`number`)-> `number`

### Parameters

**number**: `number`

- A number is representing the natural numbers below 10.

### Return Value: `number`

- is sum of all the multiples of 3 or 5 .

## Examples

This function's behavior is relatively simple to understand. This exercise have one edge case when 3 and 5 can dived by same number(reminder is 0)

For number 7:

```js
const numbers = 6;
const sum = solution(numbers);
console.log(sum); // sum = 3+6 -> 9
```

For Number 10:

```js
const numbers = 10;
const sum = solution(numbers);
console.log(sum); //sum = 3+5+6+9 -> 23
```

For Number 16(Edge case):

```js
const numbers = 10;
const sum = solution(numbers);
console.log(sum); // total = 3+5+6+9+10+12+15+15-15 ->60
```

## [Codewars solution 1](https://www.codewars.com/kata/reviews/516f30247c907a79f200033c/groups/53860bdf8e16f843eb000ef0)

```js
function solution(number) {
	var n3 = Math.floor(--number / 3),
		n5 = Math.floor(number / 5),
		n15 = Math.floor(number / 15);
	return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15 + 1)) / 2;
}
```

### Strategy

This problem has many solutions, here the developer has decided to assign an argument to all possibilities, then with some math calculation return sum of them.

### Implementation

The developer strategy is a bit tricky for those who are not familiar with math. He/She used 3 variables in function scope. The first variable `n3` is to find how many number 3 in argument, second variable `n5`, and third variable `n15` so on the same logic. Return sum the numbers are divided by 3 or 5 (reminder 0) then subtract the numbers are dived both 3 and 5. By the way this solution test time is shortest among solutions.

`Math.floor(number)`: This function rounds a floating point number down to the nearest integer.  
 `+, /, %, +, *`: these operators combine the variables to calculate the correct solution.  
 `return (number)` is implicit math operators does this job

### Possible Refactors

> This strategy could also be implemented with these Implementation

- Use `let` instead of `var` key.
- Can add condition to avoid negatives numbers.

## [Codewars solution 2](https://www.codewars.com/kata/reviews/516f30247c907a79f200033c/groups/58c61a458b545b14e30005d3)

```js
function solution(number) {
	return number < 1 ? 0 : [...new Array(number).keys()].filter((n) => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}
```

### Strategy

This problem has many solutions, here the developer has decided to use built-functions to create new array, then by other built-in functions to return sum of values.

### Implementation

The developer strategy is basically on built-in functions. Firstly created an array with numbers from zero to user numbers then with filter function to make a new array just numbers can dived by 3 or 5 (reminder 0). At the end the developer reduce array values with addition of them.

`new Array(number)`: This function creates an array with **number** length.

`[...new Array(number).keys()]`: create a new array with keys of new array .

`filter` return a new array just values passes the condition.

`reduce` reduce to one value.

### Possible Refactors

> This strategy could also be implemented with these Implementation

- for sake of readability can assign to variable each step of built-in function results
