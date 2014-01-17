// Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.

function ArithGeo(arr) {  
  // if array length is less than 3, return -1
  if (arr.length < 3) {
    return -1;
  }
  
  var arithmetic = true;
  var geometric = true;
  
  //define arithmetic increment
  var arithCount = arr[1] - arr[0];
  //define geometric increment
  var geoCount = arr[1] / arr[0];
  
  //loop through array
  for (var i = 1; i < arr.length; i++) {
    //if not arithmetic, set arithmetic to false
    if (arr[i] - arr[i-1] !== arithCount) {arithmetic = false};
    if (arr[i] / arr[i-1] !== geoCount) {geometric = false};
  }
  
  if (arithmetic) {return "Arithmetic"};
  if (geometric) {return "Geometric"};
  
  return -1;        
}

//console.log(ArithGeo([1,2,3,100]));