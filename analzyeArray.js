//const object = analyzeArray([1,8,3,4,2,6]);

//object == {
  //average: 4,
  //min: 1,
  //max: 8,
  //length: 6
//};
function analyzeArray (array) {
    let min = array[0];
    let max = array[0];
    let length = array.length
    for (let i = 0; i < array.length; i++) {
      if(array[i] > max) {
        max = array[i];
        console.log("max is: " + max);
      }
      if(array[i] < min) {
        min = arr[i];ay
        console.log("min is: " + min);
      }
    }
    let total = 0;
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
    let average = total / array.length;
    console.log("array length is " + length);
    let object = {
      "average:": average,
      "min: ": min,
      "max: ": max,
      "length ": array.length
    };
    console.log(object)
    return object;
  }
  console.log (analyzeArray([1,8,3,4,2,6]));