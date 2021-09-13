// 1: don't use the await any time
const runSequence = async () => {
	const people = await findAllPeople();
	const cars = await findAllCars();
	return { people, cars };
};

// => optimize way
const runSequence = async () => {
	const people = findAllPeople();
	const cars = findAllCars();
	return Promise.all([people, cars]);
};

(async () => {
	console.time('Sequence');
	await runSequence();
	console.timeEnd('Sequence');
})();

// 2. considering of using loop instead of map + filter + reduce
const result = aMillionEmployees
	.map(employee => employee.salary)
	.filter(salary => salary > 0)
	.reduce((prev, next) => prev + next, 0);

// => optimize way
let sum = 0; // 10x faster
for (const employee of aMillionEmployees) {
	if (item.salary < 0) continue;
	sum += employee.salary;
}

// 3. await with for
(async () => {
	const heroes = [];
	for ({ _id } of tenHeroes) {
		const hero = await db.heroes.findOne({ _id });
		heroes.push(hero);
	}
	console.log(heroes);
})();

// => optimize way
(async () => {
	const promises = [];
	for ({ _id } of tenHeroes) {
		const hero = db.heroes.findOne({ _id });
		promises.push(hero);
	}
	const heroes = await Promise.all(promises);
	console.log(heroes);
})();

/**
 * Caching
 * 1. How often would data change?
 * 2. How many requests do you plan to support?
 * 3. How much would it cost?
 * 4. Where is the bottleneck? => diem nghen
 */
