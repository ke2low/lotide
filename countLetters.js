const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} !== ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const letterCount = {};
  let spacelessStr = str.split(" ").join("");
  let letterArr = spacelessStr.split("");
  console.log(spacelessStr);
  console.log(letterArr);
  for (const letters of letterArr)  {
    if (letterCount[letters] != undefined)  {
      letterCount[letters] += 1;
    }
    else {
      letterCount[letters] = 1;
    }
  }
  console.log(letterCount);
  return letterCount;
}

const result = countLetters("lighthouse in the house");

countLetters("lighthouse in the house")
assertEqual(result["l"],1);
assertEqual(result["i"],2);
assertEqual(result["h"],4);
assertEqual(result["e"],3);