const assertEqual = require('./assertEqual');

function head(arr) {
  if (arr.length == 0) {
    return undefined;
  }
  else {
    return arr[0];
  }
}

module.exports = head;