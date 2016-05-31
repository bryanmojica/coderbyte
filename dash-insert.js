//Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if 
// str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 

function DashInsert(str) {
    // convert the string into an array
    // with each element being a single number
    var arr = str.split('');
    
    // loop through array and add dash
    // if current number and the next are odd
    // NOTE: to determine odd-ness, we divid by 
    // 2 and check if there is a remainder
    for (var i = 0; i < str.length - 1; i++) {
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !==0) {
            arr[i] = arr[i] +'-';
        }
    }
    
    // join numbers into a final string
    return arr.join('');
}

console.log(DashInsert("13458999"));

// returns "1-34589-9-9"