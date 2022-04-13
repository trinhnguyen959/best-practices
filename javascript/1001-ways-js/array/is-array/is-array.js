// built-in
let numbers = [1, 2, 3];
let arrayString = 'array string';
console.log('numbers is array:', Array.isArray(numbers));

// polyfill
let isArray = input =>
	Object.prototype.toString.call(input) === '[object Array]';

console.log('numbers is array with polyfill:', isArray(numbers));
console.log('string is array with polyfill:', isArray(arrayString));
