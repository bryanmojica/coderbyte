// reverse an input string

function FirstReverse(str) { 

  var newString = "";

  for (var i = str.length - 1; i >= 0; i--) {   
    // add each character to newString
    newString = newString + str.charAt(i);
  }

  return newString;
         
}