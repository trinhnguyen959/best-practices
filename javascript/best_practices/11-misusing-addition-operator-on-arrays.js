// 11. Misusing the Addition Operator for Merging Arrays

a = [1, 2];
b = [3, 4, 5];

('💩 A bad way 💩');

console.log(a + b); // [1,23,4,5,6]

('✅ A good way ✅');

a = a.concat(b);
console.log(a);

// OR

a = [...a, ...b];
