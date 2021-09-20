// Spread -> tương tự với arr
let student = {
	name: 'Student',
	age: 13
}

let address = {
	home: 'Ha Noi',
	country: 'Viet Nam'
}

let studentInfo = { ...student, ...address }
console.log(studentInfo);

// Tagged template literals
function highValue(para, ...rest) {
	console.log(para);
	console.log(rest)
}

let people = 'Humans';
let world = 'World';

highValue`this is earth for ${people} and entire for ${world}`;

// Modules
import * as other from './export/index.js';
import logger from './logger.js';
import * as constants from './constants.js';
logger(people, constants.TYPE_ERROR);
console.log(other.default());

// Optional chaining (?.)
let optionalObject = {
	name: 'Alice',
	cat: {
		name: 'Keys',
		cat2: {
			name: 'Locks',
			// cat3: {
			// 	name: 'This',
			// 	cat4: {
			// 		name: 'This is'
			// 	}
			// }
		}
	}
}
if (!optionalObject.cat?.cat2?.cat3?.name) {
	console.log('invalid');
}

console.log(optionalObject.cat.cat2?.name);