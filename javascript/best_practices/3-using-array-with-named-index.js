// 3. Using array with named index

'💩 A bad way 💩';

let a = [];
a['a'] = 'valueA';
a['b'] = 'valueB';
a['c'] = 25;

console.log(a.length);

('✅ A good way ✅');

var b = [];
b[0] = 'valueA';
b[1] = 'valueB';
b[2] = 25;

console.log(b.length);
