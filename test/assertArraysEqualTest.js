const assertArraysEqual = require('..//assertArraysEqual');

///////////////////////Tests//////////////////////////

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => Assertion Passed
assertArraysEqual(['1', '2', '3',], [1, 2]); // => Assertion Failed
assertArraysEqual(['1', '2', '3',], ['1', '2', '3',]);
assertArraysEqual([1, 2, 3, 4], [4, 3, 2, 1]);