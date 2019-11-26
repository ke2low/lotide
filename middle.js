const assertArraysEqual = function(arr1, arr2)  {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} == ${arr2}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const eqArrays = function(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  else {
    for (let i = 0; i < arr1.length; i++) {
      // console.log (arr1[i] + " " + arr2[i])
      if (arr1[i] != arr2[i]) {
        return false;
      }
      else if (i == arr1.length - 1 && (arr1[i] === arr2[i])) {
        return true;
      }
    }
  }
}

const middle = function(arr)  {
  if (arr.length <= 2)  {
    return [];
  }
  else if (arr.length % 2 == 0) {
    return arr.slice((arr.length / 2 - 1),(arr.length / 2 + 1));
  }
  else if (arr.length % 2 != 0) {
    return arr.slice(((arr.length / 2)),((arr.length / 2) + 1));
  }
}


// Test Code
assertArraysEqual(middle([1, 2, 4, 5, 7, 8, 9, 10]), [5,7]) // should return true
assertArraysEqual(middle([1, 2, 4, 5, 8, 9, 10]), [5]) // should return true