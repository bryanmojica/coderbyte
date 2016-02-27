// take the num parameter and return the number of hours and minutes it converts to
// ie if num = 63, output should be 1:3 (separate hours and minutes with a colon)

function TimeConvert (num) {
	// get hours, divide by 60 and round down
	var hours = Math.floor(num / 60);
	
	// get minutes, take remainder discarded above 
	// eg 67 % 60 = 7 minutes
	// eg 43 % 60 = 43 minutes
	var minutes = num % 60;
	
	//combine hours and minutes
	return hours + ':' + minutes;
	
}

