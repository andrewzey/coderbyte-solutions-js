// Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

function ExOh(str) { 
  var xCount = 0;
  var oCount = 0;
  
  //loop through characters in string
  for (var i = 0; i < str.length; i++) {
    //if x, increment x counter
    if (str[i] === "x") {xCount++}
    //else if o, increment o counter
    else if (str[i] === "o") {oCount++};
  }
  // if xCount !== oCount, return false
  if (xCount !== oCount) {return false;}
  
  return true; 
         
}

//console.log(ExOh("xxxooooxoxoxoxoxoooxxoox"));