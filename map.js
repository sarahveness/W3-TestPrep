// Implement the built-in array map function. Yours will take in two arguments. The first will be an array to map and the second will be a callback function. The function will return a new array based on the results of the callback function.

// return - [5, 7, 2, 5, 3]


function map (arr, cb) {
  var i = 0;
  var total = [];
  for (; i < arr.length; i++) {
    total.push(cb(arr[i]));
  }
  return total;
}



console.log(map(["ground", "control", "to", "major", "tom"], (elm) => {
  return elm.length}))
