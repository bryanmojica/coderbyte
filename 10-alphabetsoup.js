// take a string and return it with the letters in alphabetical order

function AlphabetSoup(str) {
	
	// convert string into array of characters
	var chars = str.split("");
	
	// sort array in alphabetical order
	var sorted = chars.sort();
	
	// return newly sorted string
	return sorted.join("");

}