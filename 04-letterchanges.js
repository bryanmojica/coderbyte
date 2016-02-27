// replace every letter in the string with the letter following it in the alphabet
// AND capitalize every vowel in this new string

function LetterChanges(str) { 

  // get the charCode number of the letter, add 1 to it, then convert 
  // new charCode number to a letter using the fromCharCode function
  // also check to see if the character is z and if so convert the z to an a
  var converted = str.replace(/[a-z]/gi, function(char) { 
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });

  // capitalize the vowels
  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) { 
    return vowel.toUpperCase();
  });

  // return the final string
  return capitalized;
         
}