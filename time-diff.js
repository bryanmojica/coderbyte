function getDayMinutes(str) { 
  var min = 0;
  var t = Number(str.split(':')[0]);
  min+=t*60;
  t = Number(str.substr(str.length-4, 2));
  min+=t;
  if (str.substr(str.length-2) == 'pm')
    min+=12*60;
  return min;
}

function CountingMinutesI(str) { 
  var times = str.split('-')
  var diff =  getDayMinutes(times[1])-getDayMinutes(times[0]);
  if (diff<0)
    diff+=24*60;
  // code goes here  
  return diff; 
}