//Have the function DashInsert(num) insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function DashInsert(num) { 
  //convert number to string
  //convert string to array
  var array = num.toString().split("");
  var output = "";
  
  //loop through array
  for (var i = 0; i < array.length; i++) {
    //add character to output
    output += array[i];
    //if current character is odd and last character is odd
    if (array[i] % 2 !== 0 && array[i+1] % 2 === 1) {
      output += "-";
    }
  }
  return output; 
         
}

//console.log(DashInsert(454793))