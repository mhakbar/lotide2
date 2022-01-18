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
///////asserArraysEqual Function///////////

const assertArraysEqual = (array1, array2) => {

  if(eqArrays(array1, array2)) {
    return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
 /////////////////////////////////////////////// 

///////////////Middle function/////////////////////

const middle = array => {
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return([array[(array.length / 2) - 1] , array[(array.length / 2)]]);
  } else {
    return [(array[Math.floor(array.length / 2)])];
  }

};

//////////////////////////////////////////////////

// //////////////Tests///////////////////////////

// assertArraysEqual(middle([1, 2, 3]), [2]);

// assertArraysEqual(middle([1, 2, 3, 4]), ([2, 3]));

// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1]));
// console.log(middle([1 ,2]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5]));

//////Exporting files////////////

module.exports = eqArrays;
module.exports = assertArraysEqual;
module.exports = middle;