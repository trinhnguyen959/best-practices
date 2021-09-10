// 5. Using variable as key in objects

'💩 A bad way 💩';

n = 'Entity Name';

var obj = {
	n: 'Harry',
};

console.log(obj); // {n: "Harry"}

('✅ A good way ✅');

var obj = {
	[n]: 'Harry',
};

console.log(obj); // {Entity Name: "Harry"}
