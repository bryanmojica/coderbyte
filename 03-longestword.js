//return the longest word in a sentence; ignore symbols, only pay attention to letters + numbers


function LongestWord(sen) { 

  // returns words with only the characters a through z and 0 through 9
  var arr = sen.match(/[a-z0-9]+/gi);

  // which is used to compare each element in the array to the next element in the array
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  // so we simply return the first element, as the array is now ordered longest to shortest
  return sorted[0];
         
}
   
LongestWord("the $$$longest# word is coderbyte");       