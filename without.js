let newArr;

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

const without = function(source, itemsToRemove) {
  newArr = source;
  for (let x = 0; x < itemsToRemove.length; x++)  {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] == itemsToRemove[x])  {
        newArr.splice(i,1);
      }
    }
  }
  console.log(newArr);
  return newArr;
}

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse", "world"]), ["hello"]);
assertArraysEqual(without(["hello", "world", "lighthouse", "labs"], ["lighthouse", "world"]), ["hello", "labs"]);
assertArraysEqual(without(["hello", "world", "lighthouse", "labs"], ["lighthouse", "world", "labs"]), ["hello"]);
assertArraysEqual(without(["hello", "world", "lighthouse", "labs"], ["lighthouse", "world", "labs", "hello"]), []);