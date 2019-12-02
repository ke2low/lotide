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
      // console.log (arr1[i] + " " + arr2[i])
      if (arr1[i] != arr2[i]) {
        return false;
      }
      else if ((i == arr1.length - 1 && (arr1[i] === arr2[i]))) {
        return true;
      }
    }
  }
}

const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++)  {
    if (Array.isArray(arr[i]) == false) {
      newArr.push(arr[i]);
    }
    else if (Array.isArray(arr[i]) == true) {
      let nestedArr = arr[i]
      for (let x = 0; x < nestedArr.length; x++) {
        newArr.push(arr[i][x]);
      }
    }
  }
  return newArr;
}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);