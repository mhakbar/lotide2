// const assertArraysEqual = require('..//assertArraysEqual');
// const middle = require('../middle');

// //////////////Tests///////////////////////////

// assertArraysEqual(middle([1, 2, 3]), [2]);

// assertArraysEqual(middle([1, 2, 3, 4]), ([2, 3]));

// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1]));
// console.log(middle([1 ,2]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5]));



////////////Mocha & Chai Tests/////////////use "npm test" and not "node" to run the tests


const assert = require('chai').assert;
const middle = require('..//middle');

describe("middle", () => {
  it("returns empty array for single input, [1]", () => {
  assert.deepEqual(middle([1]), []);
});

it("returns empty array for two input only, [1, 2]", () => {
  assert.deepEqual(middle([1, 2]), []);
});

it("returns single middle value for total odd elements in an array. Output: [3], input: [1, 2, 3, 4, 5]", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
});

it("returns two middle values for even length array. Output: [3, 4]. Input: [1, 2, 3, 4, 5, 6]", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
});

});

