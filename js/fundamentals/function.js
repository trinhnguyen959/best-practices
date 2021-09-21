'use strict';
// Default Parameters
function defaultParameters(first, second = 2) {
	return first + second;
}

console.log(defaultParameters(0));

// First class function just are concept

/**
 * Higher order function
 * Gọi là higher vì nó ở mức trừu tượng (abtraction) cấp cao
 * gọi đến hàm low level là callback
 * Hàm transform không quan tâm callback xử lí như nào mà chỉ gọi
 */
// 1. Hàm gọi hàm làm tham số
const oneWord = str => str.replace(/ /g, ' ').toLowerCase();
const upperFirstWord = str => {
	const [firstWord, ...other] = str.split(' ');
	return [firstWord.toUpperCase(), ...other].join(' ');
};
const transform = (str, fn) => {
	console.log(`Origin string: ${str}`);
	console.log(`Transform string: ${fn(str)}`);
	console.log(`Transform by: ${fn.name}`);
};

transform('Iam the best', oneWord);
transform('Iam the best', upperFirstWord);

// 2. Function trả về function
const greet = greeting => name => console.log(`${greeting} ${name}`);
const greeterHey = greet('Hey');
greeterHey('John');
greet('Hello')('VietNam');