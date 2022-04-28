/*gop filter va map
 * cho 1 mang cac so nguyen
 * lay ra cac phan tu chan va x3
 * */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// cach ro rang
const explicitArr = numbers
	.filter(number => number % 2 === 0)
	.map(number => number * 2);
console.log(explicitArr);

// micro-optimization
const doubleNumber = number => number * 2;
const reduceArr = numbers.reduce((result, item) => {
	if (item % 2 === 0) {
		result.push(doubleNumber(item));
	}
	return result;
}, []);

console.log(reduceArr);
