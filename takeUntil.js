// ///////asserArraysEqual Function///////////

// const assertArraysEqual = (array1, array2) => {

//   if(eqArrays(array1, array2)) {
//     return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     return console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
//   }
// };

// //////////////////////////////////////////////////////////////////////////

// ////////eqArrays Function//////////
// const eqArrays = function (array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   };

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] === array2[i]) {
//       //console.log(`🛑🛑🛑 ${array1} !== ${array2}`);
//       continue;

//     } else {
//       return false;
//     }
//   }
//   return true;
// };
//////////////////////////////////////



//////////////////takeUntil Function/////////////////////////
const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      //console.log(callback[array[elements]]);
      array.splice(i);
      return array;
    }
  }
};

// const takeUntil = function (array, callback) {
//   for (let elements of array){
//     if (callback(array[elements])) {
//       //console.log(callback[array[elements]]);
//       array.splice(elements);
//       return array;
//     }
//   }
// };

/////////////////TEST CODE/////////////////////////

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// const data3 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results3 = takeUntil(data3, x => x < 0);
// assertArraysEqual(results3, [1, 2, 5, 7, 2]);

// const data4 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results4 = takeUntil(data4, x => x === ',');
// assertArraysEqual(results4, ['I\'ve', 'been', 'to', 'Hollywood']);