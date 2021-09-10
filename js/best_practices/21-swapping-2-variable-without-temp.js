('✅ A good way ✅');

console.info('Using destructuring');
let first = 'first';
let second = 'second';
console.log(`Before swap first: ${first}, second: ${second}`);

[first, second] = [second, first];

console.log(`After swap first: ${first}, second: ${second}`);

console.info('\nUsing math only for numbers');
let third = 10;
let fourth = 20;
third = (fourth += third -= fourth) - third;

console.log(third, fourth);
