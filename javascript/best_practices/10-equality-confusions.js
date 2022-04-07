// 10. Confusions about equality

'💩 A bad way 💩';

// All of these evaluate to 'true'!
console.log(false == '0');
console.log(null == undefined);
console.log(' \t\r\n' == 0);
console.log('' == 0);

('✅ A good way ✅');

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true
