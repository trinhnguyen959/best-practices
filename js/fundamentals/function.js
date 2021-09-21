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

// call method
const lufthansa = {
	airline: 'Lufthansa',
	iataCode: 'LH',
	bookings: [],
	book(flightNumber, name) {
		console.log(
			`${name} book a seat on ${this.airline} flight ${this.iataCode} ${flightNumber}`
		);
		this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
	}
};

lufthansa.book(239, 'John Smith');
lufthansa.book(560, 'Angelia');
console.log(' --------------------');
console.log('lufthansa', lufthansa);
console.log(' --------------------');

const euroWing = {
	airline: 'EuroWings',
	iataCode: 'EW',
	bookings: []
};

const book = lufthansa.book;
// book(28, 'Andrea');
book.call(euroWing, 28, 'Andrea');
book.call(euroWing, 28, 'Lucy');
console.log(euroWing);

book.call(lufthansa, 301, 'Ethan');
console.log(lufthansa);

// apply method
const swiss = {
	airline: 'Swiss Airline',
	iataCode: 'LX',
	bookings: []
};

const flightData = [583, 'George Adam'];
book.apply(swiss, flightData);
console.log(' ------------');
console.log('swiss', swiss);
console.log(' ------------');

// Với toán tử rest thì JS hiện đại không dùng apply nữa
book.call(swiss, ...flightData);
console.log(' ------------');
console.log('swiss', swiss);
console.log(' ------------');

// bind method
const bookLH = book.bind(lufthansa);
const bookEW = book.bind(euroWing);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williamson');
console.log(' ------------------');
console.log('euroWing', euroWing);
console.log(' ------------------');

// fix cung 1 so gia tri
const bookEW540 = book.bind(euroWing, 540);
bookEW540('Selena William');
bookEW540('Robin William');
console.log(' ------------------');
console.log('euroWing', euroWing);
console.log(' ------------------');

// Sample withTax -> dung bind ko can this
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 200));
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));