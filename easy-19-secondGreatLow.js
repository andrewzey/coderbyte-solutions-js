// Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

function SecondGreatLow(arr) { 
  var array = arr.sort(function(a,b) {return a-b});
  
  //loop through array to remove duplicate values
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    
    //loop through all other values
    for (var j = 0; j < array.length; j++) {
      //delete duplicate array values
      if (j !== i && array[j] === array[i]) {
        array.splice(j,1);
      }
    }
  }
  
  //if array length is 2
  if (array.length === 2) {
    array.sort(function(a,b){return b-a});
    return array.join(" ");
  } 
  
  //if array length is 3
  else if (array.length === 3) {
    return array[1].toString() + " " + array[1].toString();
  }
  
  //if array length is 4 or greater return string of array[1] and array[array.length - 2]
  else if (array.length >= 4) {
    return array[1].toString() + " " + array[array.length - 2].toString(); 
  }      
}

//console.log(SecondGreatLow([7,7,12,98,106]));