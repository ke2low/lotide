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


const letterPositions = function(sentence) {
  const results = {};
  const letterArray = sentence.split("");
  for (const letters in letterArray)  {
    if (letterArray[letters] != " ") {
      if (results[letterArray[letters]] != undefined)  {
        results[letterArray[letters]].push(parseInt(letters));
      }
      else {
        results[letterArray[letters]] = [parseInt(letters)];
      }
    }
  }
  // logic to update results here
  console.log(results);
  return results;
};


const results = letterPositions("hello world");
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(results["h"],[0]);
assertArraysEqual(results["e"],[1]);
assertArraysEqual(results["l"],[2, 3, 9]);
assertArraysEqual(results["o"],[4, 7]);