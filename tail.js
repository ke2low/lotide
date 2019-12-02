const assertEqual = require('./assertEqual');

const tail = function(arr) {
  if (arr.length === 1) {
    return [];
  } else if (arr.length === 0) {
    return [];
  } else {
    let newArr = [];
    newArr = arr.slice(1, arr.length);
    return newArr;
  }
};

module.exports = tail;

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const test = tail([]);
// assertEqual(test[0], undefined);

