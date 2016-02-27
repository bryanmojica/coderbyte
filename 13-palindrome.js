// determine if the string is a palindrome

function Palindrome (str) {

	// strip spaces and make lowercase
	str.split('').join('').toLowerCase();
	
	// reverse the string
	var reverse = str.split('').reverse().join('');
	
	// check if reversed is same as str
	return str === reverse;
	
}