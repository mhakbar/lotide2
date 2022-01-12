//////////////////////eqArrays Function/////////////////////////////

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  };

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
/////////////////////////////////////////////////////////////////////////////
///////////////assertArraysEqual Function///////////////////////////////////
const assertArraysEqual = (array1, array2) => {

  if (eqArrays(array1, array2)) {
    return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
//////////////////////////////////////////////////////////////////////////////

///////////Without Function////////////////
const without = (array1, array2) => {

  let filteredArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      filteredArray = array1.splice(i, 1);
    }
  }
  return console.log(array1);
};
////////////////////////////////////////////

////////////Tests////////////////////////////
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);