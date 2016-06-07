// find the greatest common divisor of two numbers

function Division(num1, num2) { 

  // setup variables
  var a = num1;
  var b = num2;
  var r;
  
  // keep using the mod function until a or b hits 0
  while (a > 0 && b > 0) {
    r = a % b;
    a = b;
    b = r;
  }
  
  // return the non-zero answer
  return (a === 0) ? b : a;
         
}
   
Division(36, 54);                                                             