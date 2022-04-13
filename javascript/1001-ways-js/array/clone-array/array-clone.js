let numbers = [1, 2, 3];
console.log('origin array:', numbers);

// clone with slice
const arrayClone = input => input.slice(0);
let cloneNumbers = arrayClone(numbers);
console.log('clone array with slice:', cloneNumbers);

// compare
console.log('is clone with slice the same object:', cloneNumbers === numbers);
