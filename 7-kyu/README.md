# 7 kyu

# Mumbling

This time no story, no theory. The examples below show you how to write function accum:  
`accum("abcd") -> "A-Bb-Ccc-Dddd" accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" accum("cwAt") -> "C-Ww-Aaa-Tttt"`

## Syntax

> accum(`string`)-> `string`

### Parameters

**paramString**: `string`

- A paramString is representing string

### Return Value: `string`

- Give a message as string

## Examples

This function's behavior is not so complicated but each implementation phase has different exceptions. This exercise have a few edge case. They are when the letter iteration starts and ends. I will demonstrate them with in few use cases.

For string `abcd`:

```js
const paramString = 'abcd';
const result = accum(paramString);
console.log(result); // A-Bb-Ccc-Dddd
```

edge case `a`:

```js
const paramString = 'a';
const result = accum(paramString);
console.log(result); // A
```

## [My solution](./sandbox)

```js
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
```

### Strategy

This problem has many solutions, I decided go on the each letter of word and pick one by one then write them as index count.Afterwards concatenate all result of each letter

### Implementation

The developer strategy is not so simple. Firstly, I checked the length of the argument with `for loop` go through each of them. Secondly when the first iteration starts at the same time another `for loops` will execute for writing this letter many times so it depends on its index number. Inside second for loop there are a few exceptions. Each letter starts for very first time as `camel case` and place the `dash sign` between each different letter afterwards when all iteration has finished does not show the dash the end of it

`return (string)` result is string
