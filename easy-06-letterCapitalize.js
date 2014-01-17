// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

function LetterCapitalize(str) { 
  var result = "";
  var lastLetter = " ";
  
  // loop through each letter
  for (var i = 0; i < str.length; i++) {
    // if first letter or if last letter was a space, add capitalized letter to result
    if (lastLetter === " ") {
      result += str[i].toUpperCase();
    }
    // else add current letter to result
    else {
      result += str[i];
    }
    
    // set lastLetter to current letter for next loop run
    lastLetter = str[i];
  }

  return result; 
}

//console.log(LetterCapitalize("This is the argument"));