// take a string parameter and return true if the characters a and b are separated by exactly
// 3 places anywhere in the string at least once

function ABCheck (str) {

	// convert to lowercase letters
	var str = str.toLowerCase();
	
	// loop
	for (var i = 0; i < str.length; i++) {
		
		// check for "a...b"
		if (str[i] === 'a' && str[i+4] === 'b') {
			return true;
		}
		
		// check for "b...a"
		if (str[i] === 'b' && str[i+4] === 'a') {
			return true;
		}
				
	}
	
	// if neither check is true, falsify
	return false;

}