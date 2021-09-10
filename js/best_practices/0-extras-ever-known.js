('=====ternary operator=====');
const age = 31;
age > 30
	? age > 70
		? age == 30
			? console.log('you are 30 now')
			: console.log('you getting older')
		: console.log('you are better than 30 and 59')
	: console.log('you are bellow 30');

('Get last or n-last element of an array');
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.slice(-2));
console.clear();

('Math short hand');
// floor ~~ lam tron xuong
let floorNumber = 8.9;
floorNumber = ~~floorNumber;
console.log(floorNumber);

// pow ** ham mu
console.log(2 ** 3);

// a> 21 && doSomething()
// a = null || ''
