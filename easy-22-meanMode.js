// Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.

function MeanMode(arr) { 
  //determine mean
  var sum = 0;
  
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  
  var mean = sum / arr.length;
  
  //if mean is not integer, return 0
  if (mean % 1 !== 0) {
    return 0;
  }
  
  //determine mode
  var mode = 0;
  var maxDigits = 1;
  
  //loop through array
  for (var j = 0; j < arr.length; j++){
    var digit = arr[j];
    var digitCount = 1;
    
    //loop through all other numbers
    for (var k = 0; k < arr.length; k++) {
      if (k!=j) {
        if (arr[k] === digit) {
          digitCount++;
        }
      }
    }
    
    //if digitCount is bigger than mode, replace mode and maxDigits counter
    if (digitCount > maxDigits) {
      mode = digit;
      maxDigits = digitCount;
    }
  }
  
  if (mode === mean) {
    return 1;
  } else {
    return 0;
  }
  
}

//console.log(MeanMode([5,3,3,3,1]));


