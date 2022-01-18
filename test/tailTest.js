// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");

// assertEqual(tail([1, 2, 4]), 4);

const assert = require('chai').assert;
const tail = require('..//tail');

describe("#tail", () => {
  it("returns 'Labs' for '['Hello', 'Lighthouse', 'Labs']'", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), 'Labs');

  });

  it("returns '4' for ['1', '2', '4']", () => {
    assert.strictEqual(tail([1, 2, 4]), 4);
  });

  it("returns '4' for ['1', '2', '4']", () => {
    assert.deepEqual(tail([1, 2, 4]), 4);
  });

});

