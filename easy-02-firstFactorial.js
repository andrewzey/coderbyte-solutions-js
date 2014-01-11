// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 

function FirstFactorial(num) {
	var factorial = 1;

	//loop through all numbers from number argument to 1
    for (var i = num; i > 0; i--) { 
      factorial *= i; //set the factorial to equal the previous value * the loop counter
    }
    return factorial;
}
  
// console.log(FirstFactorial(5));