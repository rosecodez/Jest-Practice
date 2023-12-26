/* eslint-disable no-plusplus */
function analyzeArray(array) {
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] <= min) {
      min = array[i];
    }
  }

  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  const average = total / array.length;
  const object = {
    'average:': average,
    'min: ': min,
    'max: ': max,
    'length ': array.length,
  };
  return object;
}
console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
module.exports = analyzeArray;
