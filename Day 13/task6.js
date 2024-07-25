const lodash = require('lodash');

const numbers = [1, 2, 3, 4, 5];

const sum = lodash.sum(numbers);
console.log('Sum:', sum);

const max = lodash.max(numbers);
console.log('Maximum:', max);

const allEven = lodash.every(numbers, (num) => num % 2 === 0);
console.log('All numbers are even:', allEven);

const doubled = lodash.map(numbers, (num) => num * 2);
console.log('Doubled numbers:', doubled);

const chunked = lodash.chunk(numbers, 2);
console.log('Chunked array:', chunked);

const random = lodash.sample(numbers);
console.log('Random number:', random);