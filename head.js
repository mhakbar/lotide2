const assertEqual = require("./assertEqual"); //importing assertEqual function from assertEqual.js instead of copy and pasting the whole function.


//Head function returns the value of the first index of the array "input"
const head = input => {
  return input[0];
}; 



assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([1]), 1);

assertEqual(head([]), );

