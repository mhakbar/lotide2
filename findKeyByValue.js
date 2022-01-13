// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

///////////////////////////////////////////////////////////////////////

/////////////////findKeyByValue FUNCTION IMPLEMENTATION////////////////

const findKeyByValue = (object, value) => {

  let key = Object.keys(object);
  console.log(object); /////displays whole object array
  console.log(key);//////displays keys 

  for (let elements of key) {
    console.log(elements); ///return individual keys for object
    console.log(value); ///input keys 
    console.log(object[elements]);/// returns value of objects
    if (object[elements] === value ) {
      return elements;
    }
  }

};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);