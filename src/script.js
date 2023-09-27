const time = '07:05:45PM';

function timeConversion(s) {
  let arrTime = s.split(':')
  
  if (arrTime[arrTime.length-1].includes('AM')){
      arrTime[arrTime.length-1] = arrTime[arrTime.length-1].replace('AM', '')
      if(arrTime[0] == '12') arrTime[0] = '00'
      
  }else{
      arrTime[arrTime.length-1] = arrTime[arrTime.length-1].replace('PM', '')
      if(arrTime[0] == '12') arrTime[0] = '00'
      arrTime[0] = (parseInt(arrTime[0]) + 12).toString()    
  }
  return arrTime.join(':')
}

console.log(timeConversion(time));
