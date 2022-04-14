let numbers = [1, 2, 3, 4, 5];

// shallow copy ->
// 1: clone with slice
let cloneWithSlice = numbers.slice(); // = slice(0)
cloneWithSlice.push(6);
console.log('origin array:', numbers);
console.log('clone array with slice:', cloneWithSlice);

console.log('\n');

// 2: clone with map
let cloneWithMap = numbers.map(number => number);
cloneWithMap.push(6);
console.log('clone array with map:', cloneWithMap);
