////////////////////////asserArraysEqual Function///////////////////////

const assertArraysEqual = (array1, array2) => {

  if(eqArrays(array1, array2)) {
    return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

///////////////////////////////////////////////////////////////////////


///////////////////////////eqArrays Function///////////////////////////
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
////////////////////////////////////////////////////////////////////////



///////////////////////////////MAP function/////////////////////////////


// const map = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log('item BEFORE: ', item);
//     console.log('item AFTER: ', callback(item));
//     console.log('---');
//   }
//   return results;
// }


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

////////////////////////////////////////////////////////////////////////

//////////////////////////////////TESTS/////////////////////////////////


assertArraysEqual(results1,['g', 'c', 't', 'm', 't']);
