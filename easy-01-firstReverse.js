// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

function FirstReverse(string) {
	return string.split("") //splits string into array of characters
				 .reverse() //reverses the order of characters
				 .join(""); //joins reversed array back into a string
}

// console.log(FirstReverse("Argument goes here"));
