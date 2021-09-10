// 4. Handling NaN

'💩 A bad way 💩';

NaN == NaN;

('✅ A good way ✅');

Number.isNaN({});
// <- false, {} is not NaN
Number.isNaN('ponyfoo');
// <- false, 'ponyfoo' is not NaN
Number.isNaN(NaN);
// <- true, NaN is NaN
Number.isNaN('pony' / 'foo');
// <- true, 'pony'/'foo' is NaN, NaN is NaN

isNaN({});
// <- true, {} is not a number
isNaN('ponyfoo');
// <- true, 'ponyfoo' is not a number
isNaN(NaN);
// <- true, NaN is not a number
isNaN('pony' / 'foo');
// <- true, 'pony'/'foo' is NaN, NaN is not a number
