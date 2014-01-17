// Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.

function SwapCase(str) { 
  var newString = "";

  //loop through string
  for (var i = 0; i < str.length; i++) {
    //if character = character.toLowerChase()
    if (str[i] === str[i].toLowerCase() ) {
      //append character.toUpperCase();
      newString += str[i].toUpperCase();
    }
    //else if character = character.toUpperCase()
    else {
      //append character.toLowerCase();
      newString += str[i].toLowerCase();
    }
  }
  
  return newString; 
         
}

// console.log(SwapCase("Hello World"));