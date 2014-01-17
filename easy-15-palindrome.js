// Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

function Palindrome(str) { 
  //create new string without spaces
  var noSpaceString = "";
    //loop through string
  for (var i = 0; i < str.length; i++) {
      // if not a space, then append to noSpaceString;
    if (str[i] !== " ") {noSpaceString += str[i]};
  }
  
  //loop through new string
  for (var j = 1; j < noSpaceString.length; j++) {
    //if the length minus counter index is not equal to counter index, return false
    if (noSpaceString[noSpaceString.length - j] !== noSpaceString[j - 1]) {
      return "false";
    }
  }
      
  return "true"; 
         
}

//console.log(Palindrome("a man a plan a canal panama"));