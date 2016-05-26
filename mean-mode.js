function MeanMode(arr) { 

  // we use the reduce function which will sum
  // up all the numbers in the array 
  var summed = arr.reduce(function(previousVal, currentVal, index, self) {
    return previousVal + currentVal;
  });
 
  // calculate the mean by dividing the sum by the
  // number of elements in arr
  var mean = summed / arr.length;

  // the table that will contain each number as the key
  // and the number of times it occurs as the value
  // e.g. {"5": 1, "3": 3, "1": 1}
  var table = {};

  // loop through each number in the array
  // see if this number already exists in table
  // if so add 1 to the count, if not set count = 1
  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    table[number] === undefined ? table[number] = 1 : table[number] += 1;
  }

  // setup a new object that will store the number with the highest count
  var answer = {number: null, count: 0};
  
  // get the mode by determining what number appears most often in the table 
  for (var n in table) {
    if (table[n] > answer["count"]) {
      answer["count"] = table[n];
      answer["number"] = n;
    }
  }

  // return 1 or 0 if the mode equals the mean
  return (answer["number"] == mean) ? 1 : 0;
         
}