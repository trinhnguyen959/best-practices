// 1. Variable scope

'💩 A bad way 💩';

for (var i = 0; i < 10; i++) {
	/* ... */
}
console.log(i); // 10

('✅ A good way ✅');

for (let j = 0; j < 10; j++) {
	/* ... */
}
console.log(j); // Error

// Even brackets closes the scope of let.

{
	let x = 5;
}

console.log(x);
