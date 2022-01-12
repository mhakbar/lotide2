const assertEqual = require("./assertEqual");//Importing assertEqual function from assertEqual.js


  ////////eqArrays Function//////////
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  };
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      //console.log(`🛑🛑🛑 ${array1} !== ${array2}`);
      continue;   
      
    } else {
      return false;      
    }
  }
  return true;
};
//////////////////////////////////////


//////Tests/////////////
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);


//////exporting function//////
module.exports = eqArrays;