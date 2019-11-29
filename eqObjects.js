const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} !== ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// const eqObjects = function(object1, object2) {
//   const object1Keys = Object.keys(object1);
//   const object2Keys = Object.keys(object2);
//   if (Object.keys(object1).length != Object.keys(object2).length) {
//     return false;
//   }
//   else {
//     for (let i = 0; i < object1Keys.length; i++) {
//       if (typeof object1[object1Keys[i]] == "object") {
//         if (!eqArrays(object1[object1Keys[i]], object2[object1Keys[i]]))  {
//           return false;
//         }
//         else if (i == object1Keys.length - 1 && eqArrays(object1[object1Keys[i]], object2[object1Keys[i]])) {
//           return true;
//         }
//       }
//       else {
//         if (object1[object1Keys[i]] != object2[object1Keys[i]]) {
//           return false;
//         }
//         else if (i === object1Keys.length - 1 && (object1[object1Keys[i]] === object2[object1Keys[i]])) {
//           return true;
//         }
//       }
//     }    
//   }
// }

// modified, recursive approach
const eqObjects =  function(object1, object2) {
  let matching = true;
  if (Object.keys(object1).length != Object.keys(object2).length) {
    return false;
  }
  Object.keys(object1).forEach(function(key)  {
    if (typeof object1[key] != "object" && object1[key] === object2[key])  {
    }
    else if (object1[key] !== object2[key])  {
      // console.log("test");
      if (typeof object1[key] != "object") {
        // console.log("test1");
        matching =  false;
        return false;
      }
      else if (typeof object1[key] === "object") {
        // console.log (object1[key], object2[key])
        matching = eqObjects(object1[key], object2[key]);
      }
    } 
  })
  return matching;
};



// function printItems(array) {
//   array.forEach((item) => {
//     if (Array.isArray(item)) {
//       // Print out all it's items individually
//       printItems(item);
//     } else {
//       console.log(item);
//     }
//   });
// }


//Test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba));
// (eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab,ba), true);

const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc));
// eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc))
// eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2))
// eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false) // => false