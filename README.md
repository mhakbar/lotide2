# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @macbar/lotide`

**Require it:**

`const _ = require('@macbar/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns the first value from the array.
* `function2(tail)`: returns the last value from the array.
* `function3(middle)`: array has to be longer than 02 indices. Function returns the middle value of the array. 
* `function4(eqArrays)`: Matches and returns true if arrays are same, or false if arrays are different. 
* `function5(assertArraysEqual)`: checks if arrays are equal or not and returns whether the assertion passed or failed. 
* `function6(assertEqual)`: checks if the two values are same or not. 
* `function7(assertObjectsEqual)`: checks if the two objects are equal or not. 
* `function8(countLetters)`: counts the number of letters in a string. 
* `function9(countOnly)`: counts how many times a key appeared inside the object. 
* `function10(eqObjects)`: checks if two objects are same or not.
* `function11(findKey)`: returns the first key with same value assigned from the object. 
* `function12(findKeyByValue)`: returns true if input and returned key using value is same.
* `function13(letterPositions)`: returns the indices of the letter in a sentence. 
* `function14(map)`: extracts the first letter of each word and returns an array. 

  