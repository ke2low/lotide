// assertArraysEqual = require('../assertArraysEqual')
// middle = require('../middle')

// Test Code
// assertArraysEqual(middle([1, 2, 4, 5, 7, 8, 9, 10]), [5,7]) // should return true
// assertArraysEqual(middle([1, 2, 4, 5, 8, 9, 10]), [5]) // should return true
// assertArraysEqual(middle([1]), []) 

const assert = require('chai').assert;
const middle  = require('../middle');

describe("#middle", () => {
  it("returns [5,7] for [1,2,4,5,7,8,9,10]", () => {
    assert.deepEqual(middle([1, 2, 4, 5, 7, 8, 9, 10]), [5,7]);
  });
});