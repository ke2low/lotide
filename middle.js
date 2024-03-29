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
  else if (arr1.length == 0 && arr2.length == 0)  {
    return true;
  }
  else {
    for (let i = 0; i < arr1.length; i++) {
      console.log (arr1[i] + " " + arr2[i])
      if (arr1[i] != arr2[i]) {
        return false;
      }
      else if ((i == arr1.length - 1 && (arr1[i] === arr2[i]))) {
        return true;
      }
    }
  }
}

const middle = function(arr)  {
  if (arr.length <= 1)  {
    return [];
  }
  else if (arr.length % 2 == 0) {
    return arr.slice((arr.length / 2 - 1),(arr.length / 2 + 1));
  }
  else if (arr.length % 2 != 0) {
    return arr.slice(((arr.length / 2)),((arr.length / 2) + 1));
  }
}



module.exports = middle;