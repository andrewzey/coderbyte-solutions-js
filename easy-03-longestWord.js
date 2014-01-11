// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) {
	var longest = "";
	var allowed = "abcdefghijklmnopqrstuvwxyz0123456789"; //will replace with RegEx solution in future


	var senArray = sen.split(" ");	//split the sentence into an array of words

	//loop through every word in the array
	for (var i = 0; i < senArray.length; i++) {
	  var word = senArray[i]; //define word variable
	  var wordNoPunc = ""; //define wordNoPunc empty variable

	  //loop through every character of the word
	  for (var j = 0; j < word.length; j++) {
	    var character = word[j].toLowerCase(); //define character variable

	    //if the character is in the allowed characters list, then add it to the wordNoPunc variable
	    if (allowed.indexOf(character) !== -1) {
	      wordNoPunc += character;
	    }
	  }
	  
	  //if wordNoPunc variable is longer than longest word, replace the longest word
	  if (wordNoPunc.length > longest.length) {
	    longest = wordNoPunc;
	  }
	}

	return longest;
}

//console.log(LongestWord("This is a!!(*&%#$) sample sentence 1234"));