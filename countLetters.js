/////////////////// Assert Equal FUNCTION IMPLEMENTATION///////////////////
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//////////////////////////////////////////////////////////////////////////


//////////////////////countLetters FUNCTION IMPLEMENTATION//////////////////

const countLetters = sentence => {

  const results = {};

  for (const letters of sentence) {
    if(letters !== ' ') {
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }

  }
}
return consol.log(results);     /////console logging so to see the actual results. No need to use assertEqual as objects cannot be compared directly to other objects.
};


countLetters("lighthouse in the house");
countLetters('LHL');

module.exports = countLetters;
