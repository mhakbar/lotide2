const assertEqual = require("./assertEqual");

const tail = input => {
  return input[input.length - 1];
};

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");

// assertEqual(tail([1, 2, 4]), 4);

module.exports = tail;