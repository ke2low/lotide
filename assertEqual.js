// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.assert(actual === expected,'"Lighthouse Labs" !== "Bootcamp"');
//   }
//   else {
//     console.assert(actual === expected, " === ");
//   }
// };

//throwing a completely different erorr message compared to what is written in the exercise, might be because it is a different version of node

// const assertEqual = function(actual, expected) {
//   try {
//     console.assert(actual === expected);
//     console.log("✅✅✅ Assertion Passed: " + actual + " !== " + expected);
//   } catch (e) {
//     console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
//   }
// };

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} == ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;