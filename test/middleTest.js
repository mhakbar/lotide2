const assertArraysEqual = require('..//assertArraysEqual');
const middle = require('../middle');

//////////////Tests///////////////////////////

assertArraysEqual(middle([1, 2, 3]), [2]);

assertArraysEqual(middle([1, 2, 3, 4]), ([2, 3]));

console.log(middle([1, 2, 3, 4]));
console.log(middle([1]));
console.log(middle([1 ,2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));