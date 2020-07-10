# 8 kyu

# Multiples of 3 or 5

Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

## Syntax

> even_or_odd(`integer`)-> `integer`

### Parameters

**number**: `integer`

- A number is representing any integer number

### Return Value: `string`

- Give a message as integer is Odd or Even.

## Examples

This function's behavior is relatively simple to understand. This exercise have not edge case. Just be aware of the number is integer or not.

For number 10:

```js
const number = 10;
const result = even_or_odd(number);
console.log(result); // Even
```

For Number 11:

```js
const number = 11;
const result = even_or_odd(number);
console.log(result); // Odd
```

For Numbers 12.4:

```js
const number = 12.4;
const result = even_or_odd(number);
console.log(result); // Not valid Number
```

## [Codewars solution 1](https://www.codewars.com/kata/reviews/5425fedf430ca265ea00033e/groups/54260ed060d7776515001ba0)

```js
function even_or_odd(number) {
	return number % 2 ? 'Odd' : 'Even';
}
```

### Strategy

This problem has many solutions, here the developer has decided solving in one line to return whether number is odd or even.

### Implementation

The developer strategy is simple and readable. The developer used ternary operator to check condition. If the argument can divided by `2` and reminder is `zero(0)`.It means argument is `even` otherwise it is `Odd`.

`?`: Ternary operator syntax, `condition ? exprIfTrue : exprIfFalse` if condition is true execute for expression otherwise second

`return (string)` result is string

### Possible Refactors

> This strategy could also be implemented with these Implementation

- a condition for function to execute only integer would be better such as Number.isInteger(argument);

## [My solution 1](./sandbox.js)

```js
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
```

### Strategy

My strategy is a bit consider about right user input if argument is integer then execute the rest logic afterwards return `even` or `Odd`

### Implementation

firstly I wanted test my argument is integer if not then show error message as `let result = 'Not valid Number';`.The `Number.isInteger` built-in function check argument is whether is integer or not and result is boolean.Secondly in if condition with `switch`statement to check possibilities if integer can divided by 2(reminder 0) return `even` otherwise `Odd`.

`switch(expression) { case x: // code block break; case y: // code block break; default: // code block }` The switch expression is evaluated once.  
 The value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed.  
 If there is no match, the default code block is executed.

`return (string)` result is string
