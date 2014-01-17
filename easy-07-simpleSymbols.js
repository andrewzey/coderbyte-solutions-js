//Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 

function SimpleSymbols(str) { 
  //define alphabet
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  //loop through each character
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var prevChar = str[i - 1];
    var nextChar = str[i + 1];

    //if it's a letter
    if (alphabet.indexOf(char) !== -1) {
      //if previous and next characters are not "+", then return false
      if (prevChar !== "+" || nextChar !== "+") {
        return "false";
      }
    }
  }
  return "true";     
}

//console.log(SimpleSymbols("++d+===+c++==a"));