// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

function AlphabetSoup(str) { 

  //convert string to array
  var arr = str.split("");
  //sort array
  arr.sort(function(a,b) {
    if (a < b) {return -1;}
    if (a > b) {return 1;}
    if (a == b) {return 0;}
  });

  return arr.join("");   
}

//console.log(AlphabetSoup("Argument goes Here"));