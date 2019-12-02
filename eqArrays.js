const assertEqual = require('./assertEqual');

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     console.log("Test")
//     return false;
//   }
//   else {
//     for (let i = 0; i < arr1.length; i++) {
//       console.log (arr1[i] + " " + arr2[i])
//       if (arr1[i] != arr2[i]) {
//         console.log("Test")
//         return false;
//       }
//       else if (i == arr1.length - 1 && (arr1[i] === arr2[i])) {
//         return true;
//       }
//     }
//   }
// }

const eqArrays = function(arr1, arr2) {
  let matching = true;
  if (arr1.length != arr2.length) {
    matching = false;
  }
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) == true) {
        matching = eqArrays(arr1[i], arr2[i]);
      } else {
        if (arr1[i] !== arr2[i])  {
          matching = false;
        }
        else if (arr1[i] == arr2[i]) {
          matching = true;
        }
      }
    }
  }
  return matching;
}

module.exports = eqArrays;