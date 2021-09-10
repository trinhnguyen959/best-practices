('=====ternary operator=====');
const age = 31;
age > 30
	? age > 70
		? age == 30
			? console.log('you are 30 now')
			: console.log('you getting older')
		: console.log('you are better than 30 and 59')
	: console.log('you are bellow 30');
