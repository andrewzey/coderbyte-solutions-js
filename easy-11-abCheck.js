// Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.

function ABCheck(str) { 
  
  //loop through each character in string
  for (var i = 0; i < str.length; i++) {
    //if the character is a or b, return true if the character 4 places away is a or b
    if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "b") {
      if (str[i+4].toLowerCase() === "a" || str[i+4].toLowerCase() === "b") {
        return "true";
      }
    }
  }
  return "false";          
}

//console.log(ABCheck("lane borrowed"));