('✅ A good way ✅');

console.info('Array with custom fill');
// fill with 1 value
let users = new Array(5).fill(5);

// fill with custom value and index
users = new Array(5).fill('this', 2, 3);

console.log(users);

console.info('Array with unique value');
const passengers = [
	'Linda',
	'Ariana',
	'Jane',
	'Ariana',
	'Jane',
	'John',
	'John Smith',
	'Jane',
];

const uniqueArray = Array.from(new Set(passengers));
console.log(uniqueArray);

console.info('Slicing Arrays');
const userIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
userIndex.length = 5;
console.log(userIndex);

// reverse array alternative
[uniqueArray[0], uniqueArray[uniqueArray.length - 1]] = [
	uniqueArray[uniqueArray.length - 1],
	uniqueArray[0],
];

console.log(uniqueArray); // == console.log(passengers.reverse());
