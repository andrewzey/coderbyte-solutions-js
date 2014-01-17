// Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces.

function WordCount(str) { 
  //split string into array
  var arr = str.split(" ");
  
  //return array length
  return arr.length; 
         
}

//console.log(WordCount("Never eat shredded wheat"));