// Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

function ArrayAdditionI(arr) {   
  //base case
  if (arr.length === 1) { return "true" }
  
  //determine largest number and remove from array
  var largest = arr.sort(function(a,b){return a-b}).pop();
  //initialize sum variable
  var sum = 0;
  
  //for each number in the array in turn
  for (var i = 0; i < arr.length; i++) {
    //set sum to be equal to currently looped num
    sum = arr[i];
    // sum = addition of all other numbers in turn from left to right
    for (var j = 0; j < arr.length; j++) {
      if (j !== i) {
        sum += arr[j];
        if (sum === largest) {
          return "true";
        }
      }
    }
    
    // sum = subtraction of all other numbers in turn from left to right
    for (var k = 0; k < arr.length; k++) {
      if (k != i) {
        sum -= arr[k];
        if (sum === largest) {
          return "true";
        }
      }
    }
    
    //otherwise return "false"
    return "false";
  }
}

//console.log(ArrayAdditionI([10,4,3,6,23,1]));
//will run through combinations of sum in the following manner:

// 1
// 1 3
// 1 3 4
// 1 3 4 6
// 1 3 4 6 10
// 1    4 6 10
// 1       6 10
// 1          10
// 1

// 3
// 3 1
// 3 1 4
// 3 1 4 6
// 3 1 4 6 10
// 3    4 6 10
// 3       6 10
// 3          10
// 3

// 4
// 4 1
// 4 1 3
// 4 1 3 6
// 4 1 3 6 10
// 4    3 6 10
// 4       6 10
// 4          10
// 4

// 6
// 6 1
// 6 1 3
// 6 1 3 4
// 6 1 3 4 10
// 6    3 4 10
// 6       4 10
// 6          10
// 6

// 10
// 10 1
// 10 1 3
// 10 1 3 4
// 10 1 3 4 6
// 10    3 4 6
// 10       4 6
// 10          6
// 10

