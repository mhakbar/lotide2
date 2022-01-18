// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

////////////////////////findKey FUNCTION IMPLEMENTATION//////////////////////

const findKey = (object, callback) => {
 for (let key in object){
  if (callback(object[key])){
    console.log(key);
    console.log(object);
    console.log(callback(object[key]));
    return key;
  }
  };

}

//////////////////TEST//////////////////////

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"



module.exports = findKey;


