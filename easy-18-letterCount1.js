// Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.

  function LetterCountI(str) {
   var maxRepeats = 1;
   var maxWord = "";
  
  // split string into array of separate words
  var wordArray = str.split(" ");
  
  // loop through each word in array
  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    var maxRepeatsInWord = 0;
    
    // loop through each letter of word
    for (var j = 0; j < word.length; j++) {
      var letter = word[j];
      var letterRepeats = 1;
  
      // loop through all other letters in word
      for (var k = 0; k < word.length; k++) {
        if (k != j) {
          if (word[k] === letter) {
            letterRepeats++;
          }
        }
      }
      
      if (letterRepeats > maxRepeatsInWord) {
        maxRepeatsInWord = letterRepeats;
      }
    }
    
    if (maxRepeatsInWord > maxRepeats) {
      maxRepeats = maxRepeatsInWord;
      maxWord = word;
    }
  }
  
  if (maxWord !== "") {
    return maxWord; 
  } else {
    return -1;
  }
         
}

//console.log(LetterCountI("Today is the greatest day ever!"));

