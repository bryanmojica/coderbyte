function LetterCountI(str) { 

  // array of words
  var words = str.split(" ");
  
  // the table that will contain each word with a key and value pair
  // being the characters and the number of times they appeared
  // e.g. {hello: {h: 1, e: 1, l: 2, o: 1}}
  var table = {};
  
  // loop through each word
  for (var i = 0; i < words.length; i++) {
    
    // create new entry in table with the key 
    // being this word
    var thisWord = words[i];
    table[thisWord] = {};
    
    // create a key/value pair that will store
    // the highest letter count for each word
    table[thisWord]["highest"] = 0;
    
    // loop through each character in word and
    // store number of times each letter appears
    for (var c = 0; c < words[i].length; c++) {
     
      // see if this character already exists in table for
      // this word: if so add 1 to the count, if not set count = 1
      var thisChar = thisWord[c];
      table[thisWord][thisChar] === undefined ?
        table[thisWord][thisChar] = 1 :
      	table[thisWord][thisChar] += 1;
      
      // update the highest letter count for each 
      // new letter in the iteration
      if (table[thisWord][thisChar] > table[thisWord]["highest"]) {
      	table[thisWord]["highest"] = table[thisWord][thisChar];
      }
      
    }
    
  }

  // setup a new object that will store the word
  // with the highest number of repeating characters
  var answer = {word: null, count: 1};
  
  // now determine what word has the highest number 
  // of repeating letters by accessing the "highest"
  // property of each word in the table
  for (var w in table) {
    if (table[w]["highest"] > answer["count"]) {
      answer["count"] = table[w]["highest"];
      answer["word"] = w;
    }
  }
  
  return (answer["count"] === 1) ? -1 : answer["word"];
       
}