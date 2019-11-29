const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} !== ${expected}`);
  }
  else if (actual != expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)// => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
