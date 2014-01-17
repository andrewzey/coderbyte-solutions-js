// Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. 

function NumberAddition(str) { 
  var numbers = "0123456789";
  var numString = "";
  var sum = 0;
  
  //loop through string
  for (var i = 0; i < str.length; i++) {
    //replace every non-number character with a space
    if (numbers.indexOf(str[i]) === -1) {
      numString += " ";
    } else {
      numString += str[i];
    }
  }

  //split string into array by spaces
  var numArray = numString.split(" ");
  
  //loop through array and add up all numbers)
  for (var j = 0; j < numArray.length; j++) {
    if (numArray[j] !== "") {
      sum += parseInt(numArray[j]);
    }
  }
  
  return sum;
  
}

// console.log(NumberAddition("88Hello 3World"));
// console.log(NumberAddition("55Hello"));
// console.log(NumberAddition("5Hello 5World"));