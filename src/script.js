const str = "aaabccddd";

function superReducedString(s) {
  let es = 'Empty String'
  return l([...s], es)

}

const l = (arrChar, es)=>{
  const len = arrChar.length
  let str = '', char = ''
  let counter = 0
  let flag = false
  
  for(let i = 0; i <= len; i++){
      if(arrChar[i] == char){
          counter++
          flag = true
      }  
      else {
          if(counter % 2 != 0) str += char                
          char = arrChar[i]
          counter = 1
      }
  }
  if(str.length < 1) return  es
  if(!flag) return str
  return l([...str], es)
}
console.log(superReducedString(str));
