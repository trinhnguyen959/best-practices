// 6. How (not) to console.log

'💩 A bad way 💩';

const foo = { name: 'tom', age: 30, nervous: false };
const bar = { name: 'dick', age: 40, nervous: false };
const baz = { name: 'harry', age: 50, nervous: true };

console.log(foo);
console.log(bar);
console.log(baz);

('✅ A good way ✅');

// Computed Property Names
console.log('%c My Friends', 'color: orange; font-weight: bold;');
console.log({ foo, bar, baz });

('OR');

// Console.table(...)
console.table([foo, bar, baz]);

// tinh khoang thoi gian code chay
console.time('looper');
let i = 0;
while (i < 1000000) {
	i++;
}
console.timeEnd('looper');

// --OR--
let startAt = performance.now();
let j = 0;
while (j < 1000000) {
	j++;
}
let endAt = performance.now();
console.log(`Time with performance ${endAt - startAt}`);

// trace debugging => code chay 2 lan ko
const deleteMe = () => console.trace('bye bye');
deleteMe();
deleteMe();
