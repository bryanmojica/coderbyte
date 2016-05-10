// This challenge requires you to return the Nth prime number. 
// For example, if the function call is PrimeMover(16) then your program should return 53 
// because 53 is the 16th prime number. A naive solution to this problem is to loop starting at 2, 
// and at each number in the loop, check to see if it is a prime, if so then we increment
// a counter until the counter reaches N. This is a valid solution, but it is very slow and actually 
// takes several seconds for the function to run if the input is a large number such as 10504.

function PrimeMover(num) {
  
  // negative numbers cannot be primes
  if (num < 1) { return 'invalid'; }
  
  // first prime number is 2, the only even prime
  if (num === 1) { return 2; }
  
  // if greater than 2, start count at 1
  var count = 1;
  var n = 3;
  
  // loop until we get the numth prime
  while (count != num) {
    
    // check if n is divisible by each number in between to see if it is a prime
    for (var i = 2; i < n; i++) {
      
      // if we reach the end we know this number is a prime because it was
      // not divisible by any numbers so increase the count by 1
      if (i === n-1) { 
        count++;
        n++;
        break;
      }
      
      // if n is divisible by some number, then it is not a prime
      // and we simply move on to the next number
      else if (n % i === 0) {
        n++;
        break;
      }
      
    }
    
  }
  
  return n-1;
  
}