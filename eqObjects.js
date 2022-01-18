// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};



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

const eqObjects = function (object1, object2) {
  for (let i in object1) {
    for (let j in object2) {
      if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
      } else if (Array.isArray(object1[i]) && Array.isArray(object2[j])) {
        if (eqArrays(object1[i], object2[j]) === false) {
          return false;
        } else if (object1[i] === object2[j]) {
          return true;
        }
      }
    }
  }
  return true;
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false


module.exports = eqObjects;