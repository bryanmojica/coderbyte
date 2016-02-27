// take in a number and return the factorial (ie, if num = 4 return (4*3*2*1))

function firstFactorial (num) {
	var factorial = 1;
		for (var i = 1; i <= num; i++) {
			factorial = factorial * i;
		}
	return factorial;
}