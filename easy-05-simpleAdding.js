// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000.

function SimpleAdding(num) { 
  var result = 0;
  //loop from 1 to num
  for (var i = 1; i <= num; i++) {
    //add current number to result
    result += i;
  }
  return result; 
         
}

//console.log(SimpleAdding(5));