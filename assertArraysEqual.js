////////Importing eqArrays function from eqArrays.js file////////////
const eqArrays = require("./eqArrays");


///////asserArraysEqual Function///////////

const assertArraysEqual = (array1, array2) => {

  if(eqArrays(array1, array2)) {
    return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

///////////////////////Tests//////////////////////////

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => Assertion Passed
assertArraysEqual(['1', '2', '3',], [1, 2]); // => Assertion Failed
assertArraysEqual(['1', '2', '3',], ['1', '2', '3',]);
assertArraysEqual([1, 2, 3, 4], [4, 3, 2, 1]);